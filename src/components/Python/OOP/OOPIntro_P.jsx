import React from 'react'

export default function OOPIntro() {
  return (
    <>
      <div className="python-container">
        <h1>🎯 Introduction to Object-Oriented Programming in Python</h1>
        
        <p>
          Object-Oriented Programming (OOP) is a programming paradigm that uses objects to design 
          applications and computer programs. It provides a clear structure for the programs and 
          makes code more maintainable and reusable.
        </p>

        <h2>✨ Key Concepts of OOP</h2>
        <ul>
          <li>
            <strong>Classes:</strong> Blueprints for creating objects
            <pre>
              <code>
{`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hello, my name is {self.name}"`}
              </code>
            </pre>
          </li>
          <li>
            <strong>Objects:</strong> Instances of classes
            <pre>
              <code>
{`# Creating objects
person1 = Person("John", 30)
person2 = Person("Alice", 25)

# Using object methods
print(person1.greet())  # Hello, my name is John`}
              </code>
            </pre>
          </li>
        </ul>

        <h2>📝 Four Pillars of OOP</h2>
        <ol>
          <li>
            <strong>Encapsulation:</strong> Bundling data and methods that operate on that data
            <pre>
              <code>
{`class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private attribute
    
    def deposit(self, amount):
        self.__balance += amount
    
    def get_balance(self):
        return self.__balance`}
              </code>
            </pre>
          </li>
          <li>
            <strong>Inheritance:</strong> Creating new classes from existing ones
            <pre>
              <code>
{`class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"`}
              </code>
            </pre>
          </li>
          <li>
            <strong>Polymorphism:</strong> Using a single interface for different types
            <pre>
              <code>
{`def animal_sound(animal):
    print(animal.speak())

dog = Dog()
cat = Cat()
animal_sound(dog)  # Woof!
animal_sound(cat)  # Meow!`}
              </code>
            </pre>
          </li>
          <li>
            <strong>Abstraction:</strong> Hiding complex implementation details
            <pre>
              <code>
{`from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def area(self):
        return 3.14 * self.radius ** 2`}
              </code>
            </pre>
          </li>
        </ol>

        <h2>✨ Benefits of OOP</h2>
        <ul>
          <li>Code reusability through inheritance</li>
          <li>Data hiding through encapsulation</li>
          <li>Flexibility through polymorphism</li>
          <li>Maintainability through modular design</li>
          <li>Scalability for large applications</li>
        </ul>

        <h2>🎥 Video Tutorial: Introduction to OOP in Python</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/JeznW_7DlB0"
            title="Introduction to OOP in Python"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 