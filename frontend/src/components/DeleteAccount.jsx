import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const DeleteAccount = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Page Header */}
          <h1 className="text-4xl font-bold text-center mb-6">
            Steps to Delete an Account
          </h1>

          {/* Section for User App */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              In the Voigo Order App
            </h2>

            {/* Step 1 */}
            <div className="mb-6">
              <h3 className="text-xl font-medium">
                Login to the Voigo Order App
              </h3>
              <p>Open the Voigo order app and log in to your account.</p>
            </div>

            {/* Step 2 */}
            <div className="mb-6">
              <h3 className="text-xl font-medium">Access Account Options</h3>
              <p>
                On the app bar at the top right corner, you will see three dots.
              </p>
              <div className="mt-4 h-fit rounded-lg flex items-center justify-center">
                {/* <image src="" /> */}
                <img
                  src="https://github.com/thesolomon1331/Voigo/blob/main/frontend/src/assets/delete-image-1.jpeg?raw=true"
                  className="rounded-lg shadow-lg sm:w-1/2"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-6">
              <h3 className="text-xl font-medium">Open the Menu</h3>
              <p>
                Click on the three dots to open a dropdown menu. Two options
                will appear:
                <ul className="list-disc ml-6 mt-2">
                  <li>Logout</li>
                  <li>Delete Account</li>
                </ul>
              </p>
              <div className="mt-4 h-fit rounded-lg flex items-center justify-center">
                <img
                  src="https://github.com/thesolomon1331/Voigo/blob/main/frontend/src/assets/delete-image-2.jpeg?raw=true"
                  className="rounded-lg shadow-lg sm:w-1/2"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="mb-6">
              <h3 className="text-xl font-medium">Delete Your Account</h3>
              <p>
                Select the "Delete Account" option to proceed. A confirmation
                prompt will appear to ensure you want to delete your account.
              </p>
              <div className="mt-4 h-fit rounded-lg flex items-center justify-center">
                <img
                  className="rounded-lg shadow-lg sm:w-1/2"
                  src="https://github.com/thesolomon1331/Voigo/blob/main/frontend/src/assets/delete-image-4.jpeg?raw=true"
                />
              </div>
            </div>

            {/* Step 5 */}
            <div>
              <h3 className="text-xl font-medium">Confirm Deletion</h3>
              <p>Confirm your action to permanently delete your account.</p>
            </div>
          </div>

          {/* Section for Delivery App */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DeleteAccount;
