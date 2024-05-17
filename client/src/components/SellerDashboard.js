// src/components/SellerDashboard.js
import React, { useState, useEffect } from "react";
import axios from "../axiosConfig";

const SellerDashboard = () => {
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

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <h2>Seller Dashboard</h2>
      <h3>Products</h3>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.title} - ${product.price}
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellerDashboard;
