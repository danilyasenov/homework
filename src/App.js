import React from "react";
import { CartProvider } from "./context/CartContext";
import ProductContainer from "./containers/ProductContainer";
import Cart from "./components/Cart";
import "./styles.css"; // Добавляем стили

const App = () => {
  return (
    <CartProvider>
      <div className="App">
        <h1>HomeWork</h1>
        <ProductContainer />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
