// src/components/RiderDashboard.js
import React, { useState, useEffect } from "react";
import axios from "../axiosConfig";

const RiderDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/api/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleDelivered = async (orderId) => {
    try {
      await axios.put(`/api/orders/${orderId}`, { delivered: true });
      setOrders(
        orders.map((order) =>
          order._id === orderId ? { ...order, delivered: true } : order
        )
      );
    } catch (error) {
      console.error("Error marking order as delivered:", error);
    }
  };

  return (
    <div>
      <h2>Rider Dashboard</h2>
      <h3>Orders</h3>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            <p>Order ID: {order._id}</p>
            <p>Product: {order.productName}</p>
            <p>Customer: {order.customerName}</p>
            <p>Delivery Address: {order.deliveryAddress}</p>
            {!order.delivered && (
              <button onClick={() => handleDelivered(order._id)}>
                Mark as Delivered
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RiderDashboard;
