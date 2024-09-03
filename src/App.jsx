import React from "react";
import { useState } from "react";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import MobileView from "./components/MobileView";
import products from "./Product";

const App = () => {
  // Detect mobile view
  const isMobile = window.innerWidth <= 768;

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      {isMobile ? (
        <MobileView />
      ) : (
        <>
          <div style={{ flex: 1 }}>
            <ProductList
              products={products}
              onSelectProduct={setSelectedProduct}
            />
          </div>
          <div style={{ flex: 2 }}>
            <ProductDetail product={selectedProduct} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
