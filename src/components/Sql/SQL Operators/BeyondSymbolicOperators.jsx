import React from 'react';
import { Link } from 'react-router-dom';

export default function BeyondSymbolicOperators() {
  return (
    <>
      <div className="java-container">
        <h2>Beyond Symbolic Operators in SQL</h2>
        <p>
          While symbolic operators like <code>=</code>, <code></code>, and <code>AND</code> are commonly used in SQL, the language also includes a variety of keywords and phrases that function as operators to perform specific tasks. These non-symbolic operators often provide more descriptive ways to filter data or specify conditions, enhancing the readability and expressiveness of your SQL queries.
        </p>

        <h3>📚 Common Non-Symbolic Operators (Keywords)</h3>
        <ul>
          <li><strong>LIKE:</strong> Used for pattern matching in strings.</li>
          <li><strong>IN:</strong> Checks if a value is within a list of values.</li>
          <li><strong>BETWEEN:</strong> Checks if a value is within a range.</li>
          <li><strong>IS NULL / IS NOT NULL:</strong> Checks for NULL values.</li>
          <li><strong>EXISTS:</strong> Checks for the existence of rows in a subquery.</li>
          <li><strong>ALL / ANY / SOME:</strong> Used with subqueries to compare a value to every or any value in a result set.</li>
          <li><strong>DISTINCT:</strong> Used in SELECT statements to return only unique values.</li>
        </ul>

        <h3>✨ Basic Usage Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Using LIKE for pattern matching
SELECT employee_name FROM employees WHERE employee_name LIKE 'A%'; -- Finds names starting with A

-- Using IN for list matching
SELECT product_name FROM products WHERE category IN ('Electronics', 'Clothing');

-- Using BETWEEN for range checking
SELECT order_id, order_date FROM orders WHERE order_date BETWEEN '2023-01-01' AND '2023-01-31';

-- Using IS NULL
SELECT customer_name FROM customers WHERE email IS NULL;

-- Using DISTINCT
SELECT DISTINCT city FROM customers;
`}
          </code>
        </pre>

        <h3>📝 Advanced Usage Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Using NOT LIKE
SELECT product_name FROM products WHERE product_name NOT LIKE '%[^a-zA-Z0-9 ]%'; -- Finds names with special characters

-- Using NOT IN
SELECT employee_name FROM employees WHERE department_id NOT IN (10, 20, 30);

-- Using EXISTS with a subquery
SELECT customer_name FROM customers c
WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id AND o.order_amount > 1000);

-- Using ALL with a subquery
SELECT employee_name, salary FROM employees
WHERE salary > ALL (SELECT salary FROM employees WHERE department_id = 50); -- Finds employees with salary greater than all in department 50

-- Using ANY/SOME with a subquery
SELECT product_name, price FROM products
WHERE price > ANY (SELECT avg_price FROM department_avg_prices); -- Finds products with price greater than any department average price
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Using Non-Symbolic Operators</h3>
        <ul>
          <li>Choose the operator that best describes the condition you are trying to implement (e.g., BETWEEN for ranges, IN for lists).</li>
          <li>Be careful with NULL values, especially with <code>IN</code> and comparison operators; always use <code>IS NULL</code> or <code>IS NOT NULL</code>.</li>
          <li>Understand the behavior of <code>LIKE</code> with wildcard characters (% and _).</li>
          <li>Use <code>EXISTS</code> when you only need to check for the existence of rows, as it can be more efficient than <code>COUNT(*) 0</code>.</li>
          <li>Be mindful of the performance implications of subqueries used with <code>IN</code>, <code>EXISTS</code>, <code>ALL</code>, <code>ANY</code>, and <code>SOME</code>.</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Searching for data based on patterns in text fields.</li>
          <li>Filtering data based on membership in a predefined set of values.</li>
          <li>Selecting records that fall within specific date or numeric ranges.</li>
          <li>Identifying records with missing information.</li>
          <li>Performing complex conditional filtering using subqueries.</li>
          <li>Ensuring uniqueness of results in reports.</li>
        </ul>

        <h3>🎥 Video Tutorial: Beyond Symbolic Operators in SQL</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Beyond Symbolic Operators in SQL Tutorial"
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
