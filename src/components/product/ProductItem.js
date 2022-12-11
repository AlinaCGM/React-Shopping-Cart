import React from "react";

export default function ProductItem({ product, addProduct }) {
  // const { title, price, image } = product;
  return (
    <div className="item">
      <h3>Name:{product.title} </h3>
      <p> {product.price} sek</p>
      <img className="image" src={product.image} alt="" />
      <button
        className="btn-list"
        onClick={() => {
          addProduct(product);
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
}
