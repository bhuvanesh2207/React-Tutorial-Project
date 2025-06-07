import React from 'react';
import { Link } from 'react-router-dom';

export default function CommonTableExpressionsInSQL() {
  return (
    <div className="java-container">
      <h1>Common Table Expressions (CTEs) in SQL</h1>
      
      <p>
        Common Table Expressions (CTEs) are temporary named result sets that you can reference within a single SQL statement (SELECT, INSERT, UPDATE, DELETE, or MERGE). They help in breaking down complex queries into simpler, more readable parts and can be non-recursive or recursive.
      </p>

      <h2>📋 Key Concepts</h2>
      <ul>
        <li>📝 Syntax
          <ul>
            <li>Starts with `WITH` keyword</li>
            <li>Followed by the CTE name and column list (optional)</li>
            <li>Defined by a `SELECT` statement within parentheses</li>
            <li>Multiple CTEs can be defined, separated by commas</li>
          </ul>
        </li>
        <li>💡 Benefits
          <ul>
            <li>Improves readability and maintainability of complex queries</li>
            <li>Allows for recursive queries</li>
            <li>Can be referenced multiple times within the same statement</li>
            <li>Helps in organizing complex logic</li>
          </ul>
        </li>
        <li>🔄 Non-Recursive CTEs
          <ul>
            <li>Simple CTEs that do not reference themselves</li>
            <li>Used for breaking down queries or creating temporary views</li>
          </ul>
        </li>
        <li>🌳 Recursive CTEs
          <ul>
            <li>CTEs that reference themselves</li>
            <li>Used for querying hierarchical data (e.g., organizational charts, Bill of Materials)</li>
            <li>Requires an anchor member and a recursive member</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>

      <h3>1. Simple Non-Recursive CTE</h3>
      <pre>
        <code>
{`WITH RegionalSales AS (
    SELECT Region, SUM(SalesAmount) AS TotalSales
    FROM Orders
    GROUP BY Region
)
SELECT Region, TotalSales
FROM RegionalSales
WHERE TotalSales > 100000;`}
        </code>
      </pre>

      <h3>2. Multiple CTEs</h3>
      <pre>
        <code>
{`WITH HighValueCustomers AS (
    SELECT CustomerID, SUM(OrderTotal) AS TotalSpent
    FROM Orders
    GROUP BY CustomerID
    HAVING SUM(OrderTotal) > 5000
),
CustomerAddresses AS (
    SELECT CustomerID, City, Country
    FROM Customers
)
SELECT hvc.CustomerID, ca.City, ca.Country, hvc.TotalSpent
FROM HighValueCustomers hvc
JOIN CustomerAddresses ca ON hvc.CustomerID = ca.CustomerID;`}
        </code>
      </pre>

      <h3>3. Recursive CTE (Illustrative Example: Employee Hierarchy)</h3>
      <pre>
        <code>
{`WITH EmployeeHierarchy (EmployeeID, EmployeeName, ManagerID, Level)
AS (
    -- Anchor member
    SELECT EmployeeID, EmployeeName, ManagerID, 1
    FROM Employees
    WHERE ManagerID IS NULL
    
    UNION ALL
    
    -- Recursive member
    SELECT e.EmployeeID, e.EmployeeName, e.ManagerID, eh.Level + 1
    FROM Employees e
    JOIN EmployeeHierarchy eh ON e.ManagerID = eh.EmployeeID
)
SELECT EmployeeID, EmployeeName, ManagerID, Level
FROM EmployeeHierarchy
ORDER BY Level;`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>📈 Use CTEs for Readability
          <ul>
            <li>Break down complex logic into smaller, named steps using CTEs</li>
          </ul>
        </li>
        <li>🔑 Name CTEs and Columns Clearly
          <ul>
            <li>Use descriptive names for your CTEs and their columns</li>
          </ul>
        </li>
        <li>📊 Avoid Unnecessary CTEs
          <ul>
            <li>For very simple subqueries, a CTE might be overkill</li>
          </ul>
        </li>
        <li>🌳 Be Cautious with Recursive CTEs
          <ul>
            <li>Ensure your recursive CTE has a termination condition to prevent infinite loops</li>
            <li>Recursive CTEs can be resource-intensive; optimize where possible</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>📊 Hierarchical Data Queries
          <ul>
            <li>Navigating organizational structures, product categories, or threaded discussions</li>
          </ul>
        </li>
        <li>📈 Simplifying Complex Calculations
          <ul>
            <li>Performing multi-step calculations where the result of one step is needed for the next</li>
          </ul>
        </li>
        <li>🔍 Improving Query Performance (in some cases)
          <ul>
            <li>While not always faster, CTEs can sometimes allow the query optimizer to create a more efficient plan</li>
          </ul>
        </li>
        <li>🔄 Generating Series
          <ul>
            <li>Creating sequences of numbers or dates</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Common Table Expressions (CTEs)</h2>
      <div style={{ marginBottom: "1em" }}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Common Table Expressions (CTEs) Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
    </div>
  );
} 