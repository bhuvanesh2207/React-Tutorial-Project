import React from 'react';
import { Link } from 'react-router-dom';

export default function StructuringDatawithSQL() {
  return (
    <>
      <div className="java-container">
        <h2>Structuring Data with SQL</h2>
        <p>
          Structuring data is a fundamental aspect of database management, and SQL provides powerful tools to define, organize, and manipulate the structure of your data. This involves creating tables, defining relationships between them, enforcing data integrity, and organizing data for efficient querying and reporting. Understanding how to effectively structure data with SQL is crucial for building robust and scalable database applications.
        </p>

        <h3>📚 Key Concepts in Data Structuring</h3>
        <ul>
          <li><strong>Tables:</strong> The basic units of data storage in a relational database, organized into rows and columns.</li>
          <li><strong>Columns (Attributes):</strong> Define the type of data that can be stored in a table.</li>
          <li><strong>Rows (Records/Tuples):</strong> Represent individual entries or records in a table.</li>
          <li><strong>Data Types:</strong> Specify the kind of data that can be stored in a column (e.g., INT, VARCHAR, DATE).</li>
          <li><strong>Constraints:</strong> Rules enforced on data columns to maintain data accuracy and integrity (e.g., PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK).</li>
          <li><strong>Relationships:</strong> Define how data in different tables is related to each other (e.g., One-to-One, One-to-Many, Many-to-Many).</li>
          <li><strong>Normalization:</strong> A process of organizing data in a database to reduce redundancy and improve data integrity.</li>
          <li><strong>Indexing:</strong> Creating indexes on columns to speed up data retrieval operations.</li>
        </ul>

        <h3>✨ Basic SQL for Data Structuring</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Creating a table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    registration_date DATE
);

-- Adding a foreign key constraint
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    amount DECIMAL(10, 2),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Creating an index
CREATE INDEX idx_customer_email ON customers (email);
`}
          </code>
        </pre>

        <h3>📝 Normalization Forms</h3>
        <p>
          Normalization helps eliminate redundant data and ensure data dependencies are logical. The most common normal forms are:
        </p>
        <ul>
          <li><strong>First Normal Form (1NF):</strong> Atomic values, no repeating groups.</li>
          <li><strong>Second Normal Form (2NF):</strong> 1NF + no partial dependencies.</li>
          <li><strong>Third Normal Form (3NF):</strong> 2NF + no transitive dependencies.</li>
        </ul>

        <h3>💡 Best Practices for Structuring Data</h3>
        <ul>
          <li>Plan your database schema carefully before creating tables.</li>
          <li>Use appropriate data types for each column.</li>
          <li>Define primary keys for all tables.</li>
          <li>Use foreign keys to establish relationships between tables and enforce referential integrity.</li>
          <li>Apply constraints (UNIQUE, NOT NULL, CHECK) to maintain data quality.</li>
          <li>Consider normalization levels based on your application's needs (balancing integrity and performance).</li>
          <li>Create indexes on columns frequently used in WHERE clauses, JOIN conditions, and ORDER BY clauses.</li>
          <li>Document your database schema.</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Designing databases for e-commerce platforms, managing products, orders, and customers.</li>
          <li>Structuring data for content management systems, handling articles, authors, and categories.</li>
          <li>Building databases for financial applications, managing accounts, transactions, and users.</li>
          <li>Designing schemas for healthcare systems, storing patient information, appointments, and medical records.</li>
          <li>Creating data warehouses for business intelligence and analytics.</li>
        </ul>

        <h3>🎥 Video Tutorial: Structuring Data with SQL</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Structuring Data with SQL Tutorial"
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
          <li><Link to="/AdvancedSQLQueriesUsingAllSelectClauses">AdvancedSQLQueriesUsingAllSelectClauses</Link></li>
          <li><Link to="/CommonTableExpressionsInSQL">CommonTableExpressionsInSQL</Link></li>
          <li><Link to="/GroupByClause">GroupByClause</Link></li>
          <li><Link to="/MasteringSQLJoins">MasteringSQLJoins</Link></li>
          <li><Link to="/MasteringSubqueriesInSQL">MasteringSubqueriesInSQL</Link></li>
          <li><Link to="/StructuringDatawithSQL">Structuring Data with SQL</Link></li>
        </ul>
    </>
  );
}
