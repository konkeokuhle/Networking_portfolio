import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Labs from "./components/sections/Labs";
import LabDetails from "./pages/LabDetails";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Labs />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/labs/vlan-routing" element={<LabDetails />} />
    </Routes>
  );
}

export default App;