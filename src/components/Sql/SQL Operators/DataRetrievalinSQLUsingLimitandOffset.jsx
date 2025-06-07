import React from 'react';
import { Link } from 'react-router-dom';

export default function DataRetrievalinSQLUsingLimitandOffset() {
  return (
    <>
      <div className="java-container">
        <h2>Data Retrieval in SQL Using LIMIT and OFFSET</h2>
        <p>
          When dealing with large datasets, you often don't need to retrieve all rows at once. SQL provides mechanisms to limit the number of rows returned by a query and to skip a specified number of rows before starting to return the results. The <code>LIMIT</code> and <code>OFFSET</code> clauses (or their equivalents in different SQL dialects) are commonly used for pagination and efficient data retrieval.
        </p>

        <h3>📚 Purpose and Syntax</h3>
        <p>
          The <code>LIMIT</code> clause is used to restrict the number of rows returned by the <code>SELECT</code> statement. The <code>OFFSET</code> clause is used to skip a specified number of initial rows before the limiting starts.
        </p>
        <p>The general syntax is:</p>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
SELECT column1, column2, ...
FROM table_name
WHERE condition
ORDER BY column_name(s)
LIMIT count OFFSET offset;
`}
          </code>
        </pre>
        <p>In some database systems like Oracle and SQL Server, equivalent syntax is used (e.g., <code>FETCH FIRST</code> and <code>OFFSET</code>, or <code>ROWNUM</code>).</p>

        <h3>✨ Basic Usage Examples (MySQL/PostgreSQL Syntax)</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Select the first 10 customers
SELECT customer_name FROM customers
LIMIT 10;

-- Select the next 10 customers (skipping the first 10)
SELECT customer_name FROM customers
LIMIT 10 OFFSET 10;

-- Select the top 5 products by price
SELECT product_name, price FROM products
ORDER BY price DESC
LIMIT 5;
`}
          </code>
        </pre>

        <h3>📝 Usage Examples (Oracle Syntax)</h3>
         <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Select the first 10 customers (Oracle 12c and later)
SELECT customer_name FROM customers
ORDER BY customer_id -- ORDER BY is often required for consistent results with OFFSET
FETCH FIRST 10 ROWS ONLY;

-- Select the next 10 customers (skipping the first 10 in Oracle 12c and later)
SELECT customer_name FROM customers
ORDER BY customer_id
OFFSET 10 ROWS FETCH FIRST 10 ROWS ONLY;

-- Using ROWNUM for limiting (older Oracle versions)
SELECT customer_name FROM (
    SELECT customer_name, ROWNUM as rn
    FROM customers
    WHERE ROWNUM <= 20 -- Limit to the first 20 first
)
WHERE rn > 10; -- Then filter to get rows from 11 to 20
`}
          </code>
        </pre>

         <h3>📝 Usage Examples (SQL Server Syntax)</h3>
         <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Select the first 10 customers (SQL Server 2012 and later)
SELECT customer_name FROM customers
ORDER BY customer_id
OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY;

-- Select the next 10 customers (skipping the first 10 in SQL Server 2012 and later)
SELECT customer_name FROM customers
ORDER BY customer_id
OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY;

-- Using TOP for limiting (older SQL Server versions)
SELECT TOP 10 customer_name FROM customers;
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Using LIMIT and OFFSET</h3>
        <ul>
          <li>Always use an <code>ORDER BY</code> clause with <code>LIMIT</code> and <code>OFFSET</code> to ensure consistent results across multiple queries (otherwise, the order is not guaranteed).</li>
          <li>Be aware of the syntax differences between different database systems (MySQL, PostgreSQL, Oracle, SQL Server, etc.).</li>
          <li>For very large offsets, <code>OFFSET</code> can become inefficient as the database still has to process the skipped rows. Consider alternative pagination methods for very deep pagination if performance is critical.</li>
          <li>Use these clauses for implementing pagination in web applications or for retrieving manageable chunks of data for processing.</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Implementing pagination in web application search results or data tables.</li>
          <li>Retrieving data in batches for processing or analysis.</li>
          <li>Displaying top N records (e.g., top 10 best-selling products).</li>
          <li>Facilitating browsing through large historical datasets.</li>
        </ul>

        <h3>🎥 Video Tutorial: SQL LIMIT and OFFSET</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="SQL LIMIT and OFFSET Tutorial"
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
