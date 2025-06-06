import React from 'react'
import {Link} from 'react-router-dom'

export default function AnatomyOfMain() {
  return (
    <>
      <h1>🔍 Anatomy of Main Method in Java</h1>
      
      <p>
        The main method is the entry point of any Java application. Understanding its structure, purpose, and best practices is fundamental to Java programming. This section covers everything you need to know about the main method.
      </p>

      <h2>📋 Main Method Components</h2>
      <ul>
        <li>🔍 Method Declaration
          <ul>
            <li>public access modifier</li>
            <li>static keyword</li>
            <li>void return type</li>
            <li>main method name</li>
            <li>String[] args parameter</li>
          </ul>
        </li>
        <li>🔄 Command Line Arguments
          <ul>
            <li>Argument parsing</li>
            <li>Type conversion</li>
            <li>Error handling</li>
            <li>Usage examples</li>
          </ul>
        </li>
        <li>📦 Best Practices
          <ul>
            <li>Method organization</li>
            <li>Error handling</li>
            <li>Resource management</li>
            <li>Code structure</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>

      <h3>1. Basic Main Method</h3>
      <pre>
        <code>
{`// Basic main method
public class MainMethodExample {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Accessing command line arguments
        if (args.length > 0) {
            System.out.println("First argument: " + args[0]);
        }
        
        // Getting system properties
        String javaVersion = System.getProperty("java.version");
        System.out.println("Java Version: " + javaVersion);
    }
}`}
        </code>
      </pre>

      <h3>2. Command Line Arguments</h3>
      <pre>
        <code>
{`// Command line arguments
public class CommandLineArgs {
    public static void main(String[] args) {
        // Check if arguments are provided
        if (args.length == 0) {
            System.out.println("No arguments provided");
            return;
        }
        
        // Process each argument
        for (int i = 0; i < args.length; i++) {
            System.out.println("Argument " + i + ": " + args[i]);
        }
        
        // Parse numeric arguments
        try {
            int number = Integer.parseInt(args[0]);
            System.out.println("Parsed number: " + number);
        } catch (NumberFormatException e) {
            System.out.println("Invalid number format");
        }
    }
}`}
        </code>
      </pre>

      <h3>3. Error Handling</h3>
      <pre>
        <code>
{`// Error handling in main
public class ErrorHandling {
    public static void main(String[] args) {
        try {
            // Validate arguments
            if (args.length < 2) {
                throw new IllegalArgumentException("Two arguments required");
            }
            
            // Process arguments
            int num1 = Integer.parseInt(args[0]);
            int num2 = Integer.parseInt(args[1]);
            
            // Perform operation
            int result = num1 / num2;
            System.out.println("Result: " + result);
            
        } catch (IllegalArgumentException e) {
            System.err.println("Error: " + e.getMessage());
            System.exit(1);
        } catch (NumberFormatException e) {
            System.err.println("Error: Invalid number format");
            System.exit(1);
        } catch (ArithmeticException e) {
            System.err.println("Error: Division by zero");
            System.exit(1);
        }
    }
}`}
        </code>
      </pre>

      <h3>4. Resource Management</h3>
      <pre>
        <code>
{`// Resource management
import java.io.*;

public class ResourceManagement {
    public static void main(String[] args) {
        // Using try-with-resources
        try (FileReader reader = new FileReader("input.txt");
             BufferedReader bufferedReader = new BufferedReader(reader)) {
            
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                System.out.println(line);
            }
            
        } catch (FileNotFoundException e) {
            System.err.println("File not found: " + e.getMessage());
        } catch (IOException e) {
            System.err.println("IO Error: " + e.getMessage());
        }
        
        // System resources
        Runtime runtime = Runtime.getRuntime();
        System.out.println("Available processors: " + runtime.availableProcessors());
        System.out.println("Free memory: " + runtime.freeMemory());
    }
}`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>🎯 Method Structure
          <ul>
            <li>Keep it simple and focused</li>
            <li>Delegate to other methods</li>
            <li>Handle exceptions properly</li>
            <li>Use meaningful variable names</li>
          </ul>
        </li>
        <li>🔄 Error Handling
          <ul>
            <li>Validate input early</li>
            <li>Use appropriate exceptions</li>
            <li>Provide helpful error messages</li>
            <li>Clean up resources</li>
          </ul>
        </li>
        <li>📦 Common Pitfalls
          <ul>
            <li>Missing main method</li>
            <li>Incorrect method signature</li>
            <li>Poor error handling</li>
            <li>Resource leaks</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>🌐 Web Applications
          <ul>
            <li>Server startup</li>
            <li>Configuration loading</li>
            <li>Service initialization</li>
            <li>Command line tools</li>
          </ul>
        </li>
        <li>📱 Desktop Applications
          <ul>
            <li>Application entry point</li>
            <li>UI initialization</li>
            <li>Resource loading</li>
            <li>Command processing</li>
          </ul>
        </li>
        <li>💾 System Tools
          <ul>
            <li>Batch processing</li>
            <li>System utilities</li>
            <li>Automation scripts</li>
            <li>Service programs</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Main Method in Java</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Main Method Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <Link to="/DatastrAlg"><p>Back to Data Structures and Algorithms</p></Link>
    </>
  )
}
