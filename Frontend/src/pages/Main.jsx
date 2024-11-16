import React from "react";
import Hero from "../components/Hero";
import FeaturesAlt from "../components/FeaturesAlt";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div className="container mx-auto px-8">
      <Navbar />
      <Hero />
      <FeaturesAlt />
    </div>
  );
};

export default Main;
