import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import Services from "./Services";

export default function Intro() {
  return (
    <section
      id="intro"
      className="relative bg-[#0D0D0D] text-white py-20 overflow-hidden"
    >
      {/* Dégradé rouge subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] opacity-90"></div>

      {/* Contenu */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-[#E50914] drop-shadow-[0_0_20px_rgba(229,9,20,0.8)]"
        >
          Bienvenue chez GasCom e-Sport
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Nous connectons les passionnés de jeux vidéo à travers des{" "}
          <span className="text-[#FF1E56] font-semibold">tournois épiques</span>
          , des{" "}
          <span className="text-[#FF1E56] font-semibold">
            événements communautaires
          </span>{" "}
          et les meilleurs titres gaming à Madagascar.
        </motion.p>

        {/* Localisation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 flex items-center justify-center space-x-3 text-gray-400"
        >
          <FaMapMarkerAlt className="text-red-600 text-xl" />
          <span>Antananarivo, Madagascar</span>
        </motion.div>
      </div>

      {/* Intégration du composant Services */}
      <div className="relative z-10 mt-16">
        <Services />
      </div>
    </section>
  );
}
