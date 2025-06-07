import React from 'react'
import {Link} from 'react-router-dom'

export default function Polymorphism() {
  return (
    <div className="java-container">
      <h1>🔍 Polymorphism in Java</h1>
      
      <p>
        Polymorphism is a core concept of Object-Oriented Programming that allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to represent different underlying forms (data types) and provides the ability to perform a single action in different ways.
      </p>

      <h2>📋 Types of Polymorphism</h2>
      <ul>
        <li>🔄 Compile-time Polymorphism (Static)
          <ul>
            <li>Method overloading</li>
            <li>Operator overloading</li>
            <li>Early binding</li>
          </ul>
        </li>
        <li>🔍 Runtime Polymorphism (Dynamic)
          <ul>
            <li>Method overriding</li>
            <li>Interface implementation</li>
            <li>Late binding</li>
          </ul>
        </li>
      </ul>

      <h2>💡 Key Concepts</h2>
      <ul>
        <li>📦 Method Overloading
          <ul>
            <li>Same method name</li>
            <li>Different parameters</li>
            <li>Compile-time binding</li>
          </ul>
        </li>
        <li>🔄 Method Overriding
          <ul>
            <li>Same method signature</li>
            <li>Different implementation</li>
            <li>Runtime binding</li>
          </ul>
        </li>
        <li>🔑 Dynamic Method Dispatch
          <ul>
            <li>Reference variable</li>
            <li>Object type</li>
            <li>Method resolution</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Example: Method Overloading</h2>
      <pre>
        <code>
{`public class Calculator {
    // Method overloading with different parameters
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    public String add(String a, String b) {
        return a + b;
    }
    
    // Method overloading with different parameter types
    public void display(int number) {
        System.out.println("Integer: " + number);
    }
    
    public void display(String text) {
        System.out.println("String: " + text);
    }
    
    public void display(double number) {
        System.out.println("Double: " + number);
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        
        // Different method calls based on parameters
        System.out.println(calc.add(5, 3));        // Integer addition
        System.out.println(calc.add(2.5, 3.7));    // Double addition
        System.out.println(calc.add(1, 2, 3));     // Three integers
        System.out.println(calc.add("Hello ", "World")); // String concatenation
        
        // Different display methods
        calc.display(42);
        calc.display("Hello");
        calc.display(3.14);
    }
}`}
        </code>
      </pre>

      <h2>📝 Example: Runtime Polymorphism</h2>
      <pre>
        <code>
{`// Base class
public class Shape {
    protected String name;
    
    public Shape(String name) {
        this.name = name;
    }
    
    public void draw() {
        System.out.println("Drawing a shape");
    }
    
    public double calculateArea() {
        return 0.0;
    }
}

// Derived classes
public class Circle extends Shape {
    private double radius;
    
    public Circle(String name, double radius) {
        super(name);
        this.radius = radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a circle");
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}

public class Rectangle extends Shape {
    private double width;
    private double height;
    
    public Rectangle(String name, double width, double height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a rectangle");
    }
    
    @Override
    public double calculateArea() {
        return width * height;
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        // Runtime polymorphism
        Shape shape1 = new Circle("Circle", 5.0);
        Shape shape2 = new Rectangle("Rectangle", 4.0, 6.0);
        
        // Dynamic method dispatch
        shape1.draw();  // Calls Circle's draw method
        shape2.draw();  // Calls Rectangle's draw method
        
        System.out.println("Circle area: " + shape1.calculateArea());
        System.out.println("Rectangle area: " + shape2.calculateArea());
        
        // Array of shapes
        Shape[] shapes = new Shape[2];
        shapes[0] = shape1;
        shapes[1] = shape2;
        
        // Polymorphic method calls
        for (Shape shape : shapes) {
            shape.draw();
            System.out.println("Area: " + shape.calculateArea());
        }
    }
}`}
        </code>
      </pre>

      <h2>🎥 Video Tutorial: Polymorphism in Java</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Polymorphism in Java Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
