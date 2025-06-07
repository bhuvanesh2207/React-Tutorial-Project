import React from 'react';
import { Link } from 'react-router-dom';

export default function DatabaseSchemaDesign() {
  return (
    <>
      <div className="java-container">
        <h2>Database Schema Design: Building a Solid Foundation</h2>
        <p>
          Database schema design is the process of creating a blueprint for how data will be stored, organized, and related in a database. A well-designed schema is crucial for ensuring data integrity, optimizing performance, and making the database easy to maintain and scale. It involves making decisions about tables, columns, data types, relationships, and constraints that will best represent your data and support your application's needs.
        </p>

        <h3>📚 Key Principles of Schema Design</h3>
        <ul>
          <li><strong>Normalization:</strong> The process of organizing data to minimize redundancy and dependency. This typically involves dividing large tables into smaller, more manageable ones and defining relationships between them. Common normal forms include 1NF, 2NF, 3NF, and BCNF.</li>
          <li><strong>Denormalization:</strong> Sometimes, for performance reasons, you might intentionally introduce some redundancy. This is a trade-off between query performance and data consistency.</li>
          <li><strong>Entity-Relationship Modeling:</strong> A technique for visualizing and defining the relationships between different entities (tables) in your database. This helps in understanding how data is connected and ensuring that relationships are properly implemented.</li>
          <li><strong>Data Types and Constraints:</strong> Choosing appropriate data types for columns and defining constraints to ensure data integrity and validity.</li>
          <li><strong>Indexing Strategy:</strong> Deciding which columns to index to improve query performance, while being mindful of the impact on write operations and storage space.</li>
        </ul>

        <h3>✨ The Normalization Process</h3>
        <p>
          Normalization is a systematic approach to decomposing tables to eliminate data redundancy and undesirable characteristics like Insertion, Update, and Deletion Anomalies. Here's a brief overview of the first three normal forms:
        </p>
        <ul>
          <li><strong>First Normal Form (1NF):</strong> Each table cell should contain a single value, and each record needs to be unique.</li>
          <li><strong>Second Normal Form (2NF):</strong> The table must be in 1NF, and all non-key attributes must be fully functionally dependent on the primary key.</li>
          <li><strong>Third Normal Form (3NF):</strong> The table must be in 2NF, and all attributes must be directly dependent on the primary key, not on other non-key attributes.</li>
        </ul>

        <h3>📝 Sample Illustration: Normalizing a Database</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Initial Unnormalized Table (Contains redundant data)
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerName VARCHAR(100),
    CustomerEmail VARCHAR(100),
    CustomerAddress VARCHAR(255),
    OrderDate DATE,
    ProductName VARCHAR(100),
    ProductCategory VARCHAR(50),
    Quantity INT,
    Price DECIMAL(10, 2)
);

-- Normalized Tables (1NF, 2NF, 3NF)
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(100) NOT NULL,
    CustomerEmail VARCHAR(100) UNIQUE,
    CustomerAddress VARCHAR(255)
);

CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    ProductCategory VARCHAR(50),
    Price DECIMAL(10, 2)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE OrderItems (
    OrderItemID INT PRIMARY KEY,
    OrderID INT,
    ProductID INT,
    Quantity INT,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Schema Design</h3>
        <ul>
          <li>Start with a Clear Understanding of Requirements: Gather and document the data requirements, relationships, and business rules before designing the schema.</li>
          <li>Use Meaningful Names: Choose clear, descriptive names for tables and columns that reflect their purpose and content.</li>
          <li>Plan for Growth: Design the schema with scalability in mind, considering how the database might need to evolve as the application grows.</li>
          <li>Balance Normalization and Performance: While normalization is important, be prepared to denormalize strategically if it significantly improves performance.</li>
          <li>Document Your Design: Maintain clear documentation of your schema design decisions, including the rationale behind them.</li>
          <li>Consider Security: Design the schema with security in mind, ensuring that sensitive data is properly protected.</li>
        </ul>

        <h3>📝 Real-World Applications of Schema Design</h3>
        <ul>
          <li>E-commerce Platforms: Designing schemas to handle products, categories, customers, orders, and inventory efficiently.</li>
          <li>Content Management Systems: Creating schemas for articles, users, comments, and media files.</li>
          <li>Social Networks: Designing schemas for user profiles, posts, comments, likes, and relationships.</li>
          <li>Financial Systems: Creating schemas for accounts, transactions, and reporting.</li>
          <li>Healthcare Systems: Designing schemas for patient records, appointments, and medical history.</li>
        </ul>

        <h3>🎥 Video Tutorial: Database Schema Design</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Database Schema Design Tutorial"
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