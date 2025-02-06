import React from "react";
import footerImage from "../photos/footer.png";

import "./Footer.css";

function Footer() {
  return (
    <footer className="header-container">
      <img src={footerImage} alt="Footer" className="top-image" />
    </footer>
  );
}

export default Footer;
