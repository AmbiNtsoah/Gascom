import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaGamepad, FaTrophy, FaUsers } from "react-icons/fa";

export default function Intro() {
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
      id="intro"
      className="relative bg-[#0D0D0D] text-white py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] opacity-90"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-[#E50914] drop-shadow-[0_0_20px_rgba(229,9,20,0.8)]"
        >
          Bienvenue chez GasCom e-Sport
        </motion.h1>

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

      {/* Services */}
      <div className="relative z-10 mt-16 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.08, rotateY: 5 }}
            className="bg-[#1A1A1A] p-8 rounded-2xl text-center shadow-lg border border-red-900/30 hover:border-red-500/60 hover:shadow-[0_0_25px_rgba(255,0,0,0.7)] transition-all duration-300 cursor-pointer"
          >
            <div className="mb-5 flex justify-center">{s.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-white">
              {s.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
