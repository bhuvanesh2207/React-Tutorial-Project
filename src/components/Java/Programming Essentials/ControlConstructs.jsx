import React from 'react'
import {Link} from 'react-router-dom'

export default function ControlConstructs() {
  return (
    <>
      <h1>🎯 Control Constructs in Java</h1>
      
      <p>
        Control Constructs are fundamental programming elements that determine the flow of execution in a Java program. They allow developers to make decisions, execute code conditionally, and control the program's behavior based on different conditions.
      </p>

      <h2>📋 Types of Control Constructs</h2>
      <ul>
        <li>🔍 Decision Making
          <ul>
            <li>if statement</li>
            <li>if-else statement</li>
            <li>if-else-if ladder</li>
            <li>nested if statements</li>
            <li>switch statement</li>
          </ul>
        </li>
        <li>🔄 Conditional Operators
          <ul>
            <li>Ternary operator (?:)</li>
            <li>Logical operators (&&, ||, !)</li>
            <li>Comparison operators ({'>'}, {'<'}, {'>='}, {'<='}, ==, !=)</li>
            <li>Bitwise operators</li>
          </ul>
        </li>
        <li>📦 Switch Statement
          <ul>
            <li>case labels</li>
            <li>default case</li>
            <li>break statement</li>
            <li>fall-through behavior</li>
            <li>switch expressions (Java 14+)</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>
      
      <h3>1. Basic Decision Making</h3>
      <pre>
        <code>
{`// Simple if-else example
public class GradeCalculator {
    public static String calculateGrade(int score) {
        if (score >= 90) {
            return "A";
        } else if (score >= 80) {
            return "B";
        } else if (score >= 70) {
            return "C";
        } else if (score >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}`}
        </code>
      </pre>

      <h3>2. Switch Statement</h3>
      <pre>
        <code>
{`// Switch statement example
public class DayOfWeek {
    public static String getDayName(int day) {
        return switch (day) {
            case 1 -> "Monday";
            case 2 -> "Tuesday";
            case 3 -> "Wednesday";
            case 4 -> "Thursday";
            case 5 -> "Friday";
            case 6, 7 -> "Weekend";
            default -> "Invalid day";
        };
    }
}`}
        </code>
      </pre>

      <h3>3. Nested Conditions</h3>
      <pre>
        <code>
{`// Nested if example
public class UserAccess {
    public static boolean canAccessResource(User user, Resource resource) {
        if (user.isAuthenticated()) {
            if (user.hasPermission(resource)) {
                if (resource.isAvailable()) {
                    return true;
                }
            }
        }
        return false;
    }
}`}
        </code>
      </pre>

      <h3>4. Ternary Operator</h3>
      <pre>
        <code>
{`// Ternary operator example
public class AgeVerification {
    public static String getAgeCategory(int age) {
        return age >= 18 ? "Adult" : "Minor";
    }
    
    public static int getDiscount(int age, boolean isStudent) {
        return (age < 18 || isStudent) ? 20 : 0;
    }
}`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>🎯 Code Organization
          <ul>
            <li>Clear condition structure</li>
            <li>Proper indentation</li>
            <li>Consistent formatting</li>
            <li>Meaningful variable names</li>
          </ul>
        </li>
        <li>🔄 Performance Considerations
          <ul>
            <li>Order of conditions</li>
            <li>Short-circuit evaluation</li>
            <li>Switch vs if-else</li>
            <li>Memory efficiency</li>
          </ul>
        </li>
        <li>📦 Common Pitfalls
          <ul>
            <li>Missing break statements</li>
            <li>Incorrect operator precedence</li>
            <li>Complex nested conditions</li>
            <li>Unreachable code</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>🎮 Game Development
          <ul>
            <li>Character movement</li>
            <li>Collision detection</li>
            <li>Game state management</li>
            <li>Score calculation</li>
          </ul>
        </li>
        <li>💼 Business Logic
          <ul>
            <li>User authentication</li>
            <li>Access control</li>
            <li>Data validation</li>
            <li>Business rules</li>
          </ul>
        </li>
        <li>📱 User Interface
          <ul>
            <li>Form validation</li>
            <li>Input processing</li>
            <li>Error handling</li>
            <li>UI state management</li>
          </ul>
        </li>
      </ul>

      <h2>💡 Advanced Concepts</h2>
      <ul>
        <li>🎯 Pattern Matching
          <ul>
            <li>Instanceof pattern matching</li>
            <li>Switch pattern matching</li>
            <li>Record patterns</li>
            <li>Type patterns</li>
          </ul>
        </li>
        <li>🔄 Modern Java Features
          <ul>
            <li>Switch expressions</li>
            <li>Pattern matching</li>
            <li>Sealed classes</li>
            <li>Enhanced switch</li>
          </ul>
        </li>
        <li>📦 Error Handling
          <ul>
            <li>Exception handling</li>
            <li>Try-catch blocks</li>
            <li>Finally blocks</li>
            <li>Resource management</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Control Constructs</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Control Constructs Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      
    </>
  )
}
