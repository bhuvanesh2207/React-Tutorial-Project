import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <style>{`
        :root {
          --body-bg-color: #0d0b14;
          --text-color: #ddd;
          --transition-duration: 0.3s;
        }

        // *, *::before, *::after {
        //   box-sizing: border-box;
        // }

        body {
          margin: 0;
          font: 18px sans-serif;
          background: var(--body-bg-color);
          color: var(--text-color);
          padding-top: 60px;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          padding: 15px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, #0d0b14, #2a2540);
          box-shadow: 0 0 20px rgba(0,0,0,0.8);
          z-index: 1000;
        }

        .menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .menu li {
          margin-right: 50px;
        }

        .menu a {
          color: var(--text-color);
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          padding: 8px 12px;
          transition: color var(--transition-duration);
        }

        .menu a:hover {
          color: #00ffd5;
          border-bottom: 2px solid #00ffd5;
        }

        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            align-items: flex-start;
            padding: 10px 20px;
          }

          .menu {
            flex-direction: column;
            width: 100%;
            margin-top: 10px;
          }

          .menu li {
            margin: 10px 0;
          }
        }
      `}</style>

      <nav className="navbar">
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/python">Python</Link></li>
          <li><Link to="/java">Java</Link></li>
          <li><Link to="/sql">SQL</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
