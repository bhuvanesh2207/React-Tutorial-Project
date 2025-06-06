import React from 'react'
import { Link } from 'react-router-dom'

export default function JavaDataStructures() {
  return (
    <>
      <div className="java-container">
        <h1>📊 Java Data Structures</h1>
        
        <div className="content-links">
          <h2>📚 Available Topics</h2>
          <ul>
            <li>
              <Link to="/java/data-structures/collections">
                <h3>📚 Collections Framework</h3>
                <p>Learn about the Java Collections Framework and its core interfaces.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/data-structures/lists">
                <h3>📋 Lists</h3>
                <p>Master ArrayList, LinkedList, and Vector implementations.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/data-structures/sets">
                <h3>🔢 Sets</h3>
                <p>Understand HashSet, TreeSet, and LinkedHashSet implementations.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/data-structures/maps">
                <h3>🗺️ Maps</h3>
                <p>Learn about HashMap, TreeMap, and LinkedHashMap implementations.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/data-structures/queues">
                <h3>⏳ Queues</h3>
                <p>Master Queue interface, PriorityQueue, and Deque implementations.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/data-structures/stacks">
                <h3>📚 Stacks</h3>
                <p>Understand Stack class and its operations in Java.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/data-structures/trees">
                <h3>🌳 Trees</h3>
                <p>Learn about binary trees, binary search trees, and tree traversal.</p>
              </Link>
            </li>
            <li>
              <Link to="/java/data-structures/graphs">
                <h3>🕸️ Graphs</h3>
                <p>Master graph representations and algorithms in Java.</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
} 