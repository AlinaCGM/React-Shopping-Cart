import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NavBar from "./components/navbar/NavBar";
import "./App.css";

function App() {
  const [cartList, setCartList] = useState([]);
  const addProduct = (product) => {
    let updateCartArray = [...cartList];
    let productIndex = updateCartArray.findIndex(
      (item) => item.id === product.id
    );
    if (productIndex !== -1) {
      updateCartArray[productIndex].quantity += 1;
      setCartList(updateCartArray);
    } else {
      let updateProduct = { ...product, quantity: 1 };
      setCartList([...updateCartArray, updateProduct]);
    }
  };
  const removeProduct = (el) => {
    setCartList((current) => current.filter((item) => item.id !== el.id));
  };

  const increment = (product) => {
    let updateCartArray = [...cartList];
    let productIndex = updateCartArray.findIndex(
      (item) => item.id === product.id
    );
    if (productIndex !== -1) {
      updateCartArray[productIndex].quantity += 1;
      setCartList(updateCartArray);
    } else {
      let updateProduct = { ...product, quantity: 1 };
      setCartList([...updateCartArray, updateProduct]);
    }
  };
  const decrement = (product) => {
    let updateCartArray = [...cartList];
    let productIndex = updateCartArray.findIndex(
      (item) => item.id === product.id
    );
    if (productIndex !== -1) {
      updateCartArray[productIndex].quantity -= 1;
      setCartList(updateCartArray);
    } else if (productIndex === 1) {
      let updateProduct = { ...product, quantity: 1 };
      setCartList([...updateCartArray, updateProduct]);
    }
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="" element={<Home addProduct={addProduct} />}></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cartList={cartList}
              removeProduct={removeProduct}
              increment={increment}
              decrement={decrement}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
