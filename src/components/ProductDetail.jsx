import React from "react";

const ProductDetail = ({ product }) => {
  if (!product) {
    return <div style={{ padding: "20px" }}>No item to display...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "200px", marginBottom: "20px" }}
      />
      <p>
        <strong>Price:</strong> {product.price}
      </p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
