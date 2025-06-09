import React from 'react';
import sql_logo from "../images/sql_logo.png";
import { Link } from "react-router-dom";

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
          <li><Link to="/DBMSAndSQLOverview"><p>DBMS & SQL Overview</p></Link></li>
          <li><Link to="/IntroductionToDatabases"><p>Introduction To Databases</p></Link></li>
          <li><Link to="/SettingUptheStageforAction"><p>Setting Up the Stage for Action</p></Link></li>
          <li><Link to="/UnderstandingData"><p>Understanding Data</p></Link></li>
          <li><Link to="/DatabaseIntegrityManagement"><p>Database Integrity Management</p></Link></li>
          <li><Link to="/DatabaseSchemaDesign"><p>Database Schema Design</p></Link></li>
          <li><Link to="/DataIntegrityEnhancement"><p>Data Integrity Enhancement</p></Link></li>
          <li><Link to="/DataRelationships"><p>Data Relationships</p></Link></li>
          <li><Link to="/SQLAliases"><p>SQL Aliases</p></Link></li>
          <li><Link to="/SQLConstraints"><p>SQL Constraints</p></Link></li>
          <li><Link to="/CommandingSQL"><p>Commanding SQL</p></Link></li>
          <li><Link to="/DataManipulationLanguage"><p>Data Manipulation Language</p></Link></li>
          <li><Link to="/MasteringDataDefinitionLanguage"><p>Mastering Data Definition Language</p></Link></li>
          <li><Link to="/NavigatingDataControlLanguage"><p>Navigating Data Control Language</p></Link></li>
          <li><Link to="/TransactionControlLanguage"><p>Transaction Control Language</p></Link></li>
          <li><Link to="/IntroductiontoSQLFunctions"><p>Introduction to SQL Functions</p></Link></li>
          <li><Link to="/MasteringConcat"><p>Mastering Concat</p></Link></li>
          <li><Link to="/ContinuingOurJourneyWithSQLStringFunctions"><p>Continuing Our Journey With SQL String Functions</p></Link></li>
          <li><Link to="/ContinuingwithMySQLStringFunctions"><p>Continuing with MySQL String Functions</p></Link></li>
          <li><Link to="/ExpandingOurKnowledgeOfSQLStringFunctions"><p>Expanding Our Knowledge Of SQL String Functions</p></Link></li>
          <li><Link to="/FurtherMasteryOfStringFunctionsInSQL"><p>Further Mastery Of String Functions In SQL</p></Link></li>
          <li><Link to="/MasteringNumberFunctionsInSQL"><p>Mastering Number Functions In SQL</p></Link></li>
          <li><Link to="/DateAndTimeFunctionsInSQL"><p>Date And Time Functions In SQL</p></Link></li>
          <li><Link to="/ControlFlowFunctionsInSQL"><p>Control Flow Functions In SQL</p></Link></li>
          <li><Link to="/MultiRowFunctionsInSQL"><p>Multi Row Functions In SQL</p></Link></li>
          <li><Link to="/SQLinOracle"><p>SQL in Oracle</p></Link></li>
          <li><Link to="/OracleSQLFunctions"><p>Oracle SQL Functions</p></Link></li>
          <li><Link to="/ControlFlowandConversionFunctionsinOracle"><p>Control Flow and Conversion Functions in Oracle</p></Link></li>
          <li><Link to="/TheDualTableinOracle"><p>The Dual Table in Oracle</p></Link></li>
          <li><Link to="/IntroductiontoOperators"><p>Introduction to Operators</p></Link></li>
          <li><Link to="/RelationalOperators"><p>Relational Operators</p></Link></li>
          <li><Link to="/BetweenAndOperator"><p>Between And Operator</p></Link></li>
          <li><Link to="/BeyondSymbolicOperators"><p>Beyond Symbolic Operators</p></Link></li>
          <li><Link to="/DataRetrievalinSQLUsingLimitandOffset"><p>Data Retrieval in SQL Using Limit and Offset</p></Link></li>
          <li><Link to="/DISTINCTandUNIQUEKeywordsinSQL"><p>DISTINCT and UNIQUE Keywords in SQL</p></Link></li>
          <li><Link to="/ExploringSQLsLIKEandNOTLIKEOperators"><p>Exploring SQL's LIKE and NOT LIKE Operators</p></Link></li>
          <li><Link to="/ExploringtheSQLINKeywordOperator"><p>Exploring the SQL IN Keyword Operator</p></Link></li>
          <li><Link to="/ISNULLandISNOTNULLOperatorsinSQL"><p>IS NULL and IS NOT NULL Operators in SQL</p></Link></li>
          <li><Link to="/StructuringDatawithSQL"><p>Structuring Data with SQL</p></Link></li>
          <li><Link to="/AdvancedSQLQueriesUsingAllSelectClauses"><p>Advanced SQL Queries Using All Select Clauses</p></Link></li>
          <li><Link to="/GroupByClause"><p>Group By Clause</p></Link></li>
          <li><Link to="/MasteringSQLJoins"><p>Mastering SQL Joins</p></Link></li>
          <li><Link to="/MasteringSubqueriesInSQL"><p>Mastering Subqueries In SQL</p></Link></li>
          <li><Link to="/CommonTableExpressionsInSQL"><p>Common Table Expressions In SQL</p></Link></li>
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
