import React from 'react'
import {Link} from 'react-router-dom'

export default function PatternPrograms() {
  return (
    <>
      <h1>🎨 Pattern Programs in Java</h1>
      
      <p>
        Pattern programs are a great way to understand loops, nested loops, and control flow in Java. They help in developing logical thinking and problem-solving skills while creating visually appealing output patterns.
      </p>

      <h2>📋 Types of Patterns</h2>
      <ul>
        <li>🔍 Star Patterns
          <ul>
            <li>Pyramid patterns</li>
            <li>Diamond patterns</li>
            <li>Triangle patterns</li>
            <li>Hollow patterns</li>
          </ul>
        </li>
        <li>🔄 Number Patterns
          <ul>
            <li>Number pyramids</li>
            <li>Pascal's triangle</li>
            <li>Floyd's triangle</li>
            <li>Number sequences</li>
          </ul>
        </li>
        <li>📦 Character Patterns
          <ul>
            <li>Alphabet patterns</li>
            <li>Special characters</li>
            <li>Mixed patterns</li>
            <li>Custom symbols</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>

      <h3>1. Star Patterns</h3>
      <pre>
        <code>
{`// Star pattern examples
public class StarPatterns {
    // Right triangle pattern
    public static void printRightTriangle(int rows) {
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
    
    // Diamond pattern
    public static void printDiamond(int rows) {
        // Upper half
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= rows - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= 2 * i - 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
        // Lower half
        for (int i = rows - 1; i >= 1; i--) {
            for (int j = 1; j <= rows - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= 2 * i - 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`}
        </code>
      </pre>

      <h3>2. Number Patterns</h3>
      <pre>
        <code>
{`// Number pattern examples
public class NumberPatterns {
    // Floyd's triangle
    public static void printFloydsTriangle(int rows) {
        int number = 1;
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(number + " ");
                number++;
            }
            System.out.println();
        }
    }
    
    // Pascal's triangle
    public static void printPascalsTriangle(int rows) {
        for (int i = 0; i < rows; i++) {
            int number = 1;
            for (int j = 0; j <= i; j++) {
                System.out.print(number + " ");
                number = number * (i - j) / (j + 1);
            }
            System.out.println();
        }
    }
}`}
        </code>
      </pre>

      <h3>3. Character Patterns</h3>
      <pre>
        <code>
{`// Character pattern examples
public class CharacterPatterns {
    // Alphabet pyramid
    public static void printAlphabetPyramid(int rows) {
        char ch = 'A';
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= rows - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= 2 * i - 1; k++) {
                System.out.print(ch);
                ch++;
            }
            System.out.println();
            ch = 'A';
        }
    }
    
    // Hollow square
    public static void printHollowSquare(int size) {
        for (int i = 1; i <= size; i++) {
            for (int j = 1; j <= size; j++) {
                if (i == 1 || i == size || j == 1 || j == size) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
}`}
        </code>
      </pre>

      <h3>4. Complex Patterns</h3>
      <pre>
        <code>
{`// Complex pattern examples
public class ComplexPatterns {
    // Butterfly pattern
    public static void printButterfly(int rows) {
        // Upper half
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            for (int j = 1; j <= 2 * (rows - i); j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        // Lower half
        for (int i = rows; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            for (int j = 1; j <= 2 * (rows - i); j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>🎯 Pattern Design
          <ul>
            <li>Plan pattern structure</li>
            <li>Use proper spacing</li>
            <li>Maintain symmetry</li>
            <li>Consider scalability</li>
          </ul>
        </li>
        <li>🔄 Code Organization
          <ul>
            <li>Use meaningful variables</li>
            <li>Add comments</li>
            <li>Break complex patterns</li>
            <li>Reuse common logic</li>
          </ul>
        </li>
        <li>📦 Common Pitfalls
          <ul>
            <li>Incorrect spacing</li>
            <li>Off-by-one errors</li>
            <li>Complex nesting</li>
            <li>Poor readability</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>🎨 User Interface
          <ul>
            <li>Menu borders</li>
            <li>Loading animations</li>
            <li>Progress indicators</li>
            <li>Decorative elements</li>
          </ul>
        </li>
        <li>📊 Data Visualization
          <ul>
            <li>ASCII charts</li>
            <li>Simple graphs</li>
            <li>Progress bars</li>
            <li>Data patterns</li>
          </ul>
        </li>
        <li>🎮 Game Development
          <ul>
            <li>Game board layouts</li>
            <li>Character designs</li>
            <li>Level patterns</li>
            <li>Visual effects</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Pattern Programs</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Pattern Programs Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  )
}
