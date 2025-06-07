import React from 'react';
import { Link } from 'react-router-dom';

export default function SQLinOracle() {
  return (
    <>
      <div className="java-container">
        <h2>SQL in Oracle: An Overview</h2>
        <p>
          Oracle Database is one of the most widely used relational database management systems (RDBMS) in the world, particularly in enterprise environments. While it adheres to the standard SQL language, Oracle SQL includes its own set of extensions, functions, and features that enhance its capabilities. Understanding these Oracle-specific aspects is crucial for effective database development and administration in an Oracle environment.
        </p>

        <h3>📚 Key Concepts and Differences</h3>
        <ul>
          <li><strong>PL/SQL:</strong> Oracle's procedural extension for SQL, combining SQL with procedural programming constructs.</li>
          <li><strong>Data Types:</strong> Oracle has specific data types like VARCHAR2, NUMBER, DATE (with time zone support), TIMESTAMP, CLOB, BLOB, etc.</li>
          <li><strong>Dual Table:</strong> A special one-row, one-column table often used for selecting pseudocolumns or expressions.</li>
          <li><strong>Sequences:</strong> Database objects used to generate unique numbers.</li>
          <li><strong>Synonyms:</strong> Alternative names for database objects.</li>
          <li><strong>Analytical Functions:</strong> Powerful functions for complex data analysis and reporting.</li>
          <li><strong>Transaction Management:</strong> Oracle's robust transaction control features.</li>
        </ul>

        <h3>✨ Basic Query Examples in Oracle SQL</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Selecting from the Dual table
SELECT SYSDATE FROM dual;

-- Using VARCHAR2 data type
CREATE TABLE employees (
    employee_id NUMBER PRIMARY KEY,
    employee_name VARCHAR2(100)
);

-- Creating a sequence
CREATE SEQUENCE employee_seq
START WITH 1
INCREMENT BY 1;

-- Inserting data using a sequence
INSERT INTO employees (employee_id, employee_name)
VALUES (employee_seq.NEXTVAL, 'John Doe');

-- Using an analytical function (ROW_NUMBER)
SELECT 
    employee_name,
    salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) as salary_rank
FROM employees;
`}
          </code>
        </pre>

        <h3>💡 Best Practices for SQL in Oracle</h3>
        <ul>
          <li>Utilize PL/SQL for complex logic and procedures.</li>
          <li>Choose appropriate Oracle-specific data types.</li>
          <li>Understand and leverage the Dual table for system information and calculations.</li>
          <li>Use sequences for generating unique primary keys.</li>
          <li>Employ synonyms for simplifying object access.</li>
          <li>Master analytical functions for advanced reporting.</li>
          <li>Implement proper transaction control using COMMIT, ROLLBACK, and SAVEPOINT.</li>
          <li>Tune SQL queries for performance using EXPLAIN PLAN and other tools.</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Enterprise Resource Planning (ERP) systems</li>
          <li>Customer Relationship Management (CRM) systems</li>
          <li>Financial applications</li>
          <li>Supply chain management systems</li>
          <li>Data warehousing and business intelligence</li>
        </ul>

        <h3>🎥 Video Tutorial: Introduction to SQL in Oracle</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Introduction to SQL in Oracle Tutorial"
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
