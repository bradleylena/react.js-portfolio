import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Bradley Lenaiyarra</h1>
      <div className="navlinks">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Tech-Stack</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
