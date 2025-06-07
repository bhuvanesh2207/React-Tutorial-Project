import React from 'react';
import { Link } from 'react-router-dom';

export default function MasteringDataDefinitionLanguage() {
  return (
    <div className="java-container">
      <h1>Mastering Data Definition Language (DDL) Commands</h1>
      
      <p>
        Data Definition Language (DDL) commands are used to define and manage the structure of your database and its objects. These commands allow you to create, modify, and delete database objects such as tables, indexes, and schemas.
      </p>

      <h2>📋 Key DDL Commands</h2>
      <ul>
        <li>🏗️ CREATE
          <ul>
            <li>Used to create new database objects (tables, databases, indexes, views, etc.)</li>
            <li>Defines the structure and initial properties of the object</li>
          </ul>
        </li>
        <li>✍️ ALTER
          <ul>
            <li>Used to modify the structure of existing database objects</li>
            <li>Add, delete, or modify columns in a table, change data types, add constraints, etc.</li>
          </ul>
        </li>
        <li>🗑️ DROP
          <ul>
            <li>Used to delete existing database objects</li>
            <li>Permanently removes the object and all its associated data</li>
          </ul>
        </li>
        <li>✂️ TRUNCATE
          <ul>
            <li>Used to delete all rows from a table</li>
            <li>Faster than DELETE for removing all rows, but cannot be rolled back in some systems</li>
          </ul>
        </li>
        <li>🔄 RENAME
          <ul>
            <li>Used to rename an existing database object</li>
            <li>Syntax varies by database system</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>

      <h3>1. CREATE TABLE</h3>
      <pre>
        <code>
{`CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    HireDate DATE,
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);`}
        </code>
      </pre>

      <h3>2. ALTER TABLE</h3>
      <pre>
        <code>
{`ALTER TABLE Employees
ADD Email VARCHAR(100);

ALTER TABLE Employees
DROP COLUMN HireDate;

ALTER TABLE Employees
MODIFY COLUMN FirstName VARCHAR(75); -- Syntax varies by DB`}
        </code>
      </pre>

      <h3>3. DROP TABLE</h3>
      <pre>
        <code>
{`DROP TABLE Employees;`}
        </code>
      </pre>

      <h3>4. TRUNCATE TABLE</h3>
      <pre>
        <code>
{`TRUNCATE TABLE Employees;`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>🔒 Be Cautious with DROP and TRUNCATE
          <ul>
            <li>These commands permanently delete data; always back up your database before using them</li>
          </ul>
        </li>
        <li>📝 Use Descriptive Names
          <ul>
            <li>Name your tables, columns, and other objects clearly</li>
          </ul>
        </li>
        <li>🔑 Define Constraints
          <ul>
            <li>Use primary keys, foreign keys, unique constraints, and check constraints to ensure data integrity</li>
          </ul>
        </li>
        <li>📊 Plan Your Schema Carefully
          <ul>
            <li>Database schema design is crucial; changes can be difficult and time-consuming later</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>🏗️ Database Setup and Initialization
          <ul>
            <li>Creating the initial database schema for a new application</li>
          </ul>
        </li>
        <li>🔄 Database Migration
          <ul>
            <li>Modifying the database structure when application requirements change</li>
          </ul>
        </li>
        <li>📊 Data Warehousing
          <ul>
            <li>Defining and loading large-scale data structures</li>
          </ul>
        </li>
        <li>🧪 Testing Environments
          <ul>
            <li>Setting up and tearing down database structures for testing</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Mastering DDL Commands</h2>
      <div style={{ marginBottom: "1em" }}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Mastering DDL Commands Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <Link to="/sql"><p>Back to SQL Overview</p></Link>
    </div>
  );
} 