import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";
import "../styles.css"; // Загружаем стили

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  // Фильтрация товаров
  const filteredProducts = category === "all" ? products : products.filter((p) => p.category === category);

  return (
    <div>
      <div className="filters">
        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("men's clothing")}>Men's Clothing</button>
        <button onClick={() => setCategory("women's clothing")}>Women's Clothing</button>
        <button onClick={() => setCategory("electronics")}>Electronics</button>
        <button onClick={() => setCategory("jewelery")}>Jewelry</button>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductContainer;
