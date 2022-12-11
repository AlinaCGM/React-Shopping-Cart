import React, { useState, useEffect } from "react";
import ProductItem from "../product/ProductItem";

// import "../../App.css";
import "./Products.css";

export default function ProductList({ addProduct }) {
  const [data, setData] = useState([]);

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    function getData() {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data));
    }
    getData();
  }, []);
  console.log(data);
  return (
    <div className="products">
      {data.map((item) => (
        <ProductItem key={item.id} product={item} addProduct={addProduct} />
      ))}
    </div>
  );
}
