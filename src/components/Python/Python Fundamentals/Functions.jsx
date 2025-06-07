import React from 'react'

export default function Functions() {
  return (
    <>
      <div className="java-container">
        <h1>📦 Functions in Python</h1>
        
        <p>
          Functions are reusable blocks of code that perform specific tasks. Python provides several ways 
          to define and use functions, making code more organized and maintainable.
        </p>

        <h2>✨ Basic Function Definition</h2>
        <pre>
          <code>
{`# Simple function
def greet():
    print("Hello, World!")

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

# Function with return value
def add_numbers(a, b):
    return a + b

# Function with default parameters
def greet_with_title(name, title="Mr."):
    print(f"Hello, {title} {name}!")

# Calling functions
greet()                    # Output: Hello, World!
greet_person("Alice")      # Output: Hello, Alice!
result = add_numbers(5, 3) # result = 8
greet_with_title("Smith")  # Output: Hello, Mr. Smith!`}
          </code>
        </pre>

        <h2>📝 Function Arguments</h2>
        <pre>
          <code>
{`# Positional arguments
def describe_pet(animal_type, pet_name):
    print(f"I have a {animal_type} named {pet_name}.")

# Keyword arguments
describe_pet(animal_type="hamster", pet_name="Harry")
describe_pet(pet_name="Harry", animal_type="hamster")

# Arbitrary arguments
def make_pizza(*toppings):
    print("Making a pizza with the following toppings:")
    for topping in toppings:
        print(f"- {topping}")

make_pizza("pepperoni")
make_pizza("mushrooms", "green peppers", "extra cheese")

# Arbitrary keyword arguments
def build_profile(**user_info):
    profile = {}
    for key, value in user_info.items():
        profile[key] = value
    return profile

user_profile = build_profile(
    first_name="John",
    last_name="Doe",
    age=30,
    occupation="Developer"
)`}
          </code>
        </pre>

        <h2>✨ Lambda Functions</h2>
        <pre>
          <code>
{`# Lambda function
square = lambda x: x ** 2
print(square(5))  # Output: 25

# Lambda with multiple arguments
multiply = lambda x, y: x * y
print(multiply(3, 4))  # Output: 12

# Using lambda with built-in functions
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # Output: [1, 4, 9, 16, 25]

# Filter with lambda
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # Output: [2, 4]`}
          </code>
        </pre>

        <h2>📝 Function Scope</h2>
        <pre>
          <code>
{`# Global and local variables
x = "global"

def outer():
    x = "outer"
    
    def inner():
        x = "inner"
        print("Inner x:", x)
    
    inner()
    print("Outer x:", x)

outer()
print("Global x:", x)

# Using global keyword
def modify_global():
    global x
    x = "modified global"

modify_global()
print(x)  # Output: modified global`}
          </code>
        </pre>

        <h2>✨ Recursion</h2>
        <pre>
          <code>
{`# Factorial using recursion
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # Output: 120

# Fibonacci sequence
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Print first 10 Fibonacci numbers
for i in range(10):
    print(fibonacci(i), end=" ")  # Output: 0 1 1 2 3 5 8 13 21 34`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: Python Functions</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/9Os0o3wzS_I"
            title="Python Functions Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 