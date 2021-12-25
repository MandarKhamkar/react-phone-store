import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import PropTypes from "prop-types";
import "./product.css";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductConsumer>
        {(value) => (
          <div className="product_box">
            <Link to="/details" onClick={() => value.handleDetail(id)}>
              <figure>
                <img src={img} alt={title} />
              </figure>
            </Link>
            <div className="product_meta">
              <h4>{title}</h4>
              <div className="product_price">$ {price}</div>
              <button
                className={inCart ? "btn_primary added" : "btn_primary"}
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(id);
                  value.openModal(id);
                  console.log("Modal>>>", value.openModal(id));
                }}
              >
                {inCart ? "Go To Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        )}
      </ProductConsumer>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
