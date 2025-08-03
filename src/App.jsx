import Controller from "./assets/controller.png";
import LandingPage from "./pages/LandingPage";
import "./App.css";

function App() {
  return (
    <>
      <LandingPage />
      <div>
        <a href="https://www.github.com/AmbiNtsoah" target="_blank">
          <img
            src={Controller}
            alt="PS5_Controller"
            width="100px"
            className="hover:bg-red-800"
          />
        </a>
      </div>
    </>
  );
}

export default App;
