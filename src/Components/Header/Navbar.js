import React from "react";
import "./Navbar.css";
import kyaralogo from "../Assest/Kyaracomp_logo.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar-para">
        <p>Welcome you to Kyara Technologies PVT.LTD store!</p>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <span className="mr-3">Call us:</span>
            <span className="mr-2">123-456-7890</span>
          </div>

          <div className="logo-center">
            <a className="navbar-brand mx-auto" href="#">
              <img src={kyaralogo} alt="Logo" style={{ maxHeight: "40px" }} />
            </a>
            <div className="navbar-nav ml-auto">
              <a className="nav-link me-3" href="#">
                <i className="fas fa-user"></i> My Account
              </a>
              <a className="nav-link me-3" href="#">
                <i className="fas fa-shopping-cart"></i> Cart
              </a>
              <a className="nav-link me-3" href="#">
                <i className="fas fa-heart"></i> Wishlist
              </a>
              <a className="nav-link" href="#">
                <i className="fas fa-search"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <hr></hr>
      <div className="navbar-footer">
        <a href="company-details" alt="about company">
          About Company
        </a>
        <a href="company-visit" alt="company visit">
          Visit Of Company
        </a>
        <a href="company-directors" alt="directors">
          About Directors
        </a>
      </div>
    </>
  );
};

export default Navbar;
