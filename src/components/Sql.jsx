import React from 'react'
import sql_logo from "../images/sql_logo.png"

export default function Sql() {
  return (
    <>
      <div className="sql-container">
        <h2>SQL</h2>
        <p>
          SQL (Structured Query Language) is a standard programming language specifically designed for managing and manipulating relational databases. 
          It is used to query, insert, update, and delete data, as well as to create and modify the structure of database systems. 
          SQL is essential for data analysis, backend development, and database administration in a wide variety of applications.
        </p>
        <img src={sql_logo} alt="SQL Logo" />
      </div>
    </>
  )
}
