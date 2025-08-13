// Header.jsx
import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <NavLink className="navbar-brand logo" to="/">
          Delicious Bites
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {["Home", "Products", "About", "Contact"].map((link) => (
              <li className="nav-item" key={link}>
                <NavLink
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
