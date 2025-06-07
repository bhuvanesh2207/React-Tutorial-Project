import React from 'react'
import { Link } from 'react-router-dom'

export default function DataCategories() {
  return (
    <div className="java-container">
      <h1>📊 Java Data Categories & Types</h1>
      
      <p>
        Java is a statically-typed language, which means all variables must be declared with their data type before they can be used. Java has two main categories of data types: primitive and reference types.
      </p>

      <h2>🔢 Primitive Data Types</h2>
      <p>Primitive types are the most basic data types in Java. They are stored directly in memory and have fixed sizes.</p>
      <ul>
        <li>📝 byte (8 bits) - Range: -128 to 127</li>
        <li>📏 short (16 bits) - Range: -32,768 to 32,767</li>
        <li>🔢 int (32 bits) - Range: -2^31 to 2^31-1</li>
        <li>🔢 long (64 bits) - Range: -2^63 to 2^63-1</li>
        <li>📊 float (32 bits) - Single-precision floating point</li>
        <li>📊 double (64 bits) - Double-precision floating point</li>
        <li>✅ boolean (1 bit) - true or false</li>
        <li>🔤 char (16 bits) - Single Unicode character</li>
      </ul>

      <h2>🔗 Reference Data Types</h2>
      <p>Reference types are more complex and are stored as references to objects in memory.</p>
      <ul>
        <li>📝 String - Sequence of characters</li>
        <li>📦 Arrays - Fixed-size collection of elements</li>
        <li>🏗️ Classes - User-defined data types</li>
        <li>📦 Interfaces - Abstract type definitions</li>
        <li>📦 Enums - Special class representing a group of constants</li>
      </ul>

      <h2>💡 Type Conversion</h2>
      <p>Java supports two types of type conversion:</p>
      <ul>
        <li>🔄 Widening Conversion (Implicit)
          <ul>
            <li>byte → short → int → long → float → double</li>
            <li>char → int → long → float → double</li>
          </ul>
        </li>
        <li>🔄 Narrowing Conversion (Explicit)
          <ul>
            <li>double → float → long → int → short → byte</li>
            <li>double → float → long → int → char</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Example: Primitive Types</h2>
      <pre>
        <code>
{`public class PrimitiveTypes {
    public static void main(String[] args) {
        byte smallNumber = 100;
        short mediumNumber = 10000;
        int largeNumber = 1000000;
        long veryLargeNumber = 1000000000L;
        
        float decimalNumber = 3.14f;
        double preciseNumber = 3.14159265359;
        
        boolean isTrue = true;
        char letter = 'A';
        
        System.out.println("Byte: " + smallNumber);
        System.out.println("Short: " + mediumNumber);
        System.out.println("Int: " + largeNumber);
        System.out.println("Long: " + veryLargeNumber);
        System.out.println("Float: " + decimalNumber);
        System.out.println("Double: " + preciseNumber);
        System.out.println("Boolean: " + isTrue);
        System.out.println("Char: " + letter);
    }
}`}
        </code>
      </pre>

      <h2>📝 Example: Reference Types</h2>
      <pre>
        <code>
{`public class ReferenceTypes {
    public static void main(String[] args) {
        // String example
        String message = "Hello, Java!";
        System.out.println("String: " + message);
        
        // Array example
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.println("Array: " + Arrays.toString(numbers));
        
        // Class example
        Person person = new Person("John", 25);
        System.out.println("Person: " + person);
    }
}

class Person {
    String name;
    int age;
    
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    @Override
    public String toString() {
        return name + " (" + age + " years)";
    }
}`}
        </code>
      </pre>

      <h2>🎥 Video Tutorial: Java Data Types</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/7HWoR9FS4HU"
          title="Java Data Types Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
