import React from 'react'

export default function Tuples() {
  return (
    <>
      <div className="python-container">
        <h1>📦 Tuples in Python</h1>
        
        <p>
          Tuples are immutable sequences in Python, typically used to store collections of related data. 
          They are created using parentheses () and cannot be modified after creation.
        </p>

        <h2>✨ Creating and Accessing Tuples</h2>
        <pre>
          <code>
{`# Creating tuples
coordinates = (10, 20)
person = ("John", 25, "New York")
empty_tuple = ()
single_item = (1,)  # Note the comma

# Accessing elements
print(coordinates[0])    # First element: 10
print(person[-1])        # Last element: "New York"
print(person[1:3])       # Slice: (25, "New York")

# Tuple unpacking
name, age, city = person
print(f"{name} is {age} years old from {city}")`}
          </code>
        </pre>

        <h2>📝 Tuple Operations</h2>
        <pre>
          <code>
{`# Concatenation
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)
combined = tuple1 + tuple2
print(combined)  # (1, 2, 3, 4, 5, 6)

# Repetition
repeated = (1, 2) * 3
print(repeated)  # (1, 2, 1, 2, 1, 2)

# Tuple methods
numbers = (3, 1, 4, 1, 5, 9, 2, 6)
count = numbers.count(1)  # Count occurrences
index = numbers.index(5)  # Find index of value

# Length and membership
print(len(numbers))           # 8
print(5 in numbers)           # True
print(7 not in numbers)       # True`}
          </code>
        </pre>

        <h2>✨ Immutable Nature</h2>
        <pre>
          <code>
{`# Tuples are immutable
coordinates = (10, 20)
# coordinates[0] = 30  # This would raise TypeError

# But you can create a new tuple
coordinates = (30, 20)
print(coordinates)  # (30, 20)

# Nested tuples
matrix = ((1, 2, 3), (4, 5, 6), (7, 8, 9))
print(matrix[0][1])  # 2`}
          </code>
        </pre>

        <h2>📝 Common Use Cases</h2>
        <pre>
          <code>
{`# Returning multiple values
def get_coordinates():
    return (10, 20)

x, y = get_coordinates()
print(f"X: {x}, Y: {y}")

# Dictionary keys
points = {
    (0, 0): "origin",
    (1, 1): "point",
    (-1, -1): "opposite"
}

# Data that shouldn't change
RGB_COLORS = (
    (255, 0, 0),    # Red
    (0, 255, 0),    # Green
    (0, 0, 255)     # Blue
)`}
          </code>
        </pre>

        <h2>✨ Tuple vs List</h2>
        <ul>
          <li>📦 Tuples
            <ul>
              <li>Immutable</li>
              <li>Faster than lists</li>
              <li>Can be used as dictionary keys</li>
              <li>Use parentheses ()</li>
            </ul>
          </li>
          <li>📋 Lists
            <ul>
              <li>Mutable</li>
              <li>More memory intensive</li>
              <li>Cannot be used as dictionary keys</li>
              <li>Use square brackets []</li>
            </ul>
          </li>
        </ul>

        <h2>🎥 Video Tutorial: Python Tuples</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/Ch4P2WzzVlE"
            title="Python Tuples Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 