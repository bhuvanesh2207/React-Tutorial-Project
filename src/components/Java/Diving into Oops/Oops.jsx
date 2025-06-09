import React from 'react'
import {Link} from 'react-router-dom'

export default function Oops() {
  return (
    <div className="java-container">
      <h1>🎯 Object-Oriented Programming (OOP)</h1>
      
      <p>
        Object-Oriented Programming is a programming paradigm that organizes software design around data, or objects, rather than functions and logic. Java is a pure object-oriented language that implements OOP concepts through classes and objects, making it powerful for building complex applications.
      </p>

      <h2>📋 Core OOP Concepts</h2>
      <ul>
        <li>📦 Objects
          <ul>
            <li>Real-world entities</li>
            <li>State and behavior</li>
            <li>Instance of a class</li>
          </ul>
        </li>
        <li>📝 Classes
          <ul>
            <li>Blueprints for objects</li>
            <li>Data members and methods</li>
            <li>Template for creating objects</li>
          </ul>
        </li>
        <li>🔒 Encapsulation
          <ul>
            <li>Data hiding</li>
            <li>Access modifiers</li>
            <li>Getters and setters</li>
          </ul>
        </li>
        <li>🔄 Inheritance
          <ul>
            <li>Code reusability</li>
            <li>Parent-child relationship</li>
            <li>Method overriding</li>
          </ul>
        </li>
        <li>🔍 Polymorphism
          <ul>
            <li>Multiple forms</li>
            <li>Method overloading</li>
            <li>Method overriding</li>
          </ul>
        </li>
        <li>📚 Abstraction
          <ul>
            <li>Hide implementation details</li>
            <li>Abstract classes</li>
            <li>Interfaces</li>
          </ul>
        </li>
      </ul>

      <h2>💡 Benefits of OOP</h2>
      <ul>
        <li>🔄 Code Reusability
          <ul>
            <li>Inheritance</li>
            <li>Composition</li>
            <li>Libraries and frameworks</li>
          </ul>
        </li>
        <li>🔒 Data Security
          <ul>
            <li>Encapsulation</li>
            <li>Access control</li>
            <li>Data validation</li>
          </ul>
        </li>
        <li>📦 Modularity
          <ul>
            <li>Independent components</li>
            <li>Easy maintenance</li>
            <li>Better organization</li>
          </ul>
        </li>
        <li>🔄 Flexibility
          <ul>
            <li>Polymorphism</li>
            <li>Interface-based design</li>
            <li>Dynamic binding</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Example: Basic OOP Structure</h2>
      <pre>
        <code>
{`// Abstract class
public abstract class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public abstract void makeSound();
    
    public void sleep() {
        System.out.println(name + " is sleeping");
    }
}

// Interface
public interface Movable {
    void move();
    void stop();
}

// Concrete class
public class Dog extends Animal implements Movable {
    private String breed;
    
    public Dog(String name, String breed) {
        super(name);
        this.breed = breed;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " says: Woof!");
    }
    
    @Override
    public void move() {
        System.out.println(name + " is running");
    }
    
    @Override
    public void stop() {
        System.out.println(name + " stopped");
    }
    
    public void fetch() {
        System.out.println(name + " is fetching the ball");
    }
}`}
        </code>
      </pre>

      <h2>🎥 Video Tutorial: Object-Oriented Programming</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Object-Oriented Programming Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <h2>📚 sub Topics</h2>
      <ul>
        <li><Link to="/Objects"><p>Objects</p></Link></li>
        <li><Link to="/Class"><p>Classes</p></Link></li>
        <li><Link to="/Encapsulation"><p>Encapsulation</p></Link></li>
        <li><Link to="/Inheritance"><p>Inheritance</p></Link></li>
        <li><Link to="/Polymorphism"><p>Polymorphism</p></Link></li>
        <li><Link to="/DataAbstraction"><p>Data Abstraction</p></Link></li>
      </ul>
    </div>
  )
}