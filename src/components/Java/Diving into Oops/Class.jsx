import React from 'react'
import {Link} from 'react-router-dom'

export default function Class() {
  return (
    <div className="java-container">
      <h1>📝 Classes in Java</h1>
      
      <p>
        A class in Java is a blueprint or template for creating objects. It defines the structure and behavior that objects of that class will have. Classes are fundamental building blocks of object-oriented programming in Java.
      </p>

      <h2>📋 Class Components</h2>
      <ul>
        <li>📦 Fields (Data Members)
          <ul>
            <li>Instance variables</li>
            <li>Class variables (static)</li>
            <li>Constants</li>
          </ul>
        </li>
        <li>🔄 Methods
          <ul>
            <li>Instance methods</li>
            <li>Class methods (static)</li>
            <li>Constructors</li>
          </ul>
        </li>
        <li>🔒 Access Modifiers
          <ul>
            <li>public</li>
            <li>private</li>
            <li>protected</li>
            <li>default</li>
          </ul>
        </li>
      </ul>

      <h2>💡 Class Structure</h2>
      <ul>
        <li>📝 Class Declaration
          <ul>
            <li>Access modifier</li>
            <li>class keyword</li>
            <li>Class name</li>
          </ul>
        </li>
        <li>📦 Class Body
          <ul>
            <li>Fields</li>
            <li>Constructors</li>
            <li>Methods</li>
            <li>Nested classes</li>
          </ul>
        </li>
        <li>🔄 Class Relationships
          <ul>
            <li>Inheritance</li>
            <li>Implementation</li>
            <li>Association</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Example: Basic Class Structure</h2>
      <pre>
        <code>
{`public class BankAccount {
    // Fields
    private String accountNumber;
    private String accountHolder;
    private double balance;
    private static int totalAccounts = 0;
    
    // Constructor
    public BankAccount(String accountHolder) {
        this.accountNumber = generateAccountNumber();
        this.accountHolder = accountHolder;
        this.balance = 0.0;
        totalAccounts++;
    }
    
    // Instance methods
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
        } else {
            System.out.println("Insufficient funds");
        }
    }
    
    public double getBalance() {
        return balance;
    }
    
    // Static method
    public static int getTotalAccounts() {
        return totalAccounts;
    }
    
    // Private helper method
    private String generateAccountNumber() {
        return "ACC" + System.currentTimeMillis();
    }
}`}
        </code>
      </pre>

      <h2>📝 Example: Class with Inheritance</h2>
      <pre>
        <code>
{`// Parent class
public class Vehicle {
    protected String brand;
    protected String model;
    protected int year;
    
    public Vehicle(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    
    public void start() {
        System.out.println("Vehicle starting...");
    }
    
    public void stop() {
        System.out.println("Vehicle stopping...");
    }
    
    public void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
    }
}

// Child class
public class Car extends Vehicle {
    private int numDoors;
    
    public Car(String brand, String model, int year, int numDoors) {
        super(brand, model, year);
        this.numDoors = numDoors;
    }
    
    @Override
    public void start() {
        System.out.println("Car engine starting...");
    }
    
    public void honk() {
        System.out.println("Beep beep!");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Number of doors: " + numDoors);
    }
}`}
        </code>
      </pre>

      <h2>🎥 Video Tutorial: Classes in Java</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Classes in Java Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  )
}
