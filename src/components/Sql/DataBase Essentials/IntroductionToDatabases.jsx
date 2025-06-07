import React from 'react';
import { Link } from 'react-router-dom';

export default function IntroductionToDatabases() {
  return (
    <>
      <div className="java-container">
        <h2>Introduction To Databases</h2>
        <p>
          A database is a structured collection of data, typically stored electronically in a computer system. It is designed to efficiently store, manage, and retrieve large amounts of information. Databases are fundamental to almost all modern software applications, from simple mobile apps to complex enterprise systems and websites. They provide a reliable and organized way to persist data and make it accessible for various purposes.
        </p>

        <h3>📚 Core Concepts of Databases</h3>
        <ul>
          <li><strong>Data:</strong> Raw facts and figures that need to be processed to become meaningful information. Data can exist in various forms, such as text, numbers, images, audio, and video.</li>
          <li><strong>Database Management System (DBMS):</strong> A software system used to create, manage, and interact with databases. A DBMS provides an interface between the user and the database, allowing users to define, query, update, and administer the data. Examples include MySQL, PostgreSQL, Oracle, SQL Server, and MongoDB.</li>
          <li><strong>Table:</strong> A fundamental structure in relational databases used to organize data into rows and columns. Each table typically represents a specific entity, such as customers, products, or orders.</li>
          <li><strong>Row (Record or Tuple):</strong> A single entry or record in a table, representing a specific instance of the entity the table represents. Each row contains values for the columns defined in the table.</li>
          <li><strong>Column (Field or Attribute):</strong> A vertical division of a table that defines a specific attribute or characteristic of the entity. Each column has a name and a defined data type (e.g., integer, text, date).</li>
          <li><strong>Schema:</strong> The logical structure of a database, defining how the data is organized and the relationships between different tables. The schema includes definitions of tables, columns, data types, constraints, and other database objects.</li>
          <li><strong>Query:</strong> A request for data or information from a database. Queries are typically written using a query language like SQL.</li>
          <li><strong>SQL (Structured Query Language):</strong> The standard language for managing and manipulating relational databases. SQL is used to perform tasks such as creating tables, inserting data, retrieving data (querying), updating data, and deleting data.</li>
        </ul>

        <h3>✨ Why Databases Are Important</h3>
        <p>
          Databases are crucial for modern applications due to their ability to efficiently store and manage vast amounts of data. They offer mechanisms for ensuring data integrity and consistency, preventing anomalies and errors. Databases provide robust security features to control access to sensitive information. They enable multiple users or applications to access and modify data concurrently without conflicts. Furthermore, databases are designed for scalability, allowing them to handle increasing volumes of data and user traffic. Their ability to facilitate quick and flexible data retrieval through querying is essential for reporting, analysis, and decision-making. 💡
        </p>

        <h3>📝 Sample Illustration: Structure of a Simple Customer Database</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
// Conceptual structure of a simple Customer database with two tables:

Database: CustomerDB

Table 1: Customers
  - CustomerID (Primary Key, Integer): Unique identifier for each customer
  - FirstName (VARCHAR(255)): Customer's first name
  - LastName (VARCHAR(255)): Customer's last name
  - Email (VARCHAR(255)): Customer's email address (Unique)
  - RegistrationDate (DATE): Date the customer registered

Table 2: Orders
  - OrderID (Primary Key, Integer): Unique identifier for each order
  - CustomerID (Foreign Key, Integer): Links to the Customers table, indicating which customer placed the order
  - OrderDate (DATE): Date the order was placed
  - TotalAmount (DECIMAL(10, 2)): The total amount of the order

Relationship:
  - One-to-Many relationship between Customers and Orders tables
    - One customer can place many orders
    - Many orders can be placed by one customer

Example Data (Illustrative):

Customers Table:
| CustomerID | FirstName | LastName | Email             | RegistrationDate |
|------------|-----------|----------|-------------------|------------------|
| 1          | John      | Doe      | john.doe@email.com| 2022-01-15       |
| 2          | Jane      | Smith    | jane.s@email.com  | 2022-02-20       |

Orders Table:
| OrderID | CustomerID | OrderDate  | TotalAmount |
|---------|------------|------------|-------------|
| 101     | 1          | 2022-03-10 | 55.75       |
| 102     | 1          | 2022-04-05 | 120.00      |
| 103     | 2          | 2022-03-12 | 30.50       |
`}
          </code>
        </pre>

        <h3>🎥 Video Tutorial: Introduction to Databases</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Introduction to Databases Tutorial"
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
