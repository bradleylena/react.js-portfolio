import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

function app() {
  return (
    <div className="content">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
}

export default app;
