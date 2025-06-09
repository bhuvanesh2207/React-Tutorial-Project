import React from 'react'
import python_logo from "../images/python_logo.png"
import { Link } from 'react-router-dom'

export default function Python() {
  return (
    <div className="java-container">
      <h2>Python</h2>
      
      <p>
        Python is a high-level, general-purpose programming language created by Guido van Rossum and first released in 1991.
        It is known for its simple, readable syntax, which emphasizes code clarity and reduces the cost of program maintenance.
        Python supports multiple programming paradigms including procedural, object-oriented, and functional programming.
        Its versatility makes it ideal for web development, data science, machine learning, scripting, automation, and more.
        This Python tutorial is designed for both beginners and experienced professionals, covering basic to advanced Python topics.
      </p>
      <img src={python_logo} alt="Python Logo" />

      <h3>Why Learn Python?</h3>
      <p>
        Python is one of the most popular languages in the world due to its simplicity and versatility.
        It is widely used by companies like Google, Facebook, Instagram, NASA, and Netflix.
        Its extensive libraries and frameworks make it the first choice for developers working in AI, data science, and automation.
      </p>

      <h3>Popular Python Applications</h3>
      <ul>
        <li>Web Development (using Django, Flask)</li>
        <li>Data Science & Machine Learning (NumPy, Pandas, TensorFlow)</li>
        <li>Automation and Scripting</li>
        <li>Game Development (using Pygame)</li>
        <li>Scientific and Numeric Computing (SciPy, Matplotlib)</li>
      </ul>

      <h3>Prerequisites</h3>
      <ul>
        <li>Basic understanding of computers and logic</li>
        <li>Familiarity with English (for reading code and documentation)</li>
        <li>No prior coding experience required (for beginners' track)</li>
      </ul>

      <h3>Tools You'll Work With</h3>
      <ul>
        <li>Python Interpreter (CPython, Anaconda)</li>
        <li>IDE: VS Code, PyCharm, or Jupyter Notebook</li>
        <li>Package Managers: pip, conda</li>
        <li>Popular Libraries and Modules</li>
      </ul>

      <h3>Quick Example: Hello, World!</h3>
      <pre>
        <code>
{`print("Hello, World!")`}
        </code>
      </pre>

      <h3>Key Features of Python</h3>
      <ul>
        <li>Readable and Concise Syntax</li>
        <li>Platform Independent</li>
        <li>Open-source and Community-driven</li>
        <li>Rich Standard Library</li>
        <li>Ideal for Rapid Development</li>
      </ul>

      <h3>Course Outline</h3>
      <ul>
        <li><Link to="/PythonFundamentals">Python Fundamentals</Link></li>
        <li><Link to="/python/oop">Object-Oriented Programming (OOP)</Link></li>
        <li><Link to="/python/data-structure">Data Structures</Link></li>
        <li><Link to="/python/django-framework">Django Framework</Link></li>
        <li><Link to="/python/advanced">Advanced Python</Link></li>
      </ul>

      <h3>Who Should Learn Python?</h3>
      <ul>
        <li>Absolute beginners with no programming experience</li>
        <li>Students preparing for interviews or coding exams</li>
        <li>Developers exploring data science, AI, or automation</li>
        <li>Anyone interested in building robust and scalable applications</li>
      </ul>

      <div>
        <strong>Did you know?</strong> Python is used by over <strong>80% of developers</strong> in data science and machine learning!
      </div>
    </div>
  )
}
