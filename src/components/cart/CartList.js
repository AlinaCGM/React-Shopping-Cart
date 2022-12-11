import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
export default function CartList({
  cartList,
  removeProduct,
  increment,
  decrement,
}) {
  return (
    <div>
      CartList
      <table className="table-cart">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>image</th>
            <th>quantity</th>
            <th>price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((item) => {
            return (
              <CartItem
                key={item.id}
                cart={item}
                removeProduct={removeProduct}
                increment={increment}
                decrement={decrement}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
