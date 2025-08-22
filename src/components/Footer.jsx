import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#1a1a1a] text-gray-400 py-6 text-center">
      <p>
        &copy; {new Date().getFullYear()} Gascom e-Sport. Tous droits réservés.
      </p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:text-red-600 transition duration-300">
          Facebook
        </a>
        <a href="#" className="hover:text-red-600 transition duration-300">
          Discord
        </a>
        <a href="#" className="hover:text-red-600 transition duration-300">
          Twitch
        </a>
      </div>
      <form className="mt-4 flex justify-center space-x-2">
        <input
          type="email"
          placeholder="Votre email"
          className="px-3 py-1 rounded-md border border-red-700/50 bg-[#0d0d0d] text-white focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button className="px-4 py-1 rounded-md bg-red-600 hover:bg-red-700 transition duration-300">
          S'inscrire
        </button>
      </form>
    </footer>
  );
}
