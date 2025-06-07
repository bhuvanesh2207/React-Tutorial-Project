import React from 'react';
import { Link } from 'react-router-dom';

export default function TransactionControlLanguage() {
  return (
    <>
      <div className="java-container">
        <h2>Transaction Control Language (TCL) Commands</h2>
        <p>
          Transaction Control Language (TCL) commands in SQL are used to manage transactions within a database. A transaction is a single logical unit of work, consisting of one or more SQL statements. TCL commands allow you to group these statements together and control their execution to ensure data integrity and consistency.
        </p>

        <h3>📚 Key Concepts in TCL</h3>
        <ul>
          <li><strong>Transaction:</strong> A sequence of one or more SQL statements that are executed as a single, indivisible unit. Either all statements in a transaction are successfully completed (committed), or none of them are (rolled back).</li>
          <li><strong>ACID Properties:</strong> Transactions in a reliable database system adhere to the ACID properties:
            <ul>
              <li><strong>Atomicity:</strong> A transaction is an indivisible unit; it either completes fully or not at all.</li>
              <li><strong>Consistency:</strong> A transaction brings the database from one valid state to another.</li>
              <li><strong>Isolation:</strong> Concurrent transactions do not interfere with each other.</li>
              <li><strong>Durability:</strong> Once a transaction is committed, its changes are permanent, even in case of system failure.</li>
            </ul>
          </li>
          <li><strong>Transaction States:</strong> Transactions typically move through states like Active, Partially Committed, Failed, Aborted, and Committed.</li>
        </ul>

        <h3>📋 Key TCL Commands</h3>
        <ul>
          <li><strong>BEGIN TRANSACTION (or START TRANSACTION):</strong> Initiates a new transaction. All subsequent SQL statements will be part of this transaction until it is committed or rolled back.</li>
          <li><strong>COMMIT:</strong> Saves all the changes made during the current transaction permanently to the database. Once a transaction is committed, it cannot be rolled back.</li>
          <li><strong>ROLLBACK:</strong> Undoes all the changes made during the current transaction since the last `BEGIN TRANSACTION` or `COMMIT`. This is used to revert the database to its state before the transaction started, typically when errors occur.</li>
          <li><strong>SAVEPOINT:</strong> Sets a marker within a transaction to which you can partially roll back. This is useful for complex transactions where you might want to undo only a portion of the changes without affecting earlier parts of the transaction.</li>
        </ul>

        <h3>💻 Code Examples</h3>

        <h3>1. Basic Transaction (BEGIN, COMMIT)</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Start a new transaction
BEGIN TRANSACTION;

-- Perform some DML operations
UPDATE Accounts SET Balance = Balance - 50 WHERE AccountID = 101;
UPDATE Accounts SET Balance = Balance + 50 WHERE AccountID = 102;

-- If all operations are successful, commit the transaction
COMMIT;
`}
          </code>
        </pre>

        <h3>2. Transaction with ROLLBACK</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Start a new transaction
BEGIN TRANSACTION;

-- Perform some DML operations
INSERT INTO Orders (OrderID, CustomerID, OrderDate) VALUES (201, 5, '2023-10-26');
-- Assume an error occurs here, e.g., invalid CustomerID
-- INSERT INTO OrderItems (...) -- This statement fails

-- If an error occurs, roll back the transaction
ROLLBACK;

-- The INSERT INTO Orders statement will be undone, and the database will revert to its state before the BEGIN TRANSACTION.
`}
          </code>
        </pre>

        <h3>3. Transaction with SAVEPOINT</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Start a new transaction
BEGIN TRANSACTION;

-- Perform some operations
INSERT INTO Logs (Message) VALUES ('Starting complex operation');

-- Set a savepoint
SAVEPOINT before_updates;

-- Perform updates
UPDATE Products SET Price = Price * 1.05 WHERE Category = 'Electronics';

-- If something goes wrong with the updates, roll back to the savepoint
-- ROLLBACK TO before_updates;

-- Perform more operations
INSERT INTO Audit (Action) VALUES ('Prices updated');

-- If everything is successful, commit the entire transaction
COMMIT;
`}
          </code>
        </pre>

        <h3>💡 Best Practices for TCL</h3>
        <ul>
          <li>Keep Transactions Short: Long-running transactions can hold locks and impact performance.</li>
          <li>Include Error Handling: Always include error handling mechanisms to decide when to `COMMIT` or `ROLLBACK`.</li>
          <li>Test Transactions: Thoroughly test your transactions to ensure they behave as expected under various scenarios, including errors.</li>
          <li>Understand Auto-Commit: Be aware of your database system's auto-commit behavior, which might automatically commit each statement as a separate transaction. Explicitly use `BEGIN TRANSACTION` for multi-statement transactions.</li>
          <li>Use Appropriate Isolation Levels: Understand and set the appropriate transaction isolation level to control how transactions interact with each other concurrently.</li>
        </ul>

        <h3>📝 Real-World Applications of TCL</h3>
        <ul>
          <li>Banking Systems: Ensuring that a money transfer (debit from one account, credit to another) is completed entirely or not at all.</li>
          <li>E-commerce Platforms: Managing the checkout process, where updating inventory, creating an order, and processing payment must all succeed or fail together.</li>
          <li>Inventory Management: Updating stock levels and recording sales simultaneously.</li>
          <li>Data Migration: Ensuring that a batch of data is transferred completely and accurately.</li>
        </ul>

        <h3>🎥 Video Tutorial: Transaction Control Language (TCL)</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Transaction Control Language (TCL) Tutorial"
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
