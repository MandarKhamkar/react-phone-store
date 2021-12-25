import React, { Component } from "react";
import "./modal.css";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, price, title } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="modal_wrapper">
                <div className="modal">
                  <h2>Item Added in the Cart</h2>
                  <figure>
                    <img src={img} alt="" />
                  </figure>
                  <h3>{title}</h3>
                  <h4>Price: $ {price}</h4>
                  <div className="btn_group">
                    <Link
                      to="/"
                      className="btn_primary"
                      onClick={() => {
                        closeModal();
                      }}
                    >
                      Continue Shopping
                    </Link>
                    <Link
                      to="/cart"
                      className="btn_secondary"
                      onClick={() => {
                        closeModal();
                      }}
                    >
                      <span>Go To Cart</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
