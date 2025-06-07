import React from 'react'

export default function Algorithms() {
  return (
    <>
      <div className="java-container">
        <h2>🔢 Algorithms in Java</h2>
        <p>
          An <strong>algorithm</strong> is a set of well-defined instructions to solve a specific problem. In Java programming, algorithms form the backbone for writing efficient and optimized code. 
          Understanding algorithms helps improve performance and scalability of applications. 🚀
        </p>

        <h3>📚 Main Subtopics of Algorithms</h3>
        <ul>
          <li><strong>Sorting Algorithms:</strong> Methods to arrange data in a particular order (ascending/descending). Examples: Bubble Sort, Quick Sort, Merge Sort.</li>
          <li><strong>Searching Algorithms:</strong> Techniques to find elements in data structures. Examples: Linear Search, Binary Search.</li>
          <li><strong>Recursion:</strong> A function calling itself to break down problems into smaller parts. Examples: Fibonacci sequence, Factorial, Tower of Hanoi.</li>
          <li><strong>Utility Algorithms:</strong> Common mathematical algorithms like GCD (Greatest Common Divisor) and prime checking.</li>
        </ul>

        <h3>✨ Why Algorithms Matter</h3>
        <p>
          Algorithms help you write code that is not only correct but also efficient, minimizing execution time and resource use. They are essential for technical interviews and real-world applications like data processing, gaming, and machine learning. 💡
        </p>

        <h3>📝 Sample Java Code Implementing Common Algorithms</h3>
        <pre style={{background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto'}}>
          <code>{`
public class Algorithms {

    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    public static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }

    public static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; i++)
            L[i] = arr[left + i];
        for (int j = 0; j < n2; j++)
            R[j] = arr[mid + 1 + j];

        int i = 0, j = 0, k = left;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = (left + right) / 2;

            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);

            merge(arr, left, mid, right);
        }
    }

    public static int binarySearch(int[] arr, int left, int right, int x) {
        if (right >= left) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == x)
                return mid;

            if (arr[mid] > x)
                return binarySearch(arr, left, mid - 1, x);

            return binarySearch(arr, mid + 1, right, x);
        }
        return -1;
    }

    public static int fibonacci(int n) {
        if (n <= 1)
            return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static int factorial(int n) {
        if (n == 0)
            return 1;
        return n * factorial(n - 1);
    }

    public static int gcd(int a, int b) {
        if (b == 0)
            return a;
        return gcd(b, a % b);
    }

    public static void main(String[] args) {
        int[] array = {64, 25, 12, 22, 11};

        bubbleSort(array);
        selectionSort(array);
        insertionSort(array);

        int[] mergeArray = {12, 11, 13, 5, 6, 7};
        mergeSort(mergeArray, 0, mergeArray.length - 1);

        int index = binarySearch(mergeArray, 0, mergeArray.length - 1, 13);

        int fibNum = fibonacci(7);
        int factNum = factorial(5);
        int gcdNum = gcd(54, 24);
    }
}
    `}</code>
        </pre>

        <h3>🎥 Video Tutorial: Java Algorithms</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8hly31xKli0"
            title="Java Algorithms Tutorial"
           
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
          <small>
            Source: <a href="https://www.youtube.com/watch?v=8hly31xKli0" target="_blank" rel="noopener noreferrer">freeCodeCamp.org</a>
          </small>
        </div>
      </div>
    </>
  )
}
