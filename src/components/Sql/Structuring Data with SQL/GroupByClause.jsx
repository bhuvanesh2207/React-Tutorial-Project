import React from 'react';
import { Link } from 'react-router-dom';

export default function GroupByClause() {
  return (
    <>
      <div className="java-container">
        <h2>The GROUP BY Clause in SQL</h2>
        <p>
          The <code>GROUP BY</code> clause in SQL is used in conjunction with aggregate functions (like <code>COUNT</code>, <code>SUM</code>, <code>AVG</code>, <code>MAX</code>, <code>MIN</code>) to group rows that have the same values in one or more columns. This allows you to perform calculations on each group rather than on the entire table. The <code>GROUP BY</code> clause is essential for generating summary reports and analyzing data at a more granular level.
        </p>

        <h3>📚 Purpose and Syntax</h3>
        <p>
          The primary purpose of <code>GROUP BY</code> is to aggregate data based on categories. The basic syntax is:
        </p>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
SELECT column1, column2, ..., aggregate_function(columnN)
FROM table_name
WHERE condition
GROUP BY column1, column2, ...
ORDER BY column_name(s);
`}
          </code>
        </pre>
        <ul>
          <li>The columns listed in the <code>SELECT</code> statement must either be included in the <code>GROUP BY</code> clause or be used within an aggregate function.</li>
          <li>The <code>WHERE</code> clause is used to filter individual rows <strong>before</strong> they are grouped.</li>
          <li>The <code>HAVING</code> clause is used to filter groups <strong>after</strong> they have been created by <code>GROUP BY</code>.</li>
        </ul>

        <h3>✨ Basic Usage Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Count the number of employees in each department
SELECT department_id, COUNT(*) AS employee_count
FROM employees
GROUP BY department_id;

-- Calculate the average salary for each job title
SELECT job_title, AVG(salary) AS average_salary
FROM employees
GROUP BY job_title;

-- Find the total amount for each customer's orders
SELECT customer_id, SUM(amount) AS total_order_amount
FROM orders
GROUP BY customer_id;
`}
          </code>
        </pre>

        <h3>📝 Advanced Usage with HAVING</h3>
        <p>
          The <code>HAVING</code> clause is used to filter the groups produced by the <code>GROUP BY</code> clause. You cannot use aggregate functions directly in the <code>WHERE</code> clause.
        </p>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Find departments with more than 5 employees
SELECT department_id, COUNT(*) AS employee_count
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 5;

-- Find job titles where the average salary is above 60000
SELECT job_title, AVG(salary) AS average_salary
FROM employees
GROUP BY job_title
HAVING AVG(salary) > 60000;

-- Find customers whose total order amount exceeds 1000
SELECT customer_id, SUM(amount) AS total_order_amount
FROM orders
GROUP BY customer_id
HAVING SUM(amount) > 1000;
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Using GROUP BY</h3>
        <ul>
          <li>Include all non-aggregated columns from the <code>SELECT</code> list in the <code>GROUP BY</code> clause.</li>
          <li>Use <code>WHERE</code> for filtering individual rows before grouping and <code>HAVING</code> for filtering groups after aggregation.</li>
          <li>Be mindful of the order of execution: <code>FROM</code> -&gt; <code>WHERE</code> -&gt; <code>GROUP BY</code> -&gt; <code>HAVING</code> -&gt; <code>SELECT</code> -&gt; <code>ORDER BY</code>.</li>
          <li>Use meaningful aliases for aggregate function results.</li>
          <li>Consider the performance implications of grouping large datasets.</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Generating sales reports by region, product category, or month.</li>
          <li>Analyzing website traffic by source, browser, or operating system.</li>
          <li>Summarizing financial data by account type or period.</li>
          <li>Categorizing employees by department, job title, or location for reporting.</li>
          <li>Identifying top customers based on total spending.</li>
        </ul>

        <h3>🎥 Video Tutorial: SQL GROUP BY Clause</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="SQL GROUP BY Clause Tutorial"
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
