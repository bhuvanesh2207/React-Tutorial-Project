import React from 'react';
import { Link } from 'react-router-dom';

export default function TheDualTableinOracle() {
  return (
    <>
      <div className="java-container">
        <h2>The Dual Table in Oracle</h2>
        <p>
          The <code>Dual</code> table is a special one-row, one-column table present by default in every Oracle database. It is owned by the user <code>SYS</code> but is accessible to all users. Its primary purpose is to allow SQL queries that do not reference any user tables, such as querying pseudocolumns (like <code>SYSDATE</code> or <code>USER</code>) or evaluating expressions. While simple, the Dual table is a fundamental utility in Oracle SQL for various system-level operations and calculations.
        </p>

        <h3>📚 Purpose and Structure</h3>
        <ul>
          <li><strong>Single Row, Single Column:</strong> The Dual table contains exactly one row and one column.</li>
          <li><strong>Column Name:</strong> The single column is typically named <code>DUMMY</code>.</li>
          <li><strong>Column Value:</strong> The value in the <code>DUMMY</code> column is usually <code>'X'</code>.</li>
          <li><strong>System Utility:</strong> It's primarily used for querying system information and evaluating expressions without needing a source table.</li>
        </ul>

        <h3>✨ Basic Usage Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Get the current system date and time
SELECT SYSDATE FROM dual;

-- Get the current database user
SELECT USER FROM dual;

-- Evaluate a simple expression
SELECT 100 + 50 * 2 FROM dual;

-- Concatenate strings
SELECT 'Hello' || ' ' || 'World' FROM dual;

-- Using built-in functions
SELECT ABS(-15), ROUND(3.14159, 2) FROM dual;
`}
          </code>
        </pre>

        <h3>📝 Advanced Usage Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Generating a series of numbers (using hierarchical query)
SELECT LEVEL FROM dual
CONNECT BY LEVEL <= 10;

-- Using Dual in subqueries for constant values or calculations
SELECT 
    employee_name,
    salary * (SELECT rate FROM tax_rates WHERE year = EXTRACT(YEAR FROM SYSDATE)) AS estimated_tax
FROM employees;

-- Pipelined function example (more advanced PL/SQL concept, but often involves Dual)
-- This is a conceptual example; actual implementation requires PL/SQL
-- SELECT column_value FROM TABLE(my_pipelined_function) FROM dual;

-- Checking if a value exists in a list
SELECT CASE WHEN 1 IN (SELECT 1 FROM dual) THEN 'Yes' ELSE 'No' END FROM dual;
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Using Dual</h3>
        <ul>
          <li>Use it for evaluating expressions or pseudocolumns when no table is needed.</li>
          <li>Avoid using it unnecessarily in queries that already involve other tables.</li>
          <li>Understand that its performance impact is negligible due to its single row.</li>
          <li>Be aware that some non-Oracle databases may not have a `Dual` table or require a different syntax.</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Retrieving system date, time, or user information</li>
          <li>Performing quick calculations or function evaluations</li>
          <li>Generating sequences or series of numbers</li>
          <li>Providing a source for subqueries that return single values</li>
          <li>Testing expressions or function syntax</li>
        </ul>

        <h3>🎥 Video Tutorial: The Oracle Dual Table</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="The Oracle Dual Table Tutorial"
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
