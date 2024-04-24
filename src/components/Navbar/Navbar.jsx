import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  return (
    <div>
      <header class="header">
        <a href="" class="logo">
          <img src={logo} alt="logo" class="logo_img" />
          VITeats.
        </a>
        <nav class="navbar">
          <Link to="/">
            <a>Home</a>
          </Link>
          <Link to="/list">
            <a>Explore</a>
          </Link>
          <Link to="/about">
            <a>About</a>
          </Link>
          <Link to="/contact">
            <a>Contact Us</a>
          </Link>
        </nav>
        <i class="bx bx-menu" id="menu"></i>
      </header>
    </div>
  );
};

export default Navbar;
