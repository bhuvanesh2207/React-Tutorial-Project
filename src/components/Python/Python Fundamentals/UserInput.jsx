import React from 'react'

export default function UserInput() {
  return (
    <>
      <div className="java-container">
        <h1>👤 User Inputs and Type Casting in Python</h1>
        
        <p>
          Python provides several ways to get input from users and convert between different data types. 
          Understanding these concepts is crucial for creating interactive programs.
        </p>

        <h2>✨ Getting User Input</h2>
        <pre>
          <code>
{`# Basic input
name = input("Enter your name: ")
print(f"Hello, {name}!")

# Input with type casting
age = int(input("Enter your age: "))
height = float(input("Enter your height in meters: "))
print(f"You are {age} years old and {height} meters tall.")

# Multiple inputs
first_name, last_name = input("Enter your full name: ").split()
print(f"First name: {first_name}")
print(f"Last name: {last_name}")`}
          </code>
        </pre>

        <h2>📝 Type Casting</h2>
        <ul>
          <li>📦 Common Type Conversions
            <ul>
              <li>int() - Convert to integer</li>
              <li>float() - Convert to float</li>
              <li>str() - Convert to string</li>
              <li>bool() - Convert to boolean</li>
            </ul>
          </li>
          <li>🔢 Examples
            <ul>
              <li>String to number</li>
              <li>Number to string</li>
              <li>Boolean conversion</li>
            </ul>
          </li>
        </ul>

        <h2>✨ Type Casting Examples</h2>
        <pre>
          <code>
{`# String to number
num_str = "42"
num = int(num_str)
float_num = float(num_str)

# Number to string
num = 42
str_num = str(num)

# Boolean conversion
bool(0)      # False
bool(1)      # True
bool("")     # False
bool("Hi")   # True

# List conversion
str_list = "1,2,3,4,5"
numbers = [int(x) for x in str_list.split(",")]`}
          </code>
        </pre>

        <h2>📝 Input Validation</h2>
        <pre>
          <code>
{`# Basic input validation
while True:
    try:
        age = int(input("Enter your age: "))
        if 0 <= age <= 120:
            break
        print("Please enter a valid age (0-120)")
    except ValueError:
        print("Please enter a valid number")

# Multiple input validation
def get_valid_input():
    while True:
        try:
            x, y = map(int, input("Enter two numbers: ").split())
            return x, y
        except ValueError:
            print("Please enter two valid numbers separated by space")

# Using the function
num1, num2 = get_valid_input()
print(f"Sum: {num1 + num2}")`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: Python User Input and Type Casting</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/0lqYSRHhq8Y"
            title="Python User Input Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 