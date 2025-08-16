import React from "react";
import "./Home.scss";
import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import OurStory from "../../components/OurStory/OurStory";
function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <OurStory />
    </div>
  );
}

export default Home;
