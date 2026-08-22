import { ArrowRight, BriefcaseBusiness, FileCheck2, FileText } from "lucide-react";
import Footer from "../../components/Footer";
import { DetailHero, PrivateNotice } from "./Shared";
import "./ReclutamientoPages.css";

const bases = [
    { title: "Convocatoria general", description: "Criterios, etapas y condiciones para las convocatorias abiertas de la organización.", icon: FileText },
    { title: "Convocatorias de proyectos", description: "Información de selección para los equipos de los proyectos internos de PSM.", icon: BriefcaseBusiness },
    { title: "Referidos y cambio interno", description: "Lineamientos para postulaciones referidas y movilidad entre gerencias.", icon: FileCheck2 },
];

const BasesPage = () => <main className="rec-detailPage"><DetailHero pageKey="bases" /><section className="rec-detailSection" aria-labelledby="rec-bases-title"><div className="rec-detailContainer"><PrivateNotice /><div className="rec-detailHeading"><p>DOCUMENTOS DE APOYO</p><h2 id="rec-bases-title">Bases disponibles por modalidad</h2></div><div className="rec-baseGrid">{bases.map((item) => { const Icon = item.icon; return <article className="rec-baseCard" key={item.title}><div><Icon size={25} /><span>BASES DE SELECCIÓN</span></div><h3>{item.title}</h3><p>{item.description}</p><button type="button" disabled>Próximamente <ArrowRight size={17} /></button></article>; })}</div></div></section><Footer /></main>;

export default BasesPage;
