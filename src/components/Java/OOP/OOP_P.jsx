import React from 'react'
import { Link } from 'react-router-dom'

export default function JavaOOP() {
  return (
    <>
      <div className="java-container">
        <h1>🎯 Object-Oriented Programming in Java</h1>
        
        <div className="content-links">
          <h2>📚 Available Topics</h2>
          <ul>
            <li>
              <Link to="/java/oop/classes-objects">
                <h3>🏗️ Classes and Objects</h3>
                <p>Learn about class definition, object creation, and instance variables in Java.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/oop/inheritance">
                <h3>🔄 Inheritance</h3>
                <p>Understand single, multiple, and multilevel inheritance in Java.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/oop/polymorphism">
                <h3>🔄 Polymorphism</h3>
                <p>Master method overriding, method overloading, and dynamic binding.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/oop/abstraction">
                <h3>🔍 Abstraction</h3>
                <p>Learn about abstract classes, interfaces, and abstract methods.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/oop/encapsulation">
                <h3>🔒 Encapsulation</h3>
                <p>Understand access modifiers, getters, setters, and data hiding.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/oop/interfaces">
                <h3>📋 Interfaces</h3>
                <p>Master interface definition, implementation, and multiple inheritance.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/oop/packages">
                <h3>📦 Packages</h3>
                <p>Learn about package creation, importing, and access control.</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
} 