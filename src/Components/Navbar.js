import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import logo from "../photos/LimooLogo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar-container">
      <div className="logo">
        <img src={logo} alt="Limoo Logo" />
        <h2 style={{ color: "#532d08", fontSize: "1em", margin: "0px" }}>
          Limoo Restaurant
        </h2>
      </div>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <ul className="navbar">
        <li>
          <Link className="Link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="Link" to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link className="Link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="Link" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="Link" to="/cart">
            <ShoppingBag size={24} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
