import React from 'react';
import { Link } from 'react-router-dom';

export default function ContinuingwithMySQLStringFunctions() {
  return (
    <>
      <div className="java-container">
        <h2>Continuing with MySQL String Functions</h2>
        <p>
          MySQL provides a rich set of string functions that allow you to manipulate and process text data efficiently. These functions are essential for data cleaning, formatting, and transformation tasks. Let's explore some of the most commonly used MySQL string functions and their applications.
        </p>

        <h3>📚 Advanced MySQL String Functions</h3>
        <ul>
          <li><strong>REPLACE:</strong> Replaces all occurrences of a substring within a string</li>
          <li><strong>REVERSE:</strong> Reverses the characters in a string</li>
          <li><strong>REPEAT:</strong> Repeats a string a specified number of times</li>
          <li><strong>SPACE:</strong> Returns a string of specified number of spaces</li>
          <li><strong>TRIM:</strong> Removes leading and trailing spaces or specified characters</li>
          <li><strong>LTRIM/RTRIM:</strong> Removes leading/trailing spaces respectively</li>
          <li><strong>POSITION:</strong> Returns the position of a substring within a string</li>
          <li><strong>LOCATE:</strong> Similar to POSITION, but with additional parameters</li>
        </ul>

        <h3>✨ Function Examples and Usage</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- REPLACE: Replace all occurrences of a substring
SELECT REPLACE('Hello World', 'World', 'MySQL') AS result;
-- Result: 'Hello MySQL'

-- REVERSE: Reverse a string
SELECT REVERSE('MySQL') AS result;
-- Result: 'LQSyM'

-- REPEAT: Repeat a string
SELECT REPEAT('Ha', 3) AS result;
-- Result: 'HaHaHa'

-- SPACE: Generate spaces
SELECT CONCAT('Hello', SPACE(5), 'World') AS result;
-- Result: 'Hello     World'

-- TRIM: Remove leading and trailing spaces
SELECT TRIM('  Hello World  ') AS result;
-- Result: 'Hello World'

-- LTRIM/RTRIM: Remove leading/trailing spaces
SELECT LTRIM('  Hello') AS result;
-- Result: 'Hello'
SELECT RTRIM('Hello  ') AS result;
-- Result: 'Hello'

-- POSITION: Find position of substring
SELECT POSITION('World' IN 'Hello World') AS result;
-- Result: 7

-- LOCATE: Find position with optional start position
SELECT LOCATE('o', 'Hello World', 5) AS result;
-- Result: 8
`}
          </code>
        </pre>

        <h3>📝 Practical Applications</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Data Cleaning: Remove unwanted characters
SELECT TRIM(BOTH '-' FROM '---Hello---') AS cleaned_text;

-- Formatting: Create a formatted display name
SELECT CONCAT(
    UPPER(LEFT(first_name, 1)),
    LOWER(SUBSTRING(first_name, 2)),
    SPACE(1),
    UPPER(LEFT(last_name, 1)),
    LOWER(SUBSTRING(last_name, 2))
) AS formatted_name
FROM employees;

-- Search and Replace: Update product descriptions
UPDATE products
SET description = REPLACE(description, 'old_brand', 'new_brand')
WHERE description LIKE '%old_brand%';

-- String Analysis: Find position of specific text
SELECT 
    product_name,
    POSITION('Limited' IN product_name) AS limited_position
FROM products
WHERE POSITION('Limited' IN product_name) > 0;
`}
          </code>
        </pre>

        <h3>💡 Best Practices for MySQL String Functions</h3>
        <ul>
          <li>Use Appropriate Functions: Choose the most efficient function for your specific task.</li>
          <li>Consider Performance: String operations can be resource-intensive on large datasets.</li>
          <li>Handle NULL Values: Be aware that most string functions return NULL if any argument is NULL.</li>
          <li>Use Indexes Wisely: Functions in WHERE clauses can prevent the use of indexes.</li>
          <li>Test Edge Cases: Always test functions with various input types and lengths.</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Data Standardization: Using REPLACE and TRIM to standardize text data</li>
          <li>Text Formatting: Using CONCAT and SPACE for consistent text formatting</li>
          <li>Data Validation: Using POSITION and LOCATE to validate text patterns</li>
          <li>Text Analysis: Using various functions to analyze and process text data</li>
          <li>Report Generation: Using string functions to format report output</li>
        </ul>

        <h3>🎥 Video Tutorial: MySQL String Functions</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="MySQL String Functions Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
          <small>
            Source: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Example Video Source</a>
          </small>
        </div>
      </div>
      <Link to="/sql"><p>Back to SQL Overview</p></Link>
    </>
  );
}
