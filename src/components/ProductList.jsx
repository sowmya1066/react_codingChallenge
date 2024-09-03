// src/components/ProductList.js

import React from "react";

const ProductList = ({ products, onSelectProduct }) => {
  return (
    <div className="space-y-6 p-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="cursor-pointer p-4 border border-gray-300 rounded-lg flex items-center"
          onClick={() => onSelectProduct(product)}
        >
          {/* Image on the left side */}
          <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-cover rounded-lg mr-4"
          />

          {/* Product details on the right side */}
          <div>
            <h3 className="text-lg font-semibold">{product.category}</h3>
            <p className="text-xl font-bold">{product.name}</p>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-lg font-semibold mt-2">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
