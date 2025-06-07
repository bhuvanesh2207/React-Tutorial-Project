import React from 'react'
import {Link} from 'react-router-dom'

export default function Objects() {
  return (
    <div className="java-container">
      <h1>📦 Objects in Java</h1>
      
      <p>
        Objects are instances of classes that represent real-world entities in Java. They encapsulate both data (attributes) and behavior (methods), making them the fundamental building blocks of object-oriented programming.
      </p>

      <h2>📋 Object Characteristics</h2>
      <ul>
        <li>🎯 State
          <ul>
            <li>Attributes or properties</li>
            <li>Data members</li>
            <li>Instance variables</li>
          </ul>
        </li>
        <li>🔄 Behavior
          <ul>
            <li>Methods</li>
            <li>Functions</li>
            <li>Operations</li>
          </ul>
        </li>
        <li>🔑 Identity
          <ul>
            <li>Unique reference</li>
            <li>Memory address</li>
            <li>Object identifier</li>
          </ul>
        </li>
      </ul>

      <h2>💡 Object Creation and Usage</h2>
      <ul>
        <li>📝 Declaration
          <ul>
            <li>Class name</li>
            <li>Object name</li>
            <li>Reference variable</li>
          </ul>
        </li>
        <li>🔄 Instantiation
          <ul>
            <li>new keyword</li>
            <li>Constructor call</li>
            <li>Memory allocation</li>
          </ul>
        </li>
        <li>📦 Initialization
          <ul>
            <li>Constructor parameters</li>
            <li>Default values</li>
            <li>Initial state</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Example: Object Creation and Usage</h2>
      <pre>
        <code>
{`public class Student {
    // Instance variables (state)
    private String name;
    private int age;
    private String major;
    
    // Constructor
    public Student(String name, int age, String major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }
    
    // Methods (behavior)
    public void study() {
        System.out.println(name + " is studying " + major);
    }
    
    public void takeExam() {
        System.out.println(name + " is taking an exam");
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Major: " + major);
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        // Object creation
        Student student1 = new Student("John", 20, "Computer Science");
        Student student2 = new Student("Alice", 19, "Mathematics");
        
        // Using object methods
        student1.displayInfo();
        student1.study();
        
        student2.displayInfo();
        student2.takeExam();
    }
}`}
        </code>
      </pre>

      <h2>📝 Example: Object Comparison</h2>
      <pre>
        <code>
{`public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        
        Person person = (Person) obj;
        return age == person.age && name.equals(person.name);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
    
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Person p1 = new Person("John", 25);
        Person p2 = new Person("John", 25);
        Person p3 = new Person("Alice", 30);
        
        System.out.println("p1 equals p2: " + p1.equals(p2));
        System.out.println("p1 equals p3: " + p1.equals(p3));
        System.out.println("p1 toString: " + p1.toString());
    }
}`}
        </code>
      </pre>

      <h2>🎥 Video Tutorial: Objects in Java</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Objects in Java Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  )
}
