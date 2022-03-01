import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import bgImage from "./Components/images/bg-image.png";
import Header from "./Components/Header";
import SecondBanner from "./Components/SecondBanner";
import AgendaSection from "./Components/AgendaSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="App bg-cover"
    >
      <div className="px-12">
        <Navbar />
        <Header />
      </div>

      <div className="bg-[#0C0932] w-full h-screen">
        <SecondBanner />
      </div>

      <AgendaSection />
    </div>
  );
}

export default App;
