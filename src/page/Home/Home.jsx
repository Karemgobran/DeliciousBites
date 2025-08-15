import React from "react";
import "./Home.scss";
import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
    </div>
  );
}

export default Home;
