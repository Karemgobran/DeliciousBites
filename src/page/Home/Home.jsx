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
      <OurStory
        titleOne={
          "At Delicious Bites, we believe in the power of good food to bring people together. Our journey began with a simple passion for creating products that delight the senses and nourish the body."
        }
        titleTwo={
          "Today, we continue to source the finest ingredients from trusted suppliers, crafting food and beverages that honor traditional techniques while embracing innovative flavors."
        }
        image={"https://images.unsplash.com/photo-1556910103-1c02745aae4d"}
      />
      <Review />
    </div>
  );
}

export default Home;
