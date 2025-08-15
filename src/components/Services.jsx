import React from "react";
import { FaGamepad, FaTrophy, FaUsers } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaGamepad size={40} className="text-red-600" />,
      title: "Vente de Jeux",
      desc: "Les meilleurs titres aux meilleurs prix.",
    },
    {
      icon: <FaTrophy size={40} className="text-red-600" />,
      title: "Tournois e-Sport",
      desc: "Des compétitions épiques avec de grosses récompenses.",
    },
    {
      icon: <FaUsers size={40} className="text-red-600" />,
      title: "Communauté",
      desc: "Rejoignez des milliers de joueurs passionnés.",
    },
  ];

  return (
    <section id="services" className="bg-[#1a1a1a] text-white py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Nos Services</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-[#242424] p-6 rounded-lg text-center shadow-lg hover:shadow-red-600/40 transition"
          >
            <div className="mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
