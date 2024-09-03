import React, { useState } from "react";
import ProductList from "./ProductList";
import ProductDetailMobile from "./ProductDetailMobile";
import products from "../Product";

const MobileView = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="w-full h-screen overflow-y-auto">
      {selectedProduct ? (
        <ProductDetailMobile product={selectedProduct} onBack={handleBack} />
      ) : (
        <ProductList
          products={products}
          onSelectProduct={handleSelectProduct}
        />
      )}
    </div>
  );
};

export default MobileView;
