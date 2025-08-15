import React, { useEffect, useState } from "react";

const items = [
  {
    id: 1,
    title: "League of Legends",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/20590/header.jpg",
  },
  {
    id: 2,
    title: "Counter-Strike 2",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
  },
  {
    id: 3,
    title: "Valorant",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/750/header.jpg",
  },
  {
    id: 4,
    title: "FIFA 24",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/735/header.jpg",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Défilement automatique toutes les 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#242424] py-8">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {items.map((item) => (
          <div key={item.id} className="min-w-full flex justify-center">
            <div className="relative group w-[300px] h-[180px] rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-110">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-3 text-center text-white">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
