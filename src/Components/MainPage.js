import React from "react";
import topImage from "../photos/lemon.jpg";
import foodImage from "../photos/food-img.webp";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="header-container">
      <div className="MainPage-header-text">
        <h1>Limoo</h1>
        <h2>Calgary</h2>
        <p>
          We are a family-owned Persian restaurant,
          <br /> dedicated to serving traditional recipes
          <br /> with a modern twist.
        </p>
      </div>
      <img src={topImage} alt="Top Image" className="top-image" />
      <div className="overlay"></div>

      <img src={foodImage} alt="Right Image" className="right-image" />
    </div>
  );
}

export default MainPage;
