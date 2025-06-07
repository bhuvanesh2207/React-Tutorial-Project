import React from 'react'

export default function Lists() {
  return (
    <>
      <div className="java-container">
        <h1>📋 Lists in Python</h1>
        
        <p>
          Lists are one of the most versatile data structures in Python. They are ordered, mutable, 
          and can contain elements of different types. Lists are created using square brackets [].
        </p>

        <h2>✨ Creating and Accessing Lists</h2>
        <pre>
          <code>
{`# Creating lists
numbers = [1, 2, 3, 4, 5]
fruits = ["apple", "banana", "cherry"]
mixed = [1, "hello", 3.14, True]

# Accessing elements
print(numbers[0])    # First element: 1
print(fruits[-1])    # Last element: "cherry"
print(mixed[1:3])    # Slice: ["hello", 3.14]

# List length
print(len(numbers))  # 5`}
          </code>
        </pre>

        <h2>📝 List Operations</h2>
        <pre>
          <code>
{`# Adding elements
fruits.append("orange")           # Add to end
fruits.insert(1, "mango")        # Insert at index
fruits.extend(["grape", "kiwi"]) # Add multiple items

# Removing elements
fruits.remove("banana")          # Remove specific item
popped = fruits.pop()            # Remove and return last item
fruits.pop(0)                    # Remove and return item at index
fruits.clear()                   # Remove all items

# List methods
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
numbers.sort()                   # Sort in ascending order
numbers.reverse()                # Reverse the list
count = numbers.count(1)         # Count occurrences
index = numbers.index(5)         # Find index of value`}
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

        <h2>📝 List Operations and Methods</h2>
        <pre>
          <code>
{`# Concatenation
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2
print(combined)  # [1, 2, 3, 4, 5, 6]

# Repetition
repeated = [1, 2] * 3
print(repeated)  # [1, 2, 1, 2, 1, 2]

# List slicing
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(numbers[2:5])    # [2, 3, 4]
print(numbers[:3])     # [0, 1, 2]
print(numbers[7:])     # [7, 8, 9]
print(numbers[::2])    # [0, 2, 4, 6, 8]
print(numbers[::-1])   # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]`}
          </code>
        </pre>

        <h2>✨ Common List Patterns</h2>
        <pre>
          <code>
{`# Finding maximum and minimum
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
max_num = max(numbers)
min_num = min(numbers)
print(f"Max: {max_num}, Min: {min_num}")

# Sum and average
total = sum(numbers)
average = total / len(numbers)
print(f"Sum: {total}, Average: {average}")

# Filtering lists
even_numbers = [x for x in numbers if x % 2 == 0]
print(even_numbers)  # [4, 2, 6]

# Mapping lists
doubled = [x * 2 for x in numbers]
print(doubled)  # [6, 2, 8, 2, 10, 18, 4, 12]`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: Python Lists</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/1yUn-ydsgKk"
            title="Python Lists Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 