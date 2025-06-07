import React from 'react';
import { Link } from 'react-router-dom';

export default function IntroductiontoOperators() {
  return (
    <>
      <div className="java-container">
        <h2>Introduction to SQL Operators</h2>
        <p>
          SQL operators are special keywords or characters used in SQL statements to perform operations on data. These operations can include comparisons, arithmetic calculations, logical evaluations, and more. Operators are fundamental to constructing meaningful queries, filtering data, joining tables, and performing various data manipulations. Understanding the different types of SQL operators and how to use them is crucial for writing effective and precise SQL code.
        </p>

        <h3>📚 Types of SQL Operators</h3>
        <ul>
          <li><strong>Arithmetic Operators:</strong> Perform mathematical operations (e.g., +, -, *, /).</li>
          <li><strong>Comparison Operators:</strong> Compare two values (e.g., =, !=, &gt;, , &gt;=, &lt;

=).</li>
          <li><strong>Logical Operators:</strong> Combine or negate conditions (e.g., AND, OR, NOT).</li>
          <li><strong>Bitwise Operators:</strong> Perform operations on individual bits (database system dependent).</li>
          <li><strong>Compound Operators:</strong> Combine assignment with other operations (database system dependent).</li>
          <li><strong>Other Operators:</strong> Including special operators like LIKE, IN, BETWEEN, IS NULL, etc.</li>
        </ul>

        <h3>✨ Basic Usage Examples</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Arithmetic Operator
SELECT salary * 1.10 AS salary_with_bonus FROM employees;

-- Comparison Operator
SELECT product_name FROM products WHERE price > 50;

-- Logical Operator (AND)
SELECT employee_name FROM employees WHERE department = 'Sales' AND salary > 60000;

-- Logical Operator (OR)
SELECT customer_name FROM customers WHERE city = 'New York' OR city = 'Los Angeles';

-- Logical Operator (NOT)
SELECT order_id FROM orders WHERE NOT status = 'Shipped';
`}
          </code>
        </pre>

        <h3>📝 Operator Precedence</h3>
        <p>
          Just like in mathematics, SQL operators have a defined order of precedence. Operators with higher precedence are evaluated before operators with lower precedence. You can use parentheses <code>()</code> to override the default operator precedence and specify the order of evaluation.
        </p>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Example demonstrating precedence
SELECT 10 + 5 * 2;  -- Result is 20 (multiplication before addition)

-- Using parentheses to override precedence
SELECT (10 + 5) * 2; -- Result is 30 (addition before multiplication)
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Using Operators</h3>
        <ul>
          <li>Use parentheses to make the order of operations explicit, especially in complex expressions.</li>
          <li>Be mindful of data type conversions when using operators, as implicit conversions can sometimes lead to unexpected results.</li>
          <li>Choose the most appropriate operator for the task.</li>
          <li>Understand the specific behavior of operators in your database system, as there might be slight variations.</li>
          <li>Test your queries with different data to ensure operators behave as expected.</li>
        </ul>

        <h3>📝 Real-World Applications</h3>
        <ul>
          <li>Filtering data based on multiple criteria.</li>
          <li>Performing calculations for reports and analysis.</li>
          <li>Comparing values across different columns or tables.</li>
          <li>Implementing conditional logic in WHERE or CASE clauses.</li>
          <li>Combining conditions in complex queries.</li>
        </ul>

        <h3>🎥 Video Tutorial: Introduction to SQL Operators</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Introduction to SQL Operators Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
          <small>
            Source: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Example Video Source</a>
          </small>
        </div>
      </div>
      <ul>
        <li><Link to="/BetweenAndOperator">BetweenAndOperator</Link></li>
        <li><Link to="/BeyondSymbolicOperators">BeyondSymbolicOperators</Link></li>
        <li><Link to="/DataRetrievalinSQLUsingLimitandOffset">DataRetrievalinSQLUsingLimitandOffset</Link></li>
        <li><Link to="/DISTINCTandUNIQUEKeywordsinSQL">DISTINCTandUNIQUEKeywordsinSQL</Link></li>
        <li><Link to="/ExploringSQLsLIKEandNOTLIKEOperators">ExploringSQLsLIKEandNOTLIKEOperators</Link></li>
        <li><Link to="/ExploringtheSQLINKeywordOperator">ExploringtheSQLINKeywordOperator</Link></li>
        <li><Link to="/ISNULLandISNOTNULLOperatorsinSQL">ISNULLandISNOTNULLOperatorsinSQL</Link></li>
        <li><Link to="/RelationalOperators">RelationalOperators</Link></li>
      </ul>

    </>
  );
}
