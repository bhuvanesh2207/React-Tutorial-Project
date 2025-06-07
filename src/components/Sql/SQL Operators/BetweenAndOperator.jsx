import React from 'react';
import { Link } from 'react-router-dom';

export default function BetweenAndOperator() {
  return (
    <>
      <div className="java-container">
        <h2>The BETWEEN and NOT BETWEEN Operators in SQL</h2>
        <p>
          The <code>BETWEEN</code> operator in SQL is a logical operator that tests whether a value falls within a specified range (inclusive of the start and end values). It is commonly used in the <code>WHERE</code> clause as a shorthand for checking if a value is greater than or equal to a lower bound and less than or equal to an upper bound. The <code>NOT BETWEEN</code> operator does the opposite, checking if a value falls outside the specified range.
        </p>

        <h3>📚 Purpose and Syntax</h3>
        <p>
          The <code>BETWEEN</code> operator simplifies range checks, making queries more readable. Its basic syntax is:
        </p>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
expression BETWEEN value1 AND value2
`}
          </code>
        </pre>
        <p>
          This is equivalent to:
        </p>
         <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
expression >= value1 AND expression <= value2
`}
          </code>
        </pre>
         <p>
          The <code>NOT BETWEEN</code> operator's syntax is:
        </p>
         <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
expression NOT BETWEEN value1 AND value2
`}
          </code>
        </pre>
         <p>
          Which is equivalent to:
        </p>
         <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
expression < value1 OR expression > value2
`}
          </code>
        </pre>
        <p><code>value1</code> and <code>value2</code> are inclusive in the range.</p>

        <h3>✨ Basic Usage Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Select products with a price between 20 and 50 (inclusive)
SELECT product_name, price FROM products WHERE price BETWEEN 20 AND 50;

-- Select employees hired between two dates (inclusive)
SELECT employee_name, hire_date FROM employees WHERE hire_date BETWEEN '2022-01-01' AND '2022-12-31';

-- Select orders with an amount not between 100 and 500
SELECT order_id, amount FROM orders WHERE amount NOT BETWEEN 100 AND 500;
`}
          </code>
        </pre>

        <h3>📝 Using BETWEEN with Different Data Types</h3>
        <p>
          The <code>BETWEEN</code> operator can be used with numbers, strings, and dates. The comparison behavior depends on the data type.
        </p>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Using BETWEEN with strings (alphabetical range)
SELECT product_name FROM products WHERE product_name BETWEEN 'Apple' AND 'Banana';

-- Using BETWEEN with dates and times
SELECT event_name, event_timestamp FROM events WHERE event_timestamp BETWEEN '2023-10-26 10:00:00' AND '2023-10-26 14:00:00';
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Using BETWEEN</h3>
        <ul>
          <li>Ensure that <code>value1</code> is less than or equal to <code>value2</code> for the expected range behavior.</li>
          <li>Be mindful of data type compatibility when using <code>BETWEEN</code>.</li>
          <li>For date comparisons, consider including the time component or using appropriate date functions if the column includes time.</li>
          <li>Use <code>NOT BETWEEN</code> to clearly express conditions outside a range.</li>
          <li>Understand that <code>BETWEEN</code> is inclusive of both boundary values.</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Filtering sales data within a specific quarter or month.</li>
          <li>Identifying employees who fall within a certain age or salary bracket.</li>
          <li>Selecting products based on a price range.</li>
          <li>Retrieving records created or updated within a specific time window.</li>
          <li>Filtering search results based on numerical or alphabetical ranges.</li>
        </ul>

        <h3>🎥 Video Tutorial: SQL BETWEEN Operator</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="SQL BETWEEN Operator Tutorial"
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
