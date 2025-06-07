import React from 'react'
import {Link} from 'react-router-dom'

export default function ThreadsMultithreading() {
  return (
    <div className="java-container">
      <h1>🔄 Threads & Multithreading in Java</h1>
      
      <p>
        Multithreading in Java allows concurrent execution of multiple parts of a program, enabling better resource utilization and improved application performance. It's essential for developing responsive and efficient applications.
      </p>

      <h2>📋 Thread Concepts</h2>
      <ul>
        <li>🔍 Thread Creation
          <ul>
            <li>Extending Thread class</li>
            <li>Implementing Runnable</li>
            <li>Using ExecutorService</li>
            <li>Lambda expressions</li>
          </ul>
        </li>
        <li>🔄 Thread Lifecycle
          <ul>
            <li>New state</li>
            <li>Runnable state</li>
            <li>Running state</li>
            <li>Blocked state</li>
            <li>Terminated state</li>
          </ul>
        </li>
        <li>📦 Thread Synchronization
          <ul>
            <li>Synchronized methods</li>
            <li>Synchronized blocks</li>
            <li>Volatile keyword</li>
            <li>Atomic operations</li>
          </ul>
        </li>
      </ul>

      <h2>💻 Code Examples</h2>

      <h3>1. Basic Thread Creation</h3>
      <pre>
        <code>
{`// Thread creation examples
public class ThreadCreation {
    // Extending Thread class
    static class MyThread extends Thread {
        public void run() {
            System.out.println("Thread running: " + getName());
        }
    }
    
    // Implementing Runnable
    static class MyRunnable implements Runnable {
        public void run() {
            System.out.println("Runnable running: " + 
                Thread.currentThread().getName());
        }
    }
    
    public static void main(String[] args) {
        // Using Thread class
        MyThread thread1 = new MyThread();
        thread1.start();
        
        // Using Runnable
        Thread thread2 = new Thread(new MyRunnable());
        thread2.start();
        
        // Using lambda
        Thread thread3 = new Thread(() -> {
            System.out.println("Lambda thread running: " + 
                Thread.currentThread().getName());
        });
        thread3.start();
    }
}`}
        </code>
      </pre>

      <h3>2. Thread Synchronization</h3>
      <pre>
        <code>
{`// Thread synchronization examples
public class ThreadSynchronization {
    private int counter = 0;
    
    // Synchronized method
    public synchronized void incrementCounter() {
        counter++;
    }
    
    // Synchronized block
    public void incrementCounterBlock() {
        synchronized(this) {
            counter++;
        }
    }
    
    // Using atomic integer
    private AtomicInteger atomicCounter = new AtomicInteger(0);
    
    public void incrementAtomic() {
        atomicCounter.incrementAndGet();
    }
}`}
        </code>
      </pre>

      <h3>3. Thread Pool Example</h3>
      <pre>
        <code>
{`// Thread pool example
public class ThreadPoolExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        for (int i = 0; i < 5; i++) {
            final int taskId = i;
            executor.submit(() -> {
                System.out.println("Task " + taskId + " running on " + 
                    Thread.currentThread().getName());
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
        }
        
        executor.shutdown();
    }
}`}
        </code>
      </pre>

      <h3>4. Producer-Consumer Pattern</h3>
      <pre>
        <code>
{`// Producer-Consumer pattern
public class ProducerConsumer {
    private BlockingQueue<Integer> queue = new LinkedBlockingQueue<>(5);
    
    class Producer implements Runnable {
        public void run() {
            try {
                for (int i = 0; i < 10; i++) {
                    queue.put(i);
                    System.out.println("Produced: " + i);
                    Thread.sleep(100);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
    
    class Consumer implements Runnable {
        public void run() {
            try {
                while (true) {
                    Integer value = queue.take();
                    System.out.println("Consumed: " + value);
                    Thread.sleep(200);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
}`}
        </code>
      </pre>

      <h2>💡 Best Practices</h2>
      <ul>
        <li>🎯 Thread Management
          <ul>
            <li>Use thread pools</li>
            <li>Handle interruptions</li>
            <li>Monitor thread states</li>
            <li>Clean up resources</li>
          </ul>
        </li>
        <li>🔄 Synchronization
          <ul>
            <li>Minimize synchronization</li>
            <li>Use concurrent collections</li>
            <li>Avoid deadlocks</li>
            <li>Consider atomic operations</li>
          </ul>
        </li>
        <li>📦 Performance Tips
          <ul>
            <li>Optimize thread count</li>
            <li>Use appropriate data structures</li>
            <li>Monitor resource usage</li>
            <li>Handle exceptions properly</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Real-World Applications</h2>
      <ul>
        <li>🌐 Web Servers
          <ul>
            <li>Request handling</li>
            <li>Connection pooling</li>
            <li>Load balancing</li>
            <li>Session management</li>
          </ul>
        </li>
        <li>🎮 Game Development
          <ul>
            <li>Game loop</li>
            <li>Physics calculations</li>
            <li>AI processing</li>
            <li>Network communication</li>
          </ul>
        </li>
        <li>📊 Data Processing
          <ul>
            <li>Parallel processing</li>
            <li>Batch operations</li>
            <li>Real-time analytics</li>
            <li>Data streaming</li>
          </ul>
        </li>
      </ul>

      <h2>🎥 Video Tutorial: Threads & Multithreading</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Threads & Multithreading Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <Link to="/AdvJava"><p>Back to Advanced Java</p></Link>
    </div>
  )
}
