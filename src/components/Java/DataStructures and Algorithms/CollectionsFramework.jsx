import React from 'react'
import {Link} from 'react-router-dom'

export default function CollectionsFramework() {
  return (
    <>
      <div className="java-container">
        <h1>📚 Collections Framework in Java</h1>
        
        <p>
          The Java Collections Framework provides a unified architecture for representing and manipulating collections. It includes interfaces, implementations, and algorithms to work with groups of objects efficiently.
        </p>

        <h2>📋 Core Components</h2>
        <ul>
          <li>🔍 Interfaces
            <ul>
              <li>Collection</li>
              <li>List</li>
              <li>Set</li>
              <li>Queue</li>
              <li>Map</li>
            </ul>
          </li>
          <li>🔄 Implementations
            <ul>
              <li>ArrayList and LinkedList</li>
              <li>HashSet and TreeSet</li>
              <li>PriorityQueue</li>
              <li>HashMap and TreeMap</li>
            </ul>
          </li>
          <li>📦 Algorithms
            <ul>
              <li>Sorting</li>
              <li>Searching</li>
              <li>Shuffling</li>
              <li>Frequency counting</li>
            </ul>
          </li>
        </ul>

        <h2>💻 Code Examples</h2>

        <h3>1. List Implementations</h3>
        <pre>
          <code>
{`// List implementations
import java.util.*;

public class ListExamples {
    public static void main(String[] args) {
        // ArrayList
        List<String> arrayList = new ArrayList<>();
        arrayList.add("Apple");
        arrayList.add("Banana");
        arrayList.add("Orange");
        
        // LinkedList
        List<String> linkedList = new LinkedList<>();
        linkedList.add("First");
        linkedList.add("Second");
        linkedList.add("Third");
        
        // List operations
        System.out.println("ArrayList: " + arrayList);
        System.out.println("Size: " + arrayList.size());
        System.out.println("Contains 'Apple': " + arrayList.contains("Apple"));
        
        // Iteration
        for (String fruit : arrayList) {
            System.out.println(fruit);
        }
        
        // Sorting
        Collections.sort(arrayList);
        System.out.println("Sorted: " + arrayList);
    }
}`}
          </code>
        </pre>

        <h3>2. Set Implementations</h3>
        <pre>
          <code>
{`// Set implementations
import java.util.*;

public class SetExamples {
    public static void main(String[] args) {
        // HashSet
        Set<String> hashSet = new HashSet<>();
        hashSet.add("Red");
        hashSet.add("Green");
        hashSet.add("Blue");
        hashSet.add("Red"); // Duplicate ignored
        
        // TreeSet
        Set<String> treeSet = new TreeSet<>();
        treeSet.add("Zebra");
        treeSet.add("Apple");
        treeSet.add("Banana");
        
        // Set operations
        System.out.println("HashSet: " + hashSet);
        System.out.println("TreeSet (sorted): " + treeSet);
        
        // Union
        Set<String> union = new HashSet<>(hashSet);
        union.addAll(treeSet);
        System.out.println("Union: " + union);
        
        // Intersection
        Set<String> intersection = new HashSet<>(hashSet);
        intersection.retainAll(treeSet);
        System.out.println("Intersection: " + intersection);
    }
}`}
          </code>
        </pre>

        <h3>3. Map Implementations</h3>
        <pre>
          <code>
{`// Map implementations
import java.util.*;

public class MapExamples {
    public static void main(String[] args) {
        // HashMap
        Map<String, Integer> hashMap = new HashMap<>();
        hashMap.put("One", 1);
        hashMap.put("Two", 2);
        hashMap.put("Three", 3);
        
        // TreeMap
        Map<String, Integer> treeMap = new TreeMap<>();
        treeMap.put("Zebra", 1);
        treeMap.put("Apple", 2);
        treeMap.put("Banana", 3);
        
        // Map operations
        System.out.println("HashMap: " + hashMap);
        System.out.println("TreeMap (sorted): " + treeMap);
        
        // Accessing values
        System.out.println("Value for 'Two': " + hashMap.get("Two"));
        
        // Iterating entries
        for (Map.Entry<String, Integer> entry : hashMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}`}
          </code>
        </pre>

        <h3>4. Queue Implementations</h3>
        <pre>
          <code>
{`// Queue implementations
import java.util.*;

public class QueueExamples {
    public static void main(String[] args) {
        // PriorityQueue
        Queue<Integer> priorityQueue = new PriorityQueue<>();
        priorityQueue.offer(5);
        priorityQueue.offer(2);
        priorityQueue.offer(8);
        priorityQueue.offer(1);
        
        // Queue operations
        System.out.println("Queue: " + priorityQueue);
        System.out.println("Peek: " + priorityQueue.peek());
        
        // Polling elements
        while (!priorityQueue.isEmpty()) {
            System.out.println("Polled: " + priorityQueue.poll());
        }
        
        // Deque
        Deque<String> deque = new ArrayDeque<>();
        deque.addFirst("First");
        deque.addLast("Last");
        System.out.println("Deque: " + deque);
    }
}`}
          </code>
        </pre>

        <h2>💡 Best Practices</h2>
        <ul>
          <li>🎯 Collection Selection
            <ul>
              <li>Choose appropriate collection type</li>
              <li>Consider thread safety</li>
              <li>Evaluate performance needs</li>
              <li>Use generics effectively</li>
            </ul>
          </li>
          <li>🔄 Performance Tips
            <ul>
              <li>Initialize with capacity</li>
              <li>Use appropriate iterators</li>
              <li>Consider concurrent collections</li>
              <li>Optimize bulk operations</li>
            </ul>
          </li>
          <li>📦 Common Pitfalls
            <ul>
              <li>Concurrent modification</li>
              <li>Null handling</li>
              <li>Memory leaks</li>
              <li>Inefficient operations</li>
            </ul>
          </li>
        </ul>

        <h2>📝 Real-World Applications</h2>
        <ul>
          <li>🌐 Web Development
            <ul>
              <li>Session management</li>
              <li>Request handling</li>
              <li>Data caching</li>
              <li>Configuration storage</li>
            </ul>
          </li>
          <li>📱 Mobile Development
            <ul>
              <li>Data persistence</li>
              <li>UI state management</li>
              <li>Resource handling</li>
              <li>Event queuing</li>
            </ul>
          </li>
          <li>💾 Data Processing
            <ul>
              <li>Data aggregation</li>
              <li>Batch processing</li>
              <li>Data transformation</li>
              <li>Result caching</li>
            </ul>
          </li>
        </ul>

        <h2>🎥 Video Tutorial: Collections Framework</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/grEKMHGYyns"
            title="Collections Framework Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <Link to="/DatastrAlg"><p>Back to Data Structures and Algorithms</p></Link>
      </div>
    </>
  )
}
