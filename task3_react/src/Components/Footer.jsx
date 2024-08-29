import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaBehance } from "react-icons/fa";
import Logo from "../assets/logo.png"; // Update the path to your logo image

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#f0f5ff", padding: "40px 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: 1 }}>
          <img src={Logo} alt="Logo" style={{ marginBottom: "20px" }} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            nulla massa fringilla.
          </p>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <BsTwitter />
            <BsInstagram />
            <BsLinkedin />
            <BsYoutube />
            <FaBehance />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h4>Menu</h4>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Blog Post</li>
            <li>Contact</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h4>Utility Pages</h4>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>Start Here</li>
            <li>Styleguide</li>
            <li>Password Protected</li>
            <li>404 Not Found</li>
            <li>Licenses</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h4>Subscribe to our newsletter</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit am dolor sit.
          </p>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: "10px",
                marginRight: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
