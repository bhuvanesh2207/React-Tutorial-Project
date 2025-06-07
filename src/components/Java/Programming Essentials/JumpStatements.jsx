import React from 'react'
import {Link} from 'react-router-dom'

export default function JumpStatements() {
  return (
    <>
    <div className="java-container">
      <h1>🔀 Jump Statements in Java</h1>
      
      <p>
        Jump statements are control flow statements that allow the program to transfer control to a different part of the code. They are essential for controlling program flow, handling errors, and implementing complex logic in Java applications.
      </p>

      <h2>📋 Types of Jump Statements</h2>
      <ul>
        <li>🔍 Break Statement
          <ul>
            <li>Loop termination</li>
            <li>Switch case exit</li>
            <li>Labeled break</li>
            <li>Nested loop control</li>
          </ul>
        </li>
        <li>🔄 Continue Statement
          <ul>
            <li>Skip iteration</li>
            <li>Labeled continue</li>
            <li>Loop optimization</li>
            <li>Conditional skipping</li>
          </ul>
        </li>
        <li>📦 Return Statement
          <ul>
            <li>Method termination</li>
            <li>Value return</li>
            <li>Early exit</li>
            <li>Void methods</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>

      <h3>1. Break Statement Examples</h3>
      <pre>
        <code>
{`// Simple break in loop
public class BreakExample {
    public static int findNumber(int[] numbers, int target) {
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] == target) {
                return i;  // Break and return when found
            }
        }
        return -1;  // Not found
    }
    
    // Labeled break
    public static void searchInMatrix(int[][] matrix, int target) {
        outerLoop: for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == target) {
                    System.out.println("Found at: " + i + "," + j);
                    break outerLoop;  // Break outer loop
                }
            }
        }
    }
}`}
        </code>
      </pre>

      <h3>2. Continue Statement Examples</h3>
      <pre>
        <code>
{`// Skip even numbers
public class ContinueExample {
    public static void printOddNumbers(int[] numbers) {
        for (int num : numbers) {
            if (num % 2 == 0) {
                continue;  // Skip even numbers
            }
            System.out.println("Odd number: " + num);
        }
    }
    
    // Labeled continue
    public static void processMatrix(int[][] matrix) {
        outerLoop: for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] < 0) {
                    continue outerLoop;  // Skip entire row
                }
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}`}
        </code>
      </pre>

      <h3>3. Return Statement Examples</h3>
      <pre>
        <code>
{`// Early return pattern
public class ReturnExample {
    public static boolean isValidUser(User user) {
        if (user == null) {
            return false;  // Early return
        }
        if (user.getAge() < 18) {
            return false;  // Early return
        }
        if (!user.isVerified()) {
            return false;  // Early return
        }
        return true;
    }
    
    // Multiple return points
    public static String getGrade(int score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    }
}`}
        </code>
      </pre>

      <h3>4. Complex Control Flow</h3>
      <pre>
        <code>
{`// Combining jump statements
public class ComplexControlFlow {
    public static void processData(int[] data) {
        for (int i = 0; i < data.length; i++) {
            if (data[i] < 0) {
                continue;  // Skip negative numbers
            }
            
            if (data[i] > 100) {
                break;  // Stop processing if number too large
            }
            
            if (data[i] == 42) {
                return;  // Exit method if magic number found
            }
            
            System.out.println("Processing: " + data[i]);
        }
    }
}`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>🎯 Usage Guidelines
          <ul>
            <li>Use break for loop termination</li>
            <li>Use continue for skipping iterations</li>
            <li>Use return for method exit</li>
            <li>Avoid deep nesting</li>
          </ul>
        </li>
        <li>🔄 Code Structure
          <ul>
            <li>Clear control flow</li>
            <li>Proper indentation</li>
            <li>Meaningful labels</li>
            <li>Consistent style</li>
          </ul>
        </li>
        <li>📦 Common Pitfalls
          <ul>
            <li>Infinite loops</li>
            <li>Unreachable code</li>
            <li>Complex control flow</li>
            <li>Missing break statements</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>🔍 Search Algorithms
          <ul>
            <li>Linear search</li>
            <li>Binary search</li>
            <li>Pattern matching</li>
            <li>Data filtering</li>
          </ul>
        </li>
        <li>🔄 Data Processing
          <ul>
            <li>Input validation</li>
            <li>Error handling</li>
            <li>Data transformation</li>
            <li>Conditional processing</li>
          </ul>
        </li>
        <li>📦 Error Handling
          <ul>
            <li>Exception management</li>
            <li>Resource cleanup</li>
            <li>Error recovery</li>
            <li>Graceful termination</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Jump Statements</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Jump Statements Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
      
    </>
  )
}
