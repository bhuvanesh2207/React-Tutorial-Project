import React from 'react';
import { Link } from 'react-router-dom';

export default function MasteringConcat() {
  return (
    <div className="java-container">
      <h1>Mastering CONCAT for Data Concatenation</h1>
      
      <p>
        The `CONCAT` function in SQL is used to concatenate two or more strings together. It's a fundamental function for combining data from different columns or adding static text to results, making data more presentable and useful for reports or displays.
      </p>

      <h2>📋 Key Concepts</h2>
      <ul>
        <li>📝 Syntax
          <ul>
            <li>`CONCAT(string1, string2, ...)`</li>
            <li>Takes multiple string arguments</li>
            <li>Returns a single concatenated string</li>
          </ul>
        </li>
        <li>🔄 Handling NULLs
          <ul>
            <li>Behavior varies by SQL dialect</li>
            <li>Often, `CONCAT` with a `NULL` results in `NULL`</li>
            <li>Use `COALESCE` or `IFNULL` to handle `NULL` values before concatenating</li>
          </ul>
        </li>
        <li>📊 Data Types
          <ul>
            <li>Primarily used with string data types (VARCHAR, TEXT, etc.)</li>
            <li>Implicit conversion may occur for non-string types, but it's safer to explicitly cast</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>

      <h3>1. Concatenating Two Strings</h3>
      <pre>
        <code>
{`SELECT CONCAT('Hello', ' World');
-- Result: 'Hello World'`}
        </code>
      </pre>

      <h3>2. Concatenating Multiple Columns</h3>
      <pre>
        <code>
{`SELECT CONCAT(FirstName, ' ', LastName) AS FullName
FROM Employees;`}
        </code>
      </pre>

      <h3>3. Handling NULL Values with COALESCE</h3>
      <pre>
        <code>
{`SELECT CONCAT(FirstName, ' ', COALESCE(MiddleInitial, ''), ' ', LastName) AS FullName
FROM Customers;`}
        </code>
      </pre>

      <h3>4. Concatenating with Numbers (Implicit Conversion)</h3>
      <pre>
        <code>
{`SELECT CONCAT('Product ID: ', ProductID)
FROM Products;`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>✅ Use Meaningful Aliases
          <ul>
            <li>Assign clear aliases to concatenated columns (e.g., `FullName`)</li>
          </ul>
        </li>
        <li>🔒 Handle NULLs Explicitly
          <ul>
            <li>Always use `COALESCE` or `IFNULL` if columns might contain `NULL` values</li>
          </ul>
        </li>
        <li>📊 Be Mindful of Data Types
          <ul>
            <li>While implicit conversion happens, explicit casting can prevent unexpected results</li>
          </ul>
        </li>
        <li>📈 Consider Performance
          <ul>
            <li>For very large datasets or complex concatenations, evaluate performance implications</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>📊 Reporting
          <ul>
            <li>Creating combined fields like full names, addresses, or product descriptions</li>
          </ul>
        </li>
        <li>✉️ Generating Labels or Messages
          <ul>
            <li>Constructing dynamic strings for emails, reports, or user interfaces</li>
          </ul>
        </li>
        <li>🔑 Data Transformation
          <ul>
            <li>Combining data elements during ETL (Extract, Transform, Load) processes</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Mastering CONCAT</h2>
      <div style={{ marginBottom: "1em" }}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Mastering CONCAT Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <Link to="/sql"><p>Back to SQL Overview</p></Link>
    </div>
  );
} 