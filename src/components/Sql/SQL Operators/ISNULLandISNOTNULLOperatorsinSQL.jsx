import React from 'react';
import { Link } from 'react-router-dom';

export default function ISNULLandISNOTNULLOperatorsinSQL() {
  return (
    <>
      <div className="java-container">
        <h2>IS NULL and IS NOT NULL Operators in SQL</h2>
        <p>
          In SQL, comparing a value to <code>NULL</code> using standard comparison operators (like <code>=</code> or <code>!=</code>) will always result in <code>UNKNOWN</code>, not <code>TRUE</code> or <code>FALSE</code>. This is because <code>NULL</code> represents a missing or unknown value, and you cannot logically equate an unknown value to anything, even another unknown value. To correctly check if a column contains a <code>NULL</code> value or not, you must use the special <code>IS NULL</code> and <code>IS NOT NULL</code> operators.
        </p>

        <h3>📚 Purpose and Syntax</h3>
        <p>
          The <code>IS NULL</code> operator is used to test for a NULL value, and <code>IS NOT NULL</code> is used to test for a non-NULL value. Their syntax is straightforward:
        </p>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
column_name IS NULL
column_name IS NOT NULL
`}
          </code>
        </pre>
        <p>
          These operators are typically used in the <code>WHERE</code> clause to filter rows based on the presence or absence of NULLs in a specific column.
        </p>

        <h3>✨ Basic Usage Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Find customers with no email address recorded
SELECT customer_name FROM customers WHERE email IS NULL;

-- Find employees who have a commission recorded
SELECT employee_name, commission FROM employees WHERE commission IS NOT NULL;

-- Find orders that haven't been shipped yet (assuming ship_date is NULL until shipped)
SELECT order_id, order_date FROM orders WHERE ship_date IS NULL;

-- Find products that have a description
SELECT product_name FROM products WHERE description IS NOT NULL;
`}
          </code>
        </pre>

        <h3>📝 Combining with Other Operators</h3>
        <p>
          You can combine <code>IS NULL</code> and <code>IS NOT NULL</code> with other logical operators (<code>AND</code>, <code>OR</code>, <code>NOT</code>) to create more complex filtering conditions.
        </p>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Find customers who have no email OR no phone number
SELECT customer_name FROM customers WHERE email IS NULL OR phone IS NULL;

-- Find employees in department 50 who do NOT have a commission
SELECT employee_name, commission FROM employees 
WHERE department_id = 50 AND commission IS NULL;

-- Find products with stock greater than 0 AND no description
SELECT product_name FROM products 
WHERE stock > 0 AND description IS NULL;
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Using IS NULL and IS NOT NULL</h3>
        <ul>
          <li>Always use <code>IS NULL</code> or <code>IS NOT NULL</code> to check for the presence or absence of NULL values.</li>
          <li>Never use standard comparison operators (<code>=</code>, <code>!=</code>, etc.) directly with <code>NULL</code>.</li>
          <li>Understand the definition of NULL in your database system (it represents an unknown value, not an empty string or zero).</li>
          <li>Use these operators to handle missing or inapplicable data gracefully in your queries and reports.</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Identifying records with incomplete data (e.g., missing phone numbers, addresses, etc.).</li>
          <li>Filtering for tasks or orders that are pending completion (where a completion date is NULL).</li>
          <li>Segmenting customers based on whether they have provided certain optional information.</li>
          <li>Generating reports that specifically include or exclude data with missing values.</li>
        </ul>

        <h3>🎥 Video Tutorial: SQL IS NULL and IS NOT NULL</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="SQL IS NULL and IS NOT NULL Tutorial"
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
