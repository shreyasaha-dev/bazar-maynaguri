import React from "react";
import "./homeProduct.css";

const HomeProduct = ({ title, price, image }) => {
   return (
      <div className="home-product">
         <div className="home-image">
            <img src={image} alt="product" />
         </div>
         <button>Call For Enquiry</button>
         <h3>{title}</h3>
         <p>Rs.{price}</p>
         <div className="home-line"></div>
      </div>
   );
};

export default HomeProduct;
