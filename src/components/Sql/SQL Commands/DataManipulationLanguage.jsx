import React from 'react';
import { Link } from 'react-router-dom';

export default function DataManipulationLanguage() {
  return (
    <div className="java-container">
      <h1>Data Manipulation Language (DML) Commands</h1>
      
      <p>
        Data Manipulation Language (DML) commands are used to manage the data within the database objects defined by DDL. These commands allow you to add, retrieve, modify, and delete data stored in your tables.
      </p>

      <h2>📋 Key DML Commands</h2>
      <ul>
        <li>🔍 SELECT
          <ul>
            <li>Used to retrieve data from one or more tables</li>
            <li>Allows filtering, sorting, and aggregating data</li>
            <li>Forms the basis of data querying (often considered DQL, but closely related to DML)</li>
          </ul>
        </li>
        <li>➕ INSERT
          <ul>
            <li>Used to add new rows of data into a table</li>
            <li>Can insert single rows or multiple rows</li>
          </ul>
        </li>
        <li>✍️ UPDATE
          <ul>
            <li>Used to modify existing data in one or more rows of a table</li>
            <li>Requires a `WHERE` clause to specify which rows to update</li>
          </ul>
        </li>
        <li>🗑️ DELETE
          <ul>
            <li>Used to remove one or more rows from a table</li>
            <li>Requires a `WHERE` clause to specify which rows to delete</li>
          </ul>
        </li>
        <li>🔄 MERGE (Less common, combines INSERT, UPDATE, DELETE)
          <ul>
            <li>Performs inserts, updates, or deletes on a target table based on matching rows from a source table</li>
            <li>Syntax and availability vary by database system</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>

      <h3>1. SELECT Statement</h3>
      <pre>
        <code>
{`SELECT ProductName, Price, CategoryID
FROM Products
WHERE CategoryID = 1
ORDER BY Price DESC;`}
        </code>
      </pre>

      <h3>2. INSERT INTO</h3>
      <pre>
        <code>
{`INSERT INTO Customers (CustomerName, City, Country)
VALUES ('New Customer', 'London', 'UK');

INSERT INTO Products (ProductName, Price)
SELECT OldProductName, OldPrice FROM OldProducts; -- Inserting from another table`}
        </code>
      </pre>

      <h3>3. UPDATE Statement</h3>
      <pre>
        <code>
{`UPDATE Products
SET Price = Price * 1.10
WHERE CategoryID = 2;`}
        </code>
      </pre>

      <h3>4. DELETE Statement</h3>
      <pre>
        <code>
{`DELETE FROM Customers
WHERE CustomerName = 'Old Customer';`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>🔒 Use WHERE Clause Carefully
          <ul>
            <li>Always include a `WHERE` clause in UPDATE and DELETE statements unless you intend to affect all rows</li>
          </ul>
        </li>
        <li>🔄 Test DML on Small Data Sets
          <ul>
            <li>Before running DML commands on large production tables, test them on a smaller subset or a staging environment</li>
          </ul>
        </li>
        <li>📊 Verify Changes
          <ul>
            <li>After executing INSERT, UPDATE, or DELETE, run a `SELECT` query to confirm the changes were applied correctly</li>
          </ul>
        </li>
        <li>🔑 Understand Transactions (TCL)
          <ul>
            <li>Group related DML operations within transactions (using `BEGIN TRANSACTION`, `COMMIT`, `ROLLBACK`) to ensure atomicity</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>📈 Everyday Data Operations
          <ul>
            <li>Adding new users, updating product prices, deleting outdated records</li>
          </ul>
        </li>
        <li>📊 Reporting and Analytics
          <ul>
            <li>Retrieving specific datasets for analysis and report generation (using SELECT)</li>
          </ul>
        </li>
        <li>🔄 Data Migration and Synchronization
          <ul>
            <li>Moving or syncing data between different tables or databases</li>
          </ul>
        </li>
        <li>🛠️ Application Backend
          <ul>
            <li>Handling data interactions triggered by user actions in applications</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Data Manipulation Language (DML)</h2>
      <div style={{ marginBottom: "1em" }}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Data Manipulation Language (DML) Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <Link to="/sql"><p>Back to SQL Overview</p></Link>
    </div>
  );
} 