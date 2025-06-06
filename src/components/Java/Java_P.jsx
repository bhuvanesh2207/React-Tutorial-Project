import React from 'react'
import { Link } from 'react-router-dom'
import JavaIntro from './JavaIntro/JavaIntro_P'
import JavaBasics from './JavaBasics/JavaBasics_P'
import JavaVariablesFeatures from './JavaVariablesFeatures/JavaVariablesFeatures_P'
import JavaOOP from './OOP/OOP_P'
import JavaDataStructures from './Data Structures/DataStructures_P'

export default function Java() {
  return (
    <>
      <div className="java-container">
        <h1>☕ Java Programming</h1>
        
        <div className="content-links">
          <h2>📚 Available Topics</h2>
          <ul>
            <li>
              <Link to="/java/intro">
                <h3>✨ Introduction to Java</h3>
                <p>Learn about Java's history, features, and basic concepts.</p>
                <JavaIntro />
              </Link>
            </li>
            <li>
              <Link to="/java/basics">
                <h3>📝 Java Basics</h3>
                <p>Master fundamental Java concepts and syntax.</p>
                <JavaBasics />
              </Link>
            </li>
            <li>
              <Link to="/java/variables">
                <h3>📦 Variables and Features</h3>
                <p>Understand Java variables, data types, and core features.</p>
                <JavaVariablesFeatures />
              </Link>
            </li>
            <li>
              <Link to="/java/oop">
                <h3>🎯 Object-Oriented Programming</h3>
                <p>Learn OOP concepts and their implementation in Java.</p>
                <JavaOOP />
              </Link>
            </li>
            <li>
              <Link to="/java/data-structures">
                <h3>📊 Data Structures</h3>
                <p>Master Java collections and data structures.</p>
                <JavaDataStructures />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
} 