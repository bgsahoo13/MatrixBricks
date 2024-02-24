import React from "react";
import "./OrderStatus.css";

const OrderStatus = () => {
  return (
    <div className="order-status-main-container">
      <div className="order-status-child-container">
        <div className="order-section">
          <div className="order-circle">1</div>
          <div className="order-content">
            <h5>Order Received</h5>
            <p>Add products to your cart,enter your details and confirm.</p>
          </div>
        </div>
        <div className="order-section">
          <div>
            <div className="order-circle">2</div>
          </div>
          <div className="order-content">
            <h5>Order Shipped</h5>
            <p>
              Your order is being picked and now will be forwarded for
              packaging.
            </p>
          </div>
        </div>
        <div className="order-section">
          <div className="order-circle">3</div>
          <div className="order-content">
            <h5>Order Delivered</h5>
            <p>
              We are packaging your order and will be out for delivery soon.
            </p>
          </div>
        </div>
        <div className="order-section">
          <div className="order-circle">4</div>
          <div className="order-content">
            <h5>Order Completed</h5>
            <p>
              Your order has been preprared and out for delivery. It will be
              delivered soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
