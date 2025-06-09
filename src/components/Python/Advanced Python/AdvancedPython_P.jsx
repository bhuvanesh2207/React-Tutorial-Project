import React from 'react'
import { Link } from 'react-router-dom'

export default function AdvancedPython() {
  return (
    <>
      <div className="java-container">
        <h1>🔄 Advanced Python Topics</h1>
        
        <p>
          Advanced Python topics cover powerful features that enhance your coding capabilities. These include decorators, exception handling, and more, allowing you to write more efficient and maintainable code.
        </p>

        

        <h2>✨ Decorators</h2>
        <pre>
          <code>
{`def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()`}
          </code>
        </pre>

        <h2>📝 Exception Handling</h2>
        <pre>
          <code>
{`try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
finally:
    print("This block always executes.")`}
          </code>
        </pre>

        <h2>✨ Context Managers</h2>
        <pre>
          <code>
{`with open('file.txt', 'r') as file:
    content = file.read()
    print(content)`}
          </code>
        </pre>

        <h2>📝 Generators</h2>
        <pre>
          <code>
{`def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

for num in count_up_to(5):
    print(num)`}
          </code>
        </pre>

        <h2>✨ Best Practices</h2>
        <ul>
          <li>Use decorators to modify or enhance functions</li>
          <li>Implement robust exception handling for error management</li>
          <li>Leverage context managers for resource management</li>
          <li>Use generators for memory-efficient iteration</li>
          <li>Document advanced features for maintainability</li>
        </ul>

        <h2>🎥 Video Tutorial: Advanced Python Concepts</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/your_video_id"
            title="Advanced Python Concepts"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* Sub Topics Section */}
        <div className="subtopics-section">
          <h2>📚 sub Topics</h2>
          <ul>
            <li><Link to="/Decorators_P"><p>Decorators</p></Link></li>
            <li><Link to="/ExceptionHandling_P"><p>Exception Handling</p></Link></li>
          </ul>
        </div>

      </div>
    </>
  )
} 