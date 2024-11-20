import React from "react";

const DeliveryCards = () => {
  const cards = [
    {
      image:
        "https://drive.google.com/file/d/1H7ProoeJ8PZnG7nxPCetVfLiCB4exQC8/view?usp=drive_link",
      title: "Say what you want",
      description:
        "Your voice, your choice. Simply say it, and we’ll deliver it to your doorstep!",
    },
    {
      image:
        "https://drive.google.com/file/d/1RKeDhjxsZqniavInDG2BL45JShNGP1A7/view?usp=drive_link",
      title: "See real-time updates",
      description:
        "Track your order every step of the way, from placing it to delivery.",
    },
    {
      image:
        "https://drive.google.com/file/d/1PE0gHT3DQxebJZ7Kf3m-iptl-C-JFZTy/view?usp=drive_link",
      title: "Fast and Reliable Delivery",
      description:
        "Count on us to bring your items quickly and efficiently, straight from local stores near you",
    },
  ];

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Grocery delivery you can count on
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryCards;
