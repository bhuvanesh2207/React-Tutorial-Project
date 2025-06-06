import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <style>{`
        :root {
          --body-bg-color: #0d0b14;
          --text-color: #ddd;
          --transition-duration: 0.3s;
          --transition-delay: 0.2s;
        }

        *, *::before, *::after {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font: 18px sans-serif;
          background: var(--body-bg-color);
          color: var(--text-color);
          padding-top: 60px; /* reserve space for fixed navbar */
        }

        .navbar {
          position: fixed; /* changed to fixed for more reliability */
          top: 0;
          left: 0;
          width: 100vw; /* use viewport width */
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
          position: relative;
          padding: 8px 12px;
          transition: color var(--transition-duration);
        }

        .menu a:hover {
          color: #00ffd5;
        }

        /* Your border animation styles here, same as before */

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
          {['Home', 'Python', 'Java', 'SQL', 'Contact'].map((text, idx) => (
            <li key={idx}>
              <Link to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}>
                {text}
                {/* border spans */}
                <span className="border border-top"></span>
                <span className="border border-right"></span>
                <span className="border border-bottom"></span>
                <span className="border border-left"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
