import React from "react";
import "./Footer.css";
import payment from "../Assest/payment.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-section about-section">
          <h4>About Company</h4>
          <p>
            But must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born
          </p>
        </div>
        <div className="footer-section useful-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="#" id="linktag">
                Shipping Options
              </a>
            </li>
            <li>
              <a href="#">My WishList</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Shopping FAQs</a>
            </li>
          </ul>
        </div>
        <div className="footer-section product-section">
          <h4>Products</h4>
          <ul>
            <li>Thermometer</li>
            <li>Vitamin & Supplement</li>
            <li>Temperature Gun</li>
            <li>Oxygen Mmeter & Mask</li>
            <li>Shipping & return</li>
          </ul>
        </div>
        <div className="footer-section payment-section">
          <img src={payment} alt="payment" />
        </div>
      </footer>
      <div className="donation-child-footer-para">
        <div class="footer-paragraph">
          Copyright © 2021 Kyara Technologies Pvt Ltd.| All Right Reserved
          crafted by matrixbricks.com
        </div>
      </div>
    </>
  );
};

export default Footer;
