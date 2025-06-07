import React from 'react'
import {Link} from 'react-router-dom'

export default function ProgrammingEssentials() {
  return (
    <>
      <div className="java-container">
        <h1>📚 Programming Essentials in Java</h1>
        
        <p>
          Programming Essentials form the foundation of Java programming, encompassing fundamental concepts and constructs that every Java developer must master. These concepts are crucial for writing efficient, maintainable, and robust Java applications.
        </p>

        <h2>📋 Core Programming Concepts</h2>
        <ul>
          <li>🎯 Control Flow
            <ul>
              <li>Decision-making statements</li>
              <li>Conditional execution</li>
              <li>Branching logic</li>
              <li>Program flow control</li>
            </ul>
          </li>
          <li>🔄 Looping Constructs
            <ul>
              <li>Iterative processing</li>
              <li>Repetitive operations</li>
              <li>Loop control</li>
              <li>Collection traversal</li>
            </ul>
          </li>
          <li>🔑 Jump Statements
            <ul>
              <li>Flow control</li>
              <li>Loop termination</li>
              <li>Exception handling</li>
              <li>Program redirection</li>
            </ul>
          </li>
        </ul>

        <h2>💡 Number Manipulation</h2>
        <ul>
          <li>📊 Basic Operations
            <ul>
              <li>Arithmetic operations</li>
              <li>Mathematical functions</li>
              <li>Number formatting</li>
              <li>Type conversions</li>
            </ul>
          </li>
          <li>🔢 Advanced Concepts
            <ul>
              <li>Random number generation</li>
              <li>Number validation</li>
              <li>Precision handling</li>
              <li>Mathematical algorithms</li>
            </ul>
          </li>
          <li>📈 Common Applications
            <ul>
              <li>Financial calculations</li>
              <li>Statistical analysis</li>
              <li>Data processing</li>
              <li>Algorithm implementation</li>
            </ul>
          </li>
        </ul>

        <h2>📝 Pattern Programming</h2>
        <ul>
          <li>🎨 Pattern Types
            <ul>
              <li>Star patterns</li>
              <li>Number patterns</li>
              <li>Character patterns</li>
              <li>Geometric patterns</li>
            </ul>
          </li>
          <li>💡 Pattern Logic
            <ul>
              <li>Nested loops</li>
              <li>Space management</li>
              <li>Character spacing</li>
              <li>Pattern symmetry</li>
            </ul>
          </li>
          <li>📊 Common Patterns
            <ul>
              <li>Pyramid patterns</li>
              <li>Diamond patterns</li>
              <li>Number triangles</li>
              <li>Special characters</li>
            </ul>
          </li>
        </ul>

        <h2>💡 Best Practices</h2>
        <ul>
          <li>🎯 Code Organization
            <ul>
              <li>Proper indentation</li>
              <li>Meaningful variable names</li>
              <li>Code comments</li>
              <li>Logical grouping</li>
            </ul>
          </li>
          <li>🔄 Performance Optimization
            <ul>
              <li>Efficient algorithms</li>
              <li>Memory management</li>
              <li>Loop optimization</li>
              <li>Resource utilization</li>
            </ul>
          </li>
          <li>📦 Error Handling
            <ul>
              <li>Input validation</li>
              <li>Exception management</li>
              <li>Error messages</li>
              <li>Debugging techniques</li>
            </ul>
          </li>
        </ul>

        <h2>🎥 Video Tutorial: Programming Essentials</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/grEKMHGYyns"
            title="Programming Essentials Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2>📚 sub Topics</h2>
        <Link to="/ControlConstructs"><p>Control Constructs</p></Link>
        <Link to="/LoopingConstructs"><p>Looping Constructs</p></Link>
        <Link to="/JumpStatements"><p>Jump Statements</p></Link>
        <Link to="/NumberManipulation"><p>Number Manipulation</p></Link>
        <Link to="/PatternPrograms"><p>Pattern Programs</p></Link>
      </div>
    </>
  )
}
