import React from 'react';
import { Link } from 'react-router-dom';

export default function SQLConstraints() {
  return (
    <>
      <div className="java-container">
        <h2>SQL Constraints: Enforcing Data Integrity Rules</h2>
        <p>
          SQL constraints are rules enforced on data columns in a table. They are used to limit the type of data that can go into a table, ensuring the accuracy and reliability of the data in the database. Constraints can be column level or table level. Column level constraints apply only to a single column, while table level constraints apply to the whole table and can involve more than one column.
        </p>

        <h3>📚 Common SQL Constraints</h3>
        <ul>
          <li><strong>NOT NULL:</strong> Ensures that a column cannot have a NULL value. This is crucial when a column must always contain a value.</li>
          <li><strong>UNIQUE:</strong> Ensures that all values in a column are different. This prevents duplicate entries in a column. A table can have multiple UNIQUE constraints.</li>
          <li><strong>PRIMARY KEY:</strong> A combination of a NOT NULL and UNIQUE constraint. It uniquely identifies each row in a table. Each table should have one primary key.</li>
          <li><strong>FOREIGN KEY:</strong> Uniquely identifies a row/record in another table. It is used to link two tables together and enforce referential integrity, ensuring that relationships between data in different tables are valid.</li>
          <li><strong>CHECK:</strong> Ensures that all values in a column satisfy a specific condition. This is used to limit the range of values that can be placed in a column.</li>
          <li><strong>DEFAULT:</strong> Sets a default value for a column when no value is specified during an INSERT operation.</li>
          <li><strong>INDEX:</strong> Used to create indexes on columns to retrieve data from the database more quickly. While not strictly an integrity constraint in the sense of validation, it is often discussed alongside constraints as it impacts data management.</li>
        </ul>

        <h3>✨ Defining Constraints</h3>
        <p>
          Constraints can be defined when the table is created using the `CREATE TABLE` statement or added to an existing table using the `ALTER TABLE` statement.
        </p>

        <h3>📝 Sample Illustrations: Applying Constraints</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Creating a table with various constraints
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY, -- Primary Key constraint
    FirstName VARCHAR(50) NOT NULL, -- Not Null constraint
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE, -- Unique constraint
    Age INT CHECK (Age >= 18), -- Check constraint
    HireDate DATE DEFAULT CURRENT_DATE, -- Default constraint
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID) -- Foreign Key constraint
);

-- Adding a CHECK constraint to an existing table
ALTER TABLE Products
ADD CONSTRAINT chk_Price CHECK (Price > 0);

-- Adding a UNIQUE constraint to an existing column
ALTER TABLE Customers
ADD CONSTRAINT uc_CustomerEmail UNIQUE (Email);
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Using Constraints</h3>
        <ul>
          <li>Define Constraints During Table Creation: It's generally easier and clearer to define most constraints when you initially create the table.</li>
          <li>Use Descriptive Constraint Names: Give your constraints meaningful names, especially for table-level constraints, to make them easier to identify and manage.</li>
          <li>Understand the Difference Between Column and Table Level: Know when to apply a constraint at the column level (single column) versus the table level (multiple columns or the entire table).</li>
          <li>Leverage Constraints for Validation: Use constraints as much as possible to enforce data validation at the database level rather than relying solely on application code.</li>
          <li>Document Your Constraints: Keep a record of the constraints defined in your database schema.</li>
        </ul>

        <h3>📝 Real-World Applications of SQL Constraints</h3>
        <ul>
          <li>Ensuring every user has a unique username or email address.</li>
          <li>Preventing orders from being placed for non-existent products or customers.</li>
          <li>Ensuring that age or salary values fall within a reasonable range.</li>
          <li>Automatically assigning a registration date if one is not provided.</li>
          <li>Maintaining unique product codes or inventory item identifiers.</li>
        </ul>

        <h3>🎥 Video Tutorial: SQL Constraints</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="SQL Constraints Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
          <small>
            Source: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Example Video Source</a>
          </small>
        </div>
      </div>
      <Link to="/DatabaseIntegrityManagement"><p>Back to Database Integrity Management</p></Link>
    </>
  );
}
