import { Link, useNavigate } from "react-router-dom";
import {
    HeartHandshake,
    Users,
    Award,
    MessageSquare,
    ArrowUpRight,
    ArrowRight,
    ArrowDown,
    Mail,
    FileText,
    ClipboardCheck,
    Trophy,
} from "lucide-react";
import Footer from "../../components/Footer";
import CoverImage from "./components/CoverImage";
import integraciones from "./data/integraciones";
import useReveal from "./components/useReveal";
import "./components/clima-theme.css";
import "./LandingClima.css";

const compromisos = [
    {
        title: "Fomentar el bienestar",
        desc: "Garantizamos un entorno positivo donde los voluntarios puedan equilibrar responsabilidades académicas y personales.",
        icon: HeartHandshake,
    },
    {
        title: "Fortalecer la cultura organizacional",
        desc: "Promovemos valores compartidos como el respeto, la solidaridad y la responsabilidad.",
        icon: Users,
    },
    {
        title: "Fortalecer la integración entre voluntarios",
        desc: "Organizamos actividades y encuentros diseñados para unir a los estudiantes y fortalecer el trabajo en equipo.",
        icon: MessageSquare,
    },
    {
        title: "Promover una cultura de reconocimiento",
        desc: "Valoramos el esfuerzo y dedicación de cada voluntario, reconociendo públicamente sus aportes.",
        icon: Award,
    },
];

const servicios = [
    {
        title: "Buzón Clima",
        desc: "Comparte tus opiniones, problemas o ideas sobre el ambiente del equipo.",
        icon: Mail,
        to: "/talento-humano/clima/buzon",
        img: "/clima/svc-buzon.svg",
    },
    {
        title: "Políticas y valores",
        desc: "Los documentos que sostienen nuestra cultura, listos para consultar y descargar.",
        icon: FileText,
        to: "/talento-humano/clima/documentos",
        img: "/clima/svc-politicas.svg",
    },
    {
        title: "Integraciones",
        desc: "Actividades periódicas que fortalecen la participación y la cohesión del equipo.",
        icon: Users,
        to: "/talento-humano/clima/integraciones",
        img: "/clima/svc-integraciones.svg",
    },
    {
        title: "Evaluación Clima",
        desc: "Medición periódica del ambiente organizacional y sus indicadores clave.",
        icon: ClipboardCheck,
        to: "/talento-humano/clima/evaluacion",
        img: "/clima/svc-evaluacion.svg",
    },
    {
        title: "Reconocimiento",
        desc: "Miembro del mes y cómo ganar reconocimiento por tu aporte al voluntariado.",
        icon: Trophy,
        to: "/talento-humano/clima/reconocimiento",
        img: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos//grupo.jpeg",
    },
];

const equipo = [
    {
        nombre: "Maria Fernanda Zerpa Rivera",
        cargo: "Jefa de Clima y CO",
        frase: "Creo en construir espacios donde cada voluntario se sienta escuchado y valorado.",
        imagen:
            "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/img-miembros/Maria%20Fernanda%20Zerpa%20Rivera.jpg",
    },
    {
        nombre: "Luz Mayra Galindo Huamani",
        cargo: "Co-jefa de Clima y CO",
        frase: "La mejor cultura es la que se vive en equipo, con respeto y buena energía.",
        imagen:
            "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/img-miembros/Luz%20Mayra%20Galindo%20Huamani%20.jpg",
    },
    {
        nombre: "Rodrigo Gabriel Sifuentes Gutierrez",
        cargo: "Miembro del equipo",
        frase: "Me apasiona crear momentos que unan al equipo dentro y fuera de PSM.",
        imagen:
            "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/img-miembros/Rodrigo%20Gabriel%20Sifuentes%20Gutierrez.jpeg",
    },
];

