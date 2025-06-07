import React from 'react';
import { Link } from 'react-router-dom';

export default function DatabaseIntegrityManagement() {
  return (
    <>
      <div className="java-container">
        <h2>Database Integrity Management</h2>
        <p>
          Database integrity management is crucial for ensuring the accuracy, consistency, and reliability of the data stored in a database. It involves implementing rules and constraints to prevent invalid data from being entered and maintaining the relationships between different pieces of data. Proper integrity management helps in making informed decisions based on trustworthy data and reduces errors in applications that interact with the database.
        </p>

        <h3>📚 Key Aspects of Database Integrity</h3>
        <ul>
          <li><strong>Entity Integrity:</strong> Ensures that each row in a table has a unique identifier (primary key) and that this identifier is not NULL. This guarantees that every record can be uniquely identified and referenced.</li>
          <li><strong>Referential Integrity:</strong> Maintains consistency between related tables by ensuring that relationships between data are valid. This is typically enforced using foreign keys, which link rows in one table to rows in another. It prevents orphaned records (e.g., an order referencing a non-existent customer).</li>
          <li><strong>Domain Integrity:</strong> Ensures that the values in a column are within a defined set of valid values. This is enforced through data types, check constraints, and rules. For example, a date column should only contain valid date values.</li>
          <li><strong>User-Defined Integrity:</strong> Additional rules and constraints specified by the user or application to meet specific business requirements. These can be implemented using triggers, stored procedures, or assertions.</li>
        </ul>

        <h3>✨ Why Database Integrity Matters</h3>
        <p>
          Maintaining database integrity is fundamental for the reliability and usability of your data. Without proper integrity controls, a database can easily become inconsistent and inaccurate, leading to flawed reports, incorrect application behavior, and a loss of trust in the data. Integrity constraints act as guardians, automatically rejecting operations that would violate the defined rules. This not only prevents bad data from entering the system but also simplifies application development by shifting some validation logic to the database level. Ultimately, strong database integrity leads to more robust applications and more reliable information for decision-making. 💡
        </p>

        <h3>📝 Sample Illustration: Enforcing Integrity with Constraints</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Example: Creating a table with Primary Key and Check Constraints (Entity and Domain Integrity)
CREATE TABLE Products (
    ProductID INT PRIMARY KEY, -- Enforces Entity Integrity (unique and not NULL)
    ProductName VARCHAR(255) NOT NULL,
    Price DECIMAL(10, 2),
    StockQuantity INT,
    CONSTRAINT chk_Price CHECK (Price > 0), -- Enforces Domain Integrity (price must be positive)
    CONSTRAINT chk_StockQuantity CHECK (StockQuantity >= 0) -- Enforces Domain Integrity (stock cannot be negative)
);

-- Example: Creating a table with a Foreign Key (Referential Integrity)
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID) -- Enforces Referential Integrity (CustomerID must exist in Customers table)
        ON DELETE CASCADE -- Optional: Deleting a customer deletes their orders
        ON UPDATE NO ACTION -- Optional: Prevent updating CustomerID if orders exist
);

-- Example: Attempting to violate constraints
-- INSERT INTO Products (ProductID, ProductName, Price, StockQuantity) VALUES (101, 'Laptop', -500, 10); -- This will fail due to chk_Price constraint
-- INSERT INTO Orders (OrderID, CustomerID, OrderDate) VALUES (201, 9999, '2023-10-26'); -- This will fail due to the Foreign Key constraint (assuming CustomerID 9999 does not exist)
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Integrity Management</h3>
        <ul>
          <li>Define Constraints at the Database Level: Enforce integrity rules using database constraints (PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, NOT NULL) rather than relying solely on application logic.</li>
          <li>Identify Relationships Early: Clearly define the relationships between your tables during the database design phase.</li>
          <li>Use Appropriate Data Types: Select data types that accurately represent the data and help enforce domain integrity.</li>
          <li>Document Your Integrity Rules: Keep clear documentation of all constraints, triggers, and other integrity mechanisms.</li>
          <li>Test Integrity Constraints: Verify that your constraints are correctly preventing invalid data and maintaining relationships.</li>
        </ul>

        <h3>📝 Real-World Applications of Database Integrity</h3>
        <ul>
          <li>Financial Systems: Ensuring accurate transaction records and account balances.</li>
          <li>Inventory Management: Preventing negative stock levels and ensuring that orders reference valid products.</li>
          <li>Healthcare Systems: Maintaining accurate patient records and relationships between patient data, appointments, and treatments.</li>
          <li>E-commerce: Ensuring that orders are linked to valid customers and products, and that product information is consistent.</li>
        </ul>

        <h3>🎥 Video Tutorial: Database Integrity</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Database Integrity Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
          <small>
            Source: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Example Video Source</a>
          </small>
        </div>
      </div>
      <div>
        <Link to="/DatabaseSchemaDesign"><p>Database Schema Design</p></Link>
        <Link to="/DataIntegrityEnhancement"><p>Data Integrity Enhancement</p></Link>
        <Link to="/DataRelationships"><p>Data Relationships</p></Link>
        <Link to="/SQLAliases"><p>SQL Aliases</p></Link>
        <Link to="/SQLConstraints"><p>SQL Constraints</p></Link>
      </div>
    </>
  );
}
