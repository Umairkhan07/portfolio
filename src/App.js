import CatchUp from "./components/CatchUp";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <div className="w-full bg-[#2E3438]   ">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <CatchUp />
    </div>
  );
}

export default App;
