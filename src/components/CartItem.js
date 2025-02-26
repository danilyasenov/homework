import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <h4>{item.title}</h4>
      <p>${item.price}</p>
      <div className="cart-controls">
        <button onClick={() => removeFromCart(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => addToCart(item)}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
