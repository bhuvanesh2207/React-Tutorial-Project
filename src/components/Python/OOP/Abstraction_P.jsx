import React from 'react'

export default function Abstraction() {
  return (
    <>
      <div className="java-container">
        <h1>🔍 Abstraction in Python</h1>
        
        <p>
          Abstraction is a fundamental concept in OOP that helps in hiding the complex implementation 
          details and showing only the necessary features of an object. It helps in reducing programming 
          complexity and effort.
        </p>

        <h2>✨ Abstract Classes</h2>
        <pre>
          <code>
{`from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def start(self):
        pass
    
    @abstractmethod
    def stop(self):
        pass
    
    @abstractmethod
    def fuel_type(self):
        pass

class Car(Vehicle):
    def start(self):
        return "Car engine started"
    
    def stop(self):
        return "Car engine stopped"
    
    def fuel_type(self):
        return "Petrol"`}
          </code>
        </pre>

        <h2>📝 Interface-like Behavior</h2>
        <pre>
          <code>
{`from abc import ABC, abstractmethod

class Database(ABC):
    @abstractmethod
    def connect(self):
        pass
    
    @abstractmethod
    def disconnect(self):
        pass
    
    @abstractmethod
    def execute(self, query):
        pass

class MySQLDatabase(Database):
    def connect(self):
        return "Connected to MySQL"
    
    def disconnect(self):
        return "Disconnected from MySQL"
    
    def execute(self, query):
        return f"Executing query: {query}"`}
          </code>
        </pre>

        <h2>✨ Abstract Properties</h2>
        <pre>
          <code>
{`from abc import ABC, abstractmethod

class Shape(ABC):
    @property
    @abstractmethod
    def area(self):
        pass
    
    @property
    @abstractmethod
    def perimeter(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    @property
    def area(self):
        return 3.14 * self.radius ** 2
    
    @property
    def perimeter(self):
        return 2 * 3.14 * self.radius`}
          </code>
        </pre>

        <h2>📝 Abstract Methods with Implementation</h2>
        <pre>
          <code>
{`from abc import ABC, abstractmethod

class Animal(ABC):
    def __init__(self, name):
        self.name = name
    
    @abstractmethod
    def make_sound(self):
        pass
    
    def sleep(self):
        return f"{self.name} is sleeping"

class Dog(Animal):
    def make_sound(self):
        return f"{self.name} says Woof!"`}
          </code>
        </pre>

        <h2>✨ Multiple Inheritance with Abstract Classes</h2>
        <pre>
          <code>
{`from abc import ABC, abstractmethod

class Flyable(ABC):
    @abstractmethod
    def fly(self):
        pass

class Swimmable(ABC):
    @abstractmethod
    def swim(self):
        pass

class Duck(Flyable, Swimmable):
    def fly(self):
        return "Duck is flying"
    
    def swim(self):
        return "Duck is swimming"`}
          </code>
        </pre>

        <h2>📝 Best Practices</h2>
        <ul>
          <li>Use abstract classes to define common interfaces</li>
          <li>Keep abstract methods focused and minimal</li>
          <li>Provide default implementations when possible</li>
          <li>Use abstract properties for computed attributes</li>
          <li>Document abstract methods clearly</li>
        </ul>

        <h2>✨ Common Use Cases</h2>
        <pre>
          <code>
{`# Plugin system
from abc import ABC, abstractmethod

class Plugin(ABC):
    @abstractmethod
    def initialize(self):
        pass
    
    @abstractmethod
    def execute(self, data):
        pass
    
    @abstractmethod
    def cleanup(self):
        pass

# Database abstraction
class DatabaseConnection(ABC):
    @abstractmethod
    def connect(self):
        pass
    
    @abstractmethod
    def query(self, sql):
        pass
    
    @abstractmethod
    def close(self):
        pass`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: Abstraction in Python</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/6oL-0TdVy28"
            title="Abstraction in Python"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 