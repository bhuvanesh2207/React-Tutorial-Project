import React from 'react';
import { Link } from 'react-router-dom';

export default function MasteringSQLJoins() {
  return (
    <div className="java-container">
      <h1>Mastering SQL Joins</h1>
      
      <p>
        SQL Joins are used to combine rows from two or more tables based on a related column between them. Joins are fundamental for retrieving data that is spread across multiple tables in a relational database.
      </p>

      <h2>📋 Key Concepts</h2>
      <ul>
        <li>🔗 Relational Databases
          <ul>
            <li>Data organized into tables with relationships</li>
            <li>Relationships established through primary and foreign keys</li>
          </ul>
        </li>
        <li>🔑 Joining Tables
          <ul>
            <li>Combining data from different tables</li>
            <li>Based on matching values in specified columns</li>
            <li>Result set contains columns from both tables</li>
          </ul>
        </li>
        <li>📊 Join Conditions
          <ul>
            <li>Specifies how tables are related</li>
            <li>Usually based on equality of foreign and primary keys</li>
            <li>Can use other comparison operators</li>
          </ul>
        </li>
      </ul>

      <h2>📋 Types of SQL Joins</h2>
      <ul>
        <li>INNER JOIN
          <ul>
            <li>Returns rows when there is a match in both tables</li>
            <li>Most common type of join</li>
          </ul>
        </li>
        <li>LEFT JOIN (or LEFT OUTER JOIN)
          <ul>
            <li>Returns all rows from the left table, and the matched rows from the right table</li>
            <li>Result is NULL from the right side if there is no match</li>
          </ul>
        </li>
        <li>RIGHT JOIN (or RIGHT OUTER JOIN)
          <ul>
            <li>Returns all rows from the right table, and the matched rows from the left table</li>
            <li>Result is NULL from the left side if there is no match</li>
          </ul>
        </li>
        <li>FULL JOIN (or FULL OUTER JOIN)
          <ul>
            <li>Returns all rows when there is a match in one of the tables</li>
            <li>Result is NULL from either side if there is no match</li>
          </ul>
        </li>
        <li>CROSS JOIN
          <ul>
            <li>Returns the Cartesian product of the rows from the joined tables</li>
            <li>No join condition is specified</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>

      <h3>1. INNER JOIN</h3>
      <pre>
        <code>
{`SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;`}
        </code>
      </pre>

      <h3>2. LEFT JOIN</h3>
      <pre>
        <code>
{`SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;`}
        </code>
      </pre>

      <h3>3. RIGHT JOIN</h3>
      <pre>
        <code>
{`SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
FROM Orders
RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
ORDER BY Orders.OrderID;`}
        </code>
      </pre>

      <h3>4. FULL OUTER JOIN (Illustrative - syntax varies by DB)</h3>
      <pre>
        <code>
{`SELECT CustomerName, OrderID
FROM Customers
FULL OUTER JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY CustomerName;`}
        </code>
      </pre>

      <h3>5. CROSS JOIN</h3>
      <pre>
        <code>
{`SELECT Customers.CustomerName, Products.ProductName
FROM Customers
CROSS JOIN Products;`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>🎯 Use Explicit JOIN Syntax
          <ul>
            <li>Always use `INNER JOIN`, `LEFT JOIN`, etc., instead of the old-style comma-separated joins in the `FROM` clause</li>
          </ul>
        </li>
        <li>🔑 Specify Join Conditions Clearly
          <ul>
            <li>Use the `ON` clause to define the join condition explicitly</li>
          </ul>
        </li>
        <li>📊 Use Table Aliases
          <ul>
            <li>Assign short aliases to table names to make queries more readable, especially with multiple joins</li>
          </ul>
        </li>
        <li>📈 Be Mindful of Performance
          <ul>
            <li>Joins can be resource-intensive; ensure appropriate indexes are in place on join columns</li>
          </ul>
        </li>
        <li>🔒 Filter Early
          <ul>
            <li>Apply `WHERE` clause filters as early as possible to reduce the number of rows being joined</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>📊 Retrieving Related Data
          <ul>
            <li>Getting customer information along with their orders</li>
            <li>Joining product details with inventory levels</li>
          </ul>
        </li>
        <li>🔑 Reporting
          <ul>
            <li>Generating reports that combine data from various related entities</li>
          </ul>
        </li>
        <li>🔍 Data Analysis
          <ul>
            <li>Analyzing relationships between different datasets</li>
          </ul>
        </li>
        <li>🔄 Data Integration
          <ul>
            <li>Combining data from different source tables</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Mastering SQL Joins</h2>
      <div style={{ marginBottom: "1em" }}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Mastering SQL Joins Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <h3>Navigation</h3>
      <ul>
        <li><Link to="/sql"><p>Back to SQL Overview</p></Link></li>
      </ul>
    </div>
  );
} 