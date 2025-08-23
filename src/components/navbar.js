import React, { useState } from "react";
import "./navbar.css";

function Navbar({ setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  const go = (tab) => {
    setActiveTab(tab);
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <h1 className="logo">Bradley Lenaiyarra</h1>

      {/* Hamburger */}
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Links */}
      <div className={`navlinks ${isOpen ? "active" : ""}`}>
        <nav>
          <ul>
            <li>
              <a href="#" onClick={() => go("home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={() => go("projects")}>
                Projects & Blog
              </a>
            </li>
            <li>
              <a href="#" onClick={() => go("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
