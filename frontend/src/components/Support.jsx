import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <>
      <Navbar />
      <div className="h-fit bg-white flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold text-indigo-800 mb-8">Support</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl px-4">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
            <div>
              <MdOutlineManageAccounts className="text-6xl text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Manage Data</h2>
              <p className="text-gray-700 mb-4">
                Help us by contributing to our cause. Every donation makes a
                difference.
              </p>
            </div>
            <Link
              to={"/manage-account"}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Manage Account
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
            <div>
              {/* <FaHandsHelping  /> */}
              <MdDelete className="text-6xl text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">
                How to delete account
              </h2>
              <p className="text-gray-700 mb-4">
                Join us as a volunteer and support our mission with your
                valuable time.
              </p>
            </div>
            <Link to={'/voigo-support/delete-account'} className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
              Delete Account
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
            <div>
              <IoCallSharp className="text-6xl text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                Share our story and spread awareness about the work we do.
              </p>
            </div>
            <Link
              to={"/contact-us"}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Support;
