// src/components/Home.js
import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleBuy = (productId) => {
    // Implement buy functionality
    console.log("Buy product:", productId);
  };

  return (
    <div className="home-container">
      <h1>Welcome to DT Fortune</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="product-image"
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button
              className="buy-button"
              onClick={() => handleBuy(product._id)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
