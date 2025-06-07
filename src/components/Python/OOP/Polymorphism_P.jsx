 import React from 'react';

export default function Polymorphism() {  
  return (
    <>
      <div className="java-container">
        <h1>🔄 Polymorphism in Python</h1>
        
        <p>
          Polymorphism is an important concept in Object-Oriented Programming (OOP) that allows objects of different classes to be treated as objects of a common superclass. 
          It enables a single interface to represent different underlying forms (data types).
        </p>

        <h2>✨ Method Overriding</h2>
        <pre>
          <code>
{`class Animal:
    def speak(self):
        return "Some generic animal sound"

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

animals = [Dog(), Cat(), Animal()]
for animal in animals:
    print(animal.speak())  # Output: Woof! Meow! Some generic animal sound`}
          </code>
        </pre>

        <h2>📝 Duck Typing</h2>
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

        <h2>✨ Operator Overloading</h2>
        <pre>
          <code>
{`class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

    def __str__(self):
        return f"({self.x}, {self.y})"

p1 = Point(1, 2)
p2 = Point(3, 4)
result = p1 + p2
print(result)  # Output: (4, 6)`}
          </code>
        </pre>

        <h2>📝 Polymorphism with Functions and Objects</h2>
        <pre>
          <code>
{`def add(a, b, c=0):
    return a + b + c

print(add(2, 3))      # Output: 5
print(add(2, 3, 4))   # Output: 9`}
          </code>
        </pre>

        <h2>✨ Built-in Polymorphic Functions</h2>
        <pre>
          <code>
{`print(len("Python"))      # Output: 6
print(len([1, 2, 3, 4]))   # Output: 4
print(len({'a': 1, 'b': 2})) # Output: 2`}
          </code>
        </pre>

        <h2>📝 Best Practices</h2>
        <ul>
          <li>Use polymorphism to write flexible and reusable code</li>
          <li>Leverage duck typing for dynamic behavior</li>
          <li>Override methods thoughtfully in subclasses</li>
          <li>Use operator overloading only when it makes code clearer</li>
          <li>Document polymorphic behavior for maintainability</li>
        </ul>

        <h2>✨ Common Use Cases</h2>
        <pre>
          <code>
{`# GUI frameworks (widgets with common interfaces)
# File handling (objects with .read()/.write() methods)
# Mathematical libraries (vectors, matrices, etc.)
# Testing frameworks (mock objects with expected interfaces)`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: Polymorphism in Python</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/JeznW_7DlB0"
            title="Polymorphism in Python"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
