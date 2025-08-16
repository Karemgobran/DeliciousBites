import React from "react";
import "./Home.scss";
import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import OurStory from "../../components/OurStory/OurStory";
import Review from "../../components/Review/Review";
function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <OurStory />
      <Review />
    </div>
  );
}

export default Home;
