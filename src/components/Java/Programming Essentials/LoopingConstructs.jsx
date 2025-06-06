import React from 'react'
import {Link} from 'react-router-dom'

export default function LoopingConstructs() {
  return (
    <>
      <h1>🔄 Looping Constructs in Java</h1>
      
      <p>
        Looping constructs are essential programming elements that allow repeated execution of code blocks. They help in processing collections, implementing algorithms, and handling repetitive tasks efficiently in Java programs.
      </p>

      <h2>📋 Types of Loops</h2>
      <ul>
        <li>🔁 For Loop
          <ul>
            <li>Traditional for loop</li>
            <li>Enhanced for loop (for-each)</li>
            <li>Nested for loops</li>
            <li>Multiple initialization</li>
          </ul>
        </li>
        <li>🔄 While Loop
          <ul>
            <li>Condition-based iteration</li>
            <li>Pre-test loop</li>
            <li>Infinite loop prevention</li>
            <li>Loop control variables</li>
          </ul>
        </li>
        <li>📦 Do-While Loop
          <ul>
            <li>Post-test loop</li>
            <li>Guaranteed execution</li>
            <li>Menu-driven programs</li>
            <li>Input validation</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>

      <h3>1. For Loop Examples</h3>
      <pre>
        <code>
{`// Traditional for loop
public class ForLoopExample {
    public static void printMultiplicationTable(int n) {
        for (int i = 1; i <= 10; i++) {
            System.out.printf("%d x %d = %d%n", n, i, n * i);
        }
    }
    
    // Enhanced for loop
    public static int sumArray(int[] numbers) {
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        return sum;
    }
    
    // Nested for loop
    public static void printPattern(int rows) {
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`}
        </code>
      </pre>

      <h3>2. While Loop Examples</h3>
      <pre>
        <code>
{`// While loop with counter
public class WhileLoopExample {
    public static int countDigits(int number) {
        int count = 0;
        while (number != 0) {
            number /= 10;
            count++;
        }
        return count;
    }
    
    // While loop with condition
    public static int findGCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}`}
        </code>
      </pre>

      <h3>3. Do-While Loop Examples</h3>
      <pre>
        <code>
{`// Menu-driven program
public class DoWhileExample {
    public static void showMenu() {
        Scanner scanner = new Scanner(System.in);
        int choice;
        
        do {
            System.out.println("\\nMenu:");
            System.out.println("1. Add");
            System.out.println("2. Subtract");
            System.out.println("3. Multiply");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");
            
            choice = scanner.nextInt();
            
            switch (choice) {
                case 1: // Add logic
                case 2: // Subtract logic
                case 3: // Multiply logic
                case 4: System.out.println("Goodbye!");
                    break;
                default: System.out.println("Invalid choice!");
            }
        } while (choice != 4);
    }
}`}
        </code>
      </pre>

      <h3>4. Loop Control Statements</h3>
      <pre>
        <code>
{`// Break and Continue examples
public class LoopControlExample {
    public static void findFirstEven(int[] numbers) {
        for (int num : numbers) {
            if (num % 2 == 0) {
                System.out.println("First even number: " + num);
                break;
            }
        }
    }
    
    public static void printOddNumbers(int[] numbers) {
        for (int num : numbers) {
            if (num % 2 == 0) {
                continue;
            }
            System.out.println("Odd number: " + num);
        }
    }
}`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>🎯 Loop Selection
          <ul>
            <li>Choose appropriate loop type</li>
            <li>Consider loop termination</li>
            <li>Optimize loop conditions</li>
            <li>Handle edge cases</li>
          </ul>
        </li>
        <li>🔄 Performance Tips
          <ul>
            <li>Avoid unnecessary iterations</li>
            <li>Use appropriate data structures</li>
            <li>Minimize loop body operations</li>
            <li>Consider parallel processing</li>
          </ul>
        </li>
        <li>📦 Common Pitfalls
          <ul>
            <li>Infinite loops</li>
            <li>Off-by-one errors</li>
            <li>Modifying loop variables</li>
            <li>Nested loop complexity</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>📊 Data Processing
          <ul>
            <li>Array traversal</li>
            <li>Collection processing</li>
            <li>Data filtering</li>
            <li>Aggregation operations</li>
          </ul>
        </li>
        <li>🎮 Game Development
          <ul>
            <li>Game loops</li>
            <li>Animation frames</li>
            <li>Collision detection</li>
            <li>State updates</li>
          </ul>
        </li>
        <li>📱 User Interface
          <ul>
            <li>Event handling</li>
            <li>Input processing</li>
            <li>UI updates</li>
            <li>Animation loops</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Looping Constructs</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Looping Constructs Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      
    </>
  )
}
