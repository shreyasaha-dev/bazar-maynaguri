import React from "react";
import "./footer.css";

const Footer = () => {
  const categories = [
    "Vegetable",
    "Fruits",
    "Daily Products",
    "Organic Products",
    "Grocery Items",
  ];
  return (
    <div className="footer">
      <div className="footer-top-section">
        <div className="footer-left-section">
          <img
            src={require("../../images/logo1.png")}
            alt="Logo"
            className="logo"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            egestas sem tellus, ac consectetur mi gravida nunc sit amet ante
            vitae ante facilisis
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            egestas sem tellus, ac consectetur mi
          </p>
          <a href="" className="read-more">
            Read more{" "}
            <img src={require("../../images/side arrow.png")} alt="arrow" />
          </a>
        </div>
        <div className="footer-right-section">
          <div className="footer-right-top">
            <div className="quick-links">
              <div className="quick-link-left">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About Bazer Maynaguri</a>
                  </li>
                  <li>
                    <a href="#contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="quick-link-right">
                <ul>
                  <li>
                    <a href="#enquiry">Enquiry Us</a>
                  </li>
                  <li>
                    <a href="#b2b">B2B Information</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact-us">
              <h3>Contact Us</h3>
              <div className="each-contact">
                <img src={require("../../images/map icon.png")} alt="map" />
                <p>
                  Sarkar shoss exclusive
                  <br />
                  Natun Bazar turminal complex,
                  <br /> PO: Maynaguri,
                  <br /> Dist: Jalpaiguri, Pin: 753224.
                </p>
              </div>
              <div
                className="each-contact"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={require("../../images/chat.png")} alt="chat" />
                <p>
                  <a href="tel:+917797813261">+91 7797813261</a>
                </p>
              </div>
              <div
                className="each-contact"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={require("../../images/email.png")} alt="email" />
                <p>
                  <a href="mailto:dhrubadjs.mng@gmail.com">
                    dhrubadjs.mng@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-right-bottom">
            <p className="category-heading">Popular Categories</p>
            <div className="categories">
              {categories.map((item) => {
                return <p className="each-category">{item}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2020 bazermaynaguri.com | All Rights Reserved.</p>
        <div className="socials">
          <p>Follow us on : </p>
          <a href="">
            <img src={require("../../images/twitter.png")} alt="twitter" />
          </a>
          <a href="">
            <img src={require("../../images/facebook.png")} alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
