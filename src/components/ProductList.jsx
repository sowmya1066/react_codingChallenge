// src/components/ProductList.js

import React from "react";
import { FaStar } from "react-icons/fa"; // Import the star icon
import "../index.css"; // Import the custom CSS file

const ProductList = ({ products, onSelectProduct }) => {
  return (
    <div
      id="ProductListContainer"
      className="w-[512px] h-[748px] p-[0px_32px_0px_32px] gap-[24px] overflow-x-hidden overflow-y-auto custom-scrollbar"
    >
      {products.map((product) => {
        // Check if product.rating is defined
        const rating = product.rating || { stars: "N/A", reviews: "0" };

        return (
          <div
            id="pID"
            key={product.id}
            className="cursor-pointer w-[448px] h-[188px] bg-white border border-gray-200 shadow-sm rounded-lg flex items-center space-x-5 mt-5"
            onClick={() => onSelectProduct(product)}
          >
            {/* Image container on the left side */}
            <div
              id="image-container"
              className="relative w-[158px] h-[140px] bg-gray-200 rounded-lg overflow-hidden ml-5"
              style={{ padding: "15px" }}
            >
              {/* Star rating tag */}
              <div
                id="star"
                className="absolute bottom-2 left-2 bg-[#F9FAFB] text-black border border-[#d1d1d2] rounded-tl-full text-xs font-semibold py-1 px-2 rounded-full flex items-center"
              >
                <FaStar className="text-yellow-500 w-[12px] h-[12px] mr-1" />
                {rating.stars} ({rating.reviews})
              </div>
              {/* Actual image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full"
              />
            </div>

            {/* Product details on the right side */}
            <div className="mt-0" id="cat">
              <h3 className="text-sm font-semibold text-[#6941C6] text-[14px] leading-[20px]">
                {product.category}
              </h3>
              <p
                className="text-lg font-semibold text-[18px] leading-[28px]"
                id="name"
              >
                {product.name}
              </p>
              <p
                className="text-sm text-[#475467] text-[16px] leading-[24px]"
                id="descp"
              >
                {product.description}
              </p>
              <p className="text-lg font-semibold mt-2 w-[80px] h-[30px] gap-8">
                {product.price}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
