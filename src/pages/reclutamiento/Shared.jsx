import { ArrowLeft, UsersRound } from "lucide-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const pageInfo = {
    processes: { eyebrow: "PROCESOS DEL ÁREA", title: "Conoce cómo llevamos a cabo una convocatoria", description: "Cada proceso parte de una necesidad real de la organización y se organiza de manera clara, ordenada y alineada a los requerimientos de cada equipo." },
    bases: { eyebrow: "BASES DE CONVOCATORIA", title: "Información clara para cada proceso de selección", description: "Reunimos los criterios y lineamientos que orientan la postulación y evaluación en las convocatorias de Proyectos San Marcos." },
    requests: { eyebrow: "SOLICITUDES INTERNAS", title: "Solicita una convocatoria para tu equipo", description: "Jefaturas, cojefaturas y direcciones de proyecto podrán comunicar aquí sus requerimientos de talento." },
    activities: { eyebrow: "ACTIVIDADES INTERNAS", title: "El equipo detrás de cada convocatoria", description: "Un espacio para compartir los momentos, aprendizajes y esfuerzos que acompañan el trabajo de Reclutamiento." },
};

const DetailHero = ({ pageKey }) => {
    const info = pageInfo[pageKey];

    return <section className="rec-detailHero" aria-labelledby={`rec-${pageKey}-title`}><div className="rec-detailHero__shape rec-detailHero__shape--one" aria-hidden="true" /><div className="rec-detailHero__shape rec-detailHero__shape--two" aria-hidden="true" /><div className="rec-detailContainer rec-detailHero__content"><Link className="rec-detailBack" to="/talento-humano/reclutamiento"><ArrowLeft size={17} /> Volver a Reclutamiento</Link><p className="rec-detailEyebrow">{info.eyebrow}</p><h1 id={`rec-${pageKey}-title`}>{info.title}</h1><p>{info.description}</p></div></section>;
};

const PrivateNotice = () => <aside className="rec-privateNotice" aria-label="Acceso interno de PSM"><UsersRound size={22} aria-hidden="true" /><div><strong>Espacio interno de PSM</strong><p>Esta sección se habilitará para miembros que hayan iniciado sesión cuando se implemente el sistema de acceso.</p></div></aside>;

DetailHero.propTypes = { pageKey: PropTypes.oneOf(["processes", "bases", "requests", "activities"]).isRequired };

export { DetailHero, PrivateNotice };
