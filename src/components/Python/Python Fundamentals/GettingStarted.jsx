import React from 'react'

export default function GettingStarted() {
  return (
    <>
      <div className="java-container">
        <h1>🚀 Getting Started with Python</h1>
        
        <p>
          Let's set up your Python development environment and write your first program. 
          This guide will walk you through the installation process and basic setup.
        </p>

        <h2>✨ Installation Steps</h2>
        <ul>
          <li>📥 Download Python
            <ul>
              <li>Visit python.org</li>
              <li>Choose the latest version</li>
              <li>Select your operating system</li>
            </ul>
          </li>
          <li>🔧 Install Python
            <ul>
              <li>Run the installer</li>
              <li>Check "Add Python to PATH"</li>
              <li>Complete the installation</li>
            </ul>
          </li>
          <li>📝 Choose an IDE
            <ul>
              <li>PyCharm</li>
              <li>VS Code</li>
              <li>IDLE (comes with Python)</li>
            </ul>
          </li>
        </ul>

        <h2>📝 Your First Python Program</h2>
        <pre>
          <code>
{`# This is a comment
print("Welcome to Python!")

# Variables
name = "John"
age = 25
print(f"Hello, {name}! You are {age} years old.")

# Basic arithmetic
x = 10
y = 5
print(f"Sum: {x + y}")
print(f"Difference: {x - y}")
print(f"Product: {x * y}")
print(f"Quotient: {x / y}")`}
          </code>
        </pre>

        <h2>✨ Running Python Programs</h2>
        <ul>
          <li>📱 Using IDLE
            <ul>
              <li>Open IDLE</li>
              <li>Create a new file</li>
              <li>Save with .py extension</li>
              <li>Press F5 to run</li>
            </ul>
          </li>
          <li>💻 Using Command Line
            <ul>
              <li>Open terminal/command prompt</li>
              <li>Navigate to file directory</li>
              <li>Run: python filename.py</li>
            </ul>
          </li>
        </ul>

        <h2>🎥 Video Tutorial: Python Setup and First Program</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/YYXdXT2l-Gg"
            title="Python Setup Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 