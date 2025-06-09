import React from 'react'
import { Link } from 'react-router-dom'

export default function OOP() {
  return (
    <>
      <div className="java-container">
        <h1>🔄 Python Object-Oriented Programming (OOP)</h1>
        
        <p>
          Object-Oriented Programming (OOP) in Python allows you to structure your code using classes and objects. It promotes code reusability, modularity, and maintainability by organizing data and behavior into objects.
        </p>

        {/* Sub Topics Section */}
        

        <h2>✨ Classes and Objects</h2>
        <pre>
          <code>
{`class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        return f"{self.name} says Woof!"

dog = Dog("Buddy", 3)
print(dog.bark())  # Output: Buddy says Woof!`}
          </code>
        </pre>

        <h2>📝 Inheritance</h2>
        <pre>
          <code>
{`class Animal:
    def speak(self):
        return "Some generic animal sound"

class Dog(Animal):
    def speak(self):
        return "Woof!"

dog = Dog()
print(dog.speak())  # Output: Woof!`}
          </code>
        </pre>

        <h2>✨ Encapsulation</h2>
        <pre>
          <code>
{`class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private attribute

    def deposit(self, amount):
        self.__balance += amount

    def get_balance(self):
        return self.__balance

account = BankAccount(1000)
account.deposit(500)
print(account.get_balance())  # Output: 1500`}
          </code>
        </pre>

        <h2>📝 Polymorphism</h2>
        <pre>
          <code>
{`class Bird:
    def fly(self):
        return "Bird is flying"

class Airplane:
    def fly(self):
        return "Airplane is flying"

def make_it_fly(flyer):
    print(flyer.fly())

make_it_fly(Bird())      # Output: Bird is flying
make_it_fly(Airplane())  # Output: Airplane is flying`}
          </code>
        </pre>

        <h2>✨ Best Practices</h2>
        <ul>
          <li>Use classes to model real-world entities</li>
          <li>Leverage inheritance for code reuse</li>
          <li>Encapsulate data and behavior</li>
          <li>Use polymorphism for flexible code</li>
          <li>Document your classes and methods</li>
        </ul>

        <h2>🎥 Video Tutorial: Python OOP</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/your_video_id"
            title="Python OOP"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="subtopics-section">
          <h2>📚 sub Topics</h2>
          <ul>
            <li><Link to="/OOPIntro_P"><p>OOP Intro</p></Link></li>
            <li><Link to="/Abstraction_P"><p>Abstraction</p></Link></li>
            <li><Link to="/Encapsulation_P"><p>Encapsulation</p></Link></li>
            <li><Link to="/Inheritance_P"><p>Inheritance</p></Link></li>
            <li><Link to="/Polymorphism_P"><p>Polymorphism</p></Link></li>
          </ul>
        </div>
      </div>
    </>
  )
} 