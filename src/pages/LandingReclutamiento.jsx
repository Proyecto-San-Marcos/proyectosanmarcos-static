import {
    ArrowRight,
    ClipboardCheck,
    FileCheck2,
    FileText,
    Megaphone,
    Network,
    UserRoundCheck,
    UsersRound,
} from "lucide-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./LandingReclutamiento.css";

const responsibilities = [
    {
        number: "01",
        title: "Gestión de requerimientos",
        description:
            "Recibimos y aprobamos las solicitudes de los distintos procesos de selección, respetando el cronograma de convocatoria.",
        icon: ClipboardCheck,
        tone: "berry",
    },
    {
        number: "02",
        title: "Convocatorias externas",
        description:
            "Gestionamos la convocatoria masiva y la convocatoria de referidos según los requerimientos y necesidades de la organización.",
        icon: Megaphone,
        tone: "pink",
    },
    {
        number: "03",
        title: "Cambio interno",
        description:
            "Coordinamos con las gerencias la selección de miembros que desean cambiar de área y la disponibilidad de vacantes.",
        icon: Network,
        tone: "lilac",
    },
    {
        number: "04",
        title: "Gestión documental",
        description:
            "Elaboramos y actualizamos el MOF, los criterios de evaluación, el manual de competencias y otros documentos de gestión.",
        icon: FileText,
        tone: "plum",
    },
];

const processSteps = [
    {
        step: "Paso 01",
        title: "Requerimiento",
        description:
            "Recibimos la solicitud del área y validamos las necesidades del proceso de selección.",
        icon: ClipboardCheck,
        tone: "berry",
    },
    {
        step: "Paso 02",
        title: "Planificación",
        description:
            "Organizamos la convocatoria de acuerdo con el cronograma y las vacantes disponibles.",
        icon: FileCheck2,
        tone: "pink",
    },
    {
        step: "Paso 03",
        title: "Reclutamiento y selección",
        description:
            "Desarrollamos el proceso correspondiente para incorporar o movilizar talento dentro de la organización.",
        icon: UserRoundCheck,
        tone: "lilac",
    },
    {
        step: "Paso 04",
        title: "Actualización",
        description:
            "Mantenemos actualizados los documentos que orientan y respaldan cada proceso de selección.",
        icon: FileText,
        tone: "plum",
    },
];

const recruitmentModes = [
    {
        eyebrow: "ALCANCE EXTERNO",
        title: "Convocatoria masiva",
        description:
            "Proceso dirigido a atraer nuevos perfiles para cubrir los requerimientos de las gerencias y los futuros equipos de proyecto.",
        icon: UsersRound,
    },
    {
        eyebrow: "TALENTO REFERIDO",
        title: "Convocatoria de referidos",
        description:
            "Modalidad externa que incorpora candidatos referidos, manteniendo los criterios y necesidades definidos por la organización.",
        icon: Megaphone,
    },
    {
        eyebrow: "MOVILIDAD INTERNA",
        title: "Cambio interno",
        description:
            "Proceso para miembros que cambian de gerencia, coordinado según las vacantes disponibles en cada área.",
        icon: Network,
    },
];

const resources = [
    { title: "Procesos", description: "Conoce el recorrido de cada convocatoria.", href: "/talento-humano/reclutamiento/procesos", icon: ClipboardCheck },
    { title: "Bases", description: "Revisa los lineamientos de selección.", href: "/talento-humano/reclutamiento/bases", icon: FileCheck2 },
    { title: "Solicitudes", description: "Canal interno para requerimientos de equipos.", href: "/talento-humano/reclutamiento/solicitudes", icon: FileText },
    { title: "Actividades", description: "Explora los momentos del área.", href: "/talento-humano/reclutamiento/actividades", icon: UsersRound },
];

const SectionHeader = ({ eyebrow, title, description, align = "left", light = false, titleId }) => (
    <div className={`rec-sectionHeader rec-sectionHeader--${align} ${light ? "rec-sectionHeader--light" : ""}`}>
        {eyebrow && <p className="rec-eyebrow">{eyebrow}</p>}
        <h2 className="rec-sectionTitle" id={titleId}>
            {title}
        </h2>
        {description && <p className="rec-sectionText">{description}</p>}
    </div>
);

const ResponsibilityCard = ({ item }) => {
    const Icon = item.icon;

    return (
        <article className={`rec-responsibilityCard rec-responsibilityCard--${item.tone}`}>
            <span className="rec-responsibilityCard__number">{item.number}</span>
            <div className="rec-responsibilityCard__icon" aria-hidden="true">
                <Icon size={23} strokeWidth={2.2} />
            </div>
            <h3>{item.title}</h3>
            <span className="rec-responsibilityCard__line" aria-hidden="true" />
            <p>{item.description}</p>
        </article>
    );
};

const ProcessStep = ({ item }) => {
    const Icon = item.icon;

    return (
        <article className={`rec-processStep rec-processStep--${item.tone}`}>
            <div className="rec-processStep__marker" aria-hidden="true">
                <Icon size={20} strokeWidth={2.3} />
            </div>
            <div className="rec-processStep__card">
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <i aria-hidden="true" />
                <p>{item.description}</p>
            </div>
        </article>
    );
};

const RecruitmentModeCard = ({ item }) => {
    const Icon = item.icon;

    return (
        <article className="rec-modeCard">
            <div className="rec-modeCard__icon" aria-hidden="true">
                <Icon size={26} strokeWidth={2.1} />
            </div>
            <span>{item.eyebrow}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </article>
    );
};

