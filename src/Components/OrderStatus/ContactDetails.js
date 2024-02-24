import React from "react";
import "./ContactDetails.css";

const ContactDetails = () => {
  return (
    <div className="contact-main-container">
      <div className="contact-child-container">
        <h4>INDIA'S LARGEST HEALTHCARE PLATFORM</h4>
        <div className="ratings-container">
          <div className="rating">
            <p>120M+</p>
            <span>Visitors</span>
          </div>
          <div className="rating">
            <p>20M+</p>
            <span>Order Delivered</span>
          </div>
          <div className="rating">
            <p>1000+</p>
            <span>Cities</span>
          </div>
        </div>
        <hr></hr>
        <div className="app-download-container">
          <div className="search-box">
            <h5>Get the link to download App</h5>
            <input type="text" placeholder="Enter Phone Number" />
            <button>SEND LINK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
