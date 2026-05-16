import { useMemo, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    ClipboardCheck,
    FileText,
    Grid2X2,
    LineChart,
    PlusCircle,
    RefreshCcw,
    Star,
    SunMedium,
} from "lucide-react";
import Footer from "../components/Footer";
import "./LandingControl.css";
import areaImage from "../assets/area_control.png";

const pillars = [
    {
        number: "01",
        title: "Control",
        description: "Supervisión de asistencia, participación y licencias.",
        tone: "terracotta",
        icon: Grid2X2,
    },
    {
        number: "02",
        title: "Evaluación",
        description: "Análisis de desempeño, habilidades y resultados.",
        tone: "coral",
        icon: LineChart,
    },
    {
        number: "03",
        title: "Innovación",
        description: "Mejora de metodologías para agilizar procesos.",
        tone: "cyan",
        icon: SunMedium,
    },
];

const processSteps = [
    {
        step: "Paso 01",
        title: "Monitoreo",
        description:
            "Supervisamos el cumplimiento, asistencia y participación en actividades y asambleas.",
        tone: "red",
        icon: PlusCircle,
    },
    {
        step: "Paso 02",
        title: "Registro y control",
        description:
            "Organizamos licencias, justificaciones y documentación para mantener información confiable.",
        tone: "orange",
        icon: FileText,
    },
    {
        step: "Paso 03",
        title: "Evaluación",
        description:
            "Analizamos el desempeño en criterios de comunicación, responsabilidad y trabajo colaborativo.",
        tone: "cyan",
        icon: LineChart,
    },
    {
        step: "Paso 04",
        title: "Mejora continua",
        description:
            "Generamos retroalimentación e impulsamos procesos para optimizar la articulación con otras unidades.",
        tone: "green",
        icon: RefreshCcw,
    },
];

const services = [
    {
        title: "Sistema de evaluación",
        description:
            "Consulta y seguimiento de resultados de evaluación para una supervisión más clara.",
        tone: "coral",
        icon: CheckCircle2,
    },
    {
        title: "Actualización de información",
        description:
            "Solicitud de cambios de datos para mantener la base de datos al día.",
        tone: "cyan",
        icon: SunMedium,
    },
    {
        title: "Petición de solicitudes",
        description:
            "Licencias, renuncias, honorarios y otros trámites de forma más ordenada y accesible.",
        tone: "terracotta",
        icon: ClipboardCheck,
    },
];

const SectionHeader = ({ eyebrow, title, description, align = "left", light = false, titleId }) => (
    <div className={`ctrl-sectionHeader ctrl-sectionHeader--${align} ${light ? "ctrl-sectionHeader--light" : ""}`}>
        {eyebrow && <p className="ctrl-eyebrow">{eyebrow}</p>}
        <h2 className="ctrl-sectionTitle" id={titleId}>
            {title}
        </h2>
        {description && <p className="ctrl-sectionText">{description}</p>}
    </div>
);

const PillarCard = ({ pillar }) => {
    const Icon = pillar.icon;

    return (
        <article className={`ctrl-pillarCard ctrl-pillarCard--${pillar.tone}`}>
            <span className="ctrl-pillarCard__number">{pillar.number}</span>
            <h3>{pillar.title}</h3>
            <div className="ctrl-pillarCard__icon" aria-hidden="true">
                <Icon size={24} strokeWidth={2.2} />
            </div>
            <span className="ctrl-pillarCard__line" />
            <p>{pillar.description}</p>
        </article>
    );
};

const ProcessStep = ({ item }) => {
    const Icon = item.icon;

    return (
        <article className={`ctrl-processStep ctrl-processStep--${item.tone}`}>
            <div className="ctrl-processStep__marker" aria-hidden="true">
                <Icon size={20} strokeWidth={2.4} />
            </div>
            <div className="ctrl-processStep__card">
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <i aria-hidden="true" />
                <p>{item.description}</p>
            </div>
        </article>
    );
};

const ServiceCard = ({ service, position }) => {
    const Icon = service.icon;
    const isActive = position === "active";

    return (
        <article className={`ctrl-serviceCard ctrl-serviceCard--${position} ctrl-serviceCard--${service.tone}`}>
            {isActive && (
                <span className="ctrl-serviceCard__badge">
                    <Star size={14} fill="currentColor" /> DESTACADO
                </span>
            )}
            <div className="ctrl-serviceCard__icon" aria-hidden="true">
                <Icon size={24} strokeWidth={2.2} />
            </div>
            <h3>{service.title}</h3>
            <span className="ctrl-serviceCard__line" />
            <p>{service.description}</p>
            {isActive && (
                <button className="ctrl-serviceCard__link" type="button">
                    Ver más <ArrowRight size={17} />
                </button>
            )}
        </article>
    );
};

