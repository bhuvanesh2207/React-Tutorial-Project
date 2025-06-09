import React from 'react';
import { Link } from 'react-router-dom';

export default function ControlFlowFunctionsInSQL() {
  return (
    <>
      <div className="java-container">
        <h2>Control Flow Functions in SQL</h2>
        <p>
          Control flow functions in SQL allow you to implement conditional logic and decision-making within your queries. These functions help you handle different scenarios, transform data based on conditions, and create more dynamic and flexible database operations. Understanding and using control flow functions effectively can significantly enhance your SQL query capabilities.
        </p>

        <h3>📚 Common Control Flow Functions</h3>
        <ul>
          <li><strong>CASE:</strong> Implements if-then-else logic in SQL queries</li>
          <li><strong>IF/IFNULL:</strong> Simple conditional expressions and NULL handling</li>
          <li><strong>COALESCE:</strong> Returns the first non-NULL value from a list</li>
          <li><strong>NULLIF:</strong> Returns NULL if two expressions are equal</li>
          <li><strong>GREATEST/LEAST:</strong> Returns the largest/smallest value from a list</li>
        </ul>

        <h3>✨ Basic Usage Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Simple CASE statement
SELECT 
    product_name,
    CASE 
        WHEN price < 10 THEN 'Budget'
        WHEN price < 50 THEN 'Standard'
        ELSE 'Premium'
    END AS price_category
FROM products;

-- Searched CASE statement
SELECT 
    employee_name,
    CASE 
        WHEN salary < 30000 THEN 'Entry Level'
        WHEN salary < 60000 THEN 'Mid Level'
        WHEN salary < 100000 THEN 'Senior Level'
        ELSE 'Executive'
    END AS employee_level
FROM employees;

-- IF function
SELECT 
    product_name,
    IF(stock > 0, 'In Stock', 'Out of Stock') AS stock_status
FROM products;

-- COALESCE function
SELECT 
    customer_name,
    COALESCE(phone, email, 'No Contact Info') AS contact_info
FROM customers;
`}
          </code>
        </pre>

        <h3>📝 Advanced Usage Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Nested CASE statements
SELECT 
    order_id,
    CASE 
        WHEN status = 'Pending' THEN
            CASE 
                WHEN payment_received = 1 THEN 'Processing'
                ELSE 'Awaiting Payment'
            END
        WHEN status = 'Processing' THEN
            CASE 
                WHEN shipping_date IS NOT NULL THEN 'Shipped'
                ELSE 'In Production'
            END
        ELSE status
    END AS detailed_status
FROM orders;

-- Using control flow with aggregates
SELECT 
    department,
    COUNT(*) AS total_employees,
    SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) AS high_earners,
    AVG(CASE WHEN gender = 'F' THEN salary ELSE NULL END) AS avg_female_salary,
    AVG(CASE WHEN gender = 'M' THEN salary ELSE NULL END) AS avg_male_salary
FROM employees
GROUP BY department;

-- Complex conditional logic
SELECT 
    product_name,
    CASE 
        WHEN stock = 0 THEN 'Out of Stock'
        WHEN stock < 10 THEN 'Low Stock'
        WHEN price > 100 AND stock > 20 THEN 'High Value, Well Stocked'
        WHEN price < 50 AND stock > 50 THEN 'Budget Item, Well Stocked'
        ELSE 'Adequate Stock'
    END AS inventory_status
FROM products;
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Control Flow Functions</h3>
        <ul>
          <li>Use Appropriate Functions: Choose the right control flow function for your specific needs.</li>
          <li>Keep Logic Simple: Avoid overly complex nested conditions when possible.</li>
          <li>Consider Performance: Complex control flow can impact query performance.</li>
          <li>Handle NULL Values: Always consider how NULL values will be handled in your conditions.</li>
          <li>Use Comments: Document complex conditional logic for better maintainability.</li>
          <li>Test Edge Cases: Ensure your control flow handles all possible scenarios.</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Data Classification: Categorizing products, customers, or transactions based on various criteria</li>
          <li>Status Management: Tracking and updating the status of orders, tickets, or processes</li>
          <li>Data Transformation: Converting data into different formats or categories</li>
          <li>Business Rules: Implementing business logic and rules directly in queries</li>
          <li>Reporting: Creating dynamic reports with conditional formatting and calculations</li>
        </ul>

        <h3>🎥 Video Tutorial: SQL Control Flow Functions</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="SQL Control Flow Functions Tutorial"
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