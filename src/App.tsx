import React from "react";
import "./index.css";
import Navbar from "./Navbar";
import Header from "./Header";
import HeroSection from "./HeroSection";
import GettingStartedSection from "./GettingStartedSection";
import FavoritesSection from "./FavoritesSection";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <HeroSection />
      <GettingStartedSection />
      <FavoritesSection />
    </div>
  );
}

export default App;