const LandingControl = () => {
    const [activeService, setActiveService] = useState(1);

    const visibleServices = useMemo(() => {
        const previous = (activeService - 1 + services.length) % services.length;
        const next = (activeService + 1) % services.length;

        return [
            { service: services[previous], position: "side" },
            { service: services[activeService], position: "active" },
            { service: services[next], position: "side" },
        ];
    }, [activeService]);

    const goToPreviousService = () => {
        setActiveService((current) => (current - 1 + services.length) % services.length);
    };

    const goToNextService = () => {
        setActiveService((current) => (current + 1) % services.length);
    };

    return (
        <main className="ctrl-page">
                {/*Seccion hero*/}
            <section className="ctrl-hero" id="inicio" aria-labelledby="ctrl-hero-title">
                <div className="ctrl-hero__image" aria-hidden="true" />
                <div className="ctrl-hero__overlay" aria-hidden="true" />
                <div className="ctrl-container ctrl-hero__content">
                    <h1 id="ctrl-hero-title">Control, Evaluación e Innovación</h1>
                    <p>
                        Supervisamos, analizamos y mejoramos el desempeño organizacional para fortalecer
                        la gestión del talento en Proyectos San Marcos.
                    </p>
                    <div className="ctrl-hero__actions" aria-label="Acciones principales">
                        <a className="ctrl-btn ctrl-btn--primary" href="#area">
                            Conoce el área
                        </a>
                        <a className="ctrl-btn ctrl-btn--ghost" href="#servicios">
                            Ver servicios <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </section>

            {/*Seccion intro-que*/}
            <section className="ctrl-section ctrl-area" id="area" aria-labelledby="ctrl-area-title">
                <div className="ctrl-container ctrl-area__grid">
                    <div className="ctrl-area__content">
                        <SectionHeader
                            titleId="ctrl-area-title"
                            eyebrow="¿QUÉ HACEMOS?"
                            title="¿Qué es el área de Control, Evaluación e Innovación?"
                            description="El área realiza el seguimiento del desempeño de los miembros, organiza información clave para la supervisión interna y promueve mejoras que fortalezcan la gestión de Talento Humano."
                        />
                    </div>
                    <figure className="ctrl-area__media">
                        <img
                            src={areaImage}
                            alt="Equipo del área de Control, Evaluación e Innovación revisando información de gestión"
                            loading="lazy"
                        />
                    </figure>
                </div>
            </section>

            <section className="ctrl-section ctrl-pillars" id="estructura" aria-labelledby="ctrl-pillars-title">
                <div className="ctrl-container ctrl-pillars__grid">
                    <div className="ctrl-pillars__cards">
                        {pillars.map((pillar) => (
                            <PillarCard key={pillar.title} pillar={pillar} />
                        ))}
                    </div>
                    <SectionHeader
                        titleId="ctrl-pillars-title"
                        eyebrow="ESTRUCTURA DEL ÁREA"
                        title="Nuestros pilares de trabajo"
                        description="Integramos control, evaluación e innovación para fortalecer la gestión y generar una supervisión más clara, útil y estratégica."
                        light
                    />
                </div>
            </section>

            <section className="ctrl-section ctrl-process" id="proceso" aria-labelledby="ctrl-process-title">
                <div className="ctrl-container">
                    <SectionHeader
                        titleId="ctrl-process-title"
                        eyebrow="NUESTRO PROCESO"
                        title="Cómo operamos"
                        description="Un proceso continuo de seguimiento, organización, evaluación y mejora para brindar información útil y fortalecer la gestión interna."
                        align="center"
                    />
                    <div className="ctrl-process__timeline">
                        {processSteps.map((item) => (
                            <ProcessStep key={item.title} item={item} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="ctrl-section ctrl-services" id="servicios" aria-labelledby="ctrl-services-title">
                <div className="ctrl-container">
                    <SectionHeader
                        titleId="ctrl-services-title"
                        eyebrow="IMPLEMENTACIONES"
                        title="Servicios del área"
                        description="Impulsamos soluciones orientadas a mejorar la experiencia de los miembros y hacer más ágiles los procesos internos."
                        align="center"
                    />

                    <div className="ctrl-services__stage">
                        <button
                            className="ctrl-carouselBtn ctrl-carouselBtn--prev"
                            type="button"
                            onClick={goToPreviousService}
                            aria-label="Ver servicio anterior"
                        >
                            <ArrowLeft size={23} />
                        </button>

                        <div className="ctrl-services__track" aria-live="polite">
                            {visibleServices.map(({ service, position }) => (
                                <ServiceCard key={`${service.title}-${position}`} service={service} position={position} />
                            ))}
                        </div>

                        <button
                            className="ctrl-carouselBtn ctrl-carouselBtn--next"
                            type="button"
                            onClick={goToNextService}
                            aria-label="Ver siguiente servicio"
                        >
                            <ArrowRight size={23} />
                        </button>
                    </div>

                    <div className="ctrl-services__dots" aria-label="Indicador de servicios">
                        {services.map((service, index) => (
                            <button
                                key={service.title}
                                type="button"
                                className={index === activeService ? "is-active" : ""}
                                onClick={() => setActiveService(index)}
                                aria-label={`Mostrar ${service.title}`}
                                aria-current={index === activeService ? "true" : undefined}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default LandingControl;
