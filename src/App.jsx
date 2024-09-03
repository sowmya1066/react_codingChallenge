import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$20",
      description: "Description for Product 1",
      image: "url_to_image1",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$30",
      description: "Description for Product 2",
      image: "url_to_image2",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$40",
      description: "Description for Product 3",
      image: "url_to_image3",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$50",
      description: "Description for Product 4",
      image: "url_to_image4",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <div style={{ flex: 1 }}>
        <ProductList products={products} onSelectProduct={setSelectedProduct} />
      </div>
      <div style={{ flex: 2 }}>
        <ProductDetail product={selectedProduct} />
      </div>
    </div>
  );
};

export default App;