SectionHeader.propTypes = {
    eyebrow: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    align: PropTypes.oneOf(["left", "center"]),
    light: PropTypes.bool,
    titleId: PropTypes.string.isRequired,
};

ResponsibilityCard.propTypes = {
    item: PropTypes.shape({
        number: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
        tone: PropTypes.string.isRequired,
    }).isRequired,
};

ProcessStep.propTypes = {
    item: PropTypes.shape({
        step: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
        tone: PropTypes.string.isRequired,
    }).isRequired,
};

RecruitmentModeCard.propTypes = {
    item: PropTypes.shape({
        eyebrow: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
    }).isRequired,
};

const LandingReclutamiento = () => (
    <main className="rec-page">
        <section className="rec-hero" id="inicio" aria-labelledby="rec-hero-title">
            <div className="rec-hero__image" aria-hidden="true" />
            <div className="rec-hero__overlay" aria-hidden="true" />
            <div className="rec-container rec-hero__content">
                <p className="rec-hero__eyebrow">TALENTO HUMANO</p>
                <h1 id="rec-hero-title">Reclutamiento, Selección y Planificación del Talento Humano</h1>
                <p>
                    Gestionamos procesos de selección para incorporar talento a las gerencias y a los futuros
                    equipos de proyecto de Proyectos San Marcos.
                </p>
                <div className="rec-hero__actions" aria-label="Acciones principales">
                    <a className="rec-btn rec-btn--primary" href="#mision">
                        Conoce el área
                    </a>
                    <a className="rec-btn rec-btn--ghost" href="#funciones">
                        Ver funciones <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>

        <section className="rec-section rec-mission" id="mision" aria-labelledby="rec-mission-title">
            <div className="rec-container rec-mission__grid">
                <div className="rec-mission__content">
                    <SectionHeader
                        titleId="rec-mission-title"
                        eyebrow="NUESTRA MISIÓN"
                        title="Conectamos las necesidades de la organización con el talento adecuado"
                        description="Somos el área encargada de gestionar los procesos de selección de miembros para los futuros equipos de proyecto e incorporar miembros a las gerencias dentro de Proyectos San Marcos."
                    />
                </div>

                <div className="rec-mission__media" aria-label="Espacio reservado para una imagen del área">
                    <div className="rec-mission__mediaGlow" aria-hidden="true" />
                    <div className="rec-mission__mediaIcon" aria-hidden="true">
                        <UsersRound size={46} strokeWidth={1.7} />
                    </div>
                    <span>Imagen del equipo</span>
                </div>
            </div>
        </section>

        <section className="rec-section rec-responsibilities" id="funciones" aria-labelledby="rec-functions-title">
            <div className="rec-container rec-responsibilities__grid">
                <SectionHeader
                    titleId="rec-functions-title"
                    eyebrow="FUNCIONES DEL ÁREA"
                    title="Responsabilidades que sostienen cada selección"
                    description="Coordinamos los requerimientos, las convocatorias y la documentación necesaria para desarrollar procesos de reclutamiento y selección de manera adecuada."
                    light
                />
                <div className="rec-responsibilities__cards">
                    {responsibilities.map((item) => (
                        <ResponsibilityCard key={item.number} item={item} />
                    ))}
                </div>
            </div>
        </section>

        <section className="rec-section rec-process" id="proceso" aria-labelledby="rec-process-title">
            <div className="rec-container">
                <SectionHeader
                    titleId="rec-process-title"
                    eyebrow="NUESTRO PROCESO"
                    title="Cómo organizamos la selección"
                    description="Un recorrido que parte de las necesidades de cada gerencia y mantiene alineados el cronograma, las vacantes y los documentos de gestión."
                    align="center"
                />
                <div className="rec-process__timeline">
                    {processSteps.map((item) => (
                        <ProcessStep key={item.step} item={item} />
                    ))}
                </div>
            </div>
        </section>

        <section className="rec-section rec-modes" id="modalidades" aria-labelledby="rec-modes-title">
            <div className="rec-container">
                <SectionHeader
                    titleId="rec-modes-title"
                    eyebrow="MODALIDADES"
                    title="Convocatorias que gestionamos"
                    description="Atendemos tanto la incorporación de nuevos miembros como la movilidad del talento dentro de Proyectos San Marcos."
                    align="center"
                />
                <div className="rec-modes__grid">
                    {recruitmentModes.map((item) => (
                        <RecruitmentModeCard key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </section>

        <section className="rec-section rec-resources" aria-labelledby="rec-resources-title">
            <div className="rec-container">
                <SectionHeader
                    titleId="rec-resources-title"
                    eyebrow="RECURSOS DEL ÁREA"
                    title="Encuentra la información que necesitas"
                    description="Explora los espacios de consulta del área de Reclutamiento, Selección y Planificación del Talento Humano."
                    align="center"
                />
                <div className="rec-resources__grid">
                    {resources.map((resource) => {
                        const Icon = resource.icon;
                        return (
                            <Link className="rec-resourceCard" to={resource.href} key={resource.title}>
                                <Icon size={25} aria-hidden="true" />
                                <h3>{resource.title}</h3>
                                <p>{resource.description}</p>
                                <span>Explorar <ArrowRight size={16} /></span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>

        <Footer />
    </main>
);

export default LandingReclutamiento;
