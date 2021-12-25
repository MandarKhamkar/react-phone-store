import React, { Component } from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Mobile Store" />
          </Link>
        </div>
        <div className="header_nav">
          <div className="menu_item">
            <Link to="/products">
              <span>Products</span>
            </Link>
          </div>
          <div className="menu_item">
            <Link to="/cart">
              <span>My Cart</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
