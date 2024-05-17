// src/components/Login.js
import React, { useState } from "react";
import axios from "../axiosConfig"; // Import Axios instance

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", { email, password }); // Use Axios instance
      localStorage.setItem("token", response.data.token);
      // Redirect user to dashboard or other page
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
