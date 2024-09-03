import React from "react";
import { FaStar } from "react-icons/fa"; // Import the star icon

const ProductDetail = ({ product }) => {
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

  // Create an array for filled and unfilled stars based on rating
  const stars = [];
  const fullStars = Math.round(product.rating.stars); // Round the rating to nearest full star
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
      <div
        className="relative w-[634px] h-[330px] bg-gray-200 rounded-lg overflow-hidden ml-5 mt-0"
        style={{ padding: "15px" }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-52 h-60 ml-[189px] mt-5"
        />
      </div>

      <p className="text-sm font-semibold text-[#6941C6] text-[14px] leading-[20px] mt-5 ml-6">
        {product.category}
      </p>
      <h2 className="text-lg font-semibold text-[20px] leading-[28px] mt-2 ml-6">
        {product.name}
      </h2>
      <p className="text-sm text-[#475467] text-[16px] leading-[24px] mt-1 ml-6">
        {product.fullDescription}
      </p>

      {/* Star rating section */}
      <div className="flex items-center mt-2 ml-6">
        {stars}
        <span className="ml-2 text-base text-[#475467]">
          <strong className="text-black">{product.rating.stars}</strong>{" "}
          {product.rating.reviews} reviews
        </span>
      </div>

      <p className="text-lg font-semibold mt-2 w-[80px] h-[30px] gap-8 ml-6">
        {product.price}
      </p>
    </div>
  );
};

export default ProductDetail;
