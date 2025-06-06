import React from 'react'
import {Link} from 'react-router-dom'

export default function UserInput() {
  return (
    <>
      <h1>⌨️ Java User Input</h1>
      
      <p>
        Taking user input is a fundamental part of interactive Java applications. Java provides several ways to get input from users, including the Scanner class, BufferedReader class, and Console class. Each method has its own advantages and use cases.
      </p>

      <h2>📋 Methods to Get User Input</h2>
      <ul>
        <li>📝 Scanner Class - Most common and flexible</li>
        <li>📝 BufferedReader Class - Efficient for reading lines</li>
        <li>📝 Console Class - Secure for password input</li>
        <li>📝 Command Line Arguments - Input when starting program</li>
      </ul>

      <h2>💡 Scanner Class</h2>
      <p>The Scanner class is the most commonly used method for getting user input. It provides methods to read different types of data from various sources.</p>
      <ul>
        <li>📝 next() - Reads a single word</li>
        <li>📝 nextLine() - Reads a complete line</li>
        <li>📝 nextInt() - Reads an integer</li>
        <li>📝 nextDouble() - Reads a double</li>
        <li>📝 nextBoolean() - Reads a boolean</li>
      </ul>

      <h2>💡 BufferedReader Class</h2>
      <p>The BufferedReader class is more efficient for reading lines of text, especially when dealing with large amounts of input.</p>
      <ul>
        <li>📝 readLine() - Reads a complete line</li>
        <li>📝 read() - Reads a single character</li>
        <li>📝 read(char[] cbuf) - Reads characters into an array</li>
      </ul>

      <h2>💡 Console Class</h2>
      <p>The Console class provides a secure way to read user input, especially for sensitive data like passwords.</p>
      <ul>
        <li>📝 readLine() - Reads a line of text</li>
        <li>📝 readPassword() - Reads a password without echoing</li>
      </ul>

      <h2>📝 Example: Scanner Class</h2>
      <pre>
        <code>
{`import java.util.Scanner;

public class ScannerDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        
        System.out.print("Enter your height (in meters): ");
        double height = scanner.nextDouble();
        
        System.out.println("\\nUser Information:");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Height: " + height + " meters");
        
        scanner.close();
    }
}`}
        </code>
      </pre>

      <h2>📝 Example: BufferedReader Class</h2>
      <pre>
        <code>
{`import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class BufferedReaderDemo {
    public static void main(String[] args) {
        try {
            BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
            
            System.out.print("Enter your name: ");
            String name = reader.readLine();
            
            System.out.print("Enter your age: ");
            int age = Integer.parseInt(reader.readLine());
            
            System.out.println("\\nUser Information:");
            System.out.println("Name: " + name);
            System.out.println("Age: " + age);
            
            reader.close();
        } catch (IOException e) {
            System.out.println("Error reading input: " + e.getMessage());
        }
    }
}`}
        </code>
      </pre>

      <h2>🎥 Video Tutorial: Java User Input</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/8cm1x4bC610"
          title="Java User Input Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      
    </>
  )
}