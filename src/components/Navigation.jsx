import React from "react";
import GeS_Icon from "../assets/GeS_Icon.png";

/* This is the Navigation Bar component*/
function Navigation() {
  return (
    <>
      <nav
        className=" shadow-md p-4 flex justify-between items-center sticky top-0 z-50"
        style={{ backgroundColor: "#242424" }}
      >
        {/* Logo */}
        <div >
          <a href="/" className="flex items-center space-x-2">
            <img
                src={GeS_Icon}
                alt="GeS Icon"
                width="50px"
                className="rounded-full"
            />
            <span className="text-xl font-semibold text-white-800">
              Gascom e-Sport
            </span>
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white-700 font-medium">
          <li className="hover:text-red-600 cursor-pointer">Home</li>
          <li className="hover:text-red-600 cursor-pointer">Events</li>
          <li className="hover:text-red-600 cursor-pointer">Activities</li>
          <li className="hover:text-red-600 cursor-pointer">Contact</li>
        </ul>

        {/* connexion button*/}
        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition duration-300 cursor-pointer">
          Connexion
        </button>
      </nav>
    </>
  );
}

export default Navigation;
