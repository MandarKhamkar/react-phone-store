import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
import "./product.css";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          // console.log("Product Details >>> ", value.detailProduct);
          const { id, company, img, info, price, title, inCart } =
            value.detailProduct;
          return (
            <div className="product_container">
              <h1>{title}</h1>

              <div className="product_wrapper">
                <div className="product_img">
                  <img src={img} alt="" />
                </div>
                <div className="product_details">
                  <h2>Model Name: {title}</h2>
                  <div className="product_company">Made By: {company}</div>
                  <div className="price">Price: $ {price}</div>
                  <h4>About the Product</h4>
                  <p>{info}</p>

                  <div className="btn_group">
                    <button
                      className={inCart ? "btn_primary added" : "btn_primary"}
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "Go To Cart" : "Add to Cart"}
                    </button>
                    <Link to="/" className="btn_secondary">
                      <span>Back To Products</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
