import { useState } from "react";
import Controller from "./assets/controller.png";
import LandingPage from "./pages/LandingPage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LandingPage />
      <div>
        <a href="https://www.github.com/AmbiNtsoah" target="_blank">
          <img
            src={Controller}
            alt="PS5_Controller"
            className=" hover:to-blue-500"
            width="100px"
          />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
