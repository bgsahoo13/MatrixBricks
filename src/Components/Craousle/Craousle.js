import React from "react";
import "./Craousle.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Craousle = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive}>
      <div className="card bg-primary">
        <div className="card-body text-center">
          <h5 className="card-text">Fast Delivery</h5>
          <h6>Product Deleivered in 90 Minute</h6>
          <button id="buttons">Save Now</button>
        </div>
      </div>
      <div className="card bg-warning">
        <div className="card-body text-center">
          <h5 className="card-text">Coupon Saving</h5>
          <h6>Up to 40% off everyday essentials</h6>
          <button id="buttons">View Products</button>
        </div>
      </div>
      <div className="card bg-success">
        <div className="card-body text-center">
          <h5 className="card-text">Customer Order</h5>
          <h6>We can order customally</h6>
          <button id="buttons">View Products</button>
        </div>
      </div>
      <div className="card bg-danger">
        <div className="card-body text-center">
          <h5 className="card-text">Female Care</h5>
          <h6>We Provide Feminine Hygene</h6>
          <button id="buttons">View Products</button>
        </div>
      </div>
      <div className="card bg-info">
        <div className="card-body text-center">
          <h5 className="card-text">Some text inside the fifth card</h5>
        </div>
      </div>
      <div className="card bg-light">
        <div className="card-body text-center">
          <h5 className="card-text">Some text inside the Sixth card</h5>
        </div>
      </div>
    </Carousel>
  );
};

export default Craousle;
