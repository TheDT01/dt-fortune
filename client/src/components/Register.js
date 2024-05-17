// src/components/Register.js
import React, { useState } from "react";
import axios from "../axiosConfig"; // Import Axios instance

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/register", {
        email,
        password,
      }); // Use Axios instance
      localStorage.setItem("token", response.data.token);
      // Redirect user to dashboard or other page
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle registration failure
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
