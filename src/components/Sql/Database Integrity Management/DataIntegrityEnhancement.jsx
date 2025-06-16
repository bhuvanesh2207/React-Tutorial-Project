import React from 'react';
import { Link } from 'react-router-dom';

export default function DataIntegrityEnhancement() {
  return (
    <>
      <div className="java-container">
        <h2>Enhancing Data Integrity Beyond Basic Constraints</h2>
        <p>
          While basic constraints like PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, and NOT NULL are fundamental for data integrity, SQL offers additional mechanisms to further enhance the accuracy and consistency of your data. These include triggers, stored procedures, and assertions (though assertions are not widely supported). Utilizing these advanced features allows for more complex integrity rules and automated data validation logic directly within the database.
        </p>

        <h3>📚 Advanced Integrity Mechanisms</h3>
        <ul>
          <li><strong>Triggers:</strong> Stored procedures that are automatically executed or fired when a specific event occurs in the database, such as an INSERT, UPDATE, or DELETE operation on a table. Triggers can be used to maintain complex relationships, audit data changes, or enforce business rules that cannot be handled by simple constraints.</li>
          <li><strong>Stored Procedures:</strong> Precompiled collections of SQL statements stored in the database. While not solely for integrity, they can encapsulate complex validation logic that is executed whenever data is modified, ensuring consistency across different applications accessing the database.</li>
          <li><strong>Assertions (Less Common):</strong> Database objects that define constraints that can involve multiple tables or attributes, unlike CHECK constraints which typically apply to a single table or column. Assertions are part of the SQL standard but are not implemented in many popular database systems.</li>
        </ul>

        <h3>✨ Using Triggers for Data Integrity</h3>
        <p>
          Triggers provide a powerful way to react to data modifications and enforce custom integrity rules. They can be defined to execute *BEFORE* or *AFTER* the triggering event.
        </p>

        <h3>📝 Sample Illustration: Using a Trigger for Stock Management</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Example: Trigger to update total stock quantity after an order item is inserted
CREATE TRIGGER UpdateStockAfterOrderItemInsert
AFTER INSERT ON OrderItems
FOR EACH ROW
BEGIN
    UPDATE Products
    SET StockQuantity = StockQuantity - NEW.Quantity
    WHERE ProductID = NEW.ProductID;
END;

-- Example: Trigger to prevent a product from being deleted if it's in an active order
CREATE TRIGGER PreventProductDeletionIfOrdered
BEFORE DELETE ON Products
FOR EACH ROW
BEGIN
    DECLARE order_count INT;
    SELECT COUNT(*) INTO order_count
    FROM OrderItems
    WHERE ProductID = OLD.ProductID;

    IF order_count > 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Cannot delete product; it exists in active orders.';
    END IF;
END;
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Advanced Integrity</h3>
        <ul>
          <li>Use Triggers Sparingly: While powerful, too many triggers can make database behavior complex and difficult to debug. Use them for logic that truly belongs at the database level.</li>
          <li>Document Triggers and Stored Procedures: Clearly document the purpose and logic of your triggers and stored procedures.</li>
          <li>Test Thoroughly: Test your triggers and stored procedures rigorously to ensure they behave as expected under various scenarios.</li>
          <li>Consider Performance: Triggers can impact database performance, especially on tables with high transaction volume. Design them efficiently.</li>
        </ul>

        <h3>📝 Real-World Applications of Advanced Integrity</h3>
        <ul>
          <li>Auditing: Recording changes to sensitive data in audit tables.</li>
          <li>Complex Business Rules: Enforcing rules that depend on data in multiple tables or require procedural logic.</li>
          <li>Data Synchronization: Keeping data consistent across redundant tables.</li>
          <li>Automated Notifications: Sending alerts based on data changes.</li>
        </ul>

        <h3>🎥 Video Tutorial: SQL Triggers and Procedures</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="SQL Triggers and Procedures Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
          <small>
            Source: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Example Video Source</a>
          </small>
        </div>
      </div>
      <h2>📚 sub Topics</h2>
      <ul>
        <li><Link to="/DatabaseIntegrityManagement"><p>Back to Database Integrity Management</p></Link></li>
      </ul>
    </>
  );
}
