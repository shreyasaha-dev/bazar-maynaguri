import React from 'react'
import "./latestProduct.css"

const LatestProduct = ({ title, price, image }) => {
   return (
      <div className='latest-product-card'>
         <div className='latest-product-details'>
            <div className='latest-product-image'>
               <img src={image} alt="latest" />
            </div>
            <h3>{title}</h3>
            <p>Rs. {price}</p>
         </div>
         <div className='latest-product-button'>
            <button>Call For Enquiry</button>
         </div>
      </div>
   )
}

export default LatestProduct
