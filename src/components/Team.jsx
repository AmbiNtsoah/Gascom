import React from "react";

const team = [
  {
    name: "Team Phoenix",
    image: "https://i.imgur.com/ssZLK4N.jpeg",
    role: "Compétition FPS",
  },
  {
    name: "Team Shadow",
    image: "https://i.imgur.com/12OmkQy.jpeg",
    role: "MOBA Champions",
  },
  {
    name: "Team Titans",
    image: "https://i.imgur.com/BkA8J0R.jpeg",
    role: "Battle Royale Pros",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-[#242424] text-white py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#E50914] drop-shadow-[0_0_15px_rgba(229,9,20,0.8)]">
        Nos Équipes
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {team.map((member, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition transform cursor-pointer border border-red-700/40 hover:border-red-500/60"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
