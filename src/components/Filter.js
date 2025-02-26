import React from "react";

const Filter = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="filter">
      {categories.map((category) => (
        <button
          key={category}
          className={activeCategory === category ? "active" : ""}
          onClick={() => onSelectCategory(category)}
        >
          {category.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Filter;
