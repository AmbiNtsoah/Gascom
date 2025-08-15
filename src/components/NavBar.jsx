import React from "react";
import GeS_Icon from "../assets/GeS_Icon.png";

export default function NavBar() {
  return (
    <>
      <nav
        className=" shadow-md p-4 flex justify-between items-center sticky top-0 z-50"
        style={{ backgroundColor: "#242424" }}
      >
        {/* Logo */}
        <div>
          <a href="/" className="flex items-center space-x-2">
            <img
              src={GeS_Icon}
              alt="GeS Icon"
              width="50px"
              className="rounded-full"
            />
            <span className="text-xl font-semibold text-white-800">GasCom</span>
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white-700 font-medium">
          <li>
            <a href="#" className="hover:text-red-600 cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <a href="#team" className="hover:text-red-600 cursor-pointer">
              Team
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-red-600 cursor-pointer">
              Services
            </a>
          </li>
          <li>
            <a href="#footer" className="hover:text-red-600 cursor-pointer">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
