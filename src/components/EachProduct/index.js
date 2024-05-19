import React from "react";
import "./eachProducts.css";
const EachProducts = ({ productName, price }) => {
  return (
    <div className="each-product">
      <div className="image">
        <img src={require("../../images/onion.jpg")} alt="product" />
      </div>
      <button className="button">Call For Enquiry</button>
      <h3>{productName}</h3>
      <p>Rs.{price}</p>
    </div>
  );
};

export default EachProducts;
