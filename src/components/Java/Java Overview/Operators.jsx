import React from 'react'
import {Link} from 'react-router-dom'

export default function Operators() {
  return (
    <>
      <div className="java-container">
        <h1>🔧 Java Operators</h1>
        
        <p>
          Operators in Java are special symbols that perform operations on operands and return a result. They are essential building blocks of any programming language, allowing you to manipulate data and control program flow.
        </p>

        <h2>📋 Types of Operators</h2>
        <ul>
          <li>🔢 Arithmetic Operators - Perform mathematical operations</li>
          <li>📝 Assignment Operators - Assign values to variables</li>
          <li>⚖️ Comparison Operators - Compare values</li>
          <li>🔍 Logical Operators - Perform logical operations</li>
          <li>🔢 Bitwise Operators - Perform operations on bits</li>
          <li>❓ Ternary Operator - Conditional operator</li>
        </ul>

        <h2>🔢 Arithmetic Operators</h2>
        <ul>
          <li>➕ Addition (+)</li>
          <li>➖ Subtraction (-)</li>
          <li>✖️ Multiplication (*)</li>
          <li>➗ Division (/)</li>
          <li>📊 Modulus (%)</li>
          <li>➕➕ Increment (++)</li>
          <li>➖➖ Decrement (--)</li>
        </ul>

        <h2>📝 Assignment Operators</h2>
        <ul>
          <li>📝 Simple Assignment (=)</li>
          <li>➕ Addition Assignment (+=)</li>
          <li>➖ Subtraction Assignment (-=)</li>
          <li>✖️ Multiplication Assignment (*=)</li>
          <li>➗ Division Assignment (/=)</li>
          <li>📊 Modulus Assignment (%=)</li>
        </ul>

        <h2>⚖️ Comparison Operators</h2>
        <ul>
          <li>✅ Equal to (==)</li>
          <li>❌ Not equal to (!=)</li>
          <li>📈 Greater than ({'>'})</li>
          <li>📉 Less than ({'<'})</li>
          <li>📈 Greater than or equal to ({'>='})</li>
          <li>📉 Less than or equal to ({'<='})</li>
        </ul>

        <h2>🔍 Logical Operators</h2>
        <ul>
          <li>✅ Logical AND (&&)</li>
          <li>✅ Logical OR (||)</li>
          <li>❌ Logical NOT (!)</li>
        </ul>

        <h2>🔢 Bitwise Operators</h2>
        <ul>
          <li>🔢 Bitwise AND (&)</li>
          <li>🔢 Bitwise OR (|)</li>
          <li>🔢 Bitwise XOR (^)</li>
          <li>🔢 Bitwise NOT (~)</li>
          <li>🔢 Left Shift ({'<<'})</li>
          <li>🔢 Right Shift ({'>>'})</li>
          <li>🔢 Unsigned Right Shift ({'>>>'})</li>
        </ul>

        <h2>💡 Operator Precedence</h2>
        <p>Operators are evaluated in a specific order:</p>
        <ol>
          <li>📊 Postfix (x++, x--)</li>
          <li>📊 Unary (++x, --x, +x, -x, !, ~)</li>
          <li>📊 Multiplicative (*, /, %)</li>
          <li>📊 Additive (+, -)</li>
          <li>📊 Shift ({'<<'}, {'>>'}, {'>>>'})</li>
          <li>📊 Relational ({'<'}, {'<='}, {'>'}, {'>='})</li>
          <li>📊 Equality (==, !=)</li>
          <li>📊 Bitwise AND (&)</li>
          <li>📊 Bitwise XOR (^)</li>
          <li>📊 Bitwise OR (|)</li>
          <li>📊 Logical AND (&&)</li>
          <li>📊 Logical OR (||)</li>
          <li>📊 Ternary (?:)</li>
          <li>📊 Assignment (=, +=, -=, etc.)</li>
        </ol>

        <h2>📝 Example: Arithmetic Operations</h2>
        <pre>
          <code>
{`public class ArithmeticDemo {
    public static void main(String[] args) {
        int a = 10;
        int b = 5;
        
        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b));
        System.out.println("Modulus: " + (a % b));
        
        // Increment and Decrement
        int count = 1;
        System.out.println("Original: " + count);
        System.out.println("Post-increment: " + count++);
        System.out.println("After post-increment: " + count);
        System.out.println("Pre-increment: " + ++count);
    }
}`}
          </code>
        </pre>

        <h2>📝 Example: Logical Operations</h2>
        <pre>
          <code>
{`public class LogicalDemo {
    public static void main(String[] args) {
        boolean x = true;
        boolean y = false;
        
        System.out.println("x && y: " + (x && y));
        System.out.println("x || y: " + (x || y));
        System.out.println("!x: " + (!x));
        
        // Short-circuit evaluation
        int a = 10;
        int b = 5;
        if (a > 5 && b > 10) {
            System.out.println("Both conditions are true");
        } else {
            System.out.println("At least one condition is false");
        }
    }
}`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: Java Operators</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/8cm1x4bC610"
            title="Java Operators Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
}