import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>{product.category}</p>
      <h3>${product.price}</h3>

      {cartItem ? (
        <div className="cart-controls">
          <button onClick={() => removeFromCart(product.id)}>-</button>
          <span>{cartItem.quantity}</span>
          <button onClick={() => addToCart(product)}>+</button>
        </div>
      ) : (
        <button onClick={() => addToCart(product)}>Add to cart</button>
      )}
    </div>
  );
};

export default ProductCard;
