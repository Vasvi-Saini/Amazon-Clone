// y page products.jsx m use krne k liy bnaya h

import React from "react";
import { useNavigate } from "react-router";

export default function ProductCard({
  img_link,
  product_name,
  actual_price,
  discounted_price,
  rating,
  product_id,
}) {
  const navigate = useNavigate();

  return (
    <div
      className="flex gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md cursor-pointer"
      onClick={() => navigate(`/products/${product_id}`)}
    >
      <img
        src={img_link}
        alt={product_name}
        className="w-[120px] h-[120px] object-contain bg-gray-100"
      />
      <div className="flex flex-col gap-1">
        <h2 className="text-md font-semibold text-[#0f1111]">{product_name}</h2>
        <p className="text-green-600 text-sm font-medium">
          {discounted_price}{" "}
          <span className="line-through text-gray-400">{actual_price}</span>
        </p>
        <p className="text-yellow-500 text-sm">⭐ {rating}</p>
        <p className="text-xs text-gray-500">Eligible for FREE Shipping</p>
      </div>
    </div>
  );
}
