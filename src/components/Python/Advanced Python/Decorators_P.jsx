import React from 'react'

export default function Decorators() {
  return (
    <>
      <div className="python-container">
        <h1>🎨 Decorators in Python</h1>
        
        <p>
          Decorators are a powerful feature in Python that allows you to modify the behavior of functions 
          or classes without directly changing their source code. They provide a clean and elegant way to 
          add functionality to existing code.
        </p>

        <h2>✨ Function Decorators</h2>
        <pre>
          <code>
{`# Basic function decorator
def timer_decorator(func):
    def wrapper(*args, **kwargs):
        import time
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"Function {func.__name__} took {end_time - start_time:.2f} seconds")
        return result
    return wrapper

@timer_decorator
def slow_function():
    import time
    time.sleep(1)
    return "Function completed"

# Using the decorator
result = slow_function()`}
          </code>
        </pre>

        <h2>📝 Decorator with Arguments</h2>
        <pre>
          <code>
{`# Decorator with arguments
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(times=3)
def greet(name):
    print(f"Hello, {name}!")

# Using the decorator
greet("John")  # Prints greeting 3 times`}
          </code>
        </pre>

        <h2>✨ Class Decorators</h2>
        <pre>
          <code>
{`# Class decorator
def singleton(cls):
    instances = {}
    def get_instance(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]
    return get_instance

@singleton
class Database:
    def __init__(self):
        print("Initializing database connection")
    
    def query(self, sql):
        return f"Executing: {sql}"

# Using the decorator
db1 = Database()
db2 = Database()  # Returns the same instance`}
          </code>
        </pre>

        <h2>📝 Method Decorators</h2>
        <pre>
          <code>
{`# Method decorator
def validate_input(func):
    def wrapper(self, value):
        if not isinstance(value, (int, float)):
            raise ValueError("Value must be a number")
        return func(self, value)
    return wrapper

class Calculator:
    @validate_input
    def square(self, number):
        return number ** 2

# Using the decorator
calc = Calculator()
result = calc.square(5)  # 25
# calc.square("5")  # Raises ValueError`}
          </code>
        </pre>

        <h2>✨ Property Decorators</h2>
        <pre>
          <code>
{`# Property decorator
class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        return self._radius
    
    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value
    
    @property
    def area(self):
        return 3.14 * self._radius ** 2

# Using the decorator
circle = Circle(5)
print(circle.area)  # 78.5
circle.radius = 10
print(circle.area)  # 314.0`}
          </code>
        </pre>

        <h2>📝 Common Use Cases</h2>
        <pre>
          <code>
{`# Caching decorator
def cache(func):
    cache_data = {}
    def wrapper(*args, **kwargs):
        key = str(args) + str(kwargs)
        if key not in cache_data:
            cache_data[key] = func(*args, **kwargs)
        return cache_data[key]
    return wrapper

# Logging decorator
def log_calls(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with args: {args}, kwargs: {kwargs}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned: {result}")
        return result
    return wrapper

# Authorization decorator
def require_auth(func):
    def wrapper(*args, **kwargs):
        if not is_authenticated():
            raise PermissionError("Authentication required")
        return func(*args, **kwargs)
    return wrapper`}
          </code>
        </pre>

        <h2>✨ Best Practices</h2>
        <ul>
          <li>Keep decorators simple and focused</li>
          <li>Use functools.wraps to preserve metadata</li>
          <li>Document decorator behavior clearly</li>
          <li>Consider performance implications</li>
          <li>Use type hints for better IDE support</li>
          <li>Test decorators thoroughly</li>
        </ul>

        <h2>📝 Advanced Decorator Patterns</h2>
        <pre>
          <code>
{`# Decorator with functools.wraps
from functools import wraps

def debug(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result}")
        return result
    return wrapper

# Multiple decorators
@debug
@timer_decorator
def complex_function():
    return "Complex operation"

# Decorator factory
def retry(max_attempts=3):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts - 1:
                        raise
                    print(f"Attempt {attempt + 1} failed: {e}")
            return None
        return wrapper
    return decorator`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: Decorators in Python</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/FsAPt_9Bf3U"
            title="Decorators in Python"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 