// src/components/Categories.js
import React from "react";

const categories = [
  {
    name: "Fruits",
    image:
      "https://images.unsplash.com/photo-1663471967569-0bf57cfce101?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    name: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  

  {
    name: "Herbs",
    image:
      "https://plus.unsplash.com/premium_photo-1697672492174-ff545dfea24a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGdhbmphfGVufDB8fDB8fHww",
  },
  // Add more categories as needed
];

const Categories = () => {
  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        Popular Categories
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full rounded-md mb-2"
            />
            <h2 className="font-semibold">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
