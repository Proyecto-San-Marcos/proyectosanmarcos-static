import React from "react";
import { ClipboardList, RefreshCcw, ClipboardCheck, ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import "./LandingControl.css";

const LandingControl = () => {
    const funciones = [
        {
            title: "Petición de solicitudes",
            desc:
                "Gestionamos el registro y seguimiento de solicitudes para garantizar orden, trazabilidad y respuesta oportuna.",
            icon: ClipboardList,
            tone: "coral",
        },
        {
            title: "Sistema de evaluación",
            desc:
                "Medimos resultados con criterios claros, registramos avances y proponemos mejoras basadas en evidencia.",
            icon: ClipboardCheck,
            tone: "slate",
        },
        {
            title: "Actualización de información",
            desc:
                "Mantenemos la información actualizada y estructurada para apoyar decisiones rápidas y confiables.",
            icon: RefreshCcw,
            tone: "lav",
        },
    ];

    const servicios = [
        {
            title: "Petición de solicitudes",
            desc:
                "Canal para centralizar solicitudes del área y asegurar priorización y control.",
            img:
                "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-lading//control-requests.png",
        },
        {
            title: "Actualización de información",
            desc:
                "Mantenimiento periódico de datos y contenidos para evitar desorden o duplicidad.",
            img:
                "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-lading//control-update.png",
        },
        {
            title: "Sistema de evaluación",
            desc:
                "Herramientas y criterios para evaluar desempeño, impacto y cumplimiento de objetivos.",
            img:
                "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-lading//control-eval.png",
        },
    ];

    return (
        <main className="ctrl-page">
            {/* ================= HERO ================= */}
            <section className="ctrl-hero" aria-label="Hero">
                <div className="ctrl-hero__bg" />
                <div className="ctrl-hero__overlay" />

                <div className="ctrl-hero__content">
                    <div className="ctrl-hero__titleBox">
                        <h1 className="ctrl-hero__title">
                            Área de Control, <br />
                            Evaluación e <br />
                            Innovación
                        </h1>
                    </div>
                </div>

                {/* Barra de color (paleta coral) */}
                <div className="ctrl-colorbar" />
            </section>

            {/* ================= FUNCIONES ================= */}
            <section className="ctrl-section ctrl-funciones" aria-label="Funciones">
                <div className="ctrl-container">
                    <div className="ctrl-funciones__grid">
                        {/* Izquierda (texto + ilustración) */}
                        <div className="ctrl-funciones__left">
                            <h2 className="ctrl-h2">
                                Funciones del área de control, <br />
                                <span className="ctrl-h2__accent">evaluación e innovación</span>
                            </h2>

                            {/* Ilustración (puedes cambiar URL por la tuya) */}
                            <div className="ctrl-illustration">
                                <img
                                    src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-lading//control-illustration.png"
                                    alt="Ilustración del área"
                                    className="ctrl-illustration__img"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Derecha (cards) */}
                        <div className="ctrl-funciones__right">
                            <div className="ctrl-miniCards">
                                {funciones.map((f) => {
                                    const Icon = f.icon;
                                    return (
                                        <div key={f.title} className="ctrl-miniCard">
                                            <div className={`ctrl-miniCard__icon ctrl-miniCard__icon--${f.tone}`}>
                                                <Icon size={18} />
                                            </div>
                                            <div>
                                                <h3 className="ctrl-miniCard__title">{f.title}</h3>
                                                <p className="ctrl-miniCard__desc">{f.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SERVICIOS ================= */}
            <section className="ctrl-section ctrl-servicios" aria-label="Servicios">
                <div className="ctrl-container">
                    <h2 className="ctrl-h2 ctrl-h2--center">Servicios del Área</h2>

                    <div className="ctrl-servicesGrid">
                        {servicios.map((s) => (
                            <article key={s.title} className="ctrl-serviceCard">
                                <div className="ctrl-serviceCard__body">
                                    <h3 className="ctrl-serviceCard__title">{s.title}</h3>
                                    <p className="ctrl-serviceCard__desc">{s.desc}</p>
                                </div>

                                <div className="ctrl-serviceCard__imgWrap">
                                    {/* Si no tienes imagen aún, se verá un placeholder limpio */}
                                    {s.img ? (
                                        <img
                                            src={s.img}
                                            alt={s.title}
                                            className="ctrl-serviceCard__img"
                                            loading="lazy"
                                            onError={(e) => {
                                                e.currentTarget.style.display = "none";
                                            }}
                                        />
                                    ) : (
                                        <div className="ctrl-serviceCard__placeholder" />
                                    )}
                                </div>

                                <button className="ctrl-btn" type="button">
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

export default LandingControl;