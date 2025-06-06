import React from 'react'

export default function J_DecodeDataStructures() {
  return (
    <>
      <div className="java-container">
        <h1>📊 Data Structures in Java</h1>
        
        <p>
          Data structures are specialized formats for organizing and storing data efficiently. 
          Java provides a rich set of built-in data structures through its Collections Framework.
        </p>

        <h2>✨ Common Data Structures</h2>
        <ul>
          <li>📦 Arrays
            <ul>
              <li>Fixed-size collections</li>
              <li>Same data type elements</li>
              <li>Direct access by index</li>
            </ul>
          </li>
          <li>🔢 ArrayList
            <ul>
              <li>Dynamic arrays</li>
              <li>Resizable</li>
              <li>Random access</li>
            </ul>
          </li>
          <li>🔄 LinkedList
            <ul>
              <li>Doubly-linked list</li>
              <li>Efficient insertions/deletions</li>
              <li>Sequential access</li>
            </ul>
          </li>
          <li>📝 HashMap
            <ul>
              <li>Key-value pairs</li>
              <li>Fast lookups</li>
              <li>No duplicate keys</li>
            </ul>
          </li>
        </ul>

        <h2>📝 Example: Arrays and ArrayList</h2>
        <pre>
          <code>
{`// Array
int[] numbers = {1, 2, 3, 4, 5};
System.out.println(numbers[0]);  // Output: 1

// ArrayList
ArrayList<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");
System.out.println(fruits.get(0));  // Output: Apple
System.out.println(fruits.size());  // Output: 3`}
          </code>
        </pre>

        <h2>📝 Example: LinkedList</h2>
        <pre>
          <code>
{`LinkedList<String> names = new LinkedList<>();
names.add("Alice");
names.add("Bob");
names.add("Charlie");

// Adding at specific position
names.add(1, "David");

// Removing elements
names.remove("Bob");

// Iterating
for (String name : names) {
    System.out.println(name);
}`}
          </code>
        </pre>

        <h2>📝 Example: HashMap</h2>
        <pre>
          <code>
{`HashMap<String, Integer> ages = new HashMap<>();
ages.put("Alice", 25);
ages.put("Bob", 30);
ages.put("Charlie", 35);

// Accessing values
System.out.println(ages.get("Alice"));  // Output: 25

// Checking if key exists
if (ages.containsKey("Bob")) {
    System.out.println("Bob's age: " + ages.get("Bob"));
}

// Iterating through entries
for (Map.Entry<String, Integer> entry : ages.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}`}
          </code>
        </pre>

        <h2>✨ Performance Characteristics</h2>
        <table style={{width: "100%", borderCollapse: "collapse", marginBottom: "1em"}}>
          <thead>
            <tr>
              <th style={{border: "1px solid #ddd", padding: "8px"}}>Data Structure</th>
              <th style={{border: "1px solid #ddd", padding: "8px"}}>Access</th>
              <th style={{border: "1px solid #ddd", padding: "8px"}}>Insertion</th>
              <th style={{border: "1px solid #ddd", padding: "8px"}}>Deletion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{border: "1px solid #ddd", padding: "8px"}}>Array</td>
              <td style={{border: "1px solid #ddd", padding: "8px"}}>O(1)</td>
              <td style={{border: "1px solid #ddd", padding: "8px"}}>O(n)</td>
              <td style={{border: "1px solid #ddd", padding: "8px"}}>O(n)</td>
            </tr>
            <tr>
              <td style={{border: "1px solid #ddd", padding: "8px"}}>ArrayList</td>
              <td style={{border: "1px solid #ddd", padding: "8px"}}>O(1)</td>
              <td style={{border: "1px solid #ddd", padding: "8px"}}>O(1) amortized</td>
              <td style={{border: "1px solid #ddd", padding: "8px"}}>O(n)</td>
            </tr>
            <tr>
              <td style={{border: "1px solid #ddd", padding: "8px"}}>LinkedList</td>
              <td style={{border: "1px solid #ddd", padding: "8px"}}>O(n)</td>
              <td style={{border: "1px solid #ddd", padding: "8px"}}>O(1)</td>
              <td style={{border: "1px solid #ddd", padding: "8px"}}>O(1)</td>
            </tr>
            <tr>
              <td style={{border: "1px solid #ddd", padding: "8px"}}>HashMap</td>
              <td style={{border: "1px solid #ddd", padding: "8px"}}>O(1)</td>
              <td style={{border: "1px solid #ddd", padding: "8px"}}>O(1)</td>
              <td style={{border: "1px solid #ddd", padding: "8px"}}>O(1)</td>
            </tr>
          </tbody>
        </table>

        <h2>🎥 Video Tutorial: Java Data Structures</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/CBYHwZcbD-s"
            title="Java Data Structures Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 