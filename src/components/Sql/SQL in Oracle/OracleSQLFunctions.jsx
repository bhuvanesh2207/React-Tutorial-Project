import React from 'react';
import { Link } from 'react-router-dom';

export default function OracleSQLFunctions() {
  return (
    <>
      <div className="java-container">
        <h2>Oracle SQL Functions</h2>
        <p>
          Oracle Database provides a rich set of built-in SQL functions that allow you to perform a wide range of operations on data, including string manipulation, numeric calculations, date and time operations, and data type conversions. These functions are essential for transforming, formatting, and analyzing data directly within your SQL queries, reducing the need for application-level processing. Mastering Oracle SQL functions is key to writing efficient and powerful queries.
        </p>

        <h3>📚 Categories of Oracle SQL Functions</h3>
        <ul>
          <li><strong>Single-Row Functions:</strong> Operate on a single row and return one result per row. Examples include string, number, date, and conversion functions.</li>
          <li><strong>Multi-Row Functions (Aggregate Functions):</strong> Operate on a set of rows and return one result for the entire set. Examples include <code>SUM</code>, <code>AVG</code>, <code>COUNT</code>, <code>MAX</code>, <code>MIN</code>.</li>
          <li><strong>Analytic Functions:</strong> Compute aggregate values based on a group of rows, but return a result for each row in the group. Examples include <code>ROW_NUMBER</code>, <code>RANK</code>, <code>DENSE_RANK</code>, <code>LAG</code>, <code>LEAD</code>.</li>
        </ul>

        <h3>✨ Common Single-Row Function Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- String Functions
SELECT 
    UPPER('hello'), 
    LOWER('WORLD'), 
    SUBSTR('Oracle SQL', 1, 6) 
FROM dual;

-- Number Functions
SELECT 
    ROUND(123.456, 2), 
    TRUNC(123.456, 1), 
    MOD(10, 3) 
FROM dual;

-- Date Functions
SELECT 
    SYSDATE, 
    ADD_MONTHS(SYSDATE, 3), 
    NEXT_DAY(SYSDATE, 'FRIDAY') 
FROM dual;

-- Conversion Functions
SELECT 
    TO_CHAR(SYSDATE, 'YYYY-MM-DD'), 
    TO_NUMBER('123.45'), 
    TO_DATE('2023-10-26', 'YYYY-MM-DD') 
FROM dual;
`}
          </code>
        </pre>

        <h3>📝 Common Multi-Row Function Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Calculate total salary for a department
SELECT SUM(salary) FROM employees WHERE department_id = 50;

-- Find the average salary per job title
SELECT job_title, AVG(salary) FROM employees GROUP BY job_title;

-- Count the number of employees in each department
SELECT department_id, COUNT(*) FROM employees GROUP BY department_id;

-- Find the maximum and minimum hire dates
SELECT MAX(hire_date), MIN(hire_date) FROM employees;
`}
          </code>
        </pre>

        <h3>📊 Analytic Function Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Rank employees by salary within each department
SELECT 
    department_id,
    employee_name,
    salary,
    RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as dept_salary_rank
FROM employees;

-- Calculate the difference in salary between the current employee and the previous employee in the same department
SELECT
    department_id,
    employee_name,
    salary,
    LAG(salary, 1, 0) OVER (PARTITION BY department_id ORDER BY salary) as previous_salary,
    salary - LAG(salary, 1, 0) OVER (PARTITION BY department_id ORDER BY salary) as salary_difference
FROM employees;
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Oracle SQL Functions</h3>
        <ul>
          <li>Understand the function signature and parameters.</li>
          <li>Be aware of potential NULL value handling by different functions.</li>
          <li>Use appropriate functions for data type conversions to avoid errors.</li>
          <li>Leverage analytic functions for complex ranking and windowing operations.</li>
          <li>Test functions thoroughly with various input values.</li>
          <li>Consider performance implications, especially for complex calculations on large datasets.</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Data Cleaning and Formatting: Standardizing names, addresses, or dates.</li>
          <li>Reporting and Analysis: Calculating aggregates, rankings, and trends.</li>
          <li>Data Migration and Integration: Converting data types between different systems.</li>
          <li>Business Logic Implementation: Applying calculations and transformations in queries.</li>
          <li>Generating Reports with Complex Calculations: Using analytic functions for advanced reporting needs.</li>
        </ul>

        <h3>🎥 Video Tutorial: Oracle SQL Functions</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Oracle SQL Functions Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
          <small>
            Source: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Example Video Source</a>
          </small>
        </div>
      </div>
      <ul>
        <li><Link to="/ControlFlowandConversionFunctionsinOracle">ControlFlowandConversionFunctionsinOracle</Link></li>
        <li><Link to="/SQLinOracle">SQLinOracle</Link></li>
        <li><Link to="/TheDualTableinOracle">TheDualTableinOracle</Link></li>
      </ul>
    </>
  );
}
