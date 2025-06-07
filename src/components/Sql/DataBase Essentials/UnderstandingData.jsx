import React from 'react';
import { Link } from 'react-router-dom';

export default function UnderstandingData() {
  return (
    <>
      <div className="java-container">
        <h2>Understanding Data in Databases</h2>
        <p>
          Understanding data is the fundamental building block of working with databases. Before you can effectively store, retrieve, and manipulate information, you need to grasp what data is, its various forms, and how it's organized within a database system. This involves recognizing different data types, their properties, and the relationships that can exist between different pieces of information.
        </p>

        <h3>📚 Key Concepts in Understanding Data</h3>
        <ul>
          <li><strong>Data Types:</strong> Categorizing data based on its nature and the kind of values it can hold. Common types include text (strings), numbers (integers, decimals), dates, times, and boolean values. Choosing the correct data type is crucial for efficient storage, data integrity, and performance of queries.</li>
          <li><strong>Data Structures:</strong> Ways of organizing and storing data. In relational databases, data is typically structured in tables with rows and columns. Understanding how data is structured helps in designing efficient databases and writing effective queries.</li>
          <li><strong>Data Relationships:</strong> How different pieces of data relate to each other. Relationships can be one-to-one, one-to-many, or many-to-many, defining how information in one table connects to information in another. Identifying and defining these relationships is key to a well-designed database.</li>
          <li><strong>Data Integrity:</strong> Ensuring the accuracy, consistency, and reliability of data over its entire lifecycle. This is maintained through constraints, validation rules, and proper data handling practices.</li>
          <li><strong>Metadata:</strong> Data about data. Metadata describes the characteristics of data, such as its type, size, format, and source. It helps in understanding and managing the data effectively.</li>
          <li><strong>Null Values:</strong> Representing missing or unknown data. Understanding how NULLs are handled in queries and functions is vital to avoid unexpected results.</li>
        </ul>

        <h3>✨ Why Understanding Data Matters</h3>
        <p>
          A deep understanding of data is essential for several reasons. It directly impacts the design of efficient and robust databases, leading to better performance and scalability. It enables accurate data analysis and reporting by ensuring you are working with reliable and correctly interpreted information. Furthermore, it is crucial for implementing effective data security and privacy measures, protecting sensitive information from unauthorized access or misuse. In essence, a solid foundation in data concepts is indispensable for anyone working with databases. 💡
        </p>

        <h3>📝 Sample Illustration: Describing Data for an Online Store</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
// Example: Describing data for a 'Products' table

Table: Products

Columns:
  - ProductID (Integer): Unique identifier for each product (Primary Key)
  - ProductName (VARCHAR(255)): The name of the product
  - Description (TEXT): A detailed description of the product
  - Price (DECIMAL(10, 2)): The price of the product (e.g., 19.99)
  - StockQuantity (Integer): The number of units available in stock
  - IsAvailable (BOOLEAN): Indicates if the product is currently available
  - CategoryID (Integer): Identifier linking to the 'Categories' table (Foreign Key)
  - CreatedDate (DATE): The date the product was added to the database
  - LastUpdated (DATETIME): The timestamp of the last update

Relationships:
  - One-to-Many with 'Categories' table on CategoryID (Many products belong to one category)
  - One-to-Many with 'OrderItems' table on ProductID (One product can be in many order items)

Constraints:
  - ProductID is a Primary Key (ensures uniqueness and non-nullability)
  - Price and StockQuantity cannot be NULL
  - Price must be greater than 0
  - CategoryID must exist in the 'Categories' table
`}
          </code>
        </pre>

        <h3>🎥 Video Tutorial: Understanding Data Fundamentals</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Understanding Data Fundamentals Tutorial"
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
