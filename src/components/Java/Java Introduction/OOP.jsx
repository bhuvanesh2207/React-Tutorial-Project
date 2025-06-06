import React from 'react'
import { Link } from 'react-router-dom';

export default function OOP() {
  return (
    <>
      <div className="java-container">
        <h1>🎯 Object-Oriented Programming in Java</h1>
        
        <p>
          Object-Oriented Programming (OOP) is a programming paradigm that uses objects to design applications and computer programs. Java is a pure object-oriented language that implements OOP concepts through classes and objects, making it powerful for building complex applications.
        </p>

        <h2>📋 Core OOP Concepts</h2>
        <ul>
          <li>📦 Encapsulation - Bundling data and methods
            <ul>
              <li>Data hiding</li>
              <li>Access modifiers</li>
              <li>Getters and setters</li>
            </ul>
          </li>
          <li>🔄 Inheritance - Reusing code and creating hierarchies
            <ul>
              <li>Single inheritance</li>
              <li>Interface implementation</li>
              <li>Method overriding</li>
            </ul>
          </li>
          <li>🔍 Polymorphism - Multiple forms of behavior
            <ul>
              <li>Method overloading</li>
              <li>Method overriding</li>
              <li>Dynamic binding</li>
            </ul>
          </li>
          <li>📝 Abstraction - Hiding implementation details
            <ul>
              <li>Abstract classes</li>
              <li>Interfaces</li>
              <li>Abstract methods</li>
            </ul>
          </li>
        </ul>

        <h2>💡 Class and Object Structure</h2>
        <ul>
          <li>📦 Class Components
            <ul>
              <li>Fields (instance variables)</li>
              <li>Constructors</li>
              <li>Methods</li>
              <li>Nested classes</li>
            </ul>
          </li>
          <li>🎯 Object Features
            <ul>
              <li>State (attributes)</li>
              <li>Behavior (methods)</li>
              <li>Identity (unique reference)</li>
            </ul>
          </li>
        </ul>

        <h2>📝 Example: Basic Class and Object</h2>
        <pre>
          <code>
{`public class Student {
    // Fields (attributes)
    private String name;
    private int age;
    private String major;
    
    // Constructor
    public Student(String name, int age, String major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }
    
    // Getters and Setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
    
    public String getMajor() { return major; }
    public void setMajor(String major) { this.major = major; }
    
    // Method
    public void study() {
        System.out.println(name + " is studying " + major);
    }
}`}
          </code>
        </pre>

        <h2>📝 Example: Inheritance and Polymorphism</h2>
        <pre>
          <code>
{`// Parent class
public class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void makeSound() {
        System.out.println("Some sound");
    }
}

// Child class
public class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " says: Woof!");
    }
    
    public void fetch() {
        System.out.println(name + " is fetching the ball");
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog("Buddy");
        myDog.makeSound(); // Polymorphism in action
    }
}`}
          </code>
        </pre>

        <h2>📝 Example: Interface and Abstraction</h2>
        <pre>
          <code>
{`// Interface
public interface Drawable {
    void draw();
    double getArea();
}

// Abstract class
public abstract class Shape implements Drawable {
    protected String color;
    
    public Shape(String color) {
        this.color = color;
    }
    
    public String getColor() {
        return color;
    }
}

// Concrete class
public class Circle extends Shape {
    private double radius;
    
    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a " + color + " circle");
    }
    
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: Object-Oriented Programming in Java</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/grEKMHGYyns"
            title="Object-Oriented Programming in Java Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
}