import React, { Component } from "react";

export default class CartColumns extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Products</th>
          <th>Name of Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Remove</th>
          <th>Total</th>
        </tr>
      </thead>
    );
  }
}
