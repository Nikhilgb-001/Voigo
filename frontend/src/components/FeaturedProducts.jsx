// src/components/FeaturedProducts.js
import React from "react";

const products = [
  {
    name: "Roma Tomatoes",
    price: "$11 - $12",
    image:
      "https://images.unsplash.com/photo-1534940519139-f860fb3c6e38?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Banana",
    price: "$15",
    image:
      "https://images.unsplash.com/photo-1510247548804-1a5c6f550b2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFuYW5hfGVufDB8fDB8fHww",
  },

  {
    name: "Roma Tomatoes",
    price: "$11 - $12",
    image:
      "https://images.unsplash.com/photo-1534940519139-f860fb3c6e38?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Banana",
    price: "$15",
    image:
      "https://images.unsplash.com/photo-1510247548804-1a5c6f550b2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFuYW5hfGVufDB8fDB8fHww",
  },

  // Add more products as needed
];

const FeaturedProducts = () => {
  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-lg text-center"
          >
            {product.sale && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                Sale
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover mb-2"
            />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
