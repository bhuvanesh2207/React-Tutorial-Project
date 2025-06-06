import React from 'react'
import {Link} from 'react-router-dom'

export default function Strings() {
  return (
    <>
      <h1>📝 Strings in Java</h1>
      
      <p>
        Strings in Java are immutable sequences of characters. They are one of the most commonly used data types in Java programming, and understanding their manipulation and optimization is crucial for efficient programming.
      </p>

      <h2>📋 String Concepts</h2>
      <ul>
        <li>🔍 String Basics
          <ul>
            <li>String creation</li>
            <li>String immutability</li>
            <li>String pool</li>
            <li>String literals</li>
          </ul>
        </li>
        <li>🔄 String Operations
          <ul>
            <li>Concatenation</li>
            <li>Comparison</li>
            <li>Substring</li>
            <li>Searching</li>
          </ul>
        </li>
        <li>📦 String Methods
          <ul>
            <li>StringBuilder</li>
            <li>StringBuffer</li>
            <li>Regular expressions</li>
            <li>String formatting</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>

      <h3>1. Basic String Operations</h3>
      <pre>
        <code>
{`// Basic string operations
public class StringBasics {
    public static void main(String[] args) {
        // String creation
        String str1 = "Hello";
        String str2 = new String("World");
        
        // String concatenation
        String result = str1 + " " + str2;
        System.out.println(result);
        
        // String methods
        System.out.println("Length: " + result.length());
        System.out.println("Uppercase: " + result.toUpperCase());
        System.out.println("Lowercase: " + result.toLowerCase());
        System.out.println("Contains 'World': " + result.contains("World"));
        
        // String comparison
        System.out.println("Equals: " + str1.equals("Hello"));
        System.out.println("Ignore case: " + str1.equalsIgnoreCase("HELLO"));
    }
}`}
        </code>
      </pre>

      <h3>2. String Manipulation</h3>
      <pre>
        <code>
{`// String manipulation
public class StringManipulation {
    public static void main(String[] args) {
        String text = "  Hello, World!  ";
        
        // Trimming
        System.out.println("Trimmed: " + text.trim());
        
        // Substring
        System.out.println("Substring: " + text.substring(2, 7));
        
        // Replace
        System.out.println("Replaced: " + text.replace("World", "Java"));
        
        // Split
        String[] words = text.split(",");
        for (String word : words) {
            System.out.println("Word: " + word.trim());
        }
        
        // Join
        String joined = String.join("-", "Hello", "World", "Java");
        System.out.println("Joined: " + joined);
    }
}`}
        </code>
      </pre>

      <h3>3. StringBuilder and StringBuffer</h3>
      <pre>
        <code>
{`// StringBuilder and StringBuffer
public class StringBuilders {
    public static void main(String[] args) {
        // StringBuilder (not thread-safe, faster)
        StringBuilder sb = new StringBuilder();
        sb.append("Hello");
        sb.append(" ");
        sb.append("World");
        System.out.println("StringBuilder: " + sb.toString());
        
        // StringBuffer (thread-safe)
        StringBuffer sbf = new StringBuffer();
        sbf.append("Hello");
        sbf.append(" ");
        sbf.append("Java");
        System.out.println("StringBuffer: " + sbf.toString());
        
        // Common operations
        sb.insert(5, " Beautiful");
        sb.delete(5, 15);
        sb.reverse();
        System.out.println("Modified: " + sb.toString());
    }
}`}
        </code>
      </pre>

      <h3>4. Regular Expressions</h3>
      <pre>
        <code>
{`// Regular expressions
import java.util.regex.*;

public class RegexExamples {
    public static void main(String[] args) {
        String text = "Hello123World456Java789";
        
        // Pattern matching
        Pattern pattern = Pattern.compile("\\d+");
        Matcher matcher = pattern.matcher(text);
        
        // Find all numbers
        while (matcher.find()) {
            System.out.println("Found: " + matcher.group());
        }
        
        // Replace all numbers
        String replaced = text.replaceAll("\\d+", "-");
        System.out.println("Replaced: " + replaced);
        
        // Split by numbers
        String[] parts = text.split("\\d+");
        for (String part : parts) {
            System.out.println("Part: " + part);
        }
    }
}`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>🎯 String Usage
          <ul>
            <li>Use StringBuilder for concatenation</li>
            <li>Handle null strings</li>
            <li>Use string pool effectively</li>
            <li>Consider immutability</li>
          </ul>
        </li>
        <li>🔄 Performance Tips
          <ul>
            <li>Minimize string concatenation</li>
            <li>Use appropriate string classes</li>
            <li>Optimize regular expressions</li>
            <li>Handle large strings</li>
          </ul>
        </li>
        <li>📦 Common Pitfalls
          <ul>
            <li>String comparison with ==</li>
            <li>Memory leaks</li>
            <li>Inefficient concatenation</li>
            <li>Regex performance</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>🌐 Web Development
          <ul>
            <li>URL processing</li>
            <li>Form validation</li>
            <li>JSON parsing</li>
            <li>HTML generation</li>
          </ul>
        </li>
        <li>📱 Mobile Development
          <ul>
            <li>User input handling</li>
            <li>Data formatting</li>
            <li>Localization</li>
            <li>Resource management</li>
          </ul>
        </li>
        <li>💾 Data Processing
          <ul>
            <li>Text analysis</li>
            <li>Data cleaning</li>
            <li>Pattern matching</li>
            <li>Report generation</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Strings in Java</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Strings Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <Link to="/DatastrAlg"><p>Back to Data Structures and Algorithms</p></Link>
    </>
  )
}
