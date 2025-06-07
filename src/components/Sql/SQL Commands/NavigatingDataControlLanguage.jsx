import React from 'react';
import { Link } from 'react-router-dom';

export default function NavigatingDataControlLanguage() {
  return (
    <>
      <div className="java-container">
        <h2>Navigating Data Control Language (DCL)</h2>
        <p>
          Data Control Language (DCL) commands in SQL are used to manage database access and permissions. They allow administrators to grant or revoke privileges to users and roles, controlling who can perform specific actions on database objects like tables, views, and procedures. DCL is crucial for maintaining database security and ensuring that users only have the necessary level of access.
        </p>

        <h3>📚 Key Concepts in DCL</h3>
        <ul>
          <li><strong>Privileges (Permissions):</strong> Specific rights granted to users or roles that allow them to perform certain operations on database objects. Common privileges include SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, DROP.</li>
          <li><strong>Users:</strong> Individual accounts that can connect to the database. Each user can be granted specific privileges.</li>
          <li><strong>Roles:</strong> Named collections of privileges. Instead of granting privileges to individual users, administrators can grant privileges to roles and then assign users to those roles. This simplifies privilege management, especially in databases with many users.</li>
          <li><strong>Granting Privileges:</strong> Assigning specific privileges to a user or role using the `GRANT` command.</li>
          <li><strong>Revoking Privileges:</strong> Removing previously granted privileges from a user or role using the `REVOKE` command.</li>
          <li><strong>WITH GRANT OPTION:</strong> An optional clause in the `GRANT` statement that allows the recipient of the privilege to further grant that privilege to other users or roles.</li>
        </ul>

        <h3>📋 Key DCL Commands</h3>
        <ul>
          <li><strong>GRANT:</strong>
            <ul>
              <li>Syntax: `GRANT privilege_name ON object_name TO user_or_role [WITH GRANT OPTION];`</li>
              <li>Used to give privileges.</li>
              <li>Examples: `GRANT SELECT ON Employees TO 'john_doe';`, `GRANT INSERT, UPDATE ON Products TO 'inventory_role';`</li>
            </ul>
          </li>
          <li><strong>REVOKE:</strong>
            <ul>
              <li>Syntax: `REVOKE privilege_name ON object_name FROM user_or_role;`</li>
              <li>Used to take back privileges.</li>
              <li>Examples: `REVOKE SELECT ON Employees FROM 'john_doe';`, `REVOKE INSERT ON Products FROM 'inventory_role';`</li>
            </ul>
          </li>
        </ul>

        <h3>💻 Code Examples</h3>

        <h3>1. Granting SELECT and INSERT on a Table</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Grant SELECT and INSERT privileges on the Orders table to a user named 'order_entry'
GRANT SELECT, INSERT ON Orders TO 'order_entry';
`}
          </code>
        </pre>

        <h3>2. Granting ALL Privileges on a Table with Grant Option</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Grant all privileges on the Customers table to an admin role, allowing them to grant these privileges to others
GRANT ALL ON Customers TO 'admin_role' WITH GRANT OPTION;
`}
          </code>
        </pre>

        <h3>3. Revoking DELETE Privilege from a User</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Revoke the DELETE privilege on the Products table from a user named 'junior_staff'
REVOKE DELETE ON Products FROM 'junior_staff';
`}
          </code>
        </pre>

        <h3>4. Creating a Role and Granting Privileges to it</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          <code>{`
-- Create a new role for reporting
CREATE ROLE 'reporting_role';

-- Grant SELECT privilege on multiple tables to the reporting_role
GRANT SELECT ON Sales TO 'reporting_role';
GRANT SELECT ON Products TO 'reporting_role';

-- Grant the reporting_role to a specific user
GRANT 'reporting_role' TO 'analyst_user'; -- Syntax varies by DB
`}
          </code>
        </pre>

        <h3>💡 Best Practices for DCL</h3>
        <ul>
          <li>Principle of Least Privilege: Grant only the minimum set of privileges necessary for a user or role to perform their required tasks.</li>
          <li>Use Roles: Manage privileges through roles rather than granting to individual users directly. This simplifies administration.</li>
          <li>Regularly Review Permissions: Periodically review granted privileges to ensure they are still appropriate.</li>
          <li>Document Permissions: Keep clear documentation of your database users, roles, and their assigned privileges.</li>
          <li>Be Cautious with WITH GRANT OPTION: Use this option sparingly and only for trusted users or roles, as it allows them to proliferate privileges.</li>
        </ul>

        <h3>📝 Real-World Applications of DCL</h3>
        <ul>
          <li>Database Security: Controlling who can access and modify sensitive data.</li>
          <li>User Management: Setting up and managing user accounts and their access levels.</li>
          <li>Compliance: Meeting regulatory requirements for data access control.</li>
          <li>Application Security: Defining the permissions used by different applications to interact with the database.</li>
        </ul>

        <h3>🎥 Video Tutorial: Data Control Language (DCL)</h3>
        <div style={{ marginBottom: '1em' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Data Control Language (DCL) Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
          <small>
            Source: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Example Video Source</a>
          </small>
        </div>
      </div>
      <Link to="/sql"><p>Back to SQL Overview</p></Link>
    </>
  );
}