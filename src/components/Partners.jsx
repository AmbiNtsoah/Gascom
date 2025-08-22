import React from "react";

const partners = [
  {
    name: "Orange Madagascar",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Orange_logo.svg/1200px-Orange_logo.svg.png",
  },
  {
    name: "Red Bull",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Red_Bull.svg",
  },
  {
    name: "Twitch",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Twitch_logo.svg",
  },
  {
    name: "SteelSeries",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/SteelSeries_Logo.svg",
  },
];

export default function Partners() {
  return (
    <section className="bg-[#0D0D0D] py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#E50914] mb-12 drop-shadow-[0_0_15px_rgba(229,9,20,0.8)]">
        Nos Partenaires
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
        {partners.map((p, i) => (
          <div
            key={i}
            className="p-4 bg-[#1A1A1A] rounded-xl shadow-lg border border-orange-700/40 hover:border-orange-500/60 hover:shadow-[0_0_20px_rgba(255,102,0,0.7)] transition-all duration-300 cursor-pointer"
          >
            <img
              src={p.logo}
              alt={p.name}
              className="mx-auto h-16 object-contain"
            />
            <p className="mt-3 text-white font-semibold">{p.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
