import React from 'react'

export default function Operators() {
  return (
    <>
      <div className="java-container">
        <h1>🔢 Operators in Python</h1>
        
        <p>
          Python provides various types of operators to perform operations on variables and values. 
          Understanding these operators is essential for writing effective Python code.
        </p>

        <h2>✨ Arithmetic Operators</h2>
        <pre>
          <code>
{`# Basic arithmetic
x = 10
y = 3

print(x + y)   # Addition: 13
print(x - y)   # Subtraction: 7
print(x * y)   # Multiplication: 30
print(x / y)   # Division: 3.3333...
print(x // y)  # Floor Division: 3
print(x % y)   # Modulus: 1
print(x ** y)  # Exponentiation: 1000`}
          </code>
        </pre>

        <h2>📝 Comparison Operators</h2>
        <pre>
          <code>
{`# Comparison operators
a = 5
b = 10

print(a == b)  # Equal to: False
print(a != b)  # Not equal to: True
print(a > b)   # Greater than: False
print(a < b)   # Less than: True
print(a >= b)  # Greater than or equal to: False
print(a <= b)  # Less than or equal to: True`}
          </code>
        </pre>

        <h2>✨ Logical Operators</h2>
        <pre>
          <code>
{`# Logical operators
x = True
y = False

print(x and y)  # Logical AND: False
print(x or y)   # Logical OR: True
print(not x)    # Logical NOT: False

# Complex conditions
age = 25
income = 50000
print(age >= 18 and income >= 30000)  # True`}
          </code>
        </pre>

        <h2>📝 Assignment Operators</h2>
        <pre>
          <code>
{`# Assignment operators
x = 5
print(x)  # 5

x += 3    # x = x + 3
print(x)  # 8

x -= 2    # x = x - 2
print(x)  # 6

x *= 4    # x = x * 4
print(x)  # 24

x /= 3    # x = x / 3
print(x)  # 8.0

x //= 2   # x = x // 2
print(x)  # 4.0

x %= 3    # x = x % 3
print(x)  # 1.0

x **= 2   # x = x ** 2
print(x)  # 1.0`}
          </code>
        </pre>

        <h2>✨ Bitwise Operators</h2>
        <pre>
          <code>
{`# Bitwise operators
a = 60  # 60 = 0011 1100
b = 13  # 13 = 0000 1101

print(a & b)   # Bitwise AND: 12
print(a | b)   # Bitwise OR: 61
print(a ^ b)   # Bitwise XOR: 49
print(~a)      # Bitwise NOT: -61
print(a << 2)  # Left shift: 240
print(a >> 2)  # Right shift: 15`}
          </code>
        </pre>

        <h2>📝 Identity Operators</h2>
        <pre>
          <code>
{`# Identity operators
x = ["apple", "banana"]
y = ["apple", "banana"]
z = x

print(x is z)      # True
print(x is y)      # False
print(x is not y)  # True`}
          </code>
        </pre>

        <h2>✨ Membership Operators</h2>
        <pre>
          <code>
{`# Membership operators
fruits = ["apple", "banana", "cherry"]

print("banana" in fruits)      # True
print("orange" not in fruits)  # True

# String membership
text = "Hello, World!"
print("World" in text)    # True
print("Python" in text)   # False`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: Python Operators</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/8O5kX73OkIY"
            title="Python Operators Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 