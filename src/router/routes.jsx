import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import LandingCapacitaciones from "../pages/LandingCapacitaciones";
import LandingClima from "../pages/LandingClima";
import LandingControl from "../pages/LandingControl";
import LandingReclutamiento from "../pages/LandingReclutamiento";
import ActivitiesPage from "../pages/reclutamiento/ActivitiesPage";
import BasesPage from "../pages/reclutamiento/BasesPage";
import ProcessesPage from "../pages/reclutamiento/ProcessesPage";
import RequestsPage from "../pages/reclutamiento/RequestsPage";

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
      <Route path="/talento-humano/reclutamiento/procesos" element={<ProcessesPage/>} />
      <Route path="/talento-humano/reclutamiento/bases" element={<BasesPage/>} />
      <Route path="/talento-humano/reclutamiento/solicitudes" element={<RequestsPage/>} />
      <Route path="/talento-humano/reclutamiento/actividades" element={<ActivitiesPage/>} />
    </Routes>
  );
};

export default AppRoutes;
