import React, { Component } from "react";
import Product from "./Product";
import { storeProducts } from "../../data";
import { ProductConsumer } from "../../context";
import "./product.css";

export default class ProductList extends Component {
  state = { products: storeProducts };

  render() {
    console.log("Products >>> ", this.state.products);

    return (
      <div className="all_products">
        {/* <h2>Hello from Product List</h2> */}
        <ProductConsumer>
          {(value) => {
            return value.products.map((product) => {
              return <Product key={product.id} product={product} />;
            });
            // console.log("Product Consume Value >>> ", value);
          }}
        </ProductConsumer>
      </div>
    );
  }
}
