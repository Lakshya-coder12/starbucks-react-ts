import React from "react";
import "./index.css";
import Navbar from "./Navbar";
import Header from "./Header";
import HeroSection from "./HeroSection";
import GettingStartedSection from "./GettingStartedSection";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <HeroSection />
      <GettingStartedSection />
    </div>
  );
}

export default App;
