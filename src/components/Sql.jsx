import React from 'react';
import sql_logo from "../images/sql_logo.png";
import { Link } from "react-router-dom";

export default function Sql() {
  return (
    <>
      <div className="java-container">
        <h2>SQL</h2>
        <p>
          SQL (Structured Query Language) is a domain-specific language used in programming and designed for managing and manipulating relational databases. 
          It allows you to access and manipulate data efficiently and is a core part of backend development, data analysis, and database administration.
        </p>

        <img src={sql_logo} alt="SQL Logo" style={{ width: "150px", margin: "20px 0" }} />

        <h3>Why Learn SQL?</h3>
        <p>
          SQL is the foundation of data interaction. Whether you're building applications, analyzing datasets, or managing databases, SQL plays a vital role. 
          It's used by companies like Facebook, Netflix, Google, and Amazon to manage massive volumes of data.
        </p>

        <h3>Popular SQL Applications</h3>
        <ul>
          <li>Data Analysis & Reporting</li>
          <li>Backend Development</li>
          <li>Database Administration</li>
          <li>Business Intelligence Tools</li>
          <li>ETL Processes & Data Warehousing</li>
        </ul>

        <h3>Prerequisites</h3>
        <ul>
          <li>Basic understanding of data and tables</li>
          <li>No prior coding experience required (for beginners' track)</li>
        </ul>

        <h3>Tools You'll Work With</h3>
        <ul>
          <li>MySQL, PostgreSQL, SQLite, Oracle DB</li>
          <li>MySQL Workbench, DBeaver, phpMyAdmin</li>
          <li>Command Line and GUI-based clients</li>
        </ul>

        <h3>Key Features of SQL</h3>
        <ul>
          <li>Easy to Learn Syntax</li>
          <li>Data Retrieval, Insertion, Update, and Deletion</li>
          <li>Data Filtering, Grouping, and Sorting</li>
          <li>Joins, Subqueries, and Transactions</li>
          <li>Used in Almost Every Industry</li>
        </ul>

        <h3>Course Outline</h3>
        <ul>
          <li><Link to="/DBMSAndSQLOverview">DBMS and SQL Overview</Link></li>
          <li><Link to="/DatabaseIntegrityManagement">Database Integrity Management</Link></li>
          <li><Link to="/DatabaseSchemaDesign">Database Schema Design</Link></li>
          <li><Link to="/CommandingSQL">SQL Commands</Link></li>
          <li><Link to="/IntroductiontoSQLFunctions">SQL Functions</Link></li>
          <li><Link to="/OracleSQLFunctions">SQL in Oracle</Link></li>
          <li><Link to="/IntroductiontoOperators">SQL Operators</Link></li>
          <li><Link to="/StructuringDatawithSQL">Structuring Data with SQL</Link></li>
        </ul>

        <h3>Who Should Learn SQL?</h3>
        <ul>
          <li>Beginners aiming for roles in data or backend development</li>
          <li>Students preparing for exams or tech interviews</li>
          <li>Working professionals managing or querying databases</li>
          <li>Anyone who wants to understand data better</li>
        </ul>

        <h3>Did you know?</h3>
        <p>
          Over 95% of companies use SQL in some form — from startups to tech giants!
        </p>
      </div>
    </>
  );
}
