import { Image } from "lucide-react";
import Footer from "../../components/Footer";
import { DetailHero, PrivateNotice } from "./Shared";
import "./ReclutamientoPages.css";

const activities = [
    { title: "Capacitación de entrevistadores", description: "Espacio de preparación para aplicar criterios de evaluación consistentes.", tag: "FORMACIÓN" },
    { title: "Jornada de entrevistas", description: "Momentos de encuentro con los postulantes de cada convocatoria.", tag: "SELECCIÓN" },
    { title: "Presentación de convocatorias", description: "Difusión de oportunidades para integrarse a PSM y sus proyectos.", tag: "DIFUSIÓN" },
    { title: "Trabajo de planificación", description: "Organización de cronogramas, vacantes y documentos de gestión.", tag: "EQUIPO" },
];

const ActivitiesPage = () => <main className="rec-detailPage"><DetailHero pageKey="activities" /><section className="rec-detailSection" aria-labelledby="rec-activities-title"><div className="rec-detailContainer"><PrivateNotice /><div className="rec-detailHeading rec-detailHeading--center"><p>GALERÍA DEL ÁREA</p><h2 id="rec-activities-title">Momentos que construyen talento</h2></div><div className="rec-activityGrid">{activities.map((item, index) => <article className={`rec-activityCard rec-activityCard--${index + 1}`} key={item.title}><div className="rec-activityCard__visual"><Image size={38} /><span>Espacio para foto o flyer</span></div><p>{item.tag}</p><h3>{item.title}</h3><span>{item.description}</span></article>)}</div></div></section><Footer /></main>;

export default ActivitiesPage;
