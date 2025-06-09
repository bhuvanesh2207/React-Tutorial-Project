import React from 'react'
import { Link } from 'react-router-dom';

export default function Javaintro() {
  return (
    <>
      <div className="java-container">
        <h1>🌱 Introduction to Java</h1>

        <p>
          Java is one of the most popular programming languages in the world, known for its "Write Once, Run Anywhere" capability. It's a high-level, object-oriented language that is widely used for building enterprise applications, Android apps, web applications, and more.
        </p>

        <h2>✨ Why Learn Java?</h2>
        <ul>
          <li>🌐 Platform Independence - Run on any device with JVM</li>
          <li>🔒 Security - Built-in security features</li>
          <li>📦 Object-Oriented - Better code organization</li>
          <li>🧵 Multithreading - Concurrent programming</li>
          <li>📚 Rich API - Extensive library support</li>
          <li>💼 Job Opportunities - High demand in industry</li>
          <li>🤝 Community Support - Large developer community</li>
          <li>📱 Android Development - Primary language for Android</li>
        </ul>

        <h2>🔧 Setting Up Java Environment</h2>
        <ol>
          <li>📥 Download and Install JDK (Java Development Kit)</li>
          <li>⚙️ Set up JAVA_HOME environment variable</li>
          <li>📝 Add Java to system PATH</li>
          <li>💻 Install an IDE (Integrated Development Environment)
            <ul>
              <li>IntelliJ IDEA</li>
              <li>Eclipse</li>
              <li>VS Code with Java extensions</li>
            </ul>
          </li>
        </ol>

        <h2>📝 Basic Java Program Structure</h2>
        <pre>
          <code>
{`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
          </code>
        </pre>

        <h2>💡 Understanding the Structure</h2>
        <ul>
          <li>📦 public class - Class declaration</li>
          <li>📌 main() - Entry point of the program</li>
          <li>📝 System.out.println() - Output to console</li>
          <li>📦 String[] args - Command line arguments</li>
        </ul>

        <h2>📝 Example: Simple Calculator</h2>
        <pre>
          <code>
{`public class Calculator {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 5;
        
        System.out.println("Addition: " + (num1 + num2));
        System.out.println("Subtraction: " + (num1 - num2));
        System.out.println("Multiplication: " + (num1 * num2));
        System.out.println("Division: " + (num1 / num2));
    }
}`}
          </code>
        </pre>

        <h2>📝 Example: String Operations</h2>
        <pre>
          <code>
{`public class StringDemo {
    public static void main(String[] args) {
        String message = "Hello, Java!";
        
        // String length
        System.out.println("Length: " + message.length());
        
        // String concatenation
        String name = "John";
        System.out.println(message + " My name is " + name);
        
        // String methods
        System.out.println("Uppercase: " + message.toUpperCase());
        System.out.println("Lowercase: " + message.toLowerCase());
        System.out.println("Contains 'Java': " + message.contains("Java"));
    }
}`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: Java Introduction</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/grEKMHGYyns"
            title="Java Introduction Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2>📚 sub Topics</h2>
        <ul>
          <li><Link to="/FirstJavaCode"><p>First Java Code</p></Link></li>
          <li><Link to="/JavaBasics"><p>Java Basics</p></Link></li>
          <li><Link to="/JavaVariablesFeatures"><p>Java Variables & Features</p></Link></li>
          <li><Link to="/OOP"><p>Object-Oriented Programming</p></Link></li>
          <li><Link to="/DecodeDataStructures"><p>Data Structures</p></Link></li>
        </ul>
      </div>
    </>
  )
}
