import React from "react";
import { HeartHandshake, Users, Award, MessageSquare } from "lucide-react";
import Footer from "../components/Footer";
import "./LandingClima.css";

const LandingClima = () => {
    const compromisos = [
        {
            title: "Fomentar el bienestar",
            desc: "Garantizamos un entorno positivo donde los voluntarios puedan equilibrar responsabilidades académicas y personales.",
            icon: HeartHandshake,
            tone: "gold",
        },
        {
            title: "Fortalecer la Cultura Organizacional",
            desc: "Promovemos valores compartidos como el respeto, la solidaridad y la responsabilidad.",
            icon: Users,
            tone: "slate",
        },
        {
            title: "Fortalecer la Integración entre Voluntarios",
            desc: "Organizamos actividades y encuentros diseñados para unir a los estudiantes y fortalecer el trabajo en equipo.",
            icon: MessageSquare,
            tone: "indigo",
        },
        {
            title: "Promover una Cultura de Reconocimiento",
            desc: "Valoramos el esfuerzo y dedicación de cada voluntario, reconociendo públicamente sus aportes.",
            icon: Award,
            tone: "rose",
        },
    ];

    const servicios = [
        {
            title: "Buzón clima",
            desc: "Evaluaciones periódicas para entender y mejorar el entorno de trabajo.",
            accent: "mint",
        },
        {
            title: "Políticas de buen clima y valores",
            desc: "Visibilidad de políticas y valores organizacionales promovidos dentro de PSM.",
            accent: "mint",
        },
        {
            title: "Integraciones",
            desc: "Actividades periódicas para fomentar la participación y cohesión del equipo.",
            accent: "mint",
        },
    ];

    const equipo = [
        {
            nombre: "Crisbel Aguilar",
            cargo: "Jefa de Clima y CO",
            carrera: "Ingeniería de software",
            edad: "21 años",
            imagen: "", // si tienes foto, pon URL aquí
        },
        {
            nombre: "Crisbel Aguilar",
            cargo: "Jefa de Clima y CO",
            carrera: "Ingeniería de software",
            edad: "21 años",
            imagen: "",
        },
        {
            nombre: "Crisbel Aguilar",
            cargo: "Jefa de Clima y CO",
            carrera: "Ingeniería de software",
            edad: "21 años",
            imagen: "",
        },
    ];

    return (
        <main className="clima-page">
            {/* ================= HERO ================= */}
            <section className="clima-hero" aria-label="Hero">
                <div className="clima-hero__bg" />
                <div className="clima-hero__overlay" />

                <div className="clima-hero__content">
                    <div className="clima-hero__titleBox">
                        <h1 className="clima-hero__title">CLIMA Y CULTURA<br />ORGANIZACIONAL</h1>
                    </div>
                </div>

                {/* barra de color como en tu diseño */}
                <div className="clima-colorbar" />
            </section>

            {/* ================= COMPROMISO ================= */}
            <section className="clima-section clima-commitment" aria-label="Compromiso">
                <div className="clima-container clima-commitment__grid">
                    {/* izquierda */}
                    <div className="clima-commitment__left">
                        <h2 className="clima-h2">
                            Nuestro compromiso como área <br />
                            <span className="clima-h2__accent">de Clima y cultura organizacional</span>
                        </h2>

                        <div className="clima-illustration">
                            <img
                                src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-lading//3D%20young%20woman%20at%20work%20with%20laptop%20writing%20Illustration.png"
                                alt="Ilustración"
                                className="clima-illustration__img"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* derecha */}
                    <div className="clima-commitment__right">
                        <div className="clima-commitmentCards">
                            {compromisos.map((c) => {
                                const Icon = c.icon;
                                return (
                                    <div key={c.title} className="clima-miniCard">
                                        <div className={`clima-miniCard__icon clima-miniCard__icon--${c.tone}`}>
                                            <Icon size={18} />
                                        </div>
                                        <div>
                                            <h3 className="clima-miniCard__title">{c.title}</h3>
                                            <p className="clima-miniCard__desc">{c.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SERVICIOS ================= */}
            <section className="clima-section clima-services" aria-label="Servicios">
                <div className="clima-container">
                    <h2 className="clima-h2 clima-h2--center">Nuestros servicios</h2>

                    <div className="clima-servicesGrid">
                        {servicios.map((s) => (
                            <div key={s.title} className="clima-serviceCard">
                                <div className="clima-serviceCard__top">
                                    <h3 className="clima-serviceCard__title">{s.title}</h3>
                                    <p className="clima-serviceCard__desc">{s.desc}</p>
                                </div>
                                <button className="clima-btn clima-btn--mint" type="button">
                                    Más información
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= EQUIPO ================= */}
            <section className="clima-section clima-team" aria-label="Equipo">
                <div className="clima-team__band">
                    <div className="clima-container">
                        <h2 className="clima-h2 clima-h2--center clima-h2--white">Conoce al equipo</h2>

                        <div className="clima-teamGrid">
                            {equipo.map((p, idx) => (
                                <div key={idx} className="clima-teamCard">
                                    <div className="clima-teamCard__img">
                                        {p.imagen ? (
                                            <img src={p.imagen} alt={p.nombre} />
                                        ) : (
                                            <div className="clima-teamCard__placeholder" />
                                        )}
                                    </div>

                                    <div className="clima-teamCard__body">
                                        <h3 className="clima-teamCard__name">{p.nombre}</h3>

                                        <div className="clima-teamCard__meta">
                                            <p><b>Cargo:</b> {p.cargo}</p>
                                            <p><b>Carrera:</b> {p.carrera}</p>
                                            <p><b>Edad:</b> {p.edad}</p>
                                        </div>

                                        <button className="clima-btn clima-btn--outline" type="button">
                                            Ver perfil
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default LandingClima;