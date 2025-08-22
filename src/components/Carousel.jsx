import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

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
  {
    id: 5,
    title: "PUBG",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg",
  },
  {
    id: 6,
    title: "Call of Duty",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg",
  },
  {
    id: 7,
    title: "Dota 2",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg",
  },
  {
    id: 8,
    title: "Apex Legends",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg",
  },
];

export default function Carousel() {
  const swiperRef = useRef(null);

  return (
    <section
      id="jeux"
      className="relative bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] py-16"
      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay.start()}
    >
      {/* titre du carrousel */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#E50914] mb-12 drop-shadow-[0_0_15px_rgba(229,9,20,0.8)]">
        🎮 Jeux Populaires
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={25}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }, // slides par taille d'écran
          1280: { slidesPerView: 4 },
        }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="max-w-7xl mx-auto px-6"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="relative group w-full h-[220px] rounded-xl overflow-hidden shadow-lg 
                         border border-red-700/40 
                         transform transition duration-500 hover:scale-110 hover:rotate-1
                         hover:shadow-[0_0_30px_rgba(255,0,0,0.7)] cursor-pointer"
            >
              {/* image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* overlay + titre centré */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                           opacity-90 group-hover:opacity-100 transition duration-500 flex flex-col justify-end"
              >
                <h3 className="text-lg md:text-xl font-bold text-center text-white mb-4 group-hover:text-[#E50914] transition">
                  {item.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
