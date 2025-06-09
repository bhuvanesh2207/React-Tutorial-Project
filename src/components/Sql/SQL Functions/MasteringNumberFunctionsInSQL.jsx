import React from 'react';
import { Link } from 'react-router-dom';

export default function MasteringNumberFunctionsInSQL() {
  return (
    <>
      <div className="java-container">
        <h2>Mastering Number Functions in SQL</h2>
        <p>
          Number functions in SQL are powerful tools for performing mathematical operations and manipulating numeric data. These functions help you perform calculations, round numbers, generate random values, and handle various mathematical operations directly in your SQL queries. Understanding and using number functions effectively can significantly enhance your data analysis and reporting capabilities.
        </p>

        <h3>📚 Common Number Functions</h3>
        <ul>
          <li><strong>ROUND:</strong> Rounds a number to a specified number of decimal places</li>
          <li><strong>CEIL/CEILING:</strong> Rounds a number up to the nearest integer</li>
          <li><strong>FLOOR:</strong> Rounds a number down to the nearest integer</li>
          <li><strong>ABS:</strong> Returns the absolute value of a number</li>
          <li><strong>POWER:</strong> Raises a number to a specified power</li>
          <li><strong>SQRT:</strong> Calculates the square root of a number</li>
          <li><strong>RAND:</strong> Generates a random number</li>
        </ul>

        <h3>✨ Basic Usage Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Rounding numbers
SELECT 
    price,
    ROUND(price, 2) AS rounded_price,
    CEIL(price) AS ceiling_price,
    FLOOR(price) AS floor_price
FROM products;

-- Absolute values
SELECT 
    balance,
    ABS(balance) AS absolute_balance
FROM accounts;

-- Power and square root
SELECT 
    number,
    POWER(number, 2) AS squared,
    SQRT(number) AS square_root
FROM calculations;

-- Random numbers
SELECT 
    RAND() AS random_number,
    RAND() * 100 AS random_percentage
FROM dual;
`}
          </code>
        </pre>

        <h3>📝 Advanced Usage Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Complex calculations
SELECT 
    product_id,
    price,
    quantity,
    ROUND(price * quantity * (1 - discount), 2) AS final_price,
    CEIL(price * quantity * (1 - discount)) AS ceiling_price,
    FLOOR(price * quantity * (1 - discount)) AS floor_price
FROM order_items;

-- Statistical calculations
SELECT 
    department,
    AVG(salary) AS avg_salary,
    ROUND(AVG(salary), 2) AS rounded_avg,
    CEIL(AVG(salary)) AS ceiling_avg,
    FLOOR(AVG(salary)) AS floor_avg
FROM employees
GROUP BY department;

-- Random sampling
SELECT *
FROM customers
WHERE RAND() < 0.1;  -- Select 10% of records randomly

-- Complex mathematical operations
SELECT 
    value,
    POWER(value, 2) AS squared,
    SQRT(POWER(value, 2)) AS magnitude,
    ABS(value) AS absolute_value
FROM measurements;
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Number Functions</h3>
        <ul>
          <li>Use Appropriate Precision: Choose the right number of decimal places for your calculations.</li>
          <li>Handle NULL Values: Consider how NULL values should be handled in your calculations.</li>
          <li>Consider Performance: Complex mathematical operations can impact query performance.</li>
          <li>Use Aliases: Provide clear aliases for calculated values.</li>
          <li>Document Formulas: Comment complex calculations for better maintainability.</li>
          <li>Test Edge Cases: Ensure your calculations handle all possible scenarios.</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Financial Calculations: Computing prices, discounts, and totals</li>
          <li>Statistical Analysis: Calculating averages, standard deviations, and other statistics</li>
          <li>Data Normalization: Scaling and normalizing numeric data</li>
          <li>Random Sampling: Selecting random subsets of data for analysis</li>
          <li>Scientific Calculations: Performing mathematical operations for scientific data</li>
        </ul>

        <h3>🎥 Video Tutorial: SQL Number Functions</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="SQL Number Functions Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
          <small>
            Source: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Example Video Source</a>
          </small>
        </div>
      </div>
    </>
  );
} 