import React from "react";
import "./eachProducts.css";
const EachProducts = () => {
  return (
    <div className="each-product">
      <div className="image">
        <img src={require("../../images/onion.jpg")} alt="product" />
      </div>
      <button className="button">Call For Enquiry</button>
      <h3>Fresh Onion</h3>
      <p>Rs.40.00</p>
    </div>
  );
};

export default EachProducts;
