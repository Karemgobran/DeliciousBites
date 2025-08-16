import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <footer>
      <div className="footer-content pt-5 pb-5 gap-2 d-flex flex-column">
        <div className="container row">
          <div className="left col-md-4">
            <h2>Delicious Bites</h2>
            <p>
              Bringing you the best in food and beverages, crafted with care and
              passion. Join us on a culinary journey that celebrates flavor and
              quality.
            </p>
          </div>
          <div className="middle col-md-4">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/menu">Menu</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="right col-md-4">
            <h3>Contact Us</h3>
            <p>123 Flavor Street</p>
            <p>Taste City, TC 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@deliciousbites.com</p>
            <div className="icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="by text-center mt-4">
          <p>
            &copy; {new Date().getFullYear()} Delicious Bites. All rights
            reserved.
          </p>
          <p>Designed by : Karem Gobran</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
