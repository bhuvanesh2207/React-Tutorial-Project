import React from 'react'
import {Link} from 'react-router-dom'

export default function Encapsulation() {
  return (
    <div className="java-container">
      <h1>🔒 Encapsulation in Java</h1>
      
      <p>
        Encapsulation is one of the fundamental principles of Object-Oriented Programming that bundles data (attributes) and methods (functions) that operate on the data into a single unit called a class. It helps in hiding the internal implementation details and protecting the data from unauthorized access.
      </p>

      <h2>📋 Key Features of Encapsulation</h2>
      <ul>
        <li>🔐 Data Hiding
          <ul>
            <li>Private access modifiers</li>
            <li>Protected data members</li>
            <li>Controlled access</li>
          </ul>
        </li>
        <li>🔄 Data Access
          <ul>
            <li>Getter methods</li>
            <li>Setter methods</li>
            <li>Validation rules</li>
          </ul>
        </li>
        <li>📦 Data Protection
          <ul>
            <li>Access control</li>
            <li>Data validation</li>
            <li>Error handling</li>
          </ul>
        </li>
      </ul>

      <h2>💡 Benefits of Encapsulation</h2>
      <ul>
        <li>🔒 Security
          <ul>
            <li>Data protection</li>
            <li>Access control</li>
            <li>Prevent unauthorized access</li>
          </ul>
        </li>
        <li>🔄 Flexibility
          <ul>
            <li>Implementation changes</li>
            <li>Code maintenance</li>
            <li>Future modifications</li>
          </ul>
        </li>
        <li>📦 Reusability
          <ul>
            <li>Code organization</li>
            <li>Modular design</li>
            <li>Component reuse</li>
          </ul>
        </li>
      </ul>

      <h2>📝 Example: Encapsulated Class</h2>
      <pre>
        <code>
{`public class BankAccount {
    // Private data members
    private String accountNumber;
    private String accountHolder;
    private double balance;
    private static final double MIN_BALANCE = 100.0;
    
    // Constructor
    public BankAccount(String accountHolder) {
        this.accountNumber = generateAccountNumber();
        this.accountHolder = accountHolder;
        this.balance = 0.0;
    }
    
    // Getter methods
    public String getAccountNumber() {
        return accountNumber;
    }
    
    public String getAccountHolder() {
        return accountHolder;
    }
    
    public double getBalance() {
        return balance;
    }
    
    // Setter methods with validation
    public void setAccountHolder(String accountHolder) {
        if (accountHolder != null && !accountHolder.trim().isEmpty()) {
            this.accountHolder = accountHolder;
        } else {
            throw new IllegalArgumentException("Account holder name cannot be empty");
        }
    }
    
    // Business methods
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        } else {
            throw new IllegalArgumentException("Deposit amount must be positive");
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0) {
            if (balance - amount >= MIN_BALANCE) {
                balance -= amount;
                System.out.println("Withdrawn: $" + amount);
            } else {
                throw new IllegalStateException("Insufficient funds to maintain minimum balance");
            }
        } else {
            throw new IllegalArgumentException("Withdrawal amount must be positive");
        }
    }
    
    // Private helper method
    private String generateAccountNumber() {
        return "ACC" + System.currentTimeMillis();
    }
}`}
        </code>
      </pre>

      <h2>📝 Example: Using Encapsulation</h2>
      <pre>
        <code>
{`public class Main {
    public static void main(String[] args) {
        try {
            // Create a new bank account
            BankAccount account = new BankAccount("John Doe");
            
            // Access data through getters
            System.out.println("Account Holder: " + account.getAccountHolder());
            System.out.println("Account Number: " + account.getAccountNumber());
            System.out.println("Initial Balance: $" + account.getBalance());
            
            // Modify data through setters and methods
            account.deposit(1000.0);
            account.withdraw(500.0);
            
            // Try to set invalid data
            try {
                account.setAccountHolder("");
            } catch (IllegalArgumentException e) {
                System.out.println("Error: " + e.getMessage());
            }
            
            // Try to withdraw more than minimum balance
            try {
                account.withdraw(600.0);
            } catch (IllegalStateException e) {
                System.out.println("Error: " + e.getMessage());
            }
            
            // Final balance
            System.out.println("Final Balance: $" + account.getBalance());
            
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`}
        </code>
      </pre>

      <h2>🎥 Video Tutorial: Encapsulation in Java</h2>
      <div style={{marginBottom: "1em"}}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/grEKMHGYyns"
          title="Encapsulation in Java Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

    
    </div>
  )
}
