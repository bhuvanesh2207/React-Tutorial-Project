import React from 'react';
import { Link } from 'react-router-dom';

export default function ExploringSQLsLIKEandNOTLIKEOperators() {
  return (
    <>
      <div className="java-container">
        <h2>Exploring SQL's LIKE and NOT LIKE Operators</h2>
        <p>
          The <code>LIKE</code> operator in SQL is used to search for a specified pattern in a column. It is commonly used in the <code>WHERE</code> clause to filter string data based on partial matches. The <code>NOT LIKE</code> operator does the opposite, searching for values that do *not* match the specified pattern. These operators are particularly useful when you need to find data without knowing the exact value, such as searching for names starting with a specific letter or email addresses containing a certain domain.
        </p>

        <h3>📚 Purpose and Wildcard Characters</h3>
        <p>
          The <code>LIKE</code> operator uses wildcard characters to define the pattern to search for:
        </p>
        <ul>
          <li><strong><code>%</code> (percent sign):</strong> Represents zero or more characters.</li>
          <li><strong><code>_</code> (underscore):</strong> Represents exactly one single character.</li>
        </ul>

        <h3>✨ Basic Usage Examples of LIKE</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Find customers whose name starts with 'A'
SELECT customer_name FROM customers WHERE customer_name LIKE 'A%';

-- Find products whose name ends with 'a'
SELECT product_name FROM products WHERE product_name LIKE '%a';

-- Find employees whose name has 'an' anywhere in it
SELECT employee_name FROM employees WHERE employee_name LIKE '%an%';

-- Find phone numbers with exactly 7 digits
SELECT phone_number FROM contacts WHERE phone_number LIKE '_______'; -- 7 underscores

-- Find postal codes in the format 'A1B 2C3'
SELECT postal_code FROM addresses WHERE postal_code LIKE '_ _ _'; -- underscore space underscore space underscore
`}
          </code>
        </pre>

        <h3>📝 Usage Examples of NOT LIKE</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Find customers whose name does NOT start with 'A'
SELECT customer_name FROM customers WHERE customer_name NOT LIKE 'A%';

-- Find products whose name does NOT end with 'a'
SELECT product_name FROM products WHERE product_name NOT LIKE '%a';

-- Find employees whose name does NOT have 'an' anywhere in it
SELECT employee_name FROM employees WHERE employee_name NOT LIKE '%an%';
`}
          </code>
        </pre>

        <h3>🔍 Escaping Wildcard Characters</h3>
        <p>
          If your pattern needs to include the literal characters <code>%</code> or <code>_</code>, you can escape them using an escape character (often <code>\</code> or defined with the <code>ESCAPE</code> clause).
        </p>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Find values containing a literal % sign (using default escape character \\)
SELECT file_name FROM documents WHERE file_name LIKE '%\\%%';

-- Find values containing a literal _ underscore (using default escape character \\)
SELECT code FROM items WHERE code LIKE '%\\_%';

-- Specifying a different escape character
SELECT description FROM products WHERE description LIKE '%!_%' ESCAPE '!'; -- Using ! as escape character
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Using LIKE and NOT LIKE</h3>
        <ul>
          <li>Use <code>%</code> and <code>_</code> appropriately to define your patterns.</li>
          <li>Be mindful of performance when using <code>LIKE</code> with a leading wildcard (e.g., <code>LIKE '%pattern'</code>), as it often prevents the use of indexes.</li>
          <li>Use the <code>ESCAPE</code> clause when searching for literal wildcard characters.</li>
          <li>Combine <code>LIKE</code> with other operators and clauses for more complex filtering.</li>
          <li>Consider full-text search solutions for very complex text pattern matching needs.</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Searching for names, addresses, or product descriptions containing specific words or phrases.</li>
          <li>Filtering email addresses by domain.</li>
          <li>Finding files with certain extensions or naming conventions.</li>
          <li>Data validation to check if input matches a required format.</li>
          <li>Implementing simple search functionalities in applications.</li>
        </ul>

        <h3>🎥 Video Tutorial: SQL LIKE Operator</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="SQL LIKE Operator Tutorial"
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
