import Navigation from "../components/Navigation";
import Controller from "../assets/controller.png";

function LandingPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#111] text-white flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-3xl text-center p-6 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl">
          {/* Titre principal */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Gascom <span className="text-red-600">E-Sport</span>
          </h1>

          {/* Slogan */}
          <p className="text-base sm:text-lg md:text-2xl font-medium text-gray-300 mb-8">
            La référence en jeux vidéo
          </p>

          {/* Bouton d'action */}
          <a
            href="#"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition duration-300 mb-10"
          >
            Découvrir nos événements
          </a>

          {/* Image + lien GitHub */}
          <div className="flex justify-center">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src={Controller}
                alt="PS5 Controller"
                className="w-20 sm:w-24 md:w-28 transition duration-300 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_red]"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
