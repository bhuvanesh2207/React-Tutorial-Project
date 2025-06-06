import React from 'react'
import { Link } from 'react-router-dom';

export default function FirstJavaCode() {
  return (
    <>
      <div className="java-container">
        <h1>🚀 Your First Java Code</h1>
        
        <p>
          Writing your first Java program is an exciting milestone in your programming journey. This section will guide you through creating, compiling, and running a simple Java program, helping you understand the basic structure and syntax of Java.
        </p>

        <h2>📋 Steps to Create Your First Program</h2>
        <ol>
          <li>📝 Create a new Java file with .java extension</li>
          <li>📦 Write the class definition</li>
          <li>📌 Add the main method</li>
          <li>📝 Write your code</li>
          <li>💻 Compile the program</li>
          <li>🚀 Run the program</li>
        </ol>

        <h2>📝 Basic Program Structure</h2>
        <pre>
          <code>
{`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
          </code>
        </pre>

        <h2>✨ Understanding the Code</h2>
        <ul>
          <li>📦 public class HelloWorld - Class declaration</li>
          <li>📌 public static void main() - Entry point method</li>
          <li>📦 String[] args - Command line arguments</li>
          <li>📝 System.out.println() - Output to console</li>
        </ul>

        <h2>💡 Compiling and Running</h2>
        <p>To compile and run your Java program:</p>
        <ol>
          <li>📝 Save the file as HelloWorld.java</li>
          <li>💻 Compile: javac HelloWorld.java</li>
          <li>🚀 Run: java HelloWorld</li>
        </ol>

        <h2>📝 Example: Interactive Program</h2>
        <pre>
          <code>
{`import java.util.Scanner;

public class InteractiveProgram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        
        System.out.println("\\nWelcome, " + name + "!");
        System.out.println("You are " + age + " years old.");
        
        scanner.close();
    }
}`}
          </code>
        </pre>

        <h2>📝 Example: Simple Calculator</h2>
        <pre>
          <code>
{`import java.util.Scanner;

public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter first number: ");
        double num1 = scanner.nextDouble();
        
        System.out.print("Enter second number: ");
        double num2 = scanner.nextDouble();
        
        System.out.println("\\nResults:");
        System.out.println("Addition: " + (num1 + num2));
        System.out.println("Subtraction: " + (num1 - num2));
        System.out.println("Multiplication: " + (num1 * num2));
        System.out.println("Division: " + (num1 / num2));
        
        scanner.close();
    }
}`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: First Java Program</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/grEKMHGYyns"
            title="First Java Program Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
}
