import React from "react";

export default function CartItem({ item, value }) {
  const { id, img, title, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <>
      <tr>
        <td>
          <div className="cart_img">
            <img src={img} alt="" />
          </div>
        </td>
        <td>{title}</td>
        <td>$ {price}</td>
        <td>
          <span
            className="id_btn"
            onClick={() => {
              return decrement(id);
            }}
          >
            -
          </span>
          <span className="id_btn">{count}</span>
          <span
            className="id_btn"
            onClick={() => {
              return increment(id);
            }}
          >
            +
          </span>
        </td>
        <td>
          <div className="cart_remove" onClick={() => removeItem(id)}>
            Remove
          </div>
        </td>
        <td>Price: $ {total}</td>
      </tr>
    </>
  );
}
