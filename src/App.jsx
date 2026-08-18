import { Routes, Route } from "react-router-dom";
import IPv6AddressingDetails from "./pages/IPv6AddressingDetails";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Labs from "./components/sections/Labs";
import DHCPDetails from "./pages/DHCPDetails";
import LabDetails from "./pages/LabDetails";
import ACLDetails from "./pages/ACLDetails";
import IPv4SubnettingDetails from "./pages/IPv4SubnettingDetails";
import Certifications from "./components/sections/Certifications";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Labs />
      <Certifications />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route
  path="/labs/dhcp-network"
  element={<DHCPDetails />}
/>
<Route
  path="/labs/ipv4-subnetting"
  element={<IPv4SubnettingDetails />}
/>
      <Route path="/" element={<Home />} />
      <Route path="/labs/vlan-routing" element={<LabDetails />} />
      <Route path="/labs/acl-security" element={<ACLDetails />} />
    </Routes>
  );
}

export default App;