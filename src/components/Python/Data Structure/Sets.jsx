import React from 'react'

export default function Sets() {
  return (
    <>
      <div className="java-container">
        <h1>🔢 Sets in Python</h1>
        
        <p>
          Sets are unordered collections of unique elements in Python. They are mutable and created using 
          curly braces {} or the set() function. Sets are particularly useful for mathematical operations 
          and removing duplicates.
        </p>

        <h2>✨ Creating and Accessing Sets</h2>
        <pre>
          <code>
{`# Creating sets
fruits = {"apple", "banana", "cherry"}
numbers = set([1, 2, 3, 4, 5])
empty_set = set()

# Adding elements
fruits.add("orange")
fruits.update(["grape", "kiwi"])

# Removing elements
fruits.remove("banana")  # Raises KeyError if not found
fruits.discard("mango")  # No error if not found
popped = fruits.pop()    # Removes and returns arbitrary element
fruits.clear()           # Removes all elements`}
          </code>
        </pre>

        <h2>📝 Set Operations</h2>
        <pre>
          <code>
{`# Set operations
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# Union
union = set1 | set2
print(union)  # {1, 2, 3, 4, 5, 6, 7, 8}

# Intersection
intersection = set1 & set2
print(intersection)  # {4, 5}

# Difference
difference = set1 - set2
print(difference)  # {1, 2, 3}

# Symmetric difference
symmetric_diff = set1 ^ set2
print(symmetric_diff)  # {1, 2, 3, 6, 7, 8}`}
          </code>
        </pre>

        <h2>✨ Set Methods</h2>
        <pre>
          <code>
{`# Set methods
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# Union
union = set1.union(set2)
print(union)  # {1, 2, 3, 4, 5, 6, 7, 8}

# Intersection
intersection = set1.intersection(set2)
print(intersection)  # {4, 5}

# Difference
difference = set1.difference(set2)
print(difference)  # {1, 2, 3}

# Symmetric difference
symmetric_diff = set1.symmetric_difference(set2)
print(symmetric_diff)  # {1, 2, 3, 6, 7, 8}

# Subset and superset
print(set1.issubset(set2))     # False
print(set1.issuperset({1, 2})) # True`}
          </code>
        </pre>

        <h2>📝 Common Set Operations</h2>
        <pre>
          <code>
{`# Membership testing
numbers = {1, 2, 3, 4, 5}
print(3 in numbers)      # True
print(6 not in numbers)  # True

# Set length
print(len(numbers))  # 5

# Set comprehension
squares = {x**2 for x in range(5)}
print(squares)  # {0, 1, 4, 9, 16}

# Removing duplicates
numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
unique = set(numbers)
print(unique)  # {1, 2, 3, 4}`}
          </code>
        </pre>

        <h2>✨ Set Use Cases</h2>
        <pre>
          <code>
{`# Finding unique elements
text = "hello world"
unique_chars = set(text)
print(unique_chars)  # {'h', 'e', 'l', 'o', ' ', 'w', 'r', 'd'}

# Finding common elements
list1 = [1, 2, 3, 4, 5]
list2 = [4, 5, 6, 7, 8]
common = set(list1) & set(list2)
print(common)  # {4, 5}

# Removing duplicates while preserving order
from collections import OrderedDict
numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
unique_ordered = list(OrderedDict.fromkeys(numbers))
print(unique_ordered)  # [1, 2, 3, 4]`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: Python Sets</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/2ZLl8GAk1XQ"
            title="Python Sets Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 