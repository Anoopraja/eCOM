import React from "react";

function ProductCard({name,price,image}) {
  return (
    <div className="w-72 rounded-xl border bg-white p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
      
      <img
        src={image}
        alt="Product"
        className="h-52 w-full rounded-lg object-cover"
      />

      <div className="mt-4">
        <h2 className="text-lg font-semibold">
          {name}
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Comfortable running shoes with premium cushioning.
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold">
            ${price}
          </span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-600">
            In Stock
          </span>
        </div>

        <button className="mt-4 w-full rounded-lg bg-black py-2 text-white hover:bg-gray-800">
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductCard;