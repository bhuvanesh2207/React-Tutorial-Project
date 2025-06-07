import React from 'react';
import { Link } from 'react-router-dom';

export default function RelationalOperators() {
  return (
    <>
      <div className="java-container">
        <h2>Relational Operators in SQL</h2>
        <p>
          Relational operators are fundamental to SQL, enabling you to compare values and filter data based on specified conditions. These operators are primarily used in the <code>WHERE</code> clause of SQL statements to select rows that meet certain criteria, or in <code>JOIN</code> conditions to link rows between tables. Understanding and effectively using relational operators is essential for precise data retrieval and manipulation.
        </p>

        <h3>📚 Common Relational Operators</h3>
        <ul>
          <li><strong>Equal To (=):</strong> Checks if two values are equal.</li>
          <li><strong>Not Equal To (!= or &lt;&gt;):</strong> Checks if two values are not equal.</li>
          <li><strong>Greater Than (&gt;):</strong> Checks if the left value is greater than the right value.</li>
          <li><strong>Less Than (&lt;):</strong> Checks if the left value is less than the right value.</li>
          <li><strong>Greater Than or Equal To (&gt;=):</strong> Checks if the left value is greater than or equal to the right value.</li>
          <li><strong>Less Than or Equal To (&lt;=):</strong> Checks if the left value is less than or equal to the right value.</li>
        </ul>

        <h3>✨ Basic Usage Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Select employees with a salary greater than 50000
SELECT employee_name, salary FROM employees WHERE salary > 50000;

-- Select products with a price less than or equal to 25
SELECT product_name, price FROM products WHERE price <= 25;

-- Select orders with status 'Shipped'
SELECT order_id, order_date FROM orders WHERE status = 'Shipped';

-- Select customers not in 'New York'
SELECT customer_name, city FROM customers WHERE city != 'New York';

-- Select products with a quantity in stock equal to 0
SELECT product_name, stock FROM products WHERE stock = 0;
`}
          </code>
        </pre>

        <h3>📝 Using Relational Operators with Different Data Types</h3>
        <p>
          Relational operators can be used with various data types, including numbers, strings, and dates. Comparisons are performed based on the specific rules of each data type.
        </p>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Comparing strings (alphabetical order)
SELECT product_name FROM products WHERE product_name > 'Laptop';

-- Comparing dates
SELECT order_id, order_date FROM orders WHERE order_date < '2023-01-01';

-- Comparing numeric values
SELECT employee_name, hire_date FROM employees WHERE hire_date >= '2022-01-01';
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Using Relational Operators</h3>
        <ul>
          <li>Ensure data types are compatible when making comparisons to avoid errors or unexpected results.</li>
          <li>Be precise with your conditions to retrieve exactly the data you need.</li>
          <li>Use appropriate operators based on whether you need to include the boundary value (e.g., &gt; vs. &gt;=).</li>
          <li>Consider performance implications for comparisons on large datasets, especially on unindexed columns.</li>
          <li>Be aware of how NULL values are handled in comparisons (using `IS NULL` or `IS NOT NULL` is necessary).</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Filtering search results based on price ranges or dates.</li>
          <li>Identifying customers within a certain age group.</li>
          <li>Selecting employees based on salary levels or hire dates.</li>
          <li>Filtering orders based on status or order amount.</li>
          <li>Joining tables based on matching key values.</li>
        </ul>

        <h3>🎥 Video Tutorial: SQL Relational Operators</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="SQL Relational Operators Tutorial"
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
