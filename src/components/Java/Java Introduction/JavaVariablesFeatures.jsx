import React from 'react'
import { Link } from 'react-router-dom';

export default function JavaVariablesFeatures() {
  return (
    <>
      <div className="java-container">
        <h1>📊 Java Variables & Features</h1>
        
        <p>
          Java variables and features are fundamental building blocks of Java programming. Understanding how to declare, initialize, and use variables, along with Java's key features, is essential for writing efficient and maintainable code.
        </p>

        <h2>📋 Variable Declaration and Initialization</h2>
        <ul>
          <li>📝 Declaration - Specifying variable type and name</li>
          <li>💡 Initialization - Assigning initial value</li>
          <li>🔄 Reassignment - Changing variable value</li>
          <li>📦 Scope - Where variable is accessible</li>
        </ul>

        <h2>💡 Variable Types and Features</h2>
        <ul>
          <li>🔢 Primitive Variables
            <ul>
              <li>byte (8-bit)</li>
              <li>short (16-bit)</li>
              <li>int (32-bit)</li>
              <li>long (64-bit)</li>
              <li>float (32-bit)</li>
              <li>double (64-bit)</li>
              <li>boolean (true/false)</li>
              <li>char (16-bit Unicode)</li>
            </ul>
          </li>
          <li>📦 Reference Variables
            <ul>
              <li>String</li>
              <li>Arrays</li>
              <li>Objects</li>
              <li>Interfaces</li>
            </ul>
          </li>
        </ul>

        <h2>✨ Java Features</h2>
        <ul>
          <li>🔒 Access Modifiers
            <ul>
              <li>public - Accessible everywhere</li>
              <li>private - Only within class</li>
              <li>protected - Within package and subclasses</li>
              <li>default - Within package</li>
            </ul>
          </li>
          <li>📦 Variable Scope
            <ul>
              <li>Class variables (static)</li>
              <li>Instance variables</li>
              <li>Local variables</li>
              <li>Parameters</li>
            </ul>
          </li>
          <li>🔄 Type Conversion
            <ul>
              <li>Widening (implicit)</li>
              <li>Narrowing (explicit)</li>
            </ul>
          </li>
        </ul>

        <h2>📝 Example: Variable Declaration and Usage</h2>
        <pre>
          <code>
{`public class VariableDemo {
    // Class variable (static)
    static int classVariable = 100;
    
    // Instance variable
    private String instanceVariable;
    
    public void demonstrateVariables() {
        // Local variable
        int localVariable = 50;
        
        // Variable initialization
        instanceVariable = "Hello";
        
        // Type conversion
        double doubleValue = localVariable; // Widening
        int intValue = (int) doubleValue;   // Narrowing
        
        System.out.println("Class Variable: " + classVariable);
        System.out.println("Instance Variable: " + instanceVariable);
        System.out.println("Local Variable: " + localVariable);
        System.out.println("Double Value: " + doubleValue);
        System.out.println("Int Value: " + intValue);
    }
}`}
          </code>
        </pre>

        <h2>📝 Example: Variable Scope and Access</h2>
        <pre>
          <code>
{`public class ScopeDemo {
    // Class variable
    static int globalCount = 0;
    
    // Instance variable
    private String name;
    
    public ScopeDemo(String name) {
        this.name = name;
        globalCount++;
    }
    
    public void demonstrateScope() {
        // Local variable
        int localCount = 0;
        
        {
            // Block scope
            int blockCount = 0;
            blockCount++;
            System.out.println("Block Count: " + blockCount);
        }
        
        localCount++;
        System.out.println("Local Count: " + localCount);
        System.out.println("Global Count: " + globalCount);
        System.out.println("Name: " + name);
    }
}`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: Java Variables & Features</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/grEKMHGYyns"
            title="Java Variables & Features Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
}