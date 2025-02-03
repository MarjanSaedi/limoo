import React from "react";
import topImage from "../photos/top-img.png";
import foodImage from "../photos/lemon.jpg";
import "./Header.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <Navbar />
      <section className="header-container">
        <div className="header-text">
          <h1 style={{ color: "#f1d351", fontSize: "2em", margin: "0px" }}>
            Limoo
          </h1>

          <p style={{ color: "white", fontSize: "1em", fontStyle: "bold" }}>
            We are a family-owned Persian restaurant, dedicated to serving
            traditional recipes with a modern twist.
          </p>
          <button className="action-button">Reserv a table</button>
        </div>
        <img src={topImage} alt="Top" className="top-image" />
        <img src={foodImage} alt="Right" className="right-image" />
      </section>
    </header>
  );
}

export default Header;
