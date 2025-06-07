import React from 'react';
import { Link } from 'react-router-dom';

export default function SQLAliases() {
  return (
    <>
      <div className="java-container">
        <h2>SQL Aliases</h2>
        <p>
          SQL aliases are temporary names given to tables or columns in a SQL query. They are used to make table or column names more readable, shorter, or to distinguish between columns from different tables that have the same name. Aliases are particularly useful when dealing with complex queries involving multiple joins, aggregate functions, or subqueries.
        </p>

        <h3>📚 Why Use SQL Aliases?</h3>
        <ul>
          <li><strong>Readability:</strong> Aliases can make complex queries easier to read and understand by providing shorter, more descriptive names.</li>
          <li><strong>Shorter Syntax:</strong> They reduce the amount of typing required, especially for long table or column names.</li>
          <li><strong>Handling Ambiguity:</strong> When joining tables with columns that have the same name, aliases are essential to specify which table a column belongs to.</li>
          <li><strong>Aggregate Functions:</strong> Aliases can be used to give meaningful names to the results of aggregate functions.</li>
          <li><strong>Self-Joins:</strong> When joining a table to itself (self-join), aliases are necessary to treat the single table as two separate tables.</li>
        </ul>

        <h3>✨ How to Use SQL Aliases</h3>
        <p>
          Aliases are defined using the `AS` keyword, followed by the desired alias name. The `AS` keyword is optional in many SQL dialects (like MySQL and PostgreSQL), but it's good practice to include it for clarity and portability.
        </p>

        <h3>📝 Sample Illustrations: Using Table and Column Aliases</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Using a table alias
SELECT c.customer_name, o.order_date
FROM customers AS c, orders AS o
WHERE c.customer_id = o.customer_id;

-- Using a column alias
SELECT product_name AS "Product Name", price * stock_quantity AS "Total Value"
FROM products;

-- Using aliases in a join with ambiguous column names
SELECT c.name, o.order_id
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id;

-- Using an alias with an aggregate function
SELECT COUNT(product_id) AS "Number of Products"
FROM products;

-- Using aliases for a self-join
SELECT a.employee_name AS "Employee", b.employee_name AS "Manager"
FROM employees a
JOIN employees b ON a.manager_id = b.employee_id;
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Using Aliases</h3>
        <ul>
          <li>Choose Meaningful Aliases: Select aliases that are short but still convey meaning (e.g., `c` for customers, `o` for orders).</li>
          <li>Be Consistent: Use a consistent naming convention for your aliases throughout your queries.</li>
          <li>Use the `AS` Keyword: While often optional, using `AS` improves readability.</li>
          <li>Document Complex Queries: For very complex queries with many aliases, consider adding comments to explain them.</li>
        </ul>

        <h3>📝 Real-World Applications of SQL Aliases</h3>
        <ul>
          <li>Reporting: Making report column headers more user-friendly.</li>
          <li>Integrating Data from Multiple Sources: Handling different naming conventions by aliasing columns to a standard name.</li>
          <li>Complex Data Analysis: Simplifying queries that involve multiple joins or complex calculations.</li>
        </ul>

        <h3>🎥 Video Tutorial: SQL Aliases</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="SQL Aliases Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
          <small>
            Source: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Example Video Source</a>
          </small>
        </div>
      </div>
      <Link to="/DatabaseIntegrityManagement"><p>Back to Database Integrity Management</p></Link>
    </>
  );
}
