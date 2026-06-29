import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import LandingCapacitaciones from "../pages/LandingCapacitaciones";
import LandingClima from "../pages/LandingClima";
import LandingControl from "../pages/LandingControl";
import LandingReclutamiento from "../pages/LandingReclutamiento";
import SembrandoSonrisas from "../pages/projects/sembrandoSonrisas";
import LandingComunidad from "../pages/LandingComunidad";
import Sanamente from "../pages/projects/sanamente";
import CuatroPatas from "../pages/projects/cuatroPatas";
import Poni from "../pages/projects/poni";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/talento-humano/capacitaciones" element={<LandingCapacitaciones />} />
        <Route path="/talento-humano/clima" element={<LandingClima />} />
        <Route path="/talento-humano/control" element={<LandingControl />} />
        <Route path="/talento-humano/reclutamiento" element={<LandingReclutamiento />} />
        <Route path="/proyectos/sembrando-sonrisas" element={<SembrandoSonrisas />} />
        <Route path="/proyectos/sanamente" element={<Sanamente />} />
        <Route path="/proyectos/cuatro-patas" element={<CuatroPatas />} />
        <Route path="/proyectos/poni" element={<Poni/>} />
        <Route path="/comunidad" element={<LandingComunidad />} />
      </Routes>
    </>
  );
};

export default AppRoutes;