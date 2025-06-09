import React from 'react';
import { Link } from 'react-router-dom';

export default function ExpandingOurKnowledgeOfSQLStringFunctions() {
  return (
    <div className="java-container">
      <h1>Expanding Our Knowledge of SQL String Functions</h1>
      
      <p>
        To become proficient in manipulating string data in SQL, it's important to explore more advanced functions that allow for more complex operations, such as searching for specific patterns, padding strings, and extracting parts based on delimiters.
      </p>

      <h2>📋 Key Concepts</h2>
      <ul>
        <li>🔎 Pattern Matching
          <ul>
            <li>`LIKE` operator with wildcards (`%`, `_`)</li>
            <li>Finding strings that match a specific pattern</li>
            <li>Case sensitivity depends on collation</li>
          </ul>
        </li>
        <li>填充字符串
          <ul>
            <li>`LPAD()`, `RPAD()`</li>
            <li>Adding characters to the left or right of a string</li>
            <li>Formatting output to a fixed width</li>
          </ul>
        </li>
        <li>✂️ Substring from Delimiter
          <ul>
            <li>`SUBSTRING_INDEX()` (MySQL) or equivalent</li>
            <li>Extracting a substring based on the occurrence of a delimiter</li>
            <li>Parsing delimited strings</li>
          </ul>
        </li>
        <li>📍 Finding Substring Position
          <ul>
            <li>`INSTR()`, `POSITION()`, `LOCATE()`</li>
            <li>Finding the starting position of a substring within a string</li>
            <li>Useful in conjunction with `SUBSTRING`</li>
          </ul>
        </li>
        <li>↔️ Reversing Strings
          <ul>
            <li>`REVERSE()`</li>
            <li>Reversing the order of characters in a string</li>
            <li>Less common but useful in specific scenarios</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>

      <h3>1. Using LIKE Operator</h3>
      <pre>
        <code>
{`SELECT ProductName
FROM Products
WHERE ProductName LIKE 'A%';
-- Finds products starting with 'A'`}
        </code>
      </pre>

      <h3>2. Padding Strings</h3>
      <pre>
        <code>
{`SELECT LPAD('123', 5, '0');
-- Result: '00123'

SELECT RPAD('abc', 5, '*');
-- Result: 'abc**'`}
        </code>
      </pre>

      <h3>3. Extracting Substring by Delimiter (MySQL)</h3>
      <pre>
        <code>
{`SELECT SUBSTRING_INDEX('apple,banana,orange', ',', 2);
-- Result: 'apple,banana'`}
        </code>
      </pre>

      <h3>4. Finding Substring Position</h3>
      <pre>
        <code>
{`SELECT INSTR('SQL Functions', 'Functions');
-- Result: 5`}
        </code>
      </pre>

      <h3>5. Reversing a String</h3>
      <pre>
        <code>
{`SELECT REVERSE('Database');
-- Result: 'esabataD'`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>🎯 Know Your Wildcards
          <ul>
            <li>Understand the specific wildcards used by your SQL database (`%`, `_`, etc.)</li>
          </ul>
        </li>
        <li>🔒 Be Mindful of Case Sensitivity
          <ul>
            <li>String function behavior regarding case can depend on database collation settings</li>
          </ul>
        </li>
        <li>📈 Test with Edge Cases
          <ul>
            <li>Include empty strings, strings with special characters, and strings with multiple delimiters in your tests</li>
          </ul>
        </li>
        <li>📚 Refer to Documentation
          <ul>
            <li>Consult your specific database's documentation for the exact syntax and behavior of string functions</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>🔍 Searching and Filtering Data
          <ul>
            <li>Finding records based on partial string matches</li>
          </ul>
        </li>
        <li>📊 Data Formatting
          <ul>
            <li>Ensuring consistent string lengths or appearances</li>
          </ul>
        </li>
        <li>🔑 Data Parsing
          <ul>
            <li>Extracting specific pieces of information from structured strings</li>
          </ul>
        </li>
        <li>🔄 Data Validation
          <ul>
            <li>Checking if strings adhere to expected patterns or formats</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: More SQL String Functions</h2>
      <div style={{ marginBottom: "1em" }}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="More SQL String Functions Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
} 