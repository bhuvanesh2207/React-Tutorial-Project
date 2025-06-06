import React from 'react'
import {Link} from 'react-router-dom'

export default function DatastrAlg() {
  return (
    <>
      <h1>📊 Data Structures and Algorithms in Java</h1>
      
      <p>
        Data Structures and Algorithms form the foundation of computer science and software development. Understanding these concepts is crucial for writing efficient, scalable, and maintainable code. This section covers essential data structures, algorithms, and their implementations in Java.
      </p>

      <h2>📋 Core Topics</h2>
      <ul>
        <li>🔍 Data Structures
          <ul>
            <li>Arrays and Strings</li>
            <li>Collections Framework</li>
            <li>Linked Lists</li>
            <li>Trees and Graphs</li>
          </ul>
        </li>
        <li>🔄 Algorithms
          <ul>
            <li>Searching algorithms</li>
            <li>Sorting algorithms</li>
            <li>Graph algorithms</li>
            <li>Dynamic programming</li>
          </ul>
        </li>
        <li>📦 Implementation
          <ul>
            <li>Time complexity</li>
            <li>Space complexity</li>
            <li>Code optimization</li>
            <li>Best practices</li>
          </ul>
        </li>
      </ul>

      <h2>💡 Key Concepts</h2>
      <ul>
        <li>🎯 Time Complexity
          <ul>
            <li>Big O notation</li>
            <li>Worst case analysis</li>
            <li>Average case analysis</li>
            <li>Best case analysis</li>
          </ul>
        </li>
        <li>🔄 Space Complexity
          <ul>
            <li>Memory usage</li>
            <li>Auxiliary space</li>
            <li>In-place algorithms</li>
            <li>Space-time tradeoff</li>
          </ul>
        </li>
        <li>📦 Algorithm Design
          <ul>
            <li>Divide and conquer</li>
            <li>Greedy approach</li>
            <li>Dynamic programming</li>
            <li>Backtracking</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>🌐 Web Development
          <ul>
            <li>Search engines</li>
            <li>Data caching</li>
            <li>Session management</li>
            <li>Request routing</li>
          </ul>
        </li>
        <li>📱 Mobile Development
          <ul>
            <li>Data storage</li>
            <li>Image processing</li>
            <li>Location services</li>
            <li>Push notifications</li>
          </ul>
        </li>
        <li>🎮 Game Development
          <ul>
            <li>Path finding</li>
            <li>Collision detection</li>
            <li>AI decision making</li>
            <li>Resource management</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Data Structures and Algorithms</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Data Structures and Algorithms Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <h2>📚 Sub Topics</h2>
      <Link to="/AnatomyOfMain"><p>Anatomy of Main Method</p></Link>
      <Link to="/Arrays"><p>Arrays and Array Operations</p></Link>
      <Link to="/Strings"><p>String Manipulation</p></Link>
      <Link to="/CollectionsFramework"><p>Collections Framework</p></Link>
      <Link to="/Algorithms"><p>Common Algorithms</p></Link>
    </>
  )
}