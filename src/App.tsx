import React from "react";
import "./index.css";
import Navbar from "./Navbar";
import Header from "./Header";
import HeroSection from "./HeroSection";
import GettingStartedSection from "./GettingStartedSection";
import FavoritesSection from "./FavoritesSection";
import EndlessExtrasSection from "./EndlessExtrasSection";
import StarRewards from "./StarRewards";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <HeroSection />
      <GettingStartedSection />
      <FavoritesSection />
      <EndlessExtrasSection />
      <StarRewards />
    </div>
  );
}

export default App;
