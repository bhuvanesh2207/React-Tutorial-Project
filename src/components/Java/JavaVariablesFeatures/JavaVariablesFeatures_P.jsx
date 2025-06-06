import React from 'react'
import { Link } from 'react-router-dom'

export default function JavaVariablesFeatures() {
  return (
    <>
      <div className="java-container">
        <h1>📦 Java Variables and Features</h1>
        
        <div className="content-links">
          <h2>📚 Available Topics</h2>
          <ul>
            <li>
              <Link to="/java/variables/types">
                <h3>📊 Data Types</h3>
                <p>Learn about primitive and reference data types in Java.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/variables/variables">
                <h3>📝 Variables</h3>
                <p>Understand variable declaration, initialization, and scope in Java.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/variables/type-conversion">
                <h3>🔄 Type Conversion</h3>
                <p>Master type casting, widening, and narrowing conversions in Java.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/variables/strings">
                <h3>📜 Strings</h3>
                <p>Learn about String class, string manipulation, and string methods.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/variables/input-output">
                <h3>📥 Input/Output</h3>
                <p>Understand console input/output, file handling, and streams in Java.</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
} 