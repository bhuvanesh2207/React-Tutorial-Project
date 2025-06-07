import React from 'react'

export default function Syntax() {
  return (
    <>
      <div className="java-container">
        <h1>📝 Python Syntax and Basic Data Types</h1>
        
        <p>
          Python syntax is known for its simplicity and readability. Let's explore the basic syntax rules 
          and fundamental data types in Python.
        </p>

        <h2>✨ Basic Syntax Rules</h2>
        <ul>
          <li>📦 Indentation
            <ul>
              <li>Uses spaces or tabs for code blocks</li>
              <li>Standard is 4 spaces</li>
              <li>Indentation defines scope</li>
            </ul>
          </li>
          <li>🔢 Comments
            <ul>
              <li>Single line: # comment</li>
              <li>Multi-line: """ comment """</li>
            </ul>
          </li>
          <li>🔄 Variables
            <ul>
              <li>No declaration needed</li>
              <li>Dynamic typing</li>
              <li>Case sensitive</li>
            </ul>
          </li>
        </ul>

        <h2>📝 Basic Data Types</h2>
        <pre>
          <code>
{`# Numbers
integer = 42
float_num = 3.14
complex_num = 1 + 2j

# Strings
single_quoted = 'Hello'
double_quoted = "World"
multi_line = """This is a
multi-line string"""

# Boolean
is_true = True
is_false = False

# None
empty_value = None

# Type checking
print(type(integer))      # <class 'int'>
print(type(float_num))    # <class 'float'>
print(type(single_quoted)) # <class 'str'>
print(type(is_true))      # <class 'bool'>`}
          </code>
        </pre>

        <h2>✨ Type Conversion</h2>
        <pre>
          <code>
{`# Converting between types
num_str = "42"
num = int(num_str)        # String to integer
float_num = float(num)    # Integer to float
str_num = str(num)        # Number to string

# Boolean conversion
bool(0)      # False
bool(1)      # True
bool("")     # False
bool("Hi")   # True`}
          </code>
        </pre>

        <h2>📝 String Operations</h2>
        <pre>
          <code>
{`# String concatenation
first = "Hello"
last = "World"
full = first + " " + last

# String methods
text = "  Python Programming  "
print(text.strip())           # Remove whitespace
print(text.lower())           # Convert to lowercase
print(text.upper())           # Convert to uppercase
print(text.replace("P", "J")) # Replace characters
print(text.split())           # Split into list

# String formatting
name = "Alice"
age = 25
print(f"{name} is {age} years old")
print("{} is {} years old".format(name, age))`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: Python Syntax and Data Types</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/khKv-8q7YmY"
            title="Python Syntax Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 