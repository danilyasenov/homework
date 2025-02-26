import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : cart.map((item) => <CartItem key={item.id} item={item} />)}
      <h3>Total: ${total.toFixed(2)}</h3>
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
};

export default Cart;
