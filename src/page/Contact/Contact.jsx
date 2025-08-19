import React from "react";
import "./Contact.scss";
import Title from "../../components/Title/Title";
function Contact() {
  return (
    <div className="contact-page">
      <Title
        title={"Contact Us"}
        description={"Have questions or feedback? We'd love to hear from you."}
      />
      <div className="container contact-info">
        <div className=" row d-flex justify-content-between align-items-start">
          <div className="contact-info  col-md-6">
            <div className="contact-header">
              <h3 className="contact-title">
                <span>Get in</span> Touch
              </h3>
              <p>
                We're here to help with any questions about our products,
                orders, or special requests. Fill out the form or use the
                contact information below to get in touch with our team.
              </p>
            </div>
            <div className="contact-data">
              <div className="contact-data-item">
                <div className="icon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-data-text">
                  <h4>Our Location</h4>
                  <p>123 Flavor Street</p>
                  <p>Taste City, TC 12345</p>
                </div>
              </div>
              <div className="contact-data-item">
                <div className="icon">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div className="contact-data-text">
                  <h4>Email Us</h4>
                  <p>
                    <a href="info@deliciousbites.com">
                      info@deliciousbites.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-data-item">
                <div className="icon">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div className="contact-data-text">
                  <h4>Call Us</h4>
                  <p>
                    <a href="(555) 123-4567">(555) 123-4567</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-work-days">
              <h4>Business Hours</h4>
              <div>
                <span>Monday - Friday:</span>
                <span> 9:00 AM - 6:00 PM</span>
              </div>
              <div>
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div>
                <span>Sunday:</span>
                <span> Closed</span>
              </div>
            </div>
          </div>
          <div className="contact-form col-md-6">
            <div className="my-5">
              <h3 className="mb-4 fw-bold">Send us a Message</h3>
              <form className="">
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Message */}
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {/* Button */}
                <button type="submit" className="btn btn-danger w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="find-us py-5">
        <div className="container">
          <h4>Find Us</h4>
          <div className="map-placeholder">
            <p>
              Map placeholder - Would be replaced with Google Maps or similar
              embed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
