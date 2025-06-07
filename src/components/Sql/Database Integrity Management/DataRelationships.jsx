import React from 'react';
import { Link } from 'react-router-dom';

export default function DataRelationships() {
  return (
    <>
      <div className="java-container">
        <h2>Understanding Data Relationships in SQL</h2>
        <p>
          Data relationships are the cornerstone of relational databases. They define how data in one table is connected to data in another table. Properly defining and managing these relationships is essential for maintaining data integrity, avoiding redundancy, and enabling efficient querying of related information.
        </p>

        <h3>📚 Types of Data Relationships</h3>
        <ul>
          <li><strong>One-to-One (1:1):</strong> A single record in one table is associated with a single record in another table, and vice versa. This is less common but can be useful for splitting a table with many columns or securing sensitive data.</li>
          <li><strong>One-to-Many (1:N):</strong> A single record in one table is associated with multiple records in another table. This is the most common type of relationship. Examples include one customer having many orders, or one department having many employees.</li>
          <li><strong>Many-to-Many (N:N):</strong> Multiple records in one table are associated with multiple records in another table. This relationship cannot be directly implemented in relational databases and requires an intermediary table (also known as a junction, linking, or associative table). Examples include many students taking many courses, or many products being in many orders.</li>
        </ul>

        <h3>✨ Implementing Relationships with Keys</h3>
        <p>
          Relationships are typically implemented using a combination of primary keys and foreign keys:
        </p>
        <ul>
          <li><strong>Primary Key:</strong> Uniquely identifies each record in a table. It is the 'one' side in a One-to-Many relationship.</li>
          <li><strong>Foreign Key:</strong> A column or set of columns in one table that refers to the primary key in another table. It is the 'many' side in a One-to-Many relationship and establishes the link between the tables.</li>
        </ul>

        <h3>📝 Sample Illustrations: Defining Relationships</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- One-to-One Relationship (Example: splitting user details)
CREATE TABLE Users (
    UserID INT PRIMARY KEY,
    Username VARCHAR(50) NOT NULL UNIQUE,
    Email VARCHAR(100)
);

CREATE TABLE UserProfiles (
    UserID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DateOfBirth DATE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- One-to-Many Relationship (Example: customers and orders)
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(100) NOT NULL
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Many-to-Many Relationship (Example: students and courses)
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    StudentName VARCHAR(100) NOT NULL
);

CREATE TABLE Courses (
    CourseID INT PRIMARY KEY,
    CourseTitle VARCHAR(100) NOT NULL
);

-- Junction table for Many-to-Many relationship
CREATE TABLE StudentCourses (
    StudentCourseID INT PRIMARY KEY, -- Optional: a separate primary key for the junction table
    StudentID INT,
    CourseID INT,
    EnrollmentDate DATE,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);
`}
          </code>
        </pre>

        <h3>💡 Best Practices for Data Relationships</h3>
        <ul>
          <li>Identify Relationships Early: Define the relationships between your entities during the database design phase using Entity-Relationship Diagrams (ERDs).</li>
          <li>Properly Use Primary and Foreign Keys: Implement relationships using appropriate key constraints to enforce referential integrity.</li>
          <li>Normalize Your Database: Design your database schema to reduce redundancy and improve data integrity, which heavily relies on well-defined relationships.</li>
          <li>Understand Join Operations: Once relationships are defined, you'll use JOIN clauses in your SQL queries to combine data from related tables.</li>
          <li>Cascade Options (Use with Caution): Understand and carefully choose the `ON DELETE` and `ON UPDATE` cascade options for foreign keys (e.g., `CASCADE`, `SET NULL`, `RESTRICT`, `NO ACTION`). `CASCADE` can be powerful but also dangerous if not fully understood.</li>
        </ul>

        <h3>📝 Real-World Applications of Data Relationships</h3>
        <ul>
          <li>E-commerce: Linking products to categories, customers to orders, and orders to items.</li>
          <li>Social Networks: Connecting users to posts, users to comments, and users to groups.</li>
          <li>Library Systems: Relating books to authors, books to borrowers, and borrowers to borrowing transactions.</li>
          <li>Project Management: Linking projects to tasks, tasks to team members, and team members to roles.</li>
        </ul>

        <h3>🎥 Video Tutorial: SQL Data Relationships</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="SQL Data Relationships Tutorial"
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
