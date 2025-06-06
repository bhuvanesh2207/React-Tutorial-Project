import React from 'react'
import {Link} from 'react-router-dom'

export default function AdvJava() {
  return (
    <>
      <h1>🚀 Advanced Java Programming</h1>
      
      <p>
        Advanced Java encompasses a set of powerful features and APIs that extend the capabilities of core Java. These advanced concepts are essential for developing robust, scalable, and enterprise-level applications.
      </p>

      <h2>📋 Key Advanced Java Topics</h2>
      <ul>
        <li>🔍 Exception Handling
          <ul>
            <li>Try-catch blocks</li>
            <li>Custom exceptions</li>
            <li>Exception hierarchy</li>
            <li>Best practices</li>
          </ul>
        </li>
        <li>📁 File Handling
          <ul>
            <li>File I/O operations</li>
            <li>Streams and buffers</li>
            <li>File manipulation</li>
            <li>Directory operations</li>
          </ul>
        </li>
        <li>🔄 Threads & Multithreading
          <ul>
            <li>Thread creation</li>
            <li>Synchronization</li>
            <li>Thread pools</li>
            <li>Concurrent collections</li>
          </ul>
        </li>
        <li>💾 Serialization
          <ul>
            <li>Object serialization</li>
            <li>Custom serialization</li>
            <li>Externalization</li>
            <li>Version control</li>
          </ul>
        </li>
        <li>📝 Java Annotations
          <ul>
            <li>Built-in annotations</li>
            <li>Custom annotations</li>
            <li>Annotation processing</li>
            <li>Runtime reflection</li>
          </ul>
        </li>
      </ul>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>🎯 Exception Management
          <ul>
            <li>Use specific exceptions</li>
            <li>Proper exception hierarchy</li>
            <li>Meaningful error messages</li>
            <li>Resource cleanup</li>
          </ul>
        </li>
        <li>🔄 Thread Safety
          <ul>
            <li>Proper synchronization</li>
            <li>Deadlock prevention</li>
            <li>Thread pool usage</li>
            <li>Concurrent collections</li>
          </ul>
        </li>
        <li>📦 File Operations
          <ul>
            <li>Use try-with-resources</li>
            <li>Buffer management</li>
            <li>File security</li>
            <li>Error handling</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>🏢 Enterprise Applications
          <ul>
            <li>Web services</li>
            <li>Database connectivity</li>
            <li>Transaction management</li>
            <li>Security implementation</li>
          </ul>
        </li>
        <li>📱 Mobile Development
          <ul>
            <li>Android applications</li>
            <li>Background processing</li>
            <li>Data persistence</li>
            <li>Network operations</li>
          </ul>
        </li>
        <li>🎮 Game Development
          <ul>
            <li>Game state management</li>
            <li>Resource loading</li>
            <li>Multiplayer support</li>
            <li>Performance optimization</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Advanced Java Overview</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Advanced Java Overview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <h2>📚 sub Topics</h2>
      <Link to="/ExceptionHandling"><p>Exception Handling</p></Link>
      <Link to="/FileHandling"><p>File Handling</p></Link>
      <Link to="/ThreadsMultithreading"><p>Threads & Multithreading</p></Link>
      <Link to="/Serialization"><p>Serialization</p></Link>
      <Link to="/JavaAnnotations"><p>Java Annotations</p></Link>
    </>
  )
}