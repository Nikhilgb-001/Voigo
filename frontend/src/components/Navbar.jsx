import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#172554] text-white p-4">
      <div className="flex justify-between px-2 items-center">
        {/* Logo */}
        <Link to={"/"} className="logo">
          <img
            src="https://github.com/Nikhilgb-001/voigo/blob/main/frontend/src/assets/Voigo%20logo%20new.png?raw=true"
            alt="Voigo Logo"
            className="h-10 w-auto md:h-12"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <ScrollLink
            to="hero-section"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-green-900 font-semibold cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about-us"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-green-900 font-semibold cursor-pointer"
          >
            About Us
          </ScrollLink>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-green-400 focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-zinc-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mt-4 space-y-2 md:hidden">
          <ScrollLink
            to="hero-section"
            smooth={true}
            duration={500}
            offset={-50}
            className="block text-center py-2 hover:text-green-400 font-semibold cursor-pointer"
            onClick={toggleMenu}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about-us"
            smooth={true}
            duration={500}
            offset={-50}
            className="block text-center py-2 hover:text-green-400 font-semibold cursor-pointer"
            onClick={toggleMenu}
          >
            About Us
          </ScrollLink>
          <ScrollLink
            to="shop-section"
            smooth={true}
            duration={500}
            offset={-50}
            className="block text-center py-2 hover:text-green-400 font-semibold cursor-pointer"
            onClick={toggleMenu}
          >
            Shop
          </ScrollLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
