import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import products from "./Product";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

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
