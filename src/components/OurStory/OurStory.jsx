import React from "react";
import "./OurStory.scss";
function OurStory() {
  return (
    <section className="our-story d-flex justify-content-between align-items-center">
      <div className="container our-story_content d-flex flex-column">
        <h2>
          <span>Our</span> Story
        </h2>
        <p>
          At Delicious Bites, we believe in the power of good food to bring
          people together. Our journey began with a simple passion for creating
          products that delight the senses and nourish the body.
        </p>
        <p>
          Today, we continue to source the finest ingredients from trusted
          suppliers, crafting food and beverages that honor traditional
          techniques while embracing innovative flavors.
        </p>
      </div>
      <div className="our-story_image">
        <img
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d"
          alt="OurStory image"
        />
      </div>
    </section>
  );
}

export default OurStory;
