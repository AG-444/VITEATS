import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer class="copyright">
        <div>
          Copyright © 2024 .All rights reserved by{" "}
          <Link to="/about">
            <a>VITeats Team</a>.
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
