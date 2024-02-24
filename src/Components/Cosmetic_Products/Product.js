import React from "react";
import "./Product.css";
import hairoil from "../Assest/Hair_oil.png";
import sanitizer from "../Assest/Sanitizer.png";
import bodylotion from "../Assest/Body_Lotion.png";

const Product = () => {
  return (
    <div className="main-container">
      <div className="Child_one">
        <img src={hairoil} alt="Hair Oil" />
      </div>
      <div className="right-container">
        <div className="Child_two">
          <img src={bodylotion} alt="Hair Oil" />
        </div>
        <div className="Child_three">
          <img src={sanitizer} alt="Hair Oil" />
        </div>
      </div>
    </div>
  );
};

export default Product;
