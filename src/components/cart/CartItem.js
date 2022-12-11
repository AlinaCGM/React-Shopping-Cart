import React, { useState } from "react";

import "./Cart.css";

export default function CartItem({
  cart,
  removeProduct,
  decrement,
  increment,
}) {
  let price = cart.price;
  let quantity = cart.quantity;
  let priceChange = price * quantity;
  let num = priceChange.toFixed(2);

  // const total = cart
  //   .reduce((acc, item) => acc + item.price, 0)
  //   .toFixed(2);
  // console.log(total, "total");
  return (
    <>
      <tr>
        <td>1</td>
        <td>{cart.title.slice(0, 20)}</td>
        <td>
          <img className="img" src={cart.image} alt="" />
        </td>
        <td>
          <button
            onClick={() => {
              if (quantity > 0) {
                decrement(cart);
              }
            }}
          >
            {" "}
            -
          </button>
          {quantity}
          <button onClick={() => increment(cart)}>+</button>
        </td>
        <td>{num}</td>
        <td>
          <button onClick={() => removeProduct(cart)}>Remove</button>
        </td>
        <td>
          <button>total:</button>
        </td>
      </tr>
    </>
  );
}
