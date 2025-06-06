import React from 'react'

export default function Dictionaries() {
  return (
    <>
      <div className="python-container">
        <h1>📚 Dictionaries in Python</h1>
        
        <p>
          Dictionaries are mutable, unordered collections of key-value pairs. They are created using 
          curly braces {} and are optimized for retrieving values when the key is known.
        </p>

        <h2>✨ Creating and Accessing Dictionaries</h2>
        <pre>
          <code>
{`# Creating dictionaries
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# Accessing values
print(person["name"])     # Using key
print(person.get("age"))  # Using get() method
print(person.get("email", "Not found"))  # Default value

# Adding/Updating items
person["email"] = "john@example.com"
person.update({"phone": "123-456-7890"})

# Removing items
del person["age"]
email = person.pop("email")
person.clear()  # Remove all items`}
          </code>
        </pre>

        <h2>📝 Dictionary Methods</h2>
        <pre>
          <code>
{`# Dictionary methods
person = {"name": "John", "age": 30, "city": "New York"}

# Keys, values, and items
print(person.keys())    # dict_keys(['name', 'age', 'city'])
print(person.values())  # dict_values(['John', 30, 'New York'])
print(person.items())   # dict_items([('name', 'John'), ('age', 30), ('city', 'New York')])

# Dictionary comprehension
squares = {x: x**2 for x in range(5)}
print(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}`}
          </code>
        </pre>

        <h2>✨ Nested Dictionaries</h2>
        <pre>
          <code>
{`# Nested dictionary
company = {
    "name": "Tech Corp",
    "employees": {
        "john": {
            "position": "Developer",
            "salary": 75000
        },
        "alice": {
            "position": "Manager",
            "salary": 90000
        }
    }
}

# Accessing nested values
print(company["employees"]["john"]["position"])  # Developer

# Modifying nested values
company["employees"]["john"]["salary"] = 80000`}
          </code>
        </pre>

        <h2>📝 Common Dictionary Operations</h2>
        <pre>
          <code>
{`# Checking keys
person = {"name": "John", "age": 30}
print("name" in person)      # True
print("email" in person)     # False

# Dictionary length
print(len(person))  # 2

# Copying dictionaries
person_copy = person.copy()
deep_copy = dict(person)

# Dictionary from lists
keys = ["a", "b", "c"]
values = [1, 2, 3]
dict_from_lists = dict(zip(keys, values))
print(dict_from_lists)  # {'a': 1, 'b': 2, 'c': 3}`}
          </code>
        </pre>

        <h2>✨ Dictionary Use Cases</h2>
        <pre>
          <code>
{`# Counting occurrences
text = "hello world"
char_count = {}
for char in text:
    char_count[char] = char_count.get(char, 0) + 1
print(char_count)  # {'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1}

# Configuration settings
config = {
    "database": {
        "host": "localhost",
        "port": 5432,
        "user": "admin"
    },
    "logging": {
        "level": "INFO",
        "file": "app.log"
    }
}`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: Python Dictionaries</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/daefaLgNkw0"
            title="Python Dictionaries Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 