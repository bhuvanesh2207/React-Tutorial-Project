import React from 'react';
import { Link } from 'react-router-dom';

export default function MasteringSubqueriesInSQL() {
  return (
    <div className="java-container">
      <h1>Mastering Subqueries in SQL</h1>
      
      <p>
        Subqueries, also known as nested queries or inner queries, are powerful tools in SQL that allow you to perform complex data retrieval by embedding one query within another. They are used to filter data, provide values for comparisons, or generate derived tables.
      </p>

      <h2>📋 Key Concepts</h2>
      <ul>
        <li>📊 Types of Subqueries
          <ul>
            <li>Single-row subqueries (return one row and one column)</li>
            <li>Multiple-row subqueries (return multiple rows and one column)</li>
            <li>Multiple-column subqueries (return multiple columns and one or more rows)</li>
            <li>Correlated subqueries (depend on the outer query for their execution)</li>
          </ul>
        </li>
        <li>📍 Placement of Subqueries
          <ul>
            <li>In the `WHERE` clause (most common)</li>
            <li>In the `FROM` clause (as a derived table)</li>
            <li>In the `SELECT` clause (as a scalar subquery)</li>
            <li>In the `HAVING` clause</li>
          </ul>
        </li>
        <li>🔑 Operators Used with Subqueries
          <ul>
            <li>Comparison operators (`=`, `!=`, `&lt;`, `&gt;`, `&lt;=`, `&gt;=`)</li>
            <li>Membership operators (`IN`, `NOT IN`)</li>
            <li>Existence operators (`EXISTS`, `NOT EXISTS`)</li>
            <li>Quantified operators (`ANY`, `ALL`, `SOME`)</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>

      <h3>1. Single-Row Subquery in WHERE Clause</h3>
      <pre>
        <code>
{`SELECT ProductName, Price
FROM Products
WHERE Price > (SELECT AVG(Price) FROM Products);`}
        </code>
      </pre>

      <h3>2. Multiple-Row Subquery with IN</h3>
      <pre>
        <code>
{`SELECT CustomerName
FROM Customers
WHERE CustomerID IN (SELECT CustomerID FROM Orders WHERE OrderDate = '2023-01-01');`}
        </code>
      </pre>

      <h3>3. Correlated Subquery</h3>
      <pre>
        <code>
{`SELECT ProductName, Price
FROM Products p1
WHERE Price = (SELECT MAX(Price) FROM Products p2 WHERE p2.CategoryID = p1.CategoryID);`}
        </code>
      </pre>

      <h3>4. Subquery in FROM Clause (Derived Table)</h3>
      <pre>
        <code>
{`SELECT d.DepartmentName, COUNT(e.EmployeeID) AS NumberOfEmployees
FROM (SELECT EmployeeID, DepartmentID FROM Employees) e
JOIN Departments d ON e.DepartmentID = d.DepartmentID
GROUP BY d.DepartmentName;`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>📈 Improve Readability
          <ul>
            <li>Indent subqueries to make them easier to read</li>
            <li>Use meaningful aliases for derived tables</li>
          </ul>
        </li>
        <li>📊 Consider Performance
          <ul>
            <li>Correlated subqueries can sometimes be slow; consider rewriting them as joins if possible</li>
            <li>Ensure subqueries are returning only necessary columns and rows</li>
          </ul>
        </li>
        <li>✅ Test Thoroughly
          <ul>
            <li>Test subqueries independently before embedding them in the main query</li>
          </ul>
        </li>
        <li>📚 Choose the Right Type
          <ul>
            <li>Select the appropriate subquery type and operator based on the problem you're solving</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>🔍 Filtering Data
          <ul>
            <li>Finding records that meet a condition based on an aggregate value or values in another table</li>
          </ul>
        </li>
        <li>📊 Reporting
          <ul>
            <li>Generating reports that require comparing values to averages, maximums, or other calculated values</li>
          </ul>
        </li>
        <li>🔑 Data Validation
          <ul>
            <li>Checking for the existence of related records in other tables</li>
          </ul>
        </li>
        <li>🔄 Data Transformation
          <ul>
            <li>Creating temporary result sets (derived tables) for further processing</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Mastering Subqueries</h2>
      <div style={{ marginBottom: "1em" }}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Mastering Subqueries Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <Link to="/sql"><p>Back to SQL Overview</p></Link>
    </div>
  );
} 