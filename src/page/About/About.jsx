import React from "react";
import "./About.scss";
import Title from "../../components/Title/Title";
import OurStory from "../../components/OurStory/OurStory";

function About() {
  return (
    <div className="about">
      <div data-aos="fade-down">
        <Title
          title="About Us"
          description="Learn more about our passion for quality food and beverage products."
        />
      </div>
      <div className="about_content">
        <div data-aos="fade-right">
          <OurStory
            titleOne={
              "Delicious Bites was founded in 2010 with a simple mission: to create exceptional food and beverage products using high-quality ingredients and traditional techniques."
            }
            titleTwo={
              "What began as a small operation in a home kitchen has grown into a beloved brand known for its commitment to quality, sustainability, and incredible flavors."
            }
            titleThree={
              "Today, we continue to handcraft our products in small batches, ensuring that each item meets our exacting standards before it reaches your table."
            }
            image={
              "https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2"
            }
          />
        </div>
        <div className="Our-Mission" data-aos="fade-up">
          <div className="title mb-5">
            <h2>
              <span>Our</span> Mission
            </h2>
            <p>
              We believe that good food brings people together and nourishes
              both body and soul. Our mission is to create products that delight
              the senses, support sustainable food systems, and celebrate the
              rich traditions of culinary craftsmanship.
            </p>
          </div>
          <div className="cards container">
            <div className="row">
              <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
                <div className="card">
                  <div className="icon">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p className="card-title">Quality Ingredients</p>
                  <p className="card-text">
                    We source the finest ingredients from trusted suppliers who
                    share our commitment to quality and sustainability.
                  </p>
                </div>
              </div>

              <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
                <div className="card">
                  <div className="icon">
                    <i className="fa-regular fa-gem"></i>
                  </div>
                  <p className="card-title">Traditional Methods</p>
                  <p className="card-text">
                    We honor time-tested techniques and methods that bring out
                    the best flavors and textures in our products.
                  </p>
                </div>
              </div>

              <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
                <div className="card">
                  <div className="icon">
                    <i className="fa-brands fa-nfc-directional"></i>
                  </div>
                  <p className="card-title">Sustainability</p>
                  <p className="card-text">
                    We're committed to environmentally responsible practices
                    throughout our supply chain and operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our-team" data-aos="fade-up">
          <div className="title mb-5">
            <h2>
              <span>Our</span> Team
            </h2>
          </div>
          <div className="team-member row container">
            <div
              className="member col-md-4"
              data-aos="flip-left"
              data-aos-delay="100"
            >
              <div className="image">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="Team Member"
                />
              </div>
              <h3>Emily Chen</h3>
              <span>Founder & Head Chef</span>
              <p>
                Emily's passion for artisanal food led her to create Delicious
                Bites after years in the culinary industry.
              </p>
            </div>

            <div
              className="member col-md-4"
              data-aos="flip-left"
              data-aos-delay="200"
            >
              <div className="image">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                  alt="Team Member"
                />
              </div>
              <h3>Marcus Johnson</h3>
              <span>Operations Director</span>
              <p>
                Marcus ensures all our products are crafted to perfection and
                delivered fresh to your doorstep.
              </p>
            </div>

            <div
              className="member col-md-4"
              data-aos="flip-left"
              data-aos-delay="300"
            >
              <div className="image">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                  alt="Team Member"
                />
              </div>
              <h3>Sophia Rodriguez</h3>
              <span>Product Developer</span>
              <p>
                Sophia combines traditional recipes with innovative techniques
                to create our unique product line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
