import React from 'react'

export default function Inheritance() {
  return (
    <>
      <div className="python-container">
        <h1>🔄 Inheritance in Python</h1>
        
        <p>
          Inheritance is a fundamental concept in OOP that allows a class to inherit attributes and 
          methods from another class. The class that inherits is called the child class, and the class 
          being inherited from is called the parent class.
        </p>

        <h2>✨ Basic Inheritance</h2>
        <pre>
          <code>
{`# Parent class
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        pass

# Child class
class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

# Creating objects
dog = Dog("Buddy")
print(dog.speak())  # Buddy says Woof!`}
          </code>
        </pre>

        <h2>📝 Types of Inheritance</h2>
        <ol>
          <li>
            <strong>Single Inheritance:</strong> A class inherits from one parent class
            <pre>
              <code>
{`class Parent:
    def parent_method(self):
        return "Parent method"

class Child(Parent):
    def child_method(self):
        return "Child method"`}
              </code>
            </pre>
          </li>
          <li>
            <strong>Multiple Inheritance:</strong> A class inherits from multiple parent classes
            <pre>
              <code>
{`class Father:
    def father_method(self):
        return "Father method"

class Mother:
    def mother_method(self):
        return "Mother method"

class Child(Father, Mother):
    def child_method(self):
        return "Child method"`}
              </code>
            </pre>
          </li>
          <li>
            <strong>Multilevel Inheritance:</strong> A class inherits from a child class
            <pre>
              <code>
{`class Grandparent:
    def grandparent_method(self):
        return "Grandparent method"

class Parent(Grandparent):
    def parent_method(self):
        return "Parent method"

class Child(Parent):
    def child_method(self):
        return "Child method"`}
              </code>
            </pre>
          </li>
        </ol>

        <h2>✨ Method Overriding</h2>
        <pre>
          <code>
{`class Animal:
    def make_sound(self):
        return "Some sound"

class Dog(Animal):
    def make_sound(self):
        return "Woof!"

class Cat(Animal):
    def make_sound(self):
        return "Meow!"

# Using overridden methods
dog = Dog()
cat = Cat()
print(dog.make_sound())  # Woof!
print(cat.make_sound())  # Meow!`}
          </code>
        </pre>

        <h2>📝 The super() Function</h2>
        <pre>
          <code>
{`class Parent:
    def __init__(self, name):
        self.name = name

class Child(Parent):
    def __init__(self, name, age):
        super().__init__(name)  # Call parent's __init__
        self.age = age

# Creating child object
child = Child("John", 10)
print(f"Name: {child.name}, Age: {child.age}")`}
          </code>
        </pre>

        <h2>✨ Method Resolution Order (MRO)</h2>
        <pre>
          <code>
{`class A:
    def method(self):
        return "A method"

class B(A):
    def method(self):
        return "B method"

class C(A):
    def method(self):
        return "C method"

class D(B, C):
    pass

# Check MRO
print(D.__mro__)  # Shows the order of method resolution`}
          </code>
        </pre>

        <h2>📝 Best Practices</h2>
        <ul>
          <li>Use inheritance to represent "is-a" relationships</li>
          <li>Avoid deep inheritance hierarchies</li>
          <li>Use composition over inheritance when possible</li>
          <li>Keep the inheritance tree simple and clear</li>
          <li>Use super() to call parent class methods</li>
        </ul>

        <h2>🎥 Video Tutorial: Inheritance in Python</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/RSl87lqOXDE"
            title="Inheritance in Python"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 