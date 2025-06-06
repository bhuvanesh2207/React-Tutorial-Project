import React from 'react'
import java_logo from "../images/java_logo.png"
import { Link } from 'react-router-dom'

export default function Java() {
  return (
    <div className="java-container">
      <h2>Java</h2>
      
      <p>
        Java is a high-level, object-oriented programming language used to build web apps, mobile applications, and enterprise software systems.
        It is known for its Write Once, Run Anywhere capability, which means code written in Java can run on any device that supports the Java Virtual Machine (JVM).
        Java syntax and structure is similar to C-based languages like C++ and C#. Its robustness, platform-independent compatibility, and strong memory management have made it a go-to language for developers worldwide.
        This Java tutorial is designed for both beginners and experienced professionals and it covers basic to advanced Java topics.
      </p>
      <img src={java_logo} alt="Java Logo" />

      <h3>Why Learn Java?</h3>
      <p>
        Java powers large-scale enterprise systems, Android apps, and server-side applications.
        Top companies like Amazon, Google, and Netflix use Java for backend systems.
        It's also the foundation of many software tools, web apps, and IoT devices.
      </p>

      <h3>Popular Java Applications</h3>
      <ul>
        <li>Android App Development</li>
        <li>Web Development (via Spring, JSP, Servlets)</li>
        <li>Enterprise Systems (Banking, Insurance, CRM)</li>
        <li>Game Development (using LibGDX)</li>
        <li>Big Data Technologies (Hadoop, Apache Storm)</li>
      </ul>

      <h3>Prerequisites</h3>
      <ul>
        <li>Basic understanding of computers and logic</li>
        <li>Familiarity with English (for reading code and documentation)</li>
        <li>No prior coding experience required (for beginners' track)</li>
      </ul>

      <h3>Tools You'll Work With</h3>
      <ul>
        <li>JDK (Java Development Kit)</li>
        <li>IDE: Eclipse, IntelliJ IDEA, or VS Code</li>
        <li>Build Tools: Maven or Gradle</li>
        <li>Java Documentation & Online Repositories</li>
      </ul>

      <h3>Quick Example: Hello, World!</h3>
      <pre>
        <code>
{`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
        </code>
      </pre>

      <h3>Key Features of Java</h3>
      <ul>
        <li>Object-Oriented</li>
        <li>Platform Independent</li>
        <li>Robust and Secure</li>
        <li>Automatic Memory Management (Garbage Collection)</li>
        <li>Rich API and Large Community Support</li>
      </ul>

      <h3>Course Outline</h3>
      <ul>
        <li><Link to="/JavaIntro">Java Introduction</Link></li>
        <li><Link to="/JavaOverview">Java Fundamentals Overview</Link></li>
        <li><Link to="/ProgrammingEssentials">Programming Essentials</Link></li>
        <li><Link to="/Oops">Diving into OOPs</Link></li>
        <li><Link to="/DatastrAlg">Data Structures and Algorithms</Link></li>
        <li><Link to="/AdvJava">Advanced Java</Link></li>
      </ul>

      <h3>Who Should Learn Java?</h3>
      <ul>
        <li>Absolute beginners with no programming experience</li>
        <li>Students preparing for exams or interviews</li>
        <li>Developers looking to refresh or deepen their Java knowledge</li>
        <li>Anyone interested in building robust, cross-platform applications</li>
      </ul>

      <div>
        <strong>Did you know?</strong> Java is used in over <strong>3 billion devices</strong> worldwide!
      </div>
    </div>
  )
}
