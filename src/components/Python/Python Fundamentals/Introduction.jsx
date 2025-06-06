import React from 'react'

export default function Introduction() {
  return (
    <>
      <div className="python-container">
        <h1>🎯 Introduction to Python</h1>
        
        <p>
          Python is a high-level, interpreted programming language known for its simplicity and readability. 
          It was created by Guido van Rossum and first released in 1991. Python's design philosophy emphasizes 
          code readability with its notable use of significant whitespace.
        </p>

        <h2>✨ Why Python?</h2>
        <ul>
          <li>🚀 Easy to Learn - Simple and intuitive syntax</li>
          <li>🔒 Versatile - Used in web development, data science, AI, and more</li>
          <li>📦 Rich Ecosystem - Extensive libraries and frameworks</li>
          <li>🔄 Cross-Platform - Runs on Windows, macOS, Linux</li>
          <li>🤝 Large Community - Active support and resources</li>
        </ul>

        <h2>💡 Key Features</h2>
        <ul>
          <li>📝 Interpreted Language</li>
          <li>🔐 Dynamic Typing</li>
          <li>🛣️ Object-Oriented</li>
          <li>📋 Extensive Libraries</li>
          <li>🔒 Automatic Memory Management</li>
          <li>🌐 Cross-Platform Compatibility</li>
        </ul>

        <h2>📝 Example: Hello World Program</h2>
        <pre>
          <code>
{`print("Hello, World!")`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: Getting Started with Python</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/kqtD5dpn9C8"
            title="Python Tutorial for Beginners"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 