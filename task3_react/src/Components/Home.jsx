import React from "react";
import BannerImage from "../assets/img1.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">

        <div className="home-text-section">
          <h1 className="primary-heading">
            We are the best agency in the world
          </h1>
          <p className="primary-text">
            Amet minim moliit non deserunt ullamco est sit aliqua dolor do amet sint. Velit official consequant duis enim velit moliit.Exercitation veniam consequant sunt nostrund amet.
          </p>
          <button className="secondary-button01">
            Start project<FiArrowRight />{" "}
          </button>
          <button className="secondary-button02">
            Learn more<FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;