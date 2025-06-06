import React from 'react'
import {Link} from 'react-router-dom'

export default function JavaAnnotations() {
  return (
    <>
      <h1>📝 Java Annotations</h1>
      
      <p>
        Java annotations provide a powerful way to add metadata to your code. They can be used to provide information to the compiler, generate code, or process annotations at runtime. Annotations are a form of metadata that can be added to your code without affecting its execution.
      </p>

      <h2>📋 Annotation Types</h2>
      <ul>
        <li>🔍 Built-in Annotations
          <ul>
            <li>@Override</li>
            <li>@Deprecated</li>
            <li>@SuppressWarnings</li>
            <li>@FunctionalInterface</li>
          </ul>
        </li>
        <li>🔄 Custom Annotations
          <ul>
            <li>Annotation declaration</li>
            <li>Retention policies</li>
            <li>Target elements</li>
            <li>Default values</li>
          </ul>
        </li>
        <li>📦 Framework Annotations
          <ul>
            <li>Spring annotations</li>
            <li>JPA annotations</li>
            <li>JUnit annotations</li>
            <li>REST annotations</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>

      <h3>1. Built-in Annotations</h3>
      <pre>
        <code>
{`// Built-in annotations example
public class AnnotationExamples {
    @Override
    public String toString() {
        return "Custom toString implementation";
    }
    
    @Deprecated
    public void oldMethod() {
        // This method is deprecated
    }
    
    @SuppressWarnings("unchecked")
    public void processList(List list) {
        // Suppressing unchecked warning
    }
    
    @FunctionalInterface
    interface Calculator {
        int calculate(int x, int y);
    }
}`}
        </code>
      </pre>

      <h3>2. Custom Annotation</h3>
      <pre>
        <code>
{`// Custom annotation example
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD, ElementType.TYPE})
public @interface Author {
    String name();
    String date() default "2024-01-01";
    String[] tags() default {};
}

// Using custom annotation
@Author(
    name = "John Doe",
    date = "2024-03-15",
    tags = {"java", "annotation"}
)
public class AnnotatedClass {
    @Author(name = "Jane Smith")
    public void annotatedMethod() {
        // Method implementation
    }
}`}
        </code>
      </pre>

      <h3>3. Annotation Processing</h3>
      <pre>
        <code>
{`// Annotation processing example
public class AnnotationProcessor {
    public static void processAnnotations(Object obj) {
        Class<?> clazz = obj.getClass();
        
        // Process class annotations
        if (clazz.isAnnotationPresent(Author.class)) {
            Author author = clazz.getAnnotation(Author.class);
            System.out.println("Author: " + author.name());
            System.out.println("Date: " + author.date());
            System.out.println("Tags: " + Arrays.toString(author.tags()));
        }
        
        // Process method annotations
        for (Method method : clazz.getDeclaredMethods()) {
            if (method.isAnnotationPresent(Author.class)) {
                Author author = method.getAnnotation(Author.class);
                System.out.println("Method: " + method.getName());
                System.out.println("Author: " + author.name());
            }
        }
    }
}`}
        </code>
      </pre>

      <h3>4. Framework Annotations</h3>
      <pre>
        <code>
{`// Framework annotations example
@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService userService;
    
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id);
    }
    
    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }
    
    @Test
    public void testGetUser() {
        // Test implementation
    }
}`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>🎯 Annotation Design
          <ul>
            <li>Use meaningful names</li>
            <li>Define clear purposes</li>
            <li>Document usage</li>
            <li>Consider retention</li>
          </ul>
        </li>
        <li>🔄 Implementation Tips
          <ul>
            <li>Keep annotations simple</li>
            <li>Use appropriate targets</li>
            <li>Handle defaults</li>
            <li>Validate values</li>
          </ul>
        </li>
        <li>📦 Usage Guidelines
          <ul>
            <li>Follow conventions</li>
            <li>Consider performance</li>
            <li>Maintain compatibility</li>
            <li>Test thoroughly</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>🌐 Web Development
          <ul>
            <li>REST endpoints</li>
            <li>Request mapping</li>
            <li>Security configuration</li>
            <li>Validation rules</li>
          </ul>
        </li>
        <li>💾 Database Operations
          <ul>
            <li>Entity mapping</li>
            <li>Relationship definition</li>
            <li>Query optimization</li>
            <li>Transaction management</li>
          </ul>
        </li>
        <li>🧪 Testing
          <ul>
            <li>Test configuration</li>
            <li>Mock objects</li>
            <li>Test lifecycle</li>
            <li>Assertion rules</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Java Annotations</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Java Annotations Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <Link to="/AdvJava"><p>Back to Advanced Java</p></Link>
    </>
  )
}
