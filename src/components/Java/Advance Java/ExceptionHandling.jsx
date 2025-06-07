import React from 'react'
import {Link} from 'react-router-dom'

export default function ExceptionHandling() {
  return (
    <div className="java-container">
      <h1>⚠️ Exception Handling in Java</h1>
      
      <p>
        Exception handling is a powerful mechanism in Java that helps manage runtime errors and maintain program flow. It provides a structured way to handle unexpected situations and ensures graceful error recovery.
      </p>

      <h2>📋 Types of Exceptions</h2>
      <ul>
        <li>🔍 Checked Exceptions
          <ul>
            <li>Compile-time exceptions</li>
            <li>Must be handled</li>
            <li>Extends Exception</li>
            <li>Common examples: IOException, SQLException</li>
          </ul>
        </li>
        <li>🔄 Unchecked Exceptions
          <ul>
            <li>Runtime exceptions</li>
            <li>Optional handling</li>
            <li>Extends RuntimeException</li>
            <li>Common examples: NullPointerException, ArrayIndexOutOfBoundsException</li>
          </ul>
        </li>
        <li>📦 Error
          <ul>
            <li>System-level errors</li>
            <li>Cannot be handled</li>
            <li>Extends Error</li>
            <li>Common examples: OutOfMemoryError, StackOverflowError</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>

      <h3>1. Basic Exception Handling</h3>
      <pre>
        <code>
{`// Basic try-catch block
public class BasicExceptionHandling {
    public static void readFile(String filename) {
        try {
            FileReader file = new FileReader(filename);
            BufferedReader reader = new BufferedReader(file);
            String line = reader.readLine();
            System.out.println(line);
            reader.close();
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}`}
        </code>
      </pre>

      <h3>2. Multiple Exception Handling</h3>
      <pre>
        <code>
{`// Handling multiple exceptions
public class MultipleExceptionHandling {
    public static void processData(String[] data) {
        try {
            int sum = 0;
            for (String value : data) {
                sum += Integer.parseInt(value);
            }
            System.out.println("Sum: " + sum);
        } catch (NumberFormatException e) {
            System.out.println("Invalid number format: " + e.getMessage());
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index out of bounds: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Unexpected error: " + e.getMessage());
        }
    }
}`}
        </code>
      </pre>

      <h3>3. Custom Exception</h3>
      <pre>
        <code>
{`// Custom exception class
public class InsufficientFundsException extends Exception {
    private double amount;
    
    public InsufficientFundsException(double amount) {
        super("Insufficient funds: " + amount);
        this.amount = amount;
    }
    
    public double getAmount() {
        return amount;
    }
}

// Using custom exception
public class BankAccount {
    private double balance;
    
    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException(amount - balance);
        }
        balance -= amount;
    }
}`}
        </code>
      </pre>

      <h3>4. Try-with-Resources</h3>
      <pre>
        <code>
{`// Automatic resource management
public class ResourceManagement {
    public static void writeToFile(String filename, String content) {
        try (FileWriter writer = new FileWriter(filename);
             BufferedWriter bufferedWriter = new BufferedWriter(writer)) {
            bufferedWriter.write(content);
        } catch (IOException e) {
            System.out.println("Error writing to file: " + e.getMessage());
        } catch (Exception e) { // Catching a broader exception for demonstration
            System.out.println("An unexpected error occurred: " + e.getMessage());
        }
    }
}`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>🎯 Exception Selection
          <ul>
            <li>Use specific exceptions</li>
            <li>Avoid catching Exception</li>
            <li>Handle exceptions at appropriate level</li>
            <li>Document exceptions</li>
          </ul>
        </li>
        <li>🔄 Resource Management
          <ul>
            <li>Use try-with-resources</li>
            <li>Close resources properly</li>
            <li>Handle cleanup in finally</li>
            <li>Check resource state</li>
          </ul>
        </li>
        <li>📦 Error Handling
          <ul>
            <li>Provide meaningful messages</li>
            <li>Log exceptions properly</li>
            <li>Maintain exception chain</li>
            <li>Consider recovery options</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>🏦 Banking Systems
          <ul>
            <li>Transaction handling</li>
            <li>Account validation</li>
            <li>Error recovery</li>
            <li>Audit logging</li>
          </ul>
        </li>
        <li>📱 Web Applications
          <ul>
            <li>Request processing</li>
            <li>Data validation</li>
            <li>Session management</li>
          <li>Error responses</li>
          </ul>
        </li>
        <li>💾 File Systems
          <ul>
            <li>File operations</li>
            <li>Permission handling</li>
            <li>Data integrity</li>
            <li>Recovery procedures</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Exception Handling</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Exception Handling Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <Link to="/AdvJava"><p>Back to Advanced Java</p></Link>
    </div>
  )
}
