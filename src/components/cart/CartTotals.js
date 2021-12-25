import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="cart_total">
        <div className="cart_total_box">
          <button
            className="btn_secondary"
            type="button"
            onClick={() => {
              clearCart();
            }}
          >
            clear cart
          </button>

          <p>
            <span className="text-title"> subtotal:</span>{" "}
            <strong>$ {cartSubTotal} </strong>
          </p>
          <p>
            <span className="text-title"> tax:</span>{" "}
            <strong>$ {cartTax} </strong>
          </p>
          <p>
            <span className="text-title"> total:</span>{" "}
            <strong>$ {cartTotal} </strong>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
