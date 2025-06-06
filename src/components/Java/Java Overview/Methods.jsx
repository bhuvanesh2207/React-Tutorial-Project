import React from 'react'
import {Link} from 'react-router-dom'

export default function Methods() {
  return (
    <>
      <h1>🔧 Java Methods</h1>
      
      <p>
        Methods in Java are blocks of code that perform specific tasks and can be reused throughout your program. They help in organizing code, improving readability, and promoting code reuse. A method is a collection of statements that are grouped together to perform an operation.
      </p>

      <h2>📋 Method Components</h2>
      <ul>
        <li>🔑 Access Modifier - Controls method visibility</li>
        <li>📝 Return Type - Data type of the value returned</li>
        <li>📌 Method Name - Identifier for the method</li>
        <li>📦 Parameters - Input values for the method</li>
        <li>📝 Method Body - Code to be executed</li>
      </ul>

      <h2>✨ Types of Methods</h2>
      <ul>
        <li>📝 Instance Methods - Belong to an instance of a class</li>
        <li>📝 Static Methods - Belong to the class itself</li>
        <li>📝 Abstract Methods - Declared without implementation</li>
        <li>📝 Final Methods - Cannot be overridden</li>
        <li>📝 Synchronized Methods - Thread-safe methods</li>
      </ul>

      <h2>💡 Method Overloading</h2>
      <p>Method overloading allows a class to have multiple methods with the same name but different parameters. The compiler determines which method to call based on the arguments provided.</p>
      <ul>
        <li>📝 Different number of parameters</li>
        <li>📝 Different types of parameters</li>
        <li>📝 Different order of parameters</li>
      </ul>

      <h2>💡 Method Overriding</h2>
      <p>Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass. The overridden method must have the same name, parameters, and return type.</p>
      <ul>
        <li>📝 Same method signature</li>
        <li>📝 Same return type</li>
        <li>📝 Same or more accessible access modifier</li>
      </ul>

      <h2>📝 Example: Basic Method</h2>
      <pre>
        <code>
{`public class MethodDemo {
    // Instance method
    public void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
    
    // Static method
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        MethodDemo demo = new MethodDemo();
        demo.greet("John");
        
        int sum = add(5, 3);
        System.out.println("Sum: " + sum);
    }
}`}
        </code>
      </pre>

      <h2>📝 Example: Method Overloading</h2>
      <pre>
        <code>
{`public class Calculator {
    // Method to add two integers
    public int add(int a, int b) {
        return a + b;
    }
    
    // Method to add three integers
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // Method to add two doubles
    public double add(double a, double b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        
        System.out.println("Sum of two integers: " + calc.add(5, 3));
        System.out.println("Sum of three integers: " + calc.add(5, 3, 2));
        System.out.println("Sum of two doubles: " + calc.add(5.5, 3.3));
    }
}`}
        </code>
      </pre>

      <h2>🎥 Video Tutorial: Java Methods</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/8cm1x4bC610"
          title="Java Methods Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      
    </>
  )
}