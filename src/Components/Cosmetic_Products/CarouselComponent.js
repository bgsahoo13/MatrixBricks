import React, { useState } from "react";
import "./CarouselComponent.css";
import acid from "../Assest/acid.png";
import hemp_oil from "../Assest/hemp_oil.png";
import heater from "../Assest/heater.png";
import gras_fed_way from "../Assest/grass_fed_way.png";
import protein from "../Assest/protein.png";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      image: gras_fed_way,
    },
    {
      name: "Originals Kaval",
      rating: 3.8,
      price: 24.99,
      oldPrice: 34.99,
      image: heater,
    },
    {
      name: "Brixton Patrol",
      rating: 4.2,
      price: 14.99,
      oldPrice: 19.99,
      image: acid,
    },
    {
      name: "Originals Kavalw",
      rating: 4.7,
      price: 39.99,
      oldPrice: 49.99,
      image: protein,
    },
    {
      name: "Madden By.",
      rating: 4.7,
      price: 39.99,
      oldPrice: 49.99,
      image: hemp_oil,
    },
    {
      name: "Product 6",
      rating: 4.7,
      price: 39.99,
      oldPrice: 49.99,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 7",
      rating: 4.7,
      price: 39.99,
      oldPrice: 49.99,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 8",
      rating: 4.7,
      price: 39.99,
      oldPrice: 49.99,
      image: "https://via.placeholder.com/150",
    },
  ];

  const handleClick = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    } else if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? products.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.image} alt={product.name} />
            {index === 0 ? null : (
              <div className="details">
                <h3>{product.name}</h3>
                <p>Rating: {product.rating}</p>
                <p>Price: ${product.price}</p>
                <p className="old-price">Old Price: ${product.oldPrice}</p>
                <button>Add to Cart</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="prev" onClick={() => handleClick("prev")}>
        &#10094;
      </button>
      <button className="next" onClick={() => handleClick("next")}>
        &#10095;
      </button>
    </div>
  );
};

export default CarouselComponent;
