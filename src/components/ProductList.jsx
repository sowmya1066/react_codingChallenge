// src/components/ProductList.js

import React from "react";

const ProductList = ({ products, onSelectProduct }) => {
  return (
    <div className="space-y-6 p-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="cursor-pointer w-[448px] h-[188px] bg-white border border-gray-200 shadow-sm rounded-lg flex items-center space-x-5"
          onClick={() => onSelectProduct(product)}
        >
          {/* Image container on the left side */}
          <div
            className="w-[128px] h-[156px] bg-gray-200 rounded-lg overflow-hidden" // Apply rounded corners to the container
            style={{ padding: "18px" }}
          >
            {/* Actual image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg" // Apply rounded corners to the image
            />
          </div>

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
