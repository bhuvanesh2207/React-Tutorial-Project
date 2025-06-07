import React from 'react';
import { Link } from 'react-router-dom';

export default function ControlFlowandConversionFunctionsinOracle() {
  return (
    <>
      <div className="java-container">
        <h2>Control Flow and Conversion Functions in Oracle SQL</h2>
        <p>
          Control flow functions and conversion functions are vital components of Oracle SQL that allow you to add conditional logic to your queries and transform data between different data types. These functions are indispensable for handling complex business rules, ensuring data compatibility, and presenting data in the desired format. Mastering them is essential for writing sophisticated and flexible Oracle SQL statements.
        </p>

        <h3>📚 Control Flow Functions in Oracle</h3>
        <p>
          Oracle provides several functions to implement conditional logic within SQL statements. These are useful for executing different parts of a query or returning different values based on specific conditions.
        </p>
        <ul>
          <li><strong>CASE:</strong> The most versatile control flow function, allowing complex if-then-else logic.</li>
          <li><strong>DECODE:</strong> A simpler, Oracle-specific function for equating an expression to several potential values.</li>
          <li><strong>NVL:</strong> Replaces a NULL value with a specified value.</li>
          <li><strong>NVL2:</strong> Checks an expression and returns one of two values based on whether the expression is NULL or not NULL.</li>
          <li><strong>COALESCE:</strong> Returns the first non-NULL expression in a list.</li>
          <li><strong>NULLIF:</strong> Returns NULL if the first expression equals the second expression; otherwise, returns the first expression.</li>
        </ul>

        <h3>✨ Control Flow Function Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Using CASE for conditional categorization
SELECT 
    employee_name,
    salary,
    CASE
        WHEN salary < 30000 THEN 'Low Salary'
        WHEN salary >= 30000 AND salary < 60000 THEN 'Medium Salary'
        ELSE 'High Salary'
    END AS salary_category
FROM employees;

-- Using DECODE for simple conditional mapping
SELECT
    order_status,
    DECODE(order_status, 
           'P', 'Pending',
           'S', 'Shipped',
           'C', 'Cancelled',
           'Unknown' -- Default value
          ) AS status_description
FROM orders;

-- Using NVL to handle NULL commission
SELECT 
    employee_name,
    salary + NVL(commission, 0) AS total_compensation
FROM employees;

-- Using COALESCE for returning the first available phone number
SELECT 
    customer_name,
    COALESCE(mobile_phone, home_phone, work_phone, 'No Phone Available') AS preferred_phone
FROM customers;
`}
          </code>
        </pre>

        <h3>📚 Conversion Functions in Oracle</h3>
        <p>
          Conversion functions allow you to explicitly convert a value from one data type to another. Oracle also performs implicit conversions in many cases, but explicit conversion using these functions is recommended for clarity and to avoid unexpected behavior.
        </p>
        <ul>
          <li><strong>TO_CHAR:</strong> Converts a number or a date to a character string.</li>
          <li><strong>TO_NUMBER:</strong> Converts a character string to a number.</li>
          <li><strong>TO_DATE:</strong> Converts a character string to a date.</li>
          <li><strong>TO_TIMESTAMP:</strong> Converts a character string to a timestamp.</li>
          <li><strong>TO_CLOB:</strong> Converts a CHAR, VARCHAR2, NCHAR, NVARCHAR2, BLOB, or BFILE value to a CLOB value.</li>
          <li><strong>TO_BLOB:</strong> Converts a RAW, BFILE, CHAR, VARCHAR2, NCHAR, or NVARCHAR2 value to a BLOB value.</li>
        </ul>

        <h3>✨ Conversion Function Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Converting a date to a character string
SELECT TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') AS current_datetime_str FROM dual;

-- Converting a character string to a number
SELECT TO_NUMBER('123.45', '999.99') + 10 AS calculated_value FROM dual;

-- Converting a character string to a date
SELECT TO_DATE('20231026', 'YYYYMMDD') AS event_date FROM dual;

-- Converting a number to a formatted string
SELECT TO_CHAR(12345.67, 'FM99,999.00') AS formatted_amount FROM dual;
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Control Flow and Conversion Functions</h3>
        <ul>
          <li>Use CASE for complex logic, DECODE for simple equality checks.</li>
          <li>Always use explicit conversion functions (TO_CHAR, TO_NUMBER, TO_DATE, etc.) for clarity and control.</li>
          <li>Be mindful of format masks when converting between strings and dates/numbers.</li>
          <li>Handle potential errors during conversion (e.g., invalid format).</li>
          <li>Use NVL, NVL2, or COALESCE to gracefully handle NULL values.</li>
          <li>Consider the performance implications of complex functions on large datasets.</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Reporting: Displaying data in specific formats (dates, numbers, currencies).</li>
          <li>Data Integration: Converting data types to match different system requirements.</li>
          <li>Data Validation: Checking data based on specific conditions.</li>
          <li>Implementing Business Rules: Applying conditional logic for calculations or data manipulation.</li>
          <li>Handling Missing Data: Replacing NULL values with defaults.</li>
        </ul>

        <h3>🎥 Video Tutorial: Oracle Control Flow and Conversion Functions</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Oracle Control Flow and Conversion Functions Tutorial"
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
