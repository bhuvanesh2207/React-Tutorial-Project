import React from 'react';
import { Link } from 'react-router-dom';

export default function ContinuingOurJourneyWithSQLStringFunctions() {
  return (
    <div className="java-container">
      <h1>Continuing Our Journey with SQL String Functions</h1>
      
      <p>
        Beyond simple concatenation, SQL offers a variety of string functions to manipulate and transform text data. These functions are essential for tasks like formatting output, extracting substrings, searching for patterns, and converting case.
      </p>

      <h2>📋 Key Concepts</h2>
      <ul>
        <li>🔍 Substring Extraction
          <ul>
            <li>`SUBSTRING()` or `SUBSTR()`</li>
            <li>Extracting a portion of a string</li>
            <li>Specifying start position and length</li>
          </ul>
        </li>
        <li>📏 String Length
          <ul>
            <li>`LENGTH()` or `LEN()`</li>
            <li>Getting the number of characters in a string</li>
            <li>Useful for validation and formatting</li>
          </ul>
        </li>
        <li>🔄 Case Conversion
          <ul>
            <li>`UPPER()` and `LOWER()`</li>
            <li>Converting strings to uppercase or lowercase</li>
            <li>Standardizing text data</li>
          </ul>
        *</li>
        <li>🗑️ Trimming Whitespace
          <ul>
            <li>`TRIM()`, `LTRIM()`, `RTRIM()`</li>
            <li>Removing leading, trailing, or both leading/trailing spaces</li>
            <li>Cleaning up input data</li>
          </ul>
        </li>
        <li>🔁 String Replacement
          <ul>
            <li>`REPLACE()`</li>
            <li>Substituting occurrences of a substring with another string</li>
            <li>Data cleansing and transformation</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>

      <h3>1. Extracting Substring</h3>
      <pre>
        <code>
{`SELECT SUBSTRING('SQL Functions', 5, 9);
-- Result: 'Functions'`}
        </code>
      </pre>

      <h3>2. Getting String Length</h3>
      <pre>
        <code>
{`SELECT LENGTH('Database');
-- Result: 8`}
        </code>
      </pre>

      <h3>3. Converting Case</h3>
      <pre>
        <code>
{`SELECT UPPER('hello world');
-- Result: 'HELLO WORLD'

SELECT LOWER('HELLO WORLD');
-- Result: 'hello world'`}
        </code>
      </pre>

      <h3>4. Trimming Whitespace</h3>
      <pre>
        <code>
{`SELECT TRIM('   Trim Me   ');
-- Result: 'Trim Me'`}
        </code>
      </pre>

      <h3>5. Replacing Substring</h3>
      <pre>
        <code>
{`SELECT REPLACE('SQL is fun', 'fun', 'powerful');
-- Result: 'SQL is powerful'`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>🎯 Understand Your SQL Dialect
          <ul>
            <li>Function names and syntax can vary (e.g., `SUBSTRING` vs. `SUBSTR`)</li>
          </ul>
        </li>
        <li>🔒 Handle NULLs
          <ul>
            <li>Be aware of how string functions handle `NULL` inputs; use `COALESCE` if necessary</li>
          </ul>
        </li>
        <li>📈 Consider Performance
          <ul>
            <li>Complex string manipulations on large datasets can impact query performance</li>
          </ul>
        </li>
        <li>📊 Test Thoroughly
          <ul>
            <li>Verify the output of string functions with various inputs</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>📊 Data Formatting
          <ul>
            <li>Presenting data in a specific format for reports or displays</li>
          </ul>
        </li>
        <li>🔍 Data Cleansing
          <ul>
            <li>Removing unwanted characters or whitespace from text fields</li>
          </ul>
        </li>
        <li>🔑 Data Validation
          <ul>
            <li>Checking string length or format</li>
          </ul>
        </li>
        <li>🔄 Text Analysis
          <ul>
            <li>Extracting keywords or patterns from text data</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: SQL String Functions</h2>
      <div style={{ marginBottom: "1em" }}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="SQL String Functions Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <Link to="/sql"><p>Back to SQL Overview</p></Link>
    </div>
  );
} 