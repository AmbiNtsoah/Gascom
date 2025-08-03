import { useState } from "react";
import { Menu, X } from "lucide-react";
import GeS_Icon from "../assets/GeS_Icon.png";

/* This is the Navigation Bar component*/
function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar glassmorphism */}
      <nav className=" bg-white/10 shadow-md border-white/20 p-4 flex justify-between items-center sticky top-0 z-50">
        {/* Logo */}
        <div>
          <a href="/" className="flex items-center space-x-2">
            <img
              src={GeS_Icon}
              alt="GeS Icon"
              width="50px"
              className="rounded-full"
            />
            <span className="text-xl font-semibold text-white">
              Gascom e-Sport
            </span>
          </a>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li className="hover:text-red-600 cursor-pointer">Home</li>
          <li className="hover:text-red-600 cursor-pointer">Events</li>
          <li className="hover:text-red-600 cursor-pointer">Activities</li>
          <li className="hover:text-red-600 cursor-pointer">Contact</li>
        </ul>

        {/* Connexion button */}
        <button className="hidden md:block bg-gray-700/80 backdrop-blur text-white px-4 py-2 rounded-lg hover:bg-red-800 transition duration-300 cursor-pointer">
          Connexion
        </button>

        {/* Hamburger icon */}
        <div className="md:hidden text-white">
          {menuOpen ? (
            <X
              size={28}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer"
            />
          ) : (
            <Menu
              size={28}
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer"
            />
          )}
        </div>
      </nav>

      {/* Drawer glassmorphism */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white/10 backdrop-blur-lg backdrop-saturate-150 text-white shadow-lg z-50 flex flex-col p-6 space-y-6 transition-all duration-300 border-l border-white/20">
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-white hover:text-red-500"
          >
            <X size={25} />
          </button>
          
          <div className="flex flex-col items-center mb-4">
            <img
              src={GeS_Icon}
              alt="GeS Icon"
              width="35px"
              className="rounded-full"
            />
            <span className="text-xl font-semibold text-white mt-2">
              Gascom e-Sport
            </span>
          </div>

          <a
            href="#"
            className="hover:text-red-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-red-600"
            onClick={() => setMenuOpen(false)}
          >
            Events
          </a>
          <a
            href="#"
            className="hover:text-red-600"
            onClick={() => setMenuOpen(false)}
          >
            Activities
          </a>
          <a
            href="#"
            className="hover:text-red-600"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <button className="bg-gray-700/80 backdrop-blur text-white px-4 py-2 rounded-lg hover:bg-red-800 transition duration-300">
            Connexion
          </button>
        </div>
      )}
    </>
  );
}

export default Navigation;
