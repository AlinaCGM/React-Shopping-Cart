import React from "react";
// import { Link } from "react-router-dom";
import ProductList from "../components/product/ProductList";
import "../App.css";

export default function Home({ addProduct }) {
  return (
    <div className="products">
      <ProductList addProduct={addProduct} />
    </div>
  );
}
