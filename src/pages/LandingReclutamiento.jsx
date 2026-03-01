import React from "react";
import { UserPlus, Users, ClipboardCheck, Sparkles, ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import "./LandingReclutamiento.css";

const LandingReclutamiento = () => {
    const funciones = [
        {
            title: "Convocatorias y difusión",
            desc:
                "Publicamos convocatorias y comunicamos oportunidades para atraer perfiles alineados al voluntariado.",
            icon: Sparkles,
            tone: "mint",
        },
        {
            title: "Selección y evaluación",
            desc:
                "Revisamos postulaciones con criterios claros y evaluamos competencias para un ingreso ordenado.",
            icon: ClipboardCheck,
            tone: "teal",
        },
        {
            title: "Onboarding e integración",
            desc:
                "Acompañamos el ingreso para que los nuevos miembros se integren rápido y con claridad.",
            icon: Users,
            tone: "green",
        },
        {
            title: "Gestión de postulaciones",
            desc:
                "Centralizamos postulaciones, damos seguimiento y mantenemos la trazabilidad del proceso.",
            icon: UserPlus,
            tone: "slate",
        },
    ];

    const servicios = [
        {
            title: "Convocatoria activa",
            desc:
                "Publicación de la convocatoria, requisitos y canales oficiales de postulación.",
        },
        {
            title: "Evaluación de perfiles",
            desc:
                "Filtro inicial, entrevistas y evaluación por competencias según el área.",
        },
        {
            title: "Ingreso y bienvenida",
            desc:
                "Ruta de ingreso, inducción y acompañamiento para una integración efectiva.",
        },
    ];

    const pasos = [
        { title: "Postula", desc: "Completa tu registro y adjunta tu información." },
        { title: "Evaluación", desc: "Revisión y entrevista según el área." },
        { title: "Ingreso", desc: "Confirmación + onboarding e integración." },
    ];

    return (
        <main className="rec-page">
            {/* ================= HERO ================= */}
            <section className="rec-hero" aria-label="Hero">
                <div className="rec-hero__bg" />
                <div className="rec-hero__overlay" />

                <div className="rec-hero__content">
                    <div className="rec-hero__titleBox">
                        <h1 className="rec-hero__title">Área de Reclutamiento</h1>
                        <p className="rec-hero__subtitle">
                            Conectamos talento con propósito: un proceso claro, humano y organizado para sumar nuevos voluntarios.
                        </p>

                        <div className="rec-hero__actions">
                            <button className="rec-btn rec-btn--primary" type="button">
                                Quiero postular <ArrowRight size={16} />
                            </button>
                            <button className="rec-btn rec-btn--ghost" type="button">
                                Ver proceso
                            </button>
                        </div>
                    </div>
                </div>

                {/* barra de color */}
                <div className="rec-colorbar" />
            </section>

            {/* ================= FUNCIONES ================= */}
            <section className="rec-section rec-funciones" aria-label="Funciones">
                <div className="rec-container">
                    <div className="rec-funciones__head">
                        <h2 className="rec-h2">
                            ¿Qué hace el <span className="rec-h2__accent">Área de Reclutamiento</span>?
                        </h2>
                        <p className="rec-p">
                            Un flujo ordenado para atraer, evaluar e integrar nuevos miembros con transparencia.
                        </p>
                    </div>

                    <div className="rec-miniGrid">
                        {funciones.map((f) => {
                            const Icon = f.icon;
                            return (
                                <div key={f.title} className="rec-miniCard">
                                    <div className={`rec-miniCard__icon rec-miniCard__icon--${f.tone}`}>
                                        <Icon size={18} />
                                    </div>
                                    <div>
                                        <h3 className="rec-miniCard__title">{f.title}</h3>
                                        <p className="rec-miniCard__desc">{f.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= PROCESO ================= */}
            <section className="rec-section rec-proceso" aria-label="Proceso">
                <div className="rec-container">
                    <div className="rec-proceso__grid">
                        <div>
                            <h2 className="rec-h2">
                                Proceso de <span className="rec-h2__accent">postulación</span>
                            </h2>
                            <p className="rec-p">
                                Claro y rápido. Te avisamos en cada etapa para que siempre sepas en qué punto estás.
                            </p>

                            <div className="rec-steps">
                                {pasos.map((p, idx) => (
                                    <div className="rec-step" key={p.title}>
                                        <div className="rec-step__num">{idx + 1}</div>
                                        <div>
                                            <div className="rec-step__title">{p.title}</div>
                                            <div className="rec-step__desc">{p.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rec-proceso__panel">
                            <div className="rec-panel__badge">Convocatoria</div>
                            <div className="rec-panel__title">Abierta</div>
                            <div className="rec-panel__desc">
                                Completa tu postulación y elige el área de interés. Nuestro equipo te contactará para la evaluación.
                            </div>

                            <button className="rec-btn rec-btn--primary rec-panel__btn" type="button">
                                Postular ahora <ArrowRight size={16} />
                            </button>

                            <div className="rec-panel__note">
                                Tiempo estimado: 3–7 días (según disponibilidad y número de postulantes).
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SERVICIOS ================= */}
            <section className="rec-section rec-servicios" aria-label="Servicios">
                <div className="rec-container">
                    <h2 className="rec-h2 rec-h2--center">Servicios del Área</h2>
                    <p className="rec-p rec-p--center">
                        Acciones concretas para que el reclutamiento sea consistente y escalable.
                    </p>

                    <div className="rec-servicesGrid">
                        {servicios.map((s) => (
                            <article className="rec-serviceCard" key={s.title}>
                                <h3 className="rec-serviceCard__title">{s.title}</h3>
                                <p className="rec-serviceCard__desc">{s.desc}</p>

                                <button className="rec-btn rec-btn--outline rec-serviceCard__btn" type="button">
                                    Más información <ArrowRight size={16} />
                                </button>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default LandingReclutamiento;