import React from 'react'
import {Link} from 'react-router-dom'

export default function Arrays() {
  return (
    <>
      <h1>📦 Arrays in Java</h1>
      
      <p>
        Arrays in Java are fixed-size collections of elements of the same type. They provide efficient random access to elements and are fundamental data structures used in various algorithms and applications.
      </p>

      <h2>📋 Array Concepts</h2>
      <ul>
        <li>🔍 Array Types
          <ul>
            <li>Single-dimensional arrays</li>
            <li>Multi-dimensional arrays</li>
            <li>Jagged arrays</li>
            <li>Object arrays</li>
          </ul>
        </li>
        <li>🔄 Array Operations
          <ul>
            <li>Traversal</li>
            <li>Searching</li>
            <li>Sorting</li>
            <li>Modification</li>
          </ul>
        </li>
        <li>📦 Array Methods
          <ul>
            <li>Arrays utility class</li>
            <li>System.arraycopy</li>
            <li>Array cloning</li>
            <li>Array conversion</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>

      <h3>1. Basic Array Operations</h3>
      <pre>
        <code>
{`// Basic array operations
public class ArrayBasics {
    public static void main(String[] args) {
        // Array declaration and initialization
        int[] numbers = {1, 2, 3, 4, 5};
        
        // Array traversal
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("Element at index " + i + ": " + numbers[i]);
        }
        
        // Enhanced for loop
        for (int num : numbers) {
            System.out.println("Number: " + num);
        }
        
        // Array modification
        numbers[2] = 10;
        
        // Array length
        System.out.println("Array length: " + numbers.length);
    }
}`}
        </code>
      </pre>

      <h3>2. Multi-dimensional Arrays</h3>
      <pre>
        <code>
{`// Multi-dimensional arrays
public class MultiDimensionalArrays {
    public static void main(String[] args) {
        // 2D array declaration
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        // Traversing 2D array
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
        
        // Jagged array
        int[][] jaggedArray = new int[3][];
        jaggedArray[0] = new int[2];
        jaggedArray[1] = new int[3];
        jaggedArray[2] = new int[4];
    }
}`}
        </code>
      </pre>

      <h3>3. Array Sorting and Searching</h3>
      <pre>
        <code>
{`// Array sorting and searching
import java.util.Arrays;

public class ArraySortingSearching {
    public static void main(String[] args) {
        int[] numbers = {5, 2, 8, 1, 9, 3};
        
        // Sorting array
        Arrays.sort(numbers);
        System.out.println("Sorted array: " + Arrays.toString(numbers));
        
        // Binary search
        int index = Arrays.binarySearch(numbers, 8);
        System.out.println("Index of 8: " + index);
        
        // Custom sorting
        Integer[] customArray = {5, 2, 8, 1, 9, 3};
        Arrays.sort(customArray, (a, b) -> b - a); // Descending order
        System.out.println("Custom sorted: " + Arrays.toString(customArray));
    }
}`}
        </code>
      </pre>

      <h3>4. Array Utility Methods</h3>
      <pre>
        <code>
{`// Array utility methods
import java.util.Arrays;

public class ArrayUtilities {
    public static void main(String[] args) {
        int[] source = {1, 2, 3, 4, 5};
        int[] dest = new int[5];
        
        // Array copy
        System.arraycopy(source, 0, dest, 0, source.length);
        
        // Array cloning
        int[] cloned = source.clone();
        
        // Array comparison
        boolean isEqual = Arrays.equals(source, dest);
        
        // Array filling
        int[] filled = new int[5];
        Arrays.fill(filled, 10);
        
        // Array to string
        String arrayString = Arrays.toString(source);
    }
}`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>🎯 Array Usage
          <ul>
            <li>Use appropriate size</li>
            <li>Handle bounds checking</li>
            <li>Consider ArrayList for dynamic size</li>
            <li>Use enhanced for loop when possible</li>
          </ul>
        </li>
        <li>🔄 Performance Tips
          <ul>
            <li>Minimize array copying</li>
            <li>Use System.arraycopy for large arrays</li>
            <li>Consider memory usage</li>
            <li>Optimize array operations</li>
          </ul>
        </li>
        <li>📦 Common Pitfalls
          <ul>
            <li>Array index out of bounds</li>
            <li>Null pointer exceptions</li>
            <li>Memory leaks</li>
            <li>Inefficient operations</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>📊 Data Processing
          <ul>
            <li>Image processing</li>
            <li>Matrix operations</li>
            <li>Data analysis</li>
            <li>Signal processing</li>
          </ul>
        </li>
        <li>🎮 Game Development
          <ul>
            <li>Game state storage</li>
            <li>Grid-based games</li>
            <li>Particle systems</li>
            <li>Collision detection</li>
          </ul>
        </li>
        <li>🌐 Web Development
          <ul>
            <li>Data caching</li>
            <li>Request handling</li>
            <li>Session storage</li>
            <li>Configuration management</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Arrays in Java</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Arrays Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <Link to="/DatastrAlg"><p>Back to Data Structures and Algorithms</p></Link>
    </>
  )
}
