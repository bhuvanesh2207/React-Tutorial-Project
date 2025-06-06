import React from 'react'
import {Link} from 'react-router-dom'

export default function NumberManipulation() {
  return (
    <>
      <h1>🔢 Number Manipulation in Java</h1>
      
      <p>
        Number manipulation is a fundamental aspect of Java programming that involves various operations on numeric data types. It includes arithmetic operations, mathematical functions, type conversions, and handling of special numeric cases.
      </p>

      <h2>📋 Types of Number Operations</h2>
      <ul>
        <li>🔍 Basic Arithmetic
          <ul>
            <li>Addition and subtraction</li>
            <li>Multiplication and division</li>
            <li>Modulo operation</li>
            <li>Increment and decrement</li>
          </ul>
        </li>
        <li>🔄 Mathematical Functions
          <ul>
            <li>Power and roots</li>
            <li>Trigonometric functions</li>
            <li>Logarithmic functions</li>
            <li>Rounding operations</li>
          </ul>
        </li>
        <li>📦 Type Conversions
          <ul>
            <li>Implicit conversion</li>
            <li>Explicit casting</li>
            <li>String conversion</li>
            <li>Formatting numbers</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>

      <h3>1. Basic Arithmetic Operations</h3>
      <pre>
        <code>
{`// Basic arithmetic operations
public class ArithmeticOperations {
    public static double calculateBMI(double weight, double height) {
        return weight / (height * height);
    }
    
    public static int findGCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    public static int findLCM(int a, int b) {
        return (a * b) / findGCD(a, b);
    }
}`}
        </code>
      </pre>

      <h3>2. Mathematical Functions</h3>
      <pre>
        <code>
{`// Mathematical operations
public class MathOperations {
    public static double calculateCircleArea(double radius) {
        return Math.PI * Math.pow(radius, 2);
    }
    
    public static double calculateHypotenuse(double a, double b) {
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    }
    
    public static double roundToDecimalPlaces(double number, int places) {
        double scale = Math.pow(10, places);
        return Math.round(number * scale) / scale;
    }
}`}
        </code>
      </pre>

      <h3>3. Number Formatting</h3>
      <pre>
        <code>
{`// Number formatting and conversion
public class NumberFormatting {
    public static String formatCurrency(double amount) {
        return String.format("$%.2f", amount);
    }
    
    public static String formatPercentage(double value) {
        return String.format("%.1f%%", value * 100);
    }
    
    public static String formatLargeNumber(long number) {
        return String.format("%,d", number);
    }
    
    public static double parsePercentage(String percentage) {
        return Double.parseDouble(percentage.replace("%", "")) / 100;
    }
}`}
        </code>
      </pre>

      <h3>4. Random Number Generation</h3>
      <pre>
        <code>
{`// Random number generation
public class RandomNumberGenerator {
    public static int generateRandomInt(int min, int max) {
        return (int) (Math.random() * (max - min + 1)) + min;
    }
    
    public static double generateRandomDouble(double min, double max) {
        return min + (Math.random() * (max - min));
    }
    
    public static int[] generateRandomArray(int size, int min, int max) {
        int[] array = new int[size];
        for (int i = 0; i < size; i++) {
            array[i] = generateRandomInt(min, max);
        }
        return array;
    }
}`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>🎯 Number Handling
          <ul>
            <li>Use appropriate data types</li>
            <li>Handle overflow cases</li>
            <li>Consider precision</li>
            <li>Validate input ranges</li>
          </ul>
        </li>
        <li>🔄 Performance Tips
          <ul>
            <li>Use efficient algorithms</li>
            <li>Minimize conversions</li>
            <li>Cache calculations</li>
            <li>Use built-in methods</li>
          </ul>
        </li>
        <li>📦 Common Pitfalls
          <ul>
            <li>Integer division</li>
            <li>Floating-point precision</li>
            <li>Type conversion errors</li>
            <li>Overflow handling</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>💰 Financial Calculations
          <ul>
            <li>Interest computation</li>
            <li>Tax calculations</li>
            <li>Currency conversion</li>
            <li>Investment analysis</li>
          </ul>
        </li>
        <li>📊 Statistical Analysis
          <ul>
            <li>Mean and median</li>
            <li>Standard deviation</li>
            <li>Probability calculations</li>
            <li>Data normalization</li>
          </ul>
        </li>
        <li>🎮 Game Development
          <ul>
            <li>Physics calculations</li>
            <li>Random generation</li>
            <li>Score tracking</li>
            <li>Animation timing</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Number Manipulation</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Number Manipulation Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>


    </>
  )
}
