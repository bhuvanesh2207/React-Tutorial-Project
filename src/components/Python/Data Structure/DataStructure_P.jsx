import React from 'react'
import { Link } from 'react-router-dom'

export default function DataStructure() {
  return (
    <>
      <div className="java-container">
        <h1>🔄 Python Data Structures</h1>
        
        <p>
          Data structures are fundamental building blocks in Python that help you organize and manage data efficiently. Understanding these structures is crucial for writing effective and scalable code.
        </p>

        <h2>✨ Lists</h2>
        <pre>
          <code>
{`my_list = [1, 2, 3, 4, 5]
print(my_list)  # Output: [1, 2, 3, 4, 5]
my_list.append(6)
print(my_list)  # Output: [1, 2, 3, 4, 5, 6]`}
          </code>
        </pre>

        <h2>📝 Dictionaries</h2>
        <pre>
          <code>
{`my_dict = {'a': 1, 'b': 2, 'c': 3}
print(my_dict)  # Output: {'a': 1, 'b': 2, 'c': 3}
my_dict['d'] = 4
print(my_dict)  # Output: {'a': 1, 'b': 2, 'c': 3, 'd': 4}`}
          </code>
        </pre>

        <h2>✨ Sets</h2>
        <pre>
          <code>
{`my_set = {1, 2, 3, 4, 5}
print(my_set)  # Output: {1, 2, 3, 4, 5}
my_set.add(6)
print(my_set)  # Output: {1, 2, 3, 4, 5, 6}`}
          </code>
        </pre>

        <h2>📝 Tuples</h2>
        <pre>
          <code>
{`my_tuple = (1, 2, 3, 4, 5)
print(my_tuple)  # Output: (1, 2, 3, 4, 5)`}
          </code>
        </pre>

        <h2>✨ Best Practices</h2>
        <ul>
          <li>Use lists for ordered collections</li>
          <li>Use dictionaries for key-value pairs</li>
          <li>Use sets for unique elements</li>
          <li>Use tuples for immutable sequences</li>
          <li>Choose the right data structure for your use case</li>
        </ul>

        <h2>🎥 Video Tutorial: Python Data Structures</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/your_video_id"
            title="Python Data Structures"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* Sub Topics Section */}
          <div className="subtopics-section">
            <h2>📚 sub Topics</h2>
            <div>
              <Link to="/Dictionaries"><p>Dictionaries</p></Link>
              <Link to="/Lists"><p>Lists</p></Link>
              <Link to="/Sets"><p>Sets</p></Link>
              <Link to="/Tuples"><p>Tuples</p></Link>
            </div>
          </div>

      </div>
    </>
  )
} 