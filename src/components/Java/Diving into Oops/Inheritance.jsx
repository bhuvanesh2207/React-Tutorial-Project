import React from 'react'
import {Link} from 'react-router-dom'

export default function Inheritance() {
  return (
    <>
      <h1>🔄 Inheritance in Java</h1>
      
      <li>📘 What is Inheritance?
        <ul>
          <li>Mechanism where one class acquires the properties and behaviors of another class</li>
          <li>Promotes code reuse and method overriding</li>
          <li>Supports hierarchical classification</li>
        </ul>
      </li>

      <h2>📋 Types of Inheritance</h2>
      <ul>
        <li>📦 Single Inheritance
          <ul>
            <li>One parent class</li>
            <li>One child class</li>
            <li>Direct inheritance</li>
          </ul>
        </li>
        <li>🔄 Multilevel Inheritance
          <ul>
            <li>Chain of inheritance</li>
            <li>Grandparent to parent to child</li>
            <li>Multiple levels</li>
          </ul>
        </li>
        <li>📚 Hierarchical Inheritance
          <ul>
            <li>One parent class</li>
            <li>Multiple child classes</li>
            <li>Shared properties</li>
          </ul>
        </li>
      </ul>

      <h2>💡 Key Concepts</h2>
      <ul>
        <li>🔑 Super Keyword
          <ul>
            <li>Access parent class members</li>
            <li>Call parent constructor</li>
            <li>Method overriding</li>
          </ul>
        </li>
        <li>🔄 Method Overriding
          <ul>
            <li>Same method signature</li>
            <li>Different implementation</li>
            <li>Runtime polymorphism</li>
          </ul>
        </li>
        <li>📦 Access Modifiers
          <ul>
            <li>public</li>
            <li>protected</li>
            <li>private</li>
            <li>default</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Example: Single Inheritance</h2>
      <pre>
        <code>
{`// Parent class
public class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void eat() {
        System.out.println(name + " is eating");
    }
    
    public void sleep() {
        System.out.println(name + " is sleeping");
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

// Child class
public class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age);  // Call parent constructor
        this.breed = breed;
    }
    
    @Override
    public void eat() {
        System.out.println(name + " is eating dog food");
    }
    
    public void bark() {
        System.out.println(name + " is barking");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();  // Call parent method
        System.out.println("Breed: " + breed);
    }
}`}
        </code>
      </pre>

      <h2>📝 Example: Multilevel Inheritance</h2>
      <pre>
        <code>
{`// Grandparent class
public class Vehicle {
    protected String brand;
    protected String model;
    
    public Vehicle(String brand, String model) {
        this.brand = brand;
        this.model = model;
    }
    
    public void start() {
        System.out.println("Vehicle starting...");
    }
    
    public void stop() {
        System.out.println("Vehicle stopping...");
    }
}

// Parent class
public class Car extends Vehicle {
    protected int numDoors;
    
    public Car(String brand, String model, int numDoors) {
        super(brand, model);
        this.numDoors = numDoors;
    }
    
    @Override
    public void start() {
        System.out.println("Car engine starting...");
    }
    
    public void honk() {
        System.out.println("Beep beep!");
    }
}

// Child class
public class ElectricCar extends Car {
    private int batteryCapacity;
    
    public ElectricCar(String brand, String model, int numDoors, int batteryCapacity) {
        super(brand, model, numDoors);
        this.batteryCapacity = batteryCapacity;
    }
    
    @Override
    public void start() {
        System.out.println("Electric car silently starting...");
    }
    
    public void charge() {
        System.out.println("Charging battery...");
    }
    
    public void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Doors: " + numDoors);
        System.out.println("Battery Capacity: " + batteryCapacity + " kWh");
    }
}`}
        </code>
      </pre>

      <h2>🎥 Video Tutorial: Inheritance in Java</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Inheritance in Java Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

    
    </>
  )
}
