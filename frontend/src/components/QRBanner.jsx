import React from "react";

const QRBanner = () => {
  return (
    <div className="container mx-auto p-2 w-[80%] my-10">
      <div className="flex flex-col md:flex-row items-center bg-teal-100 rounded-lg p-4 md:p-6">
        {/* <img
          src="path-to-phone-image"
          alt="Phone illustration"
          className="w-20 h-20 md:w-32 md:h-32 mb-4 md:mb-0"
        /> */}
        <div className="flex-1 text-center md:text-left md:px-4">
          <h3 className="text-lg font-semibold">
            Get the full Instacart experience
          </h3>
          <p className="text-gray-600">
            Scan the QR code with your camera. First delivery is free.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1706759755832-47e53579cc0d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="QR Code"
          className="w-20 h-20 md:w-24 md:h-24 rounded-lg"
        />
      </div>
    </div>
  );
};

export default QRBanner;
