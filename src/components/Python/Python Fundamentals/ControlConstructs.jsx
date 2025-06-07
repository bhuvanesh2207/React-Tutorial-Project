import React from 'react'

export default function ControlConstructs() {
  return (
    <>
      <div className="java-container">
        <h1>🔄 Control Constructs in Python</h1>
        
        <p>
          Control constructs are statements that control the flow of execution in a program. 
          Python provides several control structures including conditionals and loops.
        </p>

        <h2>✨ Conditional Statements</h2>
        <pre>
          <code>
{`# if statement
age = 18
if age >= 18:
    print("You are an adult")

# if-else statement
temperature = 25
if temperature > 30:
    print("It's hot outside")
else:
    print("It's not too hot")

# if-elif-else statement
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"
print(f"Grade: {grade}")

# Nested if statements
is_weekend = True
is_sunny = True
if is_weekend:
    if is_sunny:
        print("Let's go to the beach!")
    else:
        print("Let's watch a movie")
else:
    print("It's a working day")`}
          </code>
        </pre>

        <h2>📝 Loops</h2>
        <pre>
          <code>
{`# for loop
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# for loop with range
for i in range(5):
    print(i)  # Prints 0 to 4

# while loop
count = 0
while count < 5:
    print(count)
    count += 1

# Nested loops
for i in range(3):
    for j in range(2):
        print(f"i: {i}, j: {j}")

# Loop control statements
for i in range(10):
    if i == 3:
        continue  # Skip 3
    if i == 8:
        break    # Stop at 8
    print(i)`}
          </code>
        </pre>

        <h2>✨ List Comprehensions</h2>
        <pre>
          <code>
{`# Basic list comprehension
squares = [x**2 for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# List comprehension with condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]
print(even_squares)  # [0, 4, 16, 36, 64]

# Nested list comprehension
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for row in matrix for num in row]
print(flattened)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]`}
          </code>
        </pre>

        <h2>📝 Try-Except Blocks</h2>
        <pre>
          <code>
{`# Basic try-except
try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(f"Result: {result}")
except ValueError:
    print("Please enter a valid number")
except ZeroDivisionError:
    print("Cannot divide by zero")
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    print("This will always execute")

# Multiple exceptions
try:
    # Some code that might raise exceptions
    pass
except (ValueError, TypeError) as e:
    print(f"Error: {e}")

# Custom exception
class CustomError(Exception):
    pass

try:
    raise CustomError("This is a custom error")
except CustomError as e:
    print(f"Caught custom error: {e}")`}
          </code>
        </pre>

        <h2>✨ Match Statement (Python 3.10+)</h2>
        <pre>
          <code>
{`# Basic match statement
def check_number(num):
    match num:
        case 0:
            return "Zero"
        case 1:
            return "One"
        case 2:
            return "Two"
        case _:
            return "Other"

# Pattern matching with multiple cases
def check_point(point):
    match point:
        case (0, 0):
            return "Origin"
        case (0, y):
            return f"Y-axis at y={y}"
        case (x, 0):
            return f"X-axis at x={x}"
        case (x, y):
            return f"Point at ({x}, {y})"
        case _:
            return "Not a point"`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: Python Control Structures</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/6iF8XbILZws"
            title="Python Control Structures Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 