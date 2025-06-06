import React from 'react'
import { Link } from 'react-router-dom';

export default function JavaBasics() {
  return (
    <>
      <div className="java-container">
        <h1>📚 Java Basics</h1>
        
        <p>
          Java basics cover the fundamental concepts and syntax that every Java programmer needs to know. This includes variables, data types, operators, control structures, and basic input/output operations. Understanding these concepts is crucial for building more complex Java applications.
        </p>

        <h2>📋 Core Java Concepts</h2>
        <ul>
          <li>📝 Variables and Data Types - Storing and managing data</li>
          <li>🔧 Operators - Performing operations on data</li>
          <li>🔄 Control Flow - Making decisions and repeating actions</li>
          <li>📦 Arrays - Storing collections of data</li>
          <li>📥 Input/Output - Interacting with users and files</li>
        </ul>

        <h2>💡 Variables and Data Types</h2>
        <p>Variables are containers for storing data values. Java has two categories of data types:</p>
        <ul>
          <li>🔢 Primitive Types
            <ul>
              <li>byte, short, int, long</li>
              <li>float, double</li>
              <li>boolean</li>
              <li>char</li>
            </ul>
          </li>
          <li>📦 Reference Types
            <ul>
              <li>String</li>
              <li>Arrays</li>
              <li>Classes</li>
              <li>Interfaces</li>
            </ul>
          </li>
        </ul>

        <h2>💡 Control Flow</h2>
        <p>Control flow statements determine the order in which program statements are executed:</p>
        <ul>
          <li>📝 if-else - Conditional execution</li>
          <li>🔄 switch - Multiple choice selection</li>
          <li>🔄 for loop - Count-controlled iteration</li>
          <li>🔄 while loop - Condition-controlled iteration</li>
          <li>🔄 do-while loop - Post-test iteration</li>
        </ul>

        <h2>📝 Example: Variables and Data Types</h2>
        <pre>
          <code>
{`public class VariablesDemo {
    public static void main(String[] args) {
        // Primitive types
        int age = 25;
        double height = 1.75;
        boolean isStudent = true;
        char grade = 'A';
        
        // Reference types
        String name = "John Doe";
        int[] scores = {85, 90, 95};
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Height: " + height + " meters");
        System.out.println("Is Student: " + isStudent);
        System.out.println("Grade: " + grade);
        System.out.println("Scores: " + java.util.Arrays.toString(scores));
    }
}`}
          </code>
        </pre>

        <h2>📝 Example: Control Flow</h2>
        <pre>
          <code>
{`public class ControlFlowDemo {
    public static void main(String[] args) {
        int score = 85;
        
        // if-else statement
        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else if (score >= 70) {
            System.out.println("Grade: C");
        } else {
            System.out.println("Grade: F");
        }
        
        // switch statement
        char grade = 'B';
        switch (grade) {
            case 'A':
                System.out.println("Excellent!");
                break;
            case 'B':
                System.out.println("Good job!");
                break;
            case 'C':
                System.out.println("Passing grade");
                break;
            default:
                System.out.println("Needs improvement");
        }
        
        // for loop
        System.out.println("\\nCounting from 1 to 5:");
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
    }
}`}
          </code>
        </pre>

        <h2>📝 Example: Arrays</h2>
        <pre>
          <code>
{`public class ArraysDemo {
    public static void main(String[] args) {
        // Array declaration and initialization
        int[] numbers = {1, 2, 3, 4, 5};
        
        // Accessing array elements
        System.out.println("First element: " + numbers[0]);
        System.out.println("Last element: " + numbers[numbers.length - 1]);
        
        // Looping through array
        System.out.println("\\nAll elements:");
        for (int number : numbers) {
            System.out.print(number + " ");
        }
        
        // Modifying array elements
        numbers[0] = 10;
        System.out.println("\\n\\nAfter modification:");
        for (int number : numbers) {
            System.out.print(number + " ");
        }
    }
}`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: Java Basics</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/grEKMHGYyns"
            title="Java Basics Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
}