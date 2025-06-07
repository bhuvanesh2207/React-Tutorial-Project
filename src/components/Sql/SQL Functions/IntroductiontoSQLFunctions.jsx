import React from 'react';
import { Link } from 'react-router-dom';

export default function IntroductiontoSQLFunctions() {
  return (
    <>
      <div className="java-container">
        <h2>Introduction to SQL Functions</h2>
        <p>
          SQL functions are predefined operations that perform specific tasks on data. They help you manipulate, transform, and analyze data directly within your SQL queries. Functions can be used in SELECT statements, WHERE clauses, and other parts of SQL queries to enhance data processing capabilities.
        </p>

        <h3>📚 Categories of SQL Functions</h3>
        <ul>
          <li><strong>String Functions:</strong> Manipulate and process text data (e.g., CONCAT, SUBSTRING, UPPER, LOWER)</li>
          <li><strong>Numeric Functions:</strong> Perform mathematical operations (e.g., ROUND, ABS, CEILING, FLOOR)</li>
          <li><strong>Date and Time Functions:</strong> Handle date and time values (e.g., NOW, DATE_ADD, DATEDIFF)</li>
          <li><strong>Aggregate Functions:</strong> Perform calculations on multiple rows (e.g., SUM, AVG, COUNT, MAX, MIN)</li>
          <li><strong>Control Flow Functions:</strong> Implement conditional logic (e.g., IF, CASE, COALESCE)</li>
        </ul>

        <h3>✨ Basic Function Syntax</h3>
        <p>
          SQL functions typically follow this syntax:
        </p>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Basic function syntax
FUNCTION_NAME(argument1, argument2, ...)

-- Examples
SELECT UPPER(first_name) FROM employees;
SELECT ROUND(salary, 2) FROM employees;
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;
`}
          </code>
        </pre>

        <h3>📝 Common Function Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- String Functions
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;
SELECT UPPER(product_name) FROM products;
SELECT LENGTH(description) FROM products;

-- Numeric Functions
SELECT ROUND(price, 2) FROM products;
SELECT ABS(balance) FROM accounts;
SELECT CEILING(amount) FROM transactions;

-- Date Functions
SELECT NOW() AS current_datetime;
SELECT DATE_FORMAT(order_date, '%Y-%m-%d') FROM orders;
SELECT DATEDIFF(end_date, start_date) FROM projects;

-- Aggregate Functions
SELECT COUNT(*) FROM customers;
SELECT AVG(salary) FROM employees;
SELECT MAX(price) FROM products;

-- Control Flow Functions
SELECT 
    CASE 
        WHEN age < 18 THEN 'Minor'
        WHEN age < 65 THEN 'Adult'
        ELSE 'Senior'
    END AS age_group
FROM customers;
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Using SQL Functions</h3>
        <ul>
          <li>Understand Function Behavior: Different database systems may implement functions slightly differently. Always check the documentation for your specific database.</li>
          <li>Consider Performance: Some functions can impact query performance, especially when used on large datasets or in WHERE clauses.</li>
          <li>Use Aliases: When using functions in SELECT statements, provide meaningful aliases for better readability.</li>
          <li>Handle NULL Values: Be aware of how functions handle NULL values and use appropriate NULL-handling functions when needed.</li>
          <li>Test Functions: Always test functions with various inputs to ensure they behave as expected.</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Data Cleaning: Using string functions to standardize text data</li>
          <li>Financial Calculations: Using numeric functions for precise calculations</li>
          <li>Date-Based Reporting: Using date functions for time-based analysis</li>
          <li>Data Aggregation: Using aggregate functions for summary statistics</li>
          <li>Conditional Logic: Using control flow functions for complex business rules</li>
        </ul>

        <h3>🎥 Video Tutorial: Introduction to SQL Functions</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Introduction to SQL Functions Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
          <small>
            Source: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Example Video Source</a>
          </small>
        </div>
      </div>
      <ul>
        <li><Link to="/ContinuingOurJourneyWithSQLStringFunctions">ContinuingOurJourneyWithSQLStringFunctions</Link></li>
        <li><Link to="/ContinuingwithMySQLStringFunctions">ContinuingwithMySQLStringFunctions</Link></li>
        <li><Link to="/ControlFlowFunctionsInSQL">ControlFlowFunctionsInSQL</Link></li>
        <li><Link to="/DateAndTimeFunctionsInSQL">DateAndTimeFunctionsInSQL</Link></li>
        <li><Link to="/ExpandingOurKnowledgeOfSQLStringFunctions">ExpandingOurKnowledgeOfSQLStringFunctions</Link></li>
        <li><Link to="/FurtherMasteryOfStringFunctionsInSQL">FurtherMasteryOfStringFunctionsInSQL</Link></li>
        <li><Link to="/MasteringConcat">MasteringConcat</Link></li>
        <li><Link to="/MasteringNumberFunctionsInSQL">MasteringNumberFunctionsInSQL</Link></li>
        <li><Link to="/MultiRowFunctionsInSQL">MultiRowFunctionsInSQL</Link></li>
      </ul>

    </>
  );
}
