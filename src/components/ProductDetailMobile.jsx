import React from "react";
import { FaStar, FaArrowLeft } from "react-icons/fa";

const ProductDetailMobile = ({ product, onBack }) => {
  if (!product) {
    return (
      <div className="p-5 mt-[200px]">
        <p className="text-[#6941C6] text-base font-semibold leading-6 text-center text-[16px]">
          Nothing to display...
        </p>
        <p className="font-inter text-2xl font-semibold leading-tight tracking-tighter text-center">
          Select an item to display
        </p>
        <p className="font-inter text-lg font-normal leading-[30px] text-center text-[#475467]">
          Select an item from the master view to display details in the detail
          view.
        </p>
      </div>
    );
  }

  //array for filled and unfilled stars based on ratings
  const stars = [];
  const fullStars = Math.round(product.rating.stars);
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FaStar
        key={i}
        className={i < fullStars ? "text-yellow-500" : "text-gray-300"}
      />
    );
  }

  return (
    <div className="p-5">
      <button
        id="btn"
        onClick={onBack}
        className="text-blue-500 mb-4 flex items-center"
      >
        <FaArrowLeft style={{ color: "#344054" }} />
      </button>

      <div
        id="prodDetail"
        className="w-[328] h-[320px] bg-[#F4F6FA] rounded-lg"
        style={{ padding: "15px" }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-[200px] h-[280px] ml-12"
        />
      </div>

      <p className="text-sm font-semibold text-[#6941C6] text-[14px] leading-[20px] mt-5">
        {product.category}
      </p>
      <h2 className="text-lg font-semibold text-[20px] leading-[28px] mt-2">
        {product.name}
      </h2>
      <p className="text-sm text-[#475467] text-[16px] leading-[24px] mt-1">
        {product.fullDescription}
      </p>

      {/* Star rating section */}
      <div className="flex items-center mt-2">
        {stars}
        <span className="ml-2 text-base text-[#475467]">
          <strong className="text-black">{product.rating.stars}</strong>{" "}
          {product.rating.reviews} reviews
        </span>
      </div>

      <p className="text-lg font-semibold mt-2">{product.price}</p>
    </div>
  );
};

export default ProductDetailMobile;
