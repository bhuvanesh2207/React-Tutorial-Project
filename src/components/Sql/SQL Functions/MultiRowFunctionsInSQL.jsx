import React from 'react';
import { Link } from 'react-router-dom';

export default function MultiRowFunctionsInSQL() {
  return (
    <>
      <div className="java-container">
        <h2>Multi-Row Functions in SQL (Aggregate Functions)</h2>
        <p>
          Multi-row functions, also known as aggregate functions, perform calculations on sets of rows and return a single value. These functions are essential for data analysis, reporting, and summarizing large datasets. They help you derive meaningful insights from your data by performing operations like counting, summing, averaging, and finding maximum or minimum values.
        </p>

        <h3>📚 Common Aggregate Functions</h3>
        <ul>
          <li><strong>COUNT:</strong> Counts the number of rows or non-NULL values in a column</li>
          <li><strong>SUM:</strong> Calculates the sum of values in a numeric column</li>
          <li><strong>AVG:</strong> Computes the average of values in a numeric column</li>
          <li><strong>MAX:</strong> Finds the maximum value in a column</li>
          <li><strong>MIN:</strong> Finds the minimum value in a column</li>
          <li><strong>GROUP_CONCAT:</strong> Concatenates values from multiple rows into a single string</li>
          <li><strong>STDDEV/VARIANCE:</strong> Calculates statistical measures of dispersion</li>
        </ul>

        <h3>✨ Basic Usage Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Count total number of employees
SELECT COUNT(*) AS total_employees FROM employees;

-- Calculate average salary
SELECT AVG(salary) AS average_salary FROM employees;

-- Find highest and lowest prices
SELECT 
    MAX(price) AS highest_price,
    MIN(price) AS lowest_price
FROM products;

-- Sum of all order amounts
SELECT SUM(amount) AS total_sales FROM orders;

-- Count distinct values
SELECT COUNT(DISTINCT department) AS unique_departments FROM employees;
`}
          </code>
        </pre>

        <h3>📝 Advanced Usage with GROUP BY</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Group by department and calculate statistics
SELECT 
    department,
    COUNT(*) AS employee_count,
    AVG(salary) AS avg_salary,
    MAX(salary) AS max_salary,
    MIN(salary) AS min_salary
FROM employees
GROUP BY department;

-- Multiple grouping levels
SELECT 
    department,
    job_title,
    COUNT(*) AS employee_count,
    AVG(salary) AS avg_salary
FROM employees
GROUP BY department, job_title;

-- Using HAVING to filter grouped results
SELECT 
    department,
    AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 50000;
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Aggregate Functions</h3>
        <ul>
          <li>Use Appropriate Functions: Choose the right aggregate function for your specific needs.</li>
          <li>Consider NULL Values: Most aggregate functions ignore NULL values by default.</li>
          <li>Use GROUP BY Effectively: Group data logically to get meaningful summaries.</li>
          <li>Apply HAVING Correctly: Use HAVING for filtering grouped results, WHERE for filtering individual rows.</li>
          <li>Optimize Performance: Aggregate functions can be resource-intensive on large datasets.</li>
          <li>Use Aliases: Provide clear aliases for aggregate function results.</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Sales Analysis: Calculating total sales, average order value, and sales by region</li>
          <li>Employee Statistics: Computing average salaries, headcount by department, and salary ranges</li>
          <li>Inventory Management: Tracking total stock, average price, and product categories</li>
          <li>Customer Analytics: Analyzing customer counts, average purchase value, and customer segments</li>
          <li>Financial Reporting: Generating summary reports with totals, averages, and trends</li>
        </ul>

        <h3>🎥 Video Tutorial: SQL Aggregate Functions</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="SQL Aggregate Functions Tutorial"
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