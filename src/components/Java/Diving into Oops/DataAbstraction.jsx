import React from 'react'
import { Link } from 'react-router-dom'

export default function DataAbstraction() {
  return (
    <div className="java-container">
      <h1>📚 Data Abstraction in Java</h1>

      <p>
        Data Abstraction is a fundamental concept in Object-Oriented Programming that focuses on hiding the implementation details and showing only the essential features of an object. It helps in reducing programming complexity and effort by hiding unnecessary details from the user.
      </p>

      <h2>📋 Understanding Abstraction</h2>
      <ul>
        <li>🎯 What is Abstraction?
          <ul>
            <li>Hiding complex implementation details</li>
            <li>Showing only essential features</li>
            <li>Focusing on what an object does rather than how it does it</li>
            <li>Creating a simplified model of complex systems</li>
          </ul>
        </li>
        <li>💡 Why Use Abstraction?
          <ul>
            <li>Reduces complexity</li>
            <li>Improves code maintainability</li>
            <li>Enhances security</li>
            <li>Promotes code reusability</li>
            <li>Simplifies the interface</li>
          </ul>
        </li>
        <li>🔑 Key Benefits
          <ul>
            <li>Better code organization</li>
            <li>Easier debugging</li>
            <li>Improved security</li>
            <li>Enhanced flexibility</li>
            <li>Better code maintenance</li>
          </ul>
        </li>
      </ul>

      <h2>💡 Implementation Methods</h2>
      <ul>
        <li>📦 Abstract Classes
          <ul>
            <li>Cannot be instantiated directly</li>
            <li>Can have both abstract and concrete methods</li>
            <li>Can have constructors</li>
            <li>Can have instance variables</li>
            <li>Supports single inheritance</li>
          </ul>
        </li>
        <li>🔄 Interfaces
          <ul>
            <li>Pure abstraction</li>
            <li>All methods are abstract by default</li>
            <li>Can have default and static methods</li>
            <li>Supports multiple inheritance</li>
            <li>Can have constants</li>
          </ul>
        </li>
        <li>🔒 Access Modifiers
          <ul>
            <li>public - accessible everywhere</li>
            <li>protected - accessible within package and subclasses</li>
            <li>private - accessible only within class</li>
            <li>default - accessible within package</li>
          </ul>
        </li>
      </ul>

      <h2>📌 Example 1: Using Abstract Class</h2>
      <pre>
        <code>
{`abstract class Animal {
  abstract void sound();

  void sleep() {
    System.out.println("Sleeping...");
  }
}

class Dog extends Animal {
  void sound() {
    System.out.println("Barks");
  }
}

public class Main {
  public static void main(String[] args) {
    Animal dog = new Dog();
    dog.sound(); // Barks
    dog.sleep(); // Sleeping...
  }
}`}
        </code>
      </pre>

      <h2>📌 Example 2: Using Interface</h2>
      <pre>
        <code>
{`interface Vehicle {
  void start();
  void stop();
}

class Car implements Vehicle {
  public void start() {
    System.out.println("Car started");
  }
  public void stop() {
    System.out.println("Car stopped");
  }
}

public class Main {
  public static void main(String[] args) {
    Vehicle v = new Car();
    v.start(); // Car started
    v.stop();  // Car stopped
  }
}`}
        </code>
      </pre>

      <h2>📝 Best Practices</h2>
      <ul>
        <li>🎯 Design Principles
          <ul>
            <li>Keep interfaces simple and focused</li>
            <li>Hide implementation details</li>
            <li>Use meaningful names</li>
            <li>Follow the Single Responsibility Principle</li>
            <li>Maintain consistency in abstraction levels</li>
          </ul>
        </li>
        <li>🔄 Implementation Guidelines
          <ul>
            <li>Choose between abstract classes and interfaces wisely</li>
            <li>Use appropriate access modifiers</li>
            <li>Document abstract methods clearly</li>
            <li>Keep the abstraction level consistent</li>
            <li>Consider future extensibility</li>
          </ul>
        </li>
        <li>📦 Common Pitfalls
          <ul>
            <li>Over-abstraction</li>
            <li>Leaking implementation details</li>
            <li>Inconsistent abstraction levels</li>
            <li>Poor documentation</li>
            <li>Unnecessary complexity</li>
          </ul>
        </li>
      </ul>

      <h2>💡 Real-World Applications</h2>
      <ul>
        <li>📱 User Interface Design
          <ul>
            <li>Hiding complex backend operations</li>
            <li>Providing simple user interactions</li>
            <li>Managing system resources</li>
          </ul>
        </li>
        <li>🔒 Security Systems
          <ul>
            <li>Encryption mechanisms</li>
            <li>Authentication processes</li>
            <li>Access control systems</li>
          </ul>
        </li>
        <li>🔄 Database Operations
          <ul>
            <li>Connection management</li>
            <li>Query execution</li>
            <li>Transaction handling</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Data Abstraction in Java</h2>
      <div style={{ marginBottom: "1em" }}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Data Abstraction in Java Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
