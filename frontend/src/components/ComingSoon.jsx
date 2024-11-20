import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-red-500 text-white text-center px-4">
      {/* Heading */}
      <div className="mb-8">
        <div className="text-6xl font-bold flex items-center justify-center space-x-2">
          <span>Coming</span>
          <span className="relative">
            <span
              className="absolute w-8 h-8 border-4 border-white border-t-red-500 rounded-full animate-spin"
              style={{ top: "-20px", right: "-20px" }}
            ></span>
            <span className="text-4xl font-extrabold">🕒</span>
          </span>
          <span>Soon</span>
        </div>
      </div>

      {/* Subtitle */}
      <p className="mb-8 text-lg">
        We will be soon available on our social media handels...
      </p>
    </div>
  );
};

export default ComingSoon;
