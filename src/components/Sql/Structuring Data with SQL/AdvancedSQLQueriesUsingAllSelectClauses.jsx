import React from 'react';
import { Link } from 'react-router-dom';

export default function AdvancedSQLQueriesUsingAllSelectClauses() {
  return (
    <>
      <div className="java-container">
        <h2>Advanced SQL Queries: Using All SELECT Clauses</h2>
        <p>
          A powerful SQL <code>SELECT</code> statement can involve numerous clauses to filter, group, order, and limit the data retrieved. While basic queries might only use <code>SELECT</code> and <code>FROM</code>, advanced queries often combine clauses like <code>WHERE</code>, <code>GROUP BY</code>, <code>HAVING</code>, <code>ORDER BY</code>, and <code>LIMIT/OFFSET</code> (or equivalent) to perform complex data analysis and reporting. Understanding the purpose and order of these clauses is crucial for writing sophisticated SQL queries.
        </p>

        <h3>📚 The Order of SQL Clauses in SELECT Statements</h3>
        <p>
          The clauses in a <code>SELECT</code> statement must follow a specific order (although not all are always required):
        </p>
        <ol>
          <li><code>SELECT</code>: Specifies the columns to retrieve.</li>
          <li><code>FROM</code>: Indicates the table(s) from which to retrieve data.</li>
          <li><code>JOIN</code>: Combines rows from two or more tables.</li>
          <li><code>WHERE</code>: Filters rows based on a condition before grouping.</li>
          <li><code>GROUP BY</code>: Groups rows that have the same values in specified columns into summary rows.</li>
          <li><code>HAVING</code>: Filters groups based on a condition after grouping.</li>
          <li><code>ORDER BY</code>: Sorts the result set.</li>
          <li><code>LIMIT</code> / <code>OFFSET</code> (or equivalent like <code>FETCH FIRST</code> / <code>OFFSET</code>): Limits the number of rows returned.</li>
        </ol>
        <p>
          It is important to note that SQL processes these clauses in a logical order that is different from the syntactic order. The logical processing order is generally: <code>FROM</code>, <code>WHERE</code>, <code>GROUP BY</code>, <code>HAVING</code>, <code>SELECT</code>, <code>ORDER BY</code>, <code>LIMIT/OFFSET</code>.
        </p>

        <h3>✨ Example Using Multiple Clauses</h3>
        <p>
          Let's consider an example where we want to find departments where the average salary is above a certain threshold, and then list the employees in those departments, ordered by salary.
        </p>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
SELECT
    e.employee_name,
    e.salary,
    d.department_name
FROM
    employees e
JOIN
    departments d ON e.department_id = d.department_id
WHERE
    e.hire_date > '2020-01-01'
GROUP BY
    d.department_name
HAVING
    AVG(e.salary) > 60000
ORDER BY
    e.salary DESC
LIMIT 10 OFFSET 0; -- Or FETCH FIRST 10 ROWS ONLY / OFFSET 0 ROWS
`}
          </code>
        </pre>
        <p>
          <strong>Explanation of the Example Clauses:</strong>
        </p>
        <ul>
          <li><code>SELECT e.employee_name, e.salary, d.department_name</code>: Specifies the columns to retrieve from the joined tables, using aliases <code>e</code> for employees and <code>d</code> for departments.</li>
          <li><code>FROM employees e JOIN departments d ON e.department_id = d.department_id</code>: Specifies the tables and the join condition to combine employee and department information.</li>
          <li><code>WHERE e.hire_date &gt; '2020-01-01'</code>: Filters out employees hired before 2020. This happens before grouping.</li>
          <li><code>GROUP BY d.department_name</code>: Groups the results by department name to calculate aggregate values per department.</li>
          <li><code>HAVING AVG(e.salary) &gt; 60000</code>: Filters the grouped departments, keeping only those where the average salary is greater than 60000. This happens after grouping.</li>
          <li><code>ORDER BY e.salary DESC</code>: Sorts the final result set by employee salary in descending order.</li>
          <li><code>LIMIT 10 OFFSET 0</code>: Limits the output to the first 10 rows (syntax may vary between database systems).</li>
        </ul>

        <h3>💡 Best Practices for Advanced Queries</h3>
        <ul>
          <li>Understand the logical processing order of clauses to write correct and efficient queries.</li>
          <li>Use aliases for tables to make queries more readable, especially with joins.</li>
          <li>Apply filtering as early as possible (in the <code>WHERE</code> clause) to reduce the number of rows processed by subsequent clauses.</li>
          <li>Use <code>HAVING</code> to filter groups and <code>WHERE</code> to filter individual rows.</li>
          <li>Be mindful of performance, especially with complex joins, grouping, and large offsets.</li>
          <li>Test queries thoroughly with different data sets.</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Generating detailed reports that require filtering, grouping, and sorting.</li>
          <li>Performing complex analytical tasks on aggregated data.</li>
          <li>Creating summarized views of data.</li>
          <li>Implementing pagination for displaying large result sets.</li>
          <li>Combining data from multiple related tables based on specific criteria.</li>
        </ul>

        <h3>🎥 Video Tutorial: Advanced SQL SELECT Clauses</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Advanced SQL SELECT Clauses Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
          <small>
            Source: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Example Video Source</a>
          </small>
        </div>
      </div>
      <Link to="/sql"><p>Back to SQL Overview</p></Link>
    </>
  );
}
