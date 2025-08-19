import React from "react";
import { FaGamepad, FaTrophy, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: (
        <FaGamepad
          size={40}
          className="text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
        />
      ),
      title: "Vente de Jeux",
      desc: "Découvrez les meilleurs titres aux meilleurs prix, adaptés à tous les gamers.",
    },
    {
      icon: (
        <FaTrophy
          size={40}
          className="text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
        />
      ),
      title: "Tournois e-Sport",
      desc: "Participez à des compétitions intenses avec des récompenses prestigieuses.",
    },
    {
      icon: (
        <FaUsers
          size={40}
          className="text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
        />
      ),
      title: "Communauté",
      desc: "Rejoignez une communauté passionnée et grandissante de joueurs à Madagascar.",
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-[#0D0D0D] text-white py-20 overflow-hidden"
    >
      {/* Glow rouge en arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] opacity-95"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Titre animé */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-center text-[#E50914] drop-shadow-[0_0_20px_rgba(229,9,20,0.8)] mb-14"
        >
          🚀 Nos Services
        </motion.h2>

        {/* Grille des services */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.08, rotateY: 5 }}
              className="bg-[#1A1A1A] p-8 rounded-2xl text-center shadow-lg border border-red-900/30 hover:border-red-500/60 hover:shadow-[0_0_25px_rgba(255,0,0,0.7)] transition-all duration-300"
            >
              <div className="mb-5 flex justify-center">{s.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {s.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
