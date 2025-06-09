import React from 'react';
import { Link } from "react-router-dom";

export default function PythonFundamentals() {
  return (
    <>
      <div className="java-container">
        <h1>🔄 Python Fundamentals</h1>
        
        <p>
          Python fundamentals cover the basics of the language, including syntax, variables, operators, control structures, and functions. These concepts are essential for building a strong foundation in Python programming.
        </p>

        <h2>✨ Variables and Data Types</h2>
        <pre>
          <code>
{`name = "John"  # String
age = 25        # Integer
height = 5.9    # Float
is_student = True  # Boolean

print(f"Name: {name}, Age: {age}, Height: {height}, Student: {is_student}")`}
          </code>
        </pre>

        <h2>📝 Operators</h2>
        <pre>
          <code>
{`a = 10
b = 5

print(f"Addition: {a + b}")  # Output: 15
print(f"Subtraction: {a - b}")  # Output: 5
print(f"Multiplication: {a * b}")  # Output: 50
print(f"Division: {a / b}")  # Output: 2.0`}
          </code>
        </pre>

        <h2>✨ Control Structures</h2>
        <pre>
          <code>
{`if age >= 18:
    print("Adult")
else:
    print("Minor")

for i in range(5):
    print(i)  # Output: 0, 1, 2, 3, 4`}
          </code>
        </pre>

        <h2>📝 Functions</h2>
        <pre>
          <code>
{`def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))  # Output: Hello, Alice!`}
          </code>
        </pre>

        <h2>✨ Best Practices</h2>
        <ul>
          <li>Use meaningful variable names</li>
          <li>Write clear and concise code</li>
          <li>Comment your code for clarity</li>
          <li>Use functions to modularize your code</li>
          <li>Test your code thoroughly</li>
        </ul>

        <h2>🎥 Video Tutorial: Python Fundamentals</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/your_video_id"
            title="Python Fundamentals"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* Sub Topics Section */}
        <div className="subtopics-section">
          <h2>📚 sub Topics</h2>
          <ul>
            <li><Link to="/Introduction"><p>Introduction</p></Link></li>
            <li><Link to="/GettingStarted"><p>Getting Started</p></Link></li>
            <li><Link to="/Syntax"><p>Syntax</p></Link></li>
            <li><Link to="/UserInput"><p>User Input</p></Link></li>
            <li><Link to="/Operators"><p>Operators</p></Link></li>
            <li><Link to="/ControlConstructs"><p>Control Constructs</p></Link></li>
            <li><Link to="/Functions"><p>Functions</p></Link></li>
          </ul>
        </div>

      </div>
    </>
  );
}
