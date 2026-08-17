import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import SectionHeader from "../components/landingControl/SectionHeader";
import PillarCard from "../components/landingControl/PillarCard";
import ProcessStep from "../components/landingControl/ProcessStep";
import ServiceCard from "../components/landingControl/ServiceCard";
import { pillars, processSteps, services } from "../components/landingControl/data";
import "./LandingControl.css";
import areaImage from "../assets/area_control.png";

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
