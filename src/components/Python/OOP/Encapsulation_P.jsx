import React from 'react'

export default function Encapsulation() {
  return (
    <>
      <div className="java-container">
        <h1>🔒 Encapsulation in Python</h1>
        
        <p>
          Encapsulation is a fundamental concept in OOP that bundles data and methods that operate on 
          that data within a single unit (class). It helps in hiding the internal state of an object 
          and requiring all interaction to be performed through an object's methods.
        </p>

        <h2>✨ Access Modifiers</h2>
        <pre>
          <code>
{`class BankAccount:
    def __init__(self, account_number, balance):
        # Public attribute
        self.account_number = account_number
        # Protected attribute (convention)
        self._balance = balance
        # Private attribute
        self.__transaction_history = []
    
    # Public method
    def deposit(self, amount):
        self.__update_balance(amount)
        self.__add_transaction("Deposit", amount)
    
    # Protected method (convention)
    def _calculate_interest(self):
        return self._balance * 0.05
    
    # Private method
    def __update_balance(self, amount):
        self._balance += amount
    
    def __add_transaction(self, type, amount):
        self.__transaction_history.append({
            "type": type,
            "amount": amount,
            "balance": self._balance
        })`}
          </code>
        </pre>

        <h2>📝 Property Decorators</h2>
        <pre>
          <code>
{`class Person:
    def __init__(self, name, age):
        self._name = name
        self._age = age
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, value):
        if not isinstance(value, str):
            raise ValueError("Name must be a string")
        self._name = value
    
    @property
    def age(self):
        return self._age
    
    @age.setter
    def age(self, value):
        if not isinstance(value, int) or value < 0:
            raise ValueError("Age must be a positive integer")
        self._age = value`}
          </code>
        </pre>

        <h2>✨ Getters and Setters</h2>
        <pre>
          <code>
{`class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius
    
    def get_celsius(self):
        return self._celsius
    
    def set_celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature below absolute zero")
        self._celsius = value
    
    def get_fahrenheit(self):
        return (self._celsius * 9/5) + 32
    
    def set_fahrenheit(self, value):
        celsius = (value - 32) * 5/9
        self.set_celsius(celsius)`}
          </code>
        </pre>

        <h2>📝 Name Mangling</h2>
        <pre>
          <code>
{`class Student:
    def __init__(self, name, grade):
        self.name = name
        self.__grade = grade  # Name mangling
    
    def get_grade(self):
        return self.__grade
    
    def set_grade(self, grade):
        if 0 <= grade <= 100:
            self.__grade = grade
        else:
            raise ValueError("Grade must be between 0 and 100")

# Using the class
student = Student("John", 85)
print(student.get_grade())  # 85
# print(student.__grade)    # AttributeError
# print(student._Student__grade)  # 85 (not recommended)`}
          </code>
        </pre>

        <h2>✨ Data Validation</h2>
        <pre>
          <code>
{`class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    @property
    def width(self):
        return self._width
    
    @width.setter
    def width(self, value):
        if not isinstance(value, (int, float)) or value <= 0:
            raise ValueError("Width must be a positive number")
        self._width = value
    
    @property
    def height(self):
        return self._height
    
    @height.setter
    def height(self, value):
        if not isinstance(value, (int, float)) or value <= 0:
            raise ValueError("Height must be a positive number")
        self._height = value
    
    @property
    def area(self):
        return self._width * self._height`}
          </code>
        </pre>

        <h2>📝 Best Practices</h2>
        <ul>
          <li>Use private attributes for internal state</li>
          <li>Provide public methods for controlled access</li>
          <li>Use property decorators for computed attributes</li>
          <li>Implement data validation in setters</li>
          <li>Document the public interface clearly</li>
        </ul>

        <h2>✨ Common Use Cases</h2>
        <pre>
          <code>
{`# Configuration management
class Config:
    def __init__(self):
        self.__settings = {}
    
    def get_setting(self, key):
        return self.__settings.get(key)
    
    def set_setting(self, key, value):
        if not isinstance(key, str):
            raise ValueError("Key must be a string")
        self.__settings[key] = value
    
    def remove_setting(self, key):
        if key in self.__settings:
            del self.__settings[key]

# Database connection
class DatabaseConnection:
    def __init__(self, host, port, user, password):
        self.__host = host
        self.__port = port
        self.__user = user
        self.__password = password
        self.__connected = False
    
    def connect(self):
        # Connection logic here
        self.__connected = True
    
    def disconnect(self):
        self.__connected = False
    
    @property
    def is_connected(self):
        return self.__connected`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: Encapsulation in Python</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/3ohzBxoFHAY"
            title="Encapsulation in Python"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 