import React from 'react';
import { Link } from 'react-router-dom';

export default function CommandingSQL() {
  return (
    <div className="java-container">
      <h1>Commanding SQL</h1>
      
      <p>
        SQL (Structured Query Language) is the standard language for managing and manipulating relational databases. Understanding the different types of SQL commands is essential for interacting with databases effectively, whether you are creating tables, inserting data, querying information, or managing user permissions.
      </p>

      <h2>📋 Key Concepts</h2>
      <ul>
        <li>📊 Categories of SQL Commands
          <ul>
            <li>DDL (Data Definition Language)</li>
            <li>DML (Data Manipulation Language)</li>
            <li>TCL (Transaction Control Language)</li>
            <li>DCL (Data Control Language)</li>
            <li>DQL (Data Query Language - often included in DML)</li>
          </ul>
        </li>
        <li>🔑 Purpose of Each Category
          <ul>
            <li>DDL: Defines and manages database schema and objects</li>
            <li>DML: Manages data within schema objects</li>
            <li>TCL: Manages transactions and their integrity</li>
            <li>DCL: Controls access rights and permissions</li>
            <li>DQL: Retrieves data from the database</li>
          </ul>
        </li>
        <li>📝 Basic Syntax Structure
          <ul>
            <li>Commands are typically composed of keywords, clauses, and parameters</li>
            <li>Statements are terminated by a semicolon (;)</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Overview of Command Categories</h2>

      <h3>1. Data Definition Language (DDL)</h3>
      <pre>
        <code>
{`CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);

DROP TABLE Persons;
ALTER TABLE Persons ADD DateOfBirth date;`}
        </code>
      </pre>

      <h3>2. Data Manipulation Language (DML)</h3>
      <pre>
        <code>
{`INSERT INTO Customers (CustomerName, City) VALUES ('Cardinal', 'Stavanger');
UPDATE Customers SET City = 'Oslo' WHERE CustomerName = 'Cardinal';
DELETE FROM Customers WHERE CustomerName = 'Cardinal';`}
        </code>
      </pre>

      <h3>3. Data Query Language (DQL) - SELECT</h3>
      <pre>
        <code>
{`SELECT CustomerName, City FROM Customers;`}
        </code>
      </pre>

      <h3>4. Transaction Control Language (TCL)</h3>
      <pre>
        <code>
{`BEGIN TRANSACTION;
UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 1;
UPDATE Accounts SET Balance = Balance + 100 WHERE AccountID = 2;
COMMIT;

ROLLBACK;`}
        </code>
      </pre>

      <h3>5. Data Control Language (DCL)</h3>
      <pre>
        <code>
{`GRANT SELECT, UPDATE ON Customers TO user1;
REVOKE SELECT ON Customers FROM user1;`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>📝 Use Consistent Formatting
          <ul>
            <li>Use consistent capitalization and indentation for keywords and clauses</li>
          </ul>
        </li>
        <li>🔒 Be Mindful of Permissions
          <ul>
            <li>Ensure you have the necessary privileges before executing commands, especially DDL and DCL</li>
          </ul>
        </li>
        <li>🔄 Test DML and TCL Carefully
          <ul>
            <li>Always test INSERT, UPDATE, and DELETE statements on a development or staging environment first</li>
            <li>Understand the implications of COMMIT and ROLLBACK in transactions</li>
          </ul>
        </li>
        <li>📚 Comment Your Code
          <ul>
            <li>Add comments to complex SQL statements to explain their purpose</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>🏗️ Database Administration
          <ul>
            <li>Creating, modifying, and deleting database objects (DDL)</li>
            <li>Managing user access and permissions (DCL)</li>
          </ul>
        </li>
        <li>📊 Data Management
          <ul>
            <li>Inserting, updating, and deleting records (DML)</li>
            <li>Ensuring data integrity through transactions (TCL)</li>
          </ul>
        </li>
        <li>🔍 Data Analysis and Reporting
          <ul>
            <li>Retrieving specific data sets using SELECT statements (DQL)</li>
          </ul>
        </li>
        <li>🛠️ Application Development
          <ul>
            <li>Interacting with the database from applications using various SQL commands</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Commanding SQL</h2>
      <div style={{ marginBottom: "1em" }}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Commanding SQL Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
        <Link to="/DataManipulationLanguage"><p>Data Manipulation Language</p></Link>
        <Link to="/MasteringDataDefinitionLanguage"><p>Mastering Data Definition Language</p></Link>
        <Link to="/NavigatingDataControlLanguage"><p>Navigating Data Control Language</p></Link>
        <Link to="/TransactionControlLanguage"><p>Transaction Control Language</p></Link>
      </div>
  );
} 