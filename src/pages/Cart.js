import "../components/cart/Cart.css";
import CartList from "../components/cart/CartList";

export default function Cart({
  cartList,
  removeProduct,
  increment,
  decrement,
}) {
  return (
    <div className="cart-container">
      <CartList
        cartList={cartList}
        removeProduct={removeProduct}
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
}
