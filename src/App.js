import React, { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Tech from "./components/tech";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Work from "./components/work";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="content">
      <Navbar setActiveTab={setActiveTab}></Navbar>
      <Hero></Hero>
      <div>
        {activeTab === "home" && <Tech></Tech>}
        {activeTab === "projects" && <Work></Work>}
        {activeTab === "contact" && <Contact></Contact>}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
