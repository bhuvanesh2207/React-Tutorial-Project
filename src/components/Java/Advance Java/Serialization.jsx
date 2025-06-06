import React from 'react'
import {Link} from 'react-router-dom'

export default function Serialization() {
  return (
    <>
      <h1>💾 Serialization in Java</h1>
      
      <p>
        Serialization in Java is the process of converting an object's state into a byte stream, which can be persisted to a file or transmitted over a network. Deserialization is the reverse process of reconstructing the object from the byte stream.
      </p>

      <h2>📋 Serialization Concepts</h2>
      <ul>
        <li>🔍 Basic Serialization
          <ul>
            <li>Serializable interface</li>
            <li>Object streams</li>
            <li>Transient fields</li>
            <li>Static fields</li>
          </ul>
        </li>
        <li>🔄 Custom Serialization
          <ul>
            <li>writeObject method</li>
            <li>readObject method</li>
            <li>Externalizable interface</li>
            <li>Version control</li>
          </ul>
        </li>
        <li>📦 Advanced Features
          <ul>
            <li>Serial version UID</li>
            <li>Inheritance handling</li>
            <li>Security considerations</li>
            <li>Performance optimization</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>

      <h3>1. Basic Serialization</h3>
      <pre>
        <code>
{`// Basic serialization example
public class Person implements Serializable {
    private static final long serialVersionUID = 1L;
    private String name;
    private int age;
    private transient String password; // Won't be serialized
    
    public Person(String name, int age, String password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }
    
    // Getters and setters
}

// Serialization and deserialization
public class SerializationDemo {
    public static void serializeObject(Person person, String filename) {
        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream(filename))) {
            oos.writeObject(person);
            System.out.println("Object serialized successfully");
        } catch (IOException e) {
            System.out.println("Error serializing object: " + e.getMessage());
        }
    }
    
    public static Person deserializeObject(String filename) {
        try (ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream(filename))) {
            return (Person) ois.readObject();
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Error deserializing object: " + e.getMessage());
            return null;
        }
    }
}`}
        </code>
      </pre>

      <h3>2. Custom Serialization</h3>
      <pre>
        <code>
{`// Custom serialization example
public class CustomSerialization implements Serializable {
    private static final long serialVersionUID = 1L;
    private String data;
    private Date timestamp;
    
    private void writeObject(ObjectOutputStream out) throws IOException {
        out.defaultWriteObject(); // Write non-transient fields
        // Custom serialization logic
        out.writeObject(timestamp.getTime());
    }
    
    private void readObject(ObjectInputStream in) 
            throws IOException, ClassNotFoundException {
        in.defaultReadObject(); // Read non-transient fields
        // Custom deserialization logic
        long time = (long) in.readObject();
        timestamp = new Date(time);
    }
}`}
        </code>
      </pre>

      <h3>3. Externalizable Example</h3>
      <pre>
        <code>
{`// Externalizable example
public class ExternalizableExample implements Externalizable {
    private String name;
    private int age;
    
    public ExternalizableExample() {
        // Required no-arg constructor
    }
    
    @Override
    public void writeExternal(ObjectOutput out) throws IOException {
        out.writeUTF(name);
        out.writeInt(age);
    }
    
    @Override
    public void readExternal(ObjectInput in) 
            throws IOException, ClassNotFoundException {
        name = in.readUTF();
        age = in.readInt();
    }
}`}
        </code>
      </pre>

      <h3>4. Version Control Example</h3>
      <pre>
        <code>
{`// Version control example
public class VersionedClass implements Serializable {
    private static final long serialVersionUID = 2L; // Updated version
    private String name;
    private int age;
    private String email; // New field in version 2
    
    // Version 1 compatibility
    private void readObject(ObjectInputStream in) 
            throws IOException, ClassNotFoundException {
        in.defaultReadObject();
        if (email == null) {
            email = "default@example.com";
        }
    }
}`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>🎯 Serialization Design
          <ul>
            <li>Use serialVersionUID</li>
            <li>Handle versioning</li>
            <li>Consider security</li>
            <li>Optimize performance</li>
          </ul>
        </li>
        <li>🔄 Implementation Tips
          <ul>
            <li>Mark sensitive fields transient</li>
            <li>Implement custom serialization</li>
            <li>Handle inheritance</li>
            <li>Validate deserialized data</li>
          </ul>
        </li>
        <li>📦 Security Considerations
          <ul>
            <li>Validate input</li>
            <li>Use secure streams</li>
            <li>Handle sensitive data</li>
            <li>Implement access control</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>💾 Data Persistence
          <ul>
            <li>Object storage</li>
            <li>Cache management</li>
            <li>Session handling</li>
            <li>Configuration storage</li>
          </ul>
        </li>
        <li>🌐 Network Communication
          <ul>
            <li>RMI (Remote Method Invocation)</li>
            <li>Web services</li>
            <li>Message passing</li>
            <li>Data transfer</li>
          </ul>
        </li>
        <li>📱 Mobile Development
          <ul>
            <li>State preservation</li>
            <li>Data synchronization</li>
            <li>Offline storage</li>
            <li>App configuration</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Serialization</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Serialization Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <Link to="/AdvJava"><p>Back to Advanced Java</p></Link>
    </>
  )
}
