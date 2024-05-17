// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import SellerDashboard from "./components/SellerDashboard";
import RiderDashboard from "./components/RiderDashboard";
import "./App.css"; // Import global styles

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/seller" component={SellerDashboard} />
          <Route path="/rider" component={RiderDashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
