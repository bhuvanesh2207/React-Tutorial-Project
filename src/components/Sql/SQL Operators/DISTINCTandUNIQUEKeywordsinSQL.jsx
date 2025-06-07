import React from 'react';
import { Link } from 'react-router-dom';

export default function DISTINCTandUNIQUEKeywordsinSQL() {
  return (
    <>
      <div className="java-container">
        <h2>DISTINCT and UNIQUE Keywords in SQL</h2>
        <p>
          The <code>DISTINCT</code> keyword and the <code>UNIQUE</code> constraint are both related to ensuring uniqueness in SQL, but they serve different purposes and are used in different contexts. Understanding the distinction between them is important for accurate data retrieval and effective database design.
        </p>

        <h3>📚 DISTINCT Keyword</h3>
        <p>
          The <code>DISTINCT</code> keyword is used in a <code>SELECT</code> statement to eliminate duplicate rows from the result set. When you use <code>DISTINCT</code>, SQL evaluates all selected columns and returns only one copy of each unique combination of values.
        </p>

        <h3>✨ Basic Usage Examples of DISTINCT</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Select unique department IDs from the employees table
SELECT DISTINCT department_id FROM employees;

-- Select unique combinations of job title and department ID
SELECT DISTINCT job_title, department_id FROM employees;

-- Using DISTINCT with an aggregate function (COUNT)
SELECT COUNT(DISTINCT city) AS unique_cities FROM customers;
`}
          </code>
        </pre>
        <p>
          <strong>Note:</strong> <code>DISTINCT</code> operates on all columns specified in the <code>SELECT</code> list.
        </p>

        <h3>📚 UNIQUE Constraint</h3>
        <p>
          The <code>UNIQUE</code> constraint is a database integrity constraint that ensures that all values in a column (or a group of columns) are unique within a table. Unlike <code>PRIMARY KEY</code>, a table can have multiple <code>UNIQUE</code> constraints, and <code>UNIQUE</code> columns can contain NULL values (though typically only one NULL is allowed, depending on the database system).
        </p>

        <h3>✨ Basic Usage Examples of UNIQUE Constraint</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Create a table with a UNIQUE constraint on the email column
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100) UNIQUE,
    registration_date DATE
);

-- Add a UNIQUE constraint to an existing table
ALTER TABLE products
ADD CONSTRAINT uc_product_code UNIQUE (product_code);

-- Create a composite UNIQUE constraint
ALTER TABLE order_items
ADD CONSTRAINT uc_order_product UNIQUE (order_id, product_id);
`}
          </code>
        </pre>
        <p>
          <strong>Note:</strong> A <code>UNIQUE</code> constraint is enforced at the table level when data is inserted or updated.
        </p>

        <h3> comparing DISTINCT and UNIQUE</h3>
        <ul>
          <li><strong>Purpose:</strong> <code>DISTINCT</code> removes duplicate rows from query results; <code>UNIQUE</code> enforces data integrity at the table level.</li>
          <li><strong>Usage:</strong> <code>DISTINCT</code> is a keyword in <code>SELECT</code> statements; <code>UNIQUE</code> is a constraint defined during table creation or alteration.</li>
          <li><strong>Scope:</strong> <code>DISTINCT</code> applies to the result set of a query; <code>UNIQUE</code> applies to column(s) in a table.</li>
          <li><strong>NULL Values:</strong> <code>DISTINCT</code> treats NULL values as the same for duplicate removal; <code>UNIQUE</code> constraints generally allow one NULL value (behavior can vary).</li>
        </ul>

        <h3>💡 Best Practices</h3>
        <ul>
          <li>Use <code>DISTINCT</code> when you need to see the unique combinations of data in your query results.</li>
          <li>Use the <code>UNIQUE</code> constraint when you need to guarantee that specific column(s) in your table will not contain duplicate values (apart from a potential single NULL).</li>
          <li>Choose <code>PRIMARY KEY</code> over <code>UNIQUE</code> if the column(s) should also uniquely identify each row and not allow NULLs.</li>
          <li>Be aware that applying <code>UNIQUE</code> constraints can impact INSERT and UPDATE performance due to index maintenance.</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Getting a list of all the different countries customers are from (<code>DISTINCT</code>).</li>
          <li>Ensuring that each user in a system has a unique email address (<code>UNIQUE</code> constraint).</li>
          <li>Finding all unique product categories sold (<code>DISTINCT</code>).</li>
          <li>Ensuring that a product code is unique across the inventory (<code>UNIQUE</code> constraint).</li>
        </ul>

        <h3>🎥 Video Tutorial: DISTINCT vs. UNIQUE</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="DISTINCT vs. UNIQUE Tutorial"
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
