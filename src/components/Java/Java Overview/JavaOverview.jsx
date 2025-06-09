import React from 'react'
import {Link} from 'react-router-dom'

export default function JavaOverview() {
  return (
    <>
      <div className="java-container">
        <h1>🚀 Java Overview</h1>
        
        <p>
          Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA).
        </p>

        <h2>✨ Key Features of Java</h2>
        <ul>
          <li>🔒 Platform Independent - Write once, run anywhere</li>
          <li>🛡️ Secure - Built-in security features</li>
          <li>📦 Object-Oriented - Everything is an object</li>
          <li>🧵 Multithreaded - Can perform multiple tasks simultaneously</li>
          <li>🌐 Distributed - Can be used to create distributed applications</li>
          <li>⚡ High Performance - Just-in-time compilation</li>
          <li>🔍 Robust - Strong memory management and exception handling</li>
          <li>📚 Rich API - Extensive library of pre-built components</li>
        </ul>

        <h2>📚 Java Editions</h2>
        <ul>
          <li>💻 Java SE (Standard Edition) - Core Java platform for desktop and server applications</li>
          <li>🌐 Java EE (Enterprise Edition) - Enterprise applications with distributed computing</li>
          <li>📱 Java ME (Micro Edition) - Mobile applications and embedded systems</li>
          <li>🔧 Java FX - Rich internet applications with modern UI</li>
        </ul>

        <h2>🎯 Applications of Java</h2>
        <ul>
          <li>📱 Android App Development</li>
          <li>🌐 Web Applications</li>
          <li>💼 Enterprise Software</li>
          <li>🎮 Game Development</li>
          <li>🤖 Scientific Applications</li>
          <li>📊 Big Data Technologies</li>
          <li>🔍 Cloud Applications</li>
          <li>📱 IoT Applications</li>
        </ul>

        <h2>🔧 Java Development Tools</h2>
        <ul>
          <li>📝 IDEs (Integrated Development Environments)
            <ul>
              <li>IntelliJ IDEA</li>
              <li>Eclipse</li>
              <li>NetBeans</li>
              <li>VS Code</li>
            </ul>
          </li>
          <li>🛠️ Build Tools
            <ul>
              <li>Maven</li>
              <li>Gradle</li>
              <li>Ant</li>
            </ul>
          </li>
          <li>🧪 Testing Frameworks
            <ul>
              <li>JUnit</li>
              <li>TestNG</li>
              <li>Selenium</li>
            </ul>
          </li>
        </ul>

        <h2>📚 Popular Java Frameworks</h2>
        <ul>
          <li>🌱 Spring Framework - Enterprise application development</li>
          <li>⚡ Hibernate - Object-relational mapping</li>
          <li>🎯 Struts - Web application framework</li>
          <li>📊 Apache Spark - Big data processing</li>
          <li>🔍 Apache Hadoop - Distributed storage and processing</li>
        </ul>

        <h2>💡 Best Practices in Java</h2>
        <ul>
          <li>📝 Follow naming conventions</li>
          <li>🔒 Use proper access modifiers</li>
          <li>🔄 Write reusable code</li>
          <li>📚 Document your code</li>
          <li>🧪 Write unit tests</li>
          <li>🔍 Handle exceptions properly</li>
          <li>⚡ Optimize performance</li>
          <li>🛡️ Implement security measures</li>
        </ul>

        <h2>🎓 Learning Path</h2>
        <ol>
          <li>📚 Java Basics and Syntax</li>
          <li>📦 Object-Oriented Programming</li>
          <li>🔧 Collections Framework</li>
          <li>🔄 Exception Handling</li>
          <li>📝 File I/O Operations</li>
          <li>🧵 Multithreading</li>
          <li>🌐 Networking</li>
          <li>📊 Database Connectivity</li>
        </ol>

        <h2>🎥 Video Tutorial: Java Overview</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/grEKMHGYyns"
            title="Java Overview Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <h2>📚 sub Topics</h2>
        <ul>
          <li><Link to="/Operators"><p>Operators</p></Link></li>
          <li><Link to="/DataCategories"><p>Data Categories & Types</p></Link></li>
          <li><Link to="/Methods"><p>Methods</p></Link></li>
          <li><Link to="/UserInput"><p>Taking User Input</p></Link></li>
        </ul>
      </div>
    </>
  )
}
