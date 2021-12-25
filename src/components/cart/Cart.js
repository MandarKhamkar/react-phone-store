import React, { Component } from "react";
import "./cart.css";
import { ProductConsumer } from "../../context";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <section>
                <Title name="My" title="Cart"></Title>
                <div className="cart_table">
                  <table className="table">
                    <CartColumns />
                    <CartList value={value}></CartList>
                  </table>
                </div>
                <CartTotals value={value} />
              </section>
            );
          } else {
            return (
              <section>
                <Title name="My" title="Cart"></Title>
                <EmptyCart />
              </section>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
