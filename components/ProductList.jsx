import React from "react";

const ProductList = ({ products, onSelectProduct }) => {
  return (
    <div>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            marginBottom: "20px",
            cursor: "pointer",
          }}
          onClick={() => onSelectProduct(product)}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100px", marginRight: "20px" }}
          />
          <div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
