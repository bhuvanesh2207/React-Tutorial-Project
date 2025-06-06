import React from 'react';
import { Link } from 'react-router-dom';
import javaLogo from '../images/java_logo.png';
import pythonLogo from '../images/python_logo.png';
import sqlLogo from '../images/sql_logo.png';

function Home() {
  const headingText = "Welcome to Your Coding Hub";

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #0d0b14, #2a2540);
          color: #ffffff;
          min-height: 100vh;
          padding: 60px 20px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          text-shadow: 0 0 12px rgba(0,0,0,0.85);
        }

        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-heading {
          font-size: 2.5rem;
          font-weight: 800;
          display: flex;
          flex-wrap: wrap;
          gap: 2px;
          opacity: 0;
          animation: fadeSlideIn 1.5s ease-out forwards;
          animation-delay: 0.5s;
          justify-content: center;
        }

        .home-intro, .home-outro {
          max-width: 900px;
          margin-bottom: 40px;
          text-align: center;
          color: #fefefecc; /* near pure white */
          text-shadow: 0 0 10px rgba(0,0,0,0.9);
        }

        .home-intro h1 {
          font-size: 2.7rem;
          margin-bottom: 15px;
          color: #ffffff;
          text-shadow: 0 0 16px rgba(0,0,0,0.95);
        }

        .home-intro p,
        .home-outro p {
          font-size: 1.15rem;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .letter {
          color: #ccc;
          display: inline-block;
          position: relative;
          transition: color 0.3s ease, text-shadow 0.3s ease, transform 0.3s ease;
          cursor: default;
          user-select: none;
        }

        /* On hover, change color and add shadow on both sides of the letter */
        .letter:hover {
          color: #00ffd5;
          text-shadow:
            -2px 0 4px rgba(0, 255, 213, 0.7),
            2px 0 4px rgba(0, 255, 213, 0.7);
          transform: scale(1.3);
          z-index: 1;
        }

        .flip-box-row {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 1000px;
          gap: 20px;
          margin-bottom: 40px;
        }

        .flip-box {
          flex: 1;
          aspect-ratio: 3 / 4;
          max-width: 300px;
          perspective: 1200px;
          position: relative;
          cursor: pointer;
        }

        .flip-box-inner {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.8s ease-in-out;
          transform-style: preserve-3d;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
          border-radius: 15px;
          background-color: rgba(255,255,255,0.1);
        }

        .flip-box:hover .flip-box-inner {
          transform: rotateY(180deg);
          box-shadow: 0 0 40px rgba(255, 0, 255, 0.8);
        }

        .flip-box-front,
        .flip-box-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          box-sizing: border-box;
          color: #ffffff; /* bright white */
          text-shadow: 0 0 10px rgba(0,0,0,0.85);
        }

        /* FRONT SIDE */
        .flip-box-front {
          background: rgba(10, 10, 35, 0.95); /* slightly more opaque for contrast */
          border: 2px solid rgba(255, 255, 255, 0.4);
        }

        .flip-box-front h2 {
          margin: 0;
          font-size: 1.9rem;
          font-weight: 700;
          text-align: center;
          color: #ffffff;
          text-shadow: 0 0 14px rgba(0,0,0,0.95);
        }

        .flip-box-front img {
          width: 80px;
          height: 80px;
          object-fit: contain;
          margin: 15px 0;
          display: block;
          border-radius: 15px;
          filter: drop-shadow(0 0 4px rgba(0,0,0,0.9));
        }

        .flip-box-front p {
          font-size: 1.05rem;
          text-align: center;
          margin: 0 0 10px 0;
          line-height: 1.4;
          color: #f5f5f5;
        }

        .flip-box-front .hover-text {
          font-size: 0.9rem;
          font-weight: 600;
          margin-top: auto;
          padding-top: 10px;
          border-top: 1px solid rgba(255,255,255,0.5);
          width: 100%;
          text-align: center;
          color: #ddddff;
          letter-spacing: 1.2px;
          user-select: none;
        }

        /* BACK SIDE */
        .flip-box-back {
          background: linear-gradient(135deg, #ff4e50, #f9d423);
          color: #1a1a1a;
          transform: rotateY(180deg);
          font-weight: 700;
          padding-bottom: 30px;
          text-shadow: none;
        }

        .flip-box-back h3 {
          margin-top: 0;
          font-size: 1.5rem;
          text-align: center;
        }

        .flip-box-back p {
          text-align: center;
          margin: 15px 0 25px 0;
          padding: 0 10px;
          font-size: 1.05rem;
          line-height: 1.5;
        }

        .learn-more-btn,
        .flip-box-back a {
          display: block;
          margin: 0 auto;
          padding: 10px 25px;
          background: #3b0088;
          color: white;
          border: none;
          border-radius: 25px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
          box-shadow: 0 2px 5px rgba(0,0,0,0.3);
          user-select: none;
          text-decoration: none !important;
          text-align: center;
          width: fit-content;
        }

        .learn-more-btn:hover,
        .flip-box-back a:hover {
          background: #5a00bb;
          text-decoration: none !important;
        }

        @media (max-width: 900px) {
          .flip-box-row {
            flex-direction: column;
            align-items: center;
            gap: 30px;
          }

          .flip-box {
            width: 80%;
            max-width: none;
          }
        }
      `}</style>

      {/* Intro Content */}
      <div className="home-intro">
        <h1 className="hero-heading" aria-label={headingText}>
          {headingText.split("").map((char, index) => (
            <span
              key={index}
              className="letter"
              aria-hidden="true"
              style={{ whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char}
            </span>
          ))}
        </h1>
        <p>
          Dive into the world of programming with our carefully crafted tutorials on the most
          popular and versatile languages: Python, Java, and SQL. Whether you're starting from
          scratch or looking to sharpen your skills, our hands-on lessons and projects help
          you learn by doing.
        </p>
        <p>
          Each language card below offers you a glimpse into its power and potential — from
          data science and automation with Python, to robust enterprise applications with Java,
          and efficient database management with SQL.
        </p>
        <p>
          Get ready to build real-world skills, stay up to date with industry best practices,
          and become the developer you aspire to be!
        </p>
      </div>

      {/* Flip Boxes */}
      <div className="flip-box-row">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <h2>Python</h2>
              <img src={pythonLogo} alt="Python Logo" />
              <p>Unlock your potential with Python programming.<br />Automate tasks and dive into data science.</p>
              <div className="hover-text">Hover me..!</div>
            </div>
            <div className="flip-box-back">
              <h3>Python Tutorials</h3>
              <p>Learn syntax, data science, automation, and more with hands-on projects.</p>
              <Link to="/python">Learn More</Link>
            </div>
          </div>
        </div>

        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <h2>Java</h2>
              <img src={javaLogo} alt="Java Logo" />
              <p>Master Java and build robust, high-performance applications.<br />From Android to backend.</p>
              <div className="hover-text">Hover me..!</div>
            </div>
            <div className="flip-box-back">
              <h3>Java Tutorials</h3>
              <p>Understand OOP, frameworks, and build enterprise-grade software.</p>
              <Link to="/java">Learn More</Link>
            </div>
          </div>
        </div>

        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <h2>SQL</h2>
              <img src={sqlLogo} alt="SQL Logo" />
              <p>Learn SQL to manage and query databases efficiently.<br />Essential for backend developers.</p>
              <div className="hover-text">Hover me..!</div>
            </div>
            <div className="flip-box-back">
              <h3>SQL Tutorials</h3>
              <p>Explore database design, querying, optimization, and best practices.</p>
              <Link to="/sql">Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Outro */}
      <div className="home-outro">
        <p>
          Ready to start? Explore our tutorials and build your coding skills with confidence.
          Join our community of passionate learners today!
        </p>
      </div>
    </>
  );
}

export default Home;
