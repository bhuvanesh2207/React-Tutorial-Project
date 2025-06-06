import React from 'react'
import { Link } from 'react-router-dom';

export default function DecodeDataStructures() {
  return (
    <>
      <div className="java-container">
        <h1>📊 Data Structures in Java</h1>
        
        <p>
          Data structures are fundamental building blocks in Java programming that help organize and store data efficiently. Understanding different data structures and their implementations is crucial for writing optimized and scalable applications.
        </p>

        <h2>📋 Common Data Structures</h2>
        <ul>
          <li>📦 Arrays
            <ul>
              <li>Fixed-size collections</li>
              <li>Direct element access</li>
              <li>Contiguous memory allocation</li>
            </ul>
          </li>
          <li>🔗 Linked Lists
            <ul>
              <li>Dynamic size</li>
              <li>Node-based structure</li>
              <li>Singly and doubly linked</li>
            </ul>
          </li>
          <li>🌳 Trees
            <ul>
              <li>Binary Search Trees</li>
              <li>AVL Trees</li>
              <li>Red-Black Trees</li>
            </ul>
          </li>
          <li>📚 Stacks and Queues
            <ul>
              <li>LIFO (Last In, First Out)</li>
              <li>FIFO (First In, First Out)</li>
              <li>Priority Queues</li>
            </ul>
          </li>
        </ul>

        <h2>💡 Collection Framework</h2>
        <ul>
          <li>📦 Lists
            <ul>
              <li>ArrayList - Dynamic arrays</li>
              <li>LinkedList - Doubly linked list</li>
              <li>Vector - Thread-safe array</li>
            </ul>
          </li>
          <li>🔍 Sets
            <ul>
              <li>HashSet - Unordered unique elements</li>
              <li>TreeSet - Sorted unique elements</li>
              <li>LinkedHashSet - Ordered unique elements</li>
            </ul>
          </li>
          <li>🗺️ Maps
            <ul>
              <li>HashMap - Key-value pairs</li>
              <li>TreeMap - Sorted key-value pairs</li>
              <li>LinkedHashMap - Ordered key-value pairs</li>
            </ul>
          </li>
        </ul>

        <h2>📝 Example: ArrayList and LinkedList</h2>
        <pre>
          <code>
{`import java.util.*;

public class ListExample {
    public static void main(String[] args) {
        // ArrayList example
        ArrayList<String> arrayList = new ArrayList<>();
        arrayList.add("Apple");
        arrayList.add("Banana");
        arrayList.add("Orange");
        
        System.out.println("ArrayList:");
        for (String fruit : arrayList) {
            System.out.println(fruit);
        }
        
        // LinkedList example
        LinkedList<String> linkedList = new LinkedList<>();
        linkedList.add("First");
        linkedList.add("Second");
        linkedList.add("Third");
        
        System.out.println("\\nLinkedList:");
        for (String item : linkedList) {
            System.out.println(item);
        }
    }
}`}
          </code>
        </pre>

        <h2>📝 Example: HashSet and TreeSet</h2>
        <pre>
          <code>
{`import java.util.*;

public class SetExample {
    public static void main(String[] args) {
        // HashSet example
        HashSet<String> hashSet = new HashSet<>();
        hashSet.add("Red");
        hashSet.add("Green");
        hashSet.add("Blue");
        hashSet.add("Red"); // Duplicate, won't be added
        
        System.out.println("HashSet:");
        for (String color : hashSet) {
            System.out.println(color);
        }
        
        // TreeSet example
        TreeSet<Integer> treeSet = new TreeSet<>();
        treeSet.add(5);
        treeSet.add(2);
        treeSet.add(8);
        treeSet.add(1);
        
        System.out.println("\\nTreeSet (sorted):");
        for (Integer number : treeSet) {
            System.out.println(number);
        }
    }
}`}
          </code>
        </pre>

        <h2>📝 Example: HashMap and TreeMap</h2>
        <pre>
          <code>
{`import java.util.*;

public class MapExample {
    public static void main(String[] args) {
        // HashMap example
        HashMap<String, Integer> hashMap = new HashMap<>();
        hashMap.put("John", 25);
        hashMap.put("Alice", 30);
        hashMap.put("Bob", 28);
        
        System.out.println("HashMap:");
        for (Map.Entry<String, Integer> entry : hashMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // TreeMap example
        TreeMap<String, String> treeMap = new TreeMap<>();
        treeMap.put("Zebra", "Mammal");
        treeMap.put("Ant", "Insect");
        treeMap.put("Cat", "Mammal");
        
        System.out.println("\\nTreeMap (sorted by key):");
        for (Map.Entry<String, String> entry : treeMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}`}
          </code>
        </pre>

        <h2>🎥 Video Tutorial: Data Structures in Java</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/grEKMHGYyns"
            title="Data Structures in Java Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
}