// src/components/ProductDetail.js

import React from "react";

const ProductDetail = ({ product }) => {
  if (!product) {
    return (
      <div className="p-5">
        <p className="text-xs text-purple-500">Nothing to display...</p>
        <p className="text-2xl font-bold text-black">
          Select an item to display
        </p>
        <p className="text-base text-black">
          Select an item from the master view to display details in the detail
          view.
        </p>
      </div>
    );
  }

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-52 mb-5" />
      <p className="font-semibold">
        <strong>Price:</strong> {product.price}
      </p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