const LandingClima = () => {
    const navigate = useNavigate();
    useReveal();

    return (
        <main className="cl-root clima">
            {/* ══════════════ HERO ══════════════ */}
            <section className="clHero" aria-label="Clima y Cultura Organizacional">
                <span className="cl-orb clHero__orb clHero__orb--1" aria-hidden="true" />
                <span className="cl-orb clHero__orb clHero__orb--2" aria-hidden="true" />
                <span className="cl-grain" aria-hidden="true" />

                <div className="cl-shell--wide cl-shell clHero__grid">
                    <div className="clHero__copy cl-ink-invert">
                        <span className="cl-chip cl-chip--glass clHero__chip">
                            Gerencia de Talento Humano
                        </span>

                        <h1 className="cl-display clHero__title">
                            Clima<span className="clHero__amp">&</span>Cultura
                            <em className="clHero__em">Organizacional</em>
                        </h1>

                        <p className="cl-lead clHero__lead">
                            Cultivamos un ambiente donde cada voluntario crece, se siente parte del
                            equipo y encuentra motivos para quedarse.
                        </p>

                        <div className="clHero__actions">
                            <Link to="/talento-humano/clima/buzon" className="cl-btn">
                                Escríbenos al Buzón <ArrowRight size={17} />
                            </Link>
                            <a href="#servicios" className="cl-btn cl-btn--onDark">
                                Ver servicios <ArrowDown size={17} />
                            </a>
                        </div>
                    </div>

                    <div className="clHero__art" aria-hidden="true">
                        <div className="clHero__blob">
                            <img
                                src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos//grupo.jpeg"
                                alt=""
                                loading="eager"
                            />
                        </div>
                        <span className="clHero__ring" />
                        <div className="clHero__float clHero__float--a">
                            <strong>+{servicios.length}</strong>
                            <span>frentes de trabajo</span>
                        </div>
                        <div className="clHero__float clHero__float--b">
                            <span className="clHero__dot" />
                            Buzón siempre abierto
                        </div>
                    </div>
                </div>

                <div className="cl-curve cl-curve--bottom" aria-hidden="true">
                    <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
                        <path
                            d="M0,90 L0,44 C240,4 420,74 720,50 C1010,27 1210,-8 1440,26 L1440,90 Z"
                            fill="#ffffff"
                        />
                    </svg>
                </div>
            </section>

            {/* ══════════════ COMPROMISO ══════════════ */}
            <section className="cl-section clCommit" aria-label="Nuestro compromiso">
                <div className="cl-shell clCommit__grid">
                    <aside className="clCommit__aside">
                        <p className="cl-eyebrow">Nuestro compromiso</p>
                        <h2 className="cl-h2">
                            Lo que impulsa <br />
                            al área de <span className="cl-mark">Clima</span>
                        </h2>
                        <p className="cl-body clCommit__intro">
                            Cuatro principios que guían cada decisión, actividad y conversación
                            dentro del voluntariado.
                        </p>

                        <div className="clCommit__figure">
                            <img
                                src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-lading//3D%20young%20woman%20at%20work%20with%20laptop%20writing%20Illustration.png"
                                alt="Ilustración de una voluntaria trabajando"
                                loading="lazy"
                            />
                        </div>
                    </aside>

                    <ol className="clCommit__list">
                        {compromisos.map((c, i) => {
                            const Icon = c.icon;
                            return (
                                <li key={c.title} className="clCommit__row cl-reveal">
                                    <span className="cl-index clCommit__num">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <div className="clCommit__rowBody">
                                        <h3 className="cl-h3">{c.title}</h3>
                                        <p className="cl-body">{c.desc}</p>
                                    </div>
                                    <span className="cl-ico cl-ico--round clCommit__ico">
                                        <Icon size={21} />
                                    </span>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </section>

            {/* ══════════════ SERVICIOS (índice editorial) ══════════════ */}
            <section className="cl-section clServices" id="servicios" aria-label="Nuestros servicios">
                <div className="cl-shell">
                    <header className="clServices__head">
                        <div>
                            <p className="cl-eyebrow">Nuestros servicios</p>
                            <h2 className="cl-h2">
                                ¿Cómo trabajamos <br />
                                <span className="cl-mark">por ti</span>?
                            </h2>
                        </div>
                        <p className="cl-body clServices__intro">
                            Cada frente abre su propio espacio con el detalle de cómo participar,
                            qué encontrarás y a quién acudir.
                        </p>
                    </header>

                    <ul className="clServices__list">
                        {servicios.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <li key={s.title} className="clServices__item cl-reveal">
                                    <button
                                        type="button"
                                        className="clServices__row"
                                        onClick={() => navigate(s.to)}
                                    >
                                        <span className="cl-index clServices__num">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>

                                        <span className="cl-ico clServices__ico">
                                            <Icon size={22} />
                                        </span>

                                        <span className="clServices__text">
                                            <span className="cl-h3 clServices__title">{s.title}</span>
                                            <span className="cl-body clServices__desc">{s.desc}</span>
                                        </span>

                                        <span className="clServices__peek" aria-hidden="true">
                                            <img src={s.img} alt="" loading="lazy" />
                                        </span>

                                        <span className="clServices__go" aria-hidden="true">
                                            <ArrowUpRight size={20} />
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>

            {/* ══════════════ INTEGRACIONES ══════════════ */}
            <section className="cl-section clGallery cl-bleed-wash" aria-label="Últimas integraciones">
                <div className="cl-shell clGallery__head">
                    <div>
                        <p className="cl-eyebrow">Momentos que nos unen</p>
                        <h2 className="cl-h2">Últimas integraciones</h2>
                    </div>
                    <Link to="/talento-humano/clima/integraciones" className="cl-link">
                        Ver todas las ediciones <ArrowUpRight size={16} />
                    </Link>
                </div>

                <div className="cl-shell--wide cl-shell clGallery__strip">
                    {integraciones
                        .filter((i) => i.status !== "pending")
                        .slice(0, 3)
                        .map((item, i) => (
                            <Link
                                key={item.year}
                                to={`/talento-humano/clima/integraciones/${item.year}`}
                                className={`clGallery__tile clGallery__tile--${i + 1} cl-reveal`}
                            >
                                <CoverImage src={item.cover} alt={item.title} loading="lazy" />
                                {item.cover && <span className="clGallery__veil" />}
                                <span className="clGallery__year">{item.year}</span>
                                <span className="clGallery__caption">
                                    {item.status === "soon" ? "Próxima edición" : item.title}
                                    <ArrowUpRight size={17} />
                                </span>
                            </Link>
                        ))}
                </div>
            </section>

            {/* ══════════════ EQUIPO ══════════════ */}
            <section className="cl-section clTeam cl-ink-invert" aria-label="Conoce al equipo">
                <span className="cl-orb clTeam__orb clTeam__orb--1" aria-hidden="true" />
                <span className="cl-orb clTeam__orb clTeam__orb--2" aria-hidden="true" />
                <span className="cl-grain" aria-hidden="true" />

                <div className="cl-shell clTeam__head">
                    <p className="cl-eyebrow">Las personas detrás del área</p>
                    <h2 className="cl-h2">Conoce al equipo</h2>
                </div>

                <div className="cl-shell clTeam__grid">
                    {equipo.map((p, i) => (
                        <article key={p.nombre} className={`clTeam__card clTeam__card--${i + 1} cl-reveal`}>
                            <div className="clTeam__portrait">
                                <img src={p.imagen} alt={p.nombre} loading="lazy" />
                                <span className="clTeam__tint" />
                                <span className="cl-chip cl-chip--solid clTeam__role">{p.cargo}</span>
                            </div>

                            <div className="clTeam__body">
                                <h3 className="clTeam__name">{p.nombre}</h3>
                                <p className="clTeam__quote">{p.frase}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* ══════════════ CTA FINAL ══════════════ */}
            <section className="clCta" aria-label="Buzón Clima">
                <div className="cl-shell clCta__inner">
                    <div className="clCta__copy">
                        <h2 className="cl-h2 clCta__title">
                            ¿Tienes algo <br />que contarnos?
                        </h2>
                        <p className="clCta__desc">
                            El Buzón Clima está abierto para tus dudas, problemas o ideas. Te leemos
                            con atención y confidencialidad.
                        </p>
                    </div>
                    <Link to="/talento-humano/clima/buzon" className="cl-btn cl-btn--paper clCta__btn">
                        Ir al Buzón Clima <ArrowRight size={17} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default LandingClima;
