import React from 'react';
import { Link } from 'react-router-dom';

export default function DateAndTimeFunctionsInSQL() {
  return (
    <>
      <div className="java-container">
        <h2>Date and Time Functions in SQL</h2>
        <p>
          Date and time functions in SQL are essential tools for working with temporal data. They allow you to manipulate, format, and calculate dates and times in your database operations. These functions are crucial for tasks like scheduling, reporting, and analyzing time-based data. Understanding and using date/time functions effectively can help you handle complex temporal calculations and data management tasks.
        </p>

        <h3>📚 Common Date and Time Functions</h3>
        <ul>
          <li><strong>NOW/CURRENT_TIMESTAMP:</strong> Returns current date and time</li>
          <li><strong>CURDATE/CURRENT_DATE:</strong> Returns current date</li>
          <li><strong>CURTIME/CURRENT_TIME:</strong> Returns current time</li>
          <li><strong>DATE_FORMAT:</strong> Formats date according to specified format</li>
          <li><strong>DATE_ADD/DATE_SUB:</strong> Adds/subtracts time intervals</li>
          <li><strong>DATEDIFF:</strong> Calculates difference between dates</li>
          <li><strong>EXTRACT:</strong> Extracts specific parts from date/time</li>
        </ul>

        <h3>✨ Basic Usage Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Get current date and time
SELECT NOW() AS current_datetime;

-- Format date
SELECT 
    DATE_FORMAT(order_date, '%Y-%m-%d') AS formatted_date,
    DATE_FORMAT(order_date, '%H:%i:%s') AS formatted_time
FROM orders;

-- Add/subtract time intervals
SELECT 
    order_date,
    DATE_ADD(order_date, INTERVAL 1 DAY) AS next_day,
    DATE_SUB(order_date, INTERVAL 1 MONTH) AS last_month
FROM orders;

-- Calculate date differences
SELECT 
    order_date,
    DATEDIFF(CURRENT_DATE, order_date) AS days_since_order
FROM orders;

-- Extract date parts
SELECT 
    order_date,
    EXTRACT(YEAR FROM order_date) AS order_year,
    EXTRACT(MONTH FROM order_date) AS order_month,
    EXTRACT(DAY FROM order_date) AS order_day
FROM orders;
`}
          </code>
        </pre>

        <h3>📝 Advanced Usage Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Complex date calculations
SELECT 
    order_id,
    order_date,
    CASE 
        WHEN DATEDIFF(CURRENT_DATE, order_date) <= 7 THEN 'Last 7 days'
        WHEN DATEDIFF(CURRENT_DATE, order_date) <= 30 THEN 'Last 30 days'
        WHEN DATEDIFF(CURRENT_DATE, order_date) <= 90 THEN 'Last 90 days'
        ELSE 'Older'
    END AS order_age_category
FROM orders;

-- Date-based grouping
SELECT 
    DATE_FORMAT(order_date, '%Y-%m') AS month,
    COUNT(*) AS order_count,
    SUM(amount) AS total_amount
FROM orders
GROUP BY DATE_FORMAT(order_date, '%Y-%m')
ORDER BY month;

-- Working with time zones
SELECT 
    order_id,
    order_date,
    CONVERT_TZ(order_date, 'UTC', 'America/New_York') AS est_time,
    CONVERT_TZ(order_date, 'UTC', 'Asia/Tokyo') AS jst_time
FROM orders;

-- Date range queries
SELECT 
    product_name,
    COUNT(*) AS order_count
FROM orders
WHERE order_date BETWEEN 
    DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY) 
    AND CURRENT_DATE
GROUP BY product_name;
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Date/Time Functions</h3>
        <ul>
          <li>Use Appropriate Data Types: Store dates in proper DATE, DATETIME, or TIMESTAMP columns.</li>
          <li>Consider Time Zones: Be aware of time zone implications in your date/time operations.</li>
          <li>Use Indexes: Index date columns that are frequently used in WHERE clauses.</li>
          <li>Format Consistently: Use consistent date formats throughout your application.</li>
          <li>Handle NULL Values: Consider how NULL dates should be handled in your queries.</li>
          <li>Performance: Be mindful of the performance impact of complex date calculations.</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Reporting: Generating time-based reports and analytics</li>
          <li>Scheduling: Managing appointments, events, and deadlines</li>
          <li>Age Calculations: Computing customer age, account age, or service duration</li>
          <li>Seasonal Analysis: Analyzing data patterns across different time periods</li>
          <li>Maintenance: Tracking system maintenance schedules and history</li>
        </ul>

        <h3>🎥 Video Tutorial: SQL Date and Time Functions</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="SQL Date and Time Functions Tutorial"
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