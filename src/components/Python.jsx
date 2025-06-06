import React from 'react'
import python_logo from "../images/python_logo.png"

export default function Python() {
  return (
    <>
      <div className="python-container">
        <h2>Python</h2>
        <p>
          Python is a high-level, general-purpose programming language created by Guido van Rossum and first released in 1991.
          It is known for its simple, readable syntax, which emphasizes code clarity and reduces the cost of program maintenance.
          Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming, making 
          it highly versatile for a wide range of applications—from web development and software engineering to data science, machine 
          learning, automation, and scripting.
        </p>
        <img src={python_logo} alt="Python Logo" />

        <Link to="/AdvancedPython"><p>Advanced Python</p></Link>
        <Link to="/DataStructure"><p>Data Structure</p></Link>
        <Link to="/DjangoFramework"><p>Django Framework</p></Link>
        <Link to="/OOP"><p>OOP</p></Link>
        <Link to="/PythonFundamentals"><p>Python Fundamentals</p></Link>

      </div>
    </>
  )
}
