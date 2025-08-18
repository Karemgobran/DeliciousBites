import React from "react";
import "./OurStory.scss";
function OurStory({ titleOne, titleTwo, titleThree, image }) {
  return (
    <section className="container our-story d-flex justify-content-between align-items-center">
      <div className=" our-story_content d-flex flex-column">
        <h2>
          <span>Our</span> Story
        </h2>
        <p>{titleOne}</p>
        <p>{titleTwo}</p>
        {titleThree && <p>{titleThree}</p>}
      </div>
      <div className="our-story_image">
        <img src={image} alt="Delicious Bites story" />
      </div>
    </section>
  );
}

export default OurStory;
