import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import LandingCapacitaciones from "../pages/LandingCapacitaciones";
import LandingClima from "../pages/LandingClima";
import LandingControl from "../pages/LandingControl";
import LandingReclutamiento from "../pages/LandingReclutamiento";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<div>404 Not Found</div>} />
      <Route path="/talento-humano/capacitaciones" element={<LandingCapacitaciones/>} />
      <Route path="/talento-humano/clima" element={<LandingClima/>} />
      <Route path="/talento-humano/control" element={<LandingControl/>} />
      <Route path="/talento-humano/reclutamiento" element={<LandingReclutamiento/>} />
    </Routes>
  );
};

export default AppRoutes;
