import React from 'react'
import { Link } from 'react-router-dom'

export default function JavaBasics() {
  return (
    <>
      <div className="java-container">
        <h1>📝 Java Basics</h1>
        
        <div className="content-links">
          <h2>📚 Available Topics</h2>
          <ul>
            <li>
              <Link to="/java/basics/syntax">
                <h3>📋 Java Syntax</h3>
                <p>Learn about Java's syntax rules, naming conventions, and code structure.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/basics/comments">
                <h3>💭 Comments</h3>
                <p>Understand different types of comments and documentation in Java.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/basics/operators">
                <h3>🔢 Operators</h3>
                <p>Master arithmetic, relational, logical, and bitwise operators in Java.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/basics/control-flow">
                <h3>🔄 Control Flow</h3>
                <p>Learn about if-else statements, switch cases, and loops in Java.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/basics/arrays">
                <h3>📊 Arrays</h3>
                <p>Understand array declaration, initialization, and common array operations.</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
} 