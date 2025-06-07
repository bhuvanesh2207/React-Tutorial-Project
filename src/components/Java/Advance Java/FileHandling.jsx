import React from 'react'
import {Link} from 'react-router-dom'

export default function FileHandling() {
  return (
    <div className="java-container">
      <h1>📁 File Handling in Java</h1>
      
      <p>
        File handling in Java provides a robust way to read from and write to files, manage directories, and handle various file operations. It's essential for data persistence, configuration management, and data processing applications.
      </p>

      <h2>📋 File Operations</h2>
      <ul>
        <li>🔍 File I/O
          <ul>
            <li>Reading files</li>
            <li>Writing files</li>
            <li>Appending data</li>
            <li>Binary operations</li>
          </ul>
        </li>
        <li>🔄 Stream Operations
          <ul>
            <li>Byte streams</li>
            <li>Character streams</li>
            <li>Buffered streams</li>
            <li>Data streams</li>
          </ul>
        </li>
        <li>📦 File Management
          <ul>
            <li>File creation</li>
            <li>Directory operations</li>
            <li>File properties</li>
            <li>Path operations</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>

      <h3>1. Basic File Operations</h3>
      <pre>
        <code>
{`// Basic file operations
public class FileOperations {
    public static void createAndWriteFile(String filename, String content) {
        try (FileWriter writer = new FileWriter(filename);
             BufferedWriter bufferedWriter = new BufferedWriter(writer)) {
            bufferedWriter.write(content);
            System.out.println("File written successfully");
        } catch (IOException e) {
            System.out.println("Error writing to file: " + e.getMessage());
        }
    }
    
    public static String readFile(String filename) {
        StringBuilder content = new StringBuilder();
        try (FileReader reader = new FileReader(filename);
             BufferedReader bufferedReader = new BufferedReader(reader)) {
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                content.append(line).append("\\n");
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
        return content.toString();
    }
}`}
        </code>
      </pre>

      <h3>2. Binary File Operations</h3>
      <pre>
        <code>
{`// Binary file operations
public class BinaryFileOperations {
    public static void writeBinaryData(String filename, byte[] data) {
        try (FileOutputStream fos = new FileOutputStream(filename);
             BufferedOutputStream bos = new BufferedOutputStream(fos)) {
            bos.write(data);
            System.out.println("Binary data written successfully");
        } catch (IOException e) {
            System.out.println("Error writing binary data: " + e.getMessage());
        }
    }
    
    public static byte[] readBinaryData(String filename) {
        try (FileInputStream fis = new FileInputStream(filename);
             BufferedInputStream bis = new BufferedInputStream(fis)) {
            return bis.readAllBytes();
        } catch (IOException e) {
            System.out.println("Error reading binary data: " + e.getMessage());
            return new byte[0];
        }
    }
}`}
        </code>
      </pre>

      <h3>3. File Management</h3>
      <pre>
        <code>
{`// File management operations
public class FileManagement {
    public static void createDirectory(String dirPath) {
        File directory = new File(dirPath);
        if (directory.mkdirs()) {
            System.out.println("Directory created successfully");
        } else {
            System.out.println("Failed to create directory");
        }
    }
    
    public static void listFiles(String dirPath) {
        File directory = new File(dirPath);
        File[] files = directory.listFiles();
        if (files != null) {
            for (File file : files) {
                System.out.println(file.getName() + 
                    (file.isDirectory() ? " [Directory]" : " [File]"));
            }
        }
    }
    
    public static boolean deleteFile(String filePath) {
        File file = new File(filePath);
        return file.delete();
    }
}`}
        </code>
      </pre>

      <h3>4. Advanced File Operations</h3>
      <pre>
        <code>
{`// Advanced file operations
public class AdvancedFileOperations {
    public static void copyFile(String sourcePath, String destPath) {
        try (FileInputStream fis = new FileInputStream(sourcePath);
             FileOutputStream fos = new FileOutputStream(destPath)) {
            byte[] buffer = new byte[1024];
            int length;
            while ((length = fis.read(buffer)) > 0) {
                fos.write(buffer, 0, length);
            }
            System.out.println("File copied successfully");
        } catch (IOException e) {
            System.out.println("Error copying file: " + e.getMessage());
        }
    }
    
    public static void appendToFile(String filename, String content) {
        try (FileWriter writer = new FileWriter(filename, true);
             BufferedWriter bufferedWriter = new BufferedWriter(writer)) {
            bufferedWriter.write(content);
            bufferedWriter.newLine();
            System.out.println("Content appended successfully");
        } catch (IOException e) {
            System.out.println("Error appending to file: " + e.getMessage());
        }
    }
}`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>🎯 Resource Management
          <ul>
            <li>Use try-with-resources</li>
            <li>Close streams properly</li>
            <li>Handle exceptions</li>
            <li>Check file existence</li>
          </ul>
        </li>
        <li>🔄 Performance Tips
          <ul>
            <li>Use buffered streams</li>
            <li>Choose appropriate stream type</li>
            <li>Optimize buffer size</li>
            <li>Handle large files</li>
          </ul>
        </li>
        <li>📦 Security Considerations
          <ul>
            <li>Validate file paths</li>
            <li>Check permissions</li>
            <li>Handle sensitive data</li>
            <li>Use secure methods</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>📊 Data Processing
          <ul>
            <li>Log file analysis</li>
            <li>Data import/export</li>
            <li>Configuration files</li>
            <li>Report generation</li>
          </ul>
        </li>
        <li>💾 Backup Systems
          <ul>
            <li>File backup</li>
            <li>Incremental backup</li>
            <li>Data recovery</li>
            <li>Version control</li>
          </ul>
        </li>
        <li>📱 Application Development
          <ul>
            <li>User data storage</li>
            <li>Cache management</li>
            <li>Resource loading</li>
            <li>Settings storage</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: File Handling</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="File Handling Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <Link to="/AdvJava"><p>Back to Advanced Java</p></Link>
    </div>
  )
}
