import React from "react";
import "./HeroSection.scss";
function HeroSection() {
  return (
    <section className="hero_section position-relative">
      <div className="hero_info position-absolute d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-light">Exceptional Food & Beverage Products</h1>
        <p className="text-light">
          Premium ingredients. Exceptional taste. Delivered to your doorstep.
        </p>
        <div className="btns">
          <button className="btn btn-primary  show-btn">Shop Now</button>
          <button className="btn btn-secondary  learn-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
