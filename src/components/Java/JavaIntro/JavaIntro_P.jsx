import React from 'react'
import { Link } from 'react-router-dom'

export default function JavaIntro() {
  return (
    <>
      <div className="java-container">
        <h1>☕ Introduction to Java</h1>
        
        <div className="content-links">
          <h2>📚 Available Topics</h2>
          <ul>
            <li>
              <Link to="/java/intro/overview">
                <h3>✨ Java Overview</h3>
                <p>Learn about Java's history, features, and why it's one of the most popular programming languages.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/intro/setup">
                <h3>⚙️ Java Setup</h3>
                <p>Set up your Java development environment, install JDK, and configure your IDE.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/intro/first-program">
                <h3>🚀 Your First Java Program</h3>
                <p>Write and run your first Java program, understand the main method, and basic syntax.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/intro/jvm">
                <h3>🖥️ Java Virtual Machine</h3>
                <p>Understand JVM architecture, bytecode, and how Java achieves platform independence.</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
} 