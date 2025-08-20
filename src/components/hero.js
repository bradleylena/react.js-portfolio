import React from "react";
import hero from "./assets/heroimg.png";
import "./hero.css";

function Hero() {
  return (
    <nav className="hero">
      <div className="herocontent">
        <h1>Software Developer & Robotics Automation</h1>
        <p>
          I have strong skills in software development, particularly in building
          web applications using modern frameworks and tools. My experience
          spans the full development cycle—from designing user-friendly
          interfaces to implementing efficient backend logic. Alongside
          software, I’m also skilled in robotics and automation, where I apply
          programming, electronics, and control systems to create intelligent,
          automated solutions using ARDUINO micro-controllers and its IDE. This
          blend of software expertise and robotics knowledge enables me to
          tackle complex technical challenges and build innovative systems that
          bridge the digital and physical worlds.
        </p>
      </div>

      <div className="heroimg">
        <img src={hero} width="300px"></img>
      </div>
    </nav>
  );
}

export default Hero;
