import React from "react";
import "./homeAboutCard.css";

const HomeAboutCard = ({ image, title, description }) => {
  return (
    <div className="home-about-card">
      <img src={image} alt="home-about" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default HomeAboutCard;
