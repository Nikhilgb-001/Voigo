// import React from "react";
// import { FaUsers, FaRocket, FaCheckCircle } from "react-icons/fa";

// const AboutUs = () => {
//   return (
//     <div className="bg-gray-100 py-12 text-gray-800 font-sans" id="about-us">
//       {/* Hero Section */}
//       <div className="bg-gray-100 ">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
//           <p className="mt-4 text-lg">
//             Welcome to Voigo – your new, hassle-free, voice-activated delivery
//             service designed to make life easier.
//           </p>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="container mx-auto px-4 py-8">
//         <h2 className="text-2xl font-semibold text-center mb-6">
//           We make sure your idea & creation is delivered properly
//         </h2>
//         <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
//           At Voigo, we believe in the power of simplicity, convenience, and
//           community. Our goal is to provide you with a personalized shopping
//           experience that allows you to get what you need quickly, all by simply
//           speaking your request.
//         </p>
//       </div>

//       {/* Supporting Local Section */}
//       <div className="bg-gray-100">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl font-semibold text-center mb-6">
//             Supporting Local Stores, Empowering Communities
//           </h2>
//           <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
//             We partner with local stores to fulfill your orders, helping them
//             thrive in the digital world. Your purchases directly benefit the
//             local economy and strengthen the connections we all share.
//           </p>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="container mx-auto px-4 py-12">
//         <h2 className="text-2xl font-semibold text-center mb-6">
//           Why Choose Voigo?
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <FeatureCard
//             icon={<FaUsers size={36} />}
//             title="Voice-Activated Convenience"
//             description="Simply say what you need, and we’ll make it happen."
//           />
//           <FeatureCard
//             icon={<FaRocket size={36} />}
//             title="Same-Day Delivery"
//             description="We deliver your items fast, with local partnerships."
//           />
//           <FeatureCard
//             icon={<FaCheckCircle size={36} />}
//             title="Free Delivery"
//             description="Enjoy free delivery for every order, making shopping easier."
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const FeatureCard = ({ icon, title, description }) => {
//   return (
//     <div className="text-center p-6 border rounded-lg shadow-md bg-white">
//       <div className="text-yellow-500 mb-4">{icon}</div>
//       <h3 className="text-lg font-semibold mb-2">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// };

// export default AboutUs;

// import React from "react";
// import { FaUsers, FaRocket, FaCheckCircle } from "react-icons/fa";

// const AboutUs = () => {
//   return (
//     <div className="bg-white py-16 px-6 md:px-12 font-sans" id="about-us">
//       {/* Hero Section */}
//       <div className="text-center">
//         {/* <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//           About Us
//         </h1> */}
//         {/* <p className="text-gray-600 text-base md:text-lg">
//           Welcome to Voigo – your hassle-free, voice-activated delivery service
//           designed to make life easier.
//         </p> */}
//       </div>

//       {/* Features Section */}
//       <div className="mt-12">
//         <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-8">
//           Why Choose Voigo?
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <FeatureCard
//             icon={<FaUsers size={40} className="text-green-500" />}
//             title="Voice-Activated Ease"
//             description="Speak your request, and we’ll make it happen."
//           />
//           <FeatureCard
//             icon={<FaRocket size={40} className="text-blue-500" />}
//             title="Quick Delivery"
//             description="Same-day delivery with trusted local stores."
//           />
//           <FeatureCard
//             icon={<FaCheckCircle size={40} className="text-yellow-500" />}
//             title="Free Delivery"
//             description="No delivery charges, shop without worries."
//           />
//         </div>
//       </div>

//       {/* Supporting Local Section */}
//       <div className="bg-gray-50 mt-16 rounded-lg p-8 text-center">
//         <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//           Empowering Communities
//         </h2>
//         <p className="text-gray-600 text-base">
//           We collaborate with local stores to support the economy while
//           connecting you with what you need.
//         </p>
//       </div>
//     </div>
//   );
// };

// const FeatureCard = ({ icon, title, description }) => {
//   return (
//     <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//       <div className="mb-4">{icon}</div>
//       <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
//       <p className="text-gray-600 text-sm text-center">{description}</p>
//     </div>
//   );
// };

// export default AboutUs;

import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* Heading */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="mt-4 text-gray-600">
            Welcome to Voigo – your new, hassle-free, voice-activated delivery
            service designed to make life easier.
          </p>
        </div>

        {/* Purpose Section */}
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <div className="sm:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Purpose
            </h2>
            <p className="mt-4 text-gray-600 text-left">
              Voigo is more than just a delivery service; we’re on a mission to
              redefine the way you shop. With a simple voice command, we bring
              you anything you need, straight from your local stores, ensuring
              that you never have to compromise on convenience.
            </p>
          </div>
          <img
            src="./src/assets/image-1.jpg"
            className="rounded-lg shadow-lg sm:w-1/2"
          />
        </div>

        {/* Supporting Local Stores */}
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <img
            src="./src/assets/image-3.jpg"
            alt="Local business"
            className="rounded-lg shadow-lg sm:w-1/2"
          />
          <div className="sm:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">
              Supporting Local Stores, Empowering Communities
            </h2>
            <p className="mt-4 text-gray-600 text-left">
              Strong communities are built on strong local businesses. That’s
              why Voigo partners with local stores to fulfill your orders,
              helping them thrive in the digital world.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Why Choose Voigo?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Feature 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img src="./src/assets/image-1.jpg" className="mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-800">
                Voice-Activated Convenience
              </h3>
              <p className="mt-2 text-gray-600">
                Simply say what you need, and we’ll make it happen.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img
                src="./src/assets/image-1.jpg"
                alt="Same-Day Delivery"
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-medium text-gray-800">
                Same-Day Delivery
              </h3>
              <p className="mt-2 text-gray-600">
                Get your items delivered fast with our local partnerships.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img src="./src/assets/image-1.jpg" className="mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-800">
                Supporting Local Businesses
              </h3>
              <p className="mt-2 text-gray-600">
                Help local stores grow and thrive by shopping with us.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img
                src="./src/assets/image-1.jpg"
                alt="Free Delivery"
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-medium text-gray-800">
                Free Delivery
              </h3>
              <p className="mt-2 text-gray-600">
                Enjoy more value with free delivery for every order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
