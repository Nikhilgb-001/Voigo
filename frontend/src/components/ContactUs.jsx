import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            className="text-4xl font-extrabold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Contact Us
          </motion.h2>

          <motion.p
            className="text-lg mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We're here to help! Feel free to reach out to us with any questions,
            feedback, or support requests.
          </motion.p>

          <div className="space-y-6">
            <motion.div
              className="flex items-center justify-center space-x-4 hover:scale-105 transform transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <AiOutlineMail className="text-3xl text-white" />
              <a
                href="mailto:voigoapp@gmail.com"
                className="text-xl font-semibold hover:text-blue-200"
              >
                voigoapp@gmail.com
              </a>
            </motion.div>

            <motion.div
              className="flex items-center justify-center space-x-4 hover:scale-105 transform transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <AiOutlinePhone className="text-3xl text-white" />
              <p className="text-xl font-semibold text-white">
                9573623377, 9544147335
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
