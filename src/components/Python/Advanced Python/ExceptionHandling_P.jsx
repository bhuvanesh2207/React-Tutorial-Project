import React from 'react'

export default function ExceptionHandling() {
  return (
    <>
      <div className="java-container">
        <h1>⚠️ Exception Handling in Python</h1>
        
        <p>
          Exception handling is a mechanism to handle runtime errors in Python. It allows you to write 
          code that can handle errors gracefully and prevent your program from crashing.
        </p>

        <h2>✨ Basic Exception Handling</h2>
        <pre>
          <code>
{`# Basic try-except block
try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(f"Result: {result}")
except ValueError:
    print("Please enter a valid number")
except ZeroDivisionError:
    print("Cannot divide by zero")
except Exception as e:
    print(f"An error occurred: {e}")`}
          </code>
        </pre>

        <h2>📝 Try-Except-Finally</h2>
        <pre>
          <code>
{`# Using try-except-finally
try:
    file = open("example.txt", "r")
    content = file.read()
    print(content)
except FileNotFoundError:
    print("File not found")
except IOError:
    print("Error reading file")
finally:
    # This block always executes
    if 'file' in locals():
        file.close()
    print("File handling completed")`}
          </code>
        </pre>

        <h2>✨ Custom Exceptions</h2>
        <pre>
          <code>
{`# Creating custom exceptions
class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        message = f"Insufficient funds. Balance: {balance}, Required: {amount}"
        super().__init__(message)

# Using custom exception
def withdraw(amount, balance):
    if amount > balance:
        raise InsufficientFundsError(balance, amount)
    return balance - amount

try:
    result = withdraw(1000, 500)
except InsufficientFundsError as e:
    print(f"Error: {e}")`}
          </code>
        </pre>

        <h2>📝 Exception Chaining</h2>
        <pre>
          <code>
{`# Exception chaining
def process_data(data):
    try:
        return int(data)
    except ValueError as e:
        raise RuntimeError("Failed to process data") from e

try:
    result = process_data("abc")
except RuntimeError as e:
    print(f"Error: {e}")
    print(f"Caused by: {e.__cause__}")`}
          </code>
        </pre>

        <h2>✨ Context Managers</h2>
        <pre>
          <code>
{`# Using with statement
with open("example.txt", "r") as file:
    content = file.read()
    print(content)
# File is automatically closed

# Custom context manager
class DatabaseConnection:
    def __init__(self, host, port):
        self.host = host
        self.port = port
    
    def __enter__(self):
        print(f"Connecting to {self.host}:{self.port}")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Closing connection")

# Using custom context manager
with DatabaseConnection("localhost", 5432) as db:
    print("Performing database operations")`}
          </code>
        </pre>

        <h2>📝 Common Built-in Exceptions</h2>
        <ul>
          <li><strong>ValueError:</strong> Invalid value for a function</li>
          <li><strong>TypeError:</strong> Invalid type for an operation</li>
          <li><strong>IndexError:</strong> Invalid index for a sequence</li>
          <li><strong>KeyError:</strong> Invalid key for a dictionary</li>
          <li><strong>FileNotFoundError:</strong> File not found</li>
          <li><strong>ZeroDivisionError:</strong> Division by zero</li>
          <li><strong>ImportError:</strong> Module import failure</li>
        </ul>

        <h2>✨ Best Practices</h2>
        <ul>
          <li>Use specific exceptions instead of catching all exceptions</li>
          <li>Keep try blocks as small as possible</li>
          <li>Use finally for cleanup operations</li>
          <li>Create custom exceptions for specific error cases</li>
          <li>Use context managers for resource management</li>
          <li>Include meaningful error messages</li>
        </ul>

        <h2>📝 Advanced Exception Handling</h2>
        <pre>
          <code>
{`# Multiple exceptions in one line
try:
    # Some code
    pass
except (ValueError, TypeError) as e:
    print(f"Error: {e}")

# Exception groups (Python 3.11+)
try:
    raise ExceptionGroup("Multiple errors",
        [ValueError("Invalid value"),
         TypeError("Invalid type")])
except ExceptionGroup as eg:
    for error in eg.exceptions:
        print(f"Error: {error}")

# Using else clause
try:
    number = int(input("Enter a number: "))
except ValueError:
    print("Invalid input")
else:
    print(f"You entered: {number}")
finally:
    print("Input process completed")`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: Exception Handling in Python</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/NIWwJbo-9_8"
            title="Exception Handling in Python"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 