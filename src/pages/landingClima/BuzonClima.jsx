import {
    MessageCircleHeart,
    ArrowUpRight,
    ShieldCheck,
    Lock,
    Search,
    Sparkles,
} from "lucide-react";
import ClimaHeader from "./components/ClimaHeader";
import useReveal from "./components/useReveal";
import "./components/clima-theme.css";
import "./BuzonClima.css";

// Formulario oficial del Buzón Clima (Google Forms) — es el único canal.
const FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdlqPGeKk8DlUpZBImadtSBiqfHFYRWDRFagVGopkmXlrGolQ/viewform";

// Lo que se puede compartir, según el propio formulario.
const temas = [
    "Experiencias",
    "Sugerencias",
    "Situaciones de conflicto",
    "Algún problema de salud",
    "Dudas",
    "Cómo te sientes en PSM",
];

const pasos = [
    {
        title: "Lo recibimos",
        desc: "Tu mensaje llega directamente al encargado de Clima y Cultura Organizacional.",
        icon: Lock,
    },
    {
        title: "Lo revisamos",
        desc: "Analizamos el caso en reserva y lo contrastamos con otras señales del área.",
        icon: Search,
    },
    {
        title: "Actuamos",
        desc: "Definimos acciones concretas y las sumamos a los planes de mejora del clima.",
        icon: Sparkles,
    },
];

const BuzonClima = () => {
    useReveal();

    return (
        <main className="cl-root">
            <ClimaHeader
                title="Buzón clima"
                lead="Un canal abierto para que tu voz mejore el ambiente de todo el equipo."
                image="https://picsum.photos/seed/psm-buzon-hero/1600/900"
            />

            {/* ══════════════ INTRO ══════════════ */}
            <section className="cl-section cl-section--flush clIntro">
                <div className="cl-shell clIntro__grid">
                    <span className="clIntro__glyph" aria-hidden="true">“</span>
                    <div className="clIntro__body">
                        <p>
                            El Buzón Clima es una herramienta de comunicación diseñada para recoger
                            las opiniones, sugerencias y percepciones de sus miembros sobre el
                            ambiente organizacional. A través de este canal, se busca identificar
                            oportunidades de mejora, fortalecer la cohesión del equipo y garantizar
                            un sistema de calidad basado en la transparencia y el bienestar
                            colectivo.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════════ CANAL ÚNICO ══════════════ */}
            <section className="cl-section buzon">
                <div className="cl-shell">
                    <article className="buzon__panel cl-reveal">
                        <span className="buzon__glow" aria-hidden="true" />

                        <div className="buzon__copy">
                            <span className="buzon__ico">
                                <MessageCircleHeart size={30} />
                            </span>

                            <h2 className="cl-h2 buzon__title">
                                Este espacio <br />es confidencial
                            </h2>

                            <p className="buzon__desc">
                                Puedes compartir experiencias, sugerencias, situaciones de conflicto,
                                algún problema de salud, duda o cómo te sientes dentro de PSM. Los
                                datos recopilados se mantienen en reserva y solo serán administrados
                                por el encargado de Clima y Cultura Organizacional.
                            </p>

                            <a
                                href={FORM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cl-btn cl-btn--paper buzon__btn"
                            >
                                Escribir en el Buzón <ArrowUpRight size={17} />
                            </a>

                            <p className="buzon__note">
                                <ShieldCheck size={14} /> Se abre en una pestaña nueva · Tus datos se
                                mantienen en reserva
                            </p>
                        </div>

                        <ul className="buzon__temas">
                            <li className="buzon__temasLabel">¿Qué puedes contarnos?</li>
                            {temas.map((t) => (
                                <li key={t} className="buzon__tema">
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>

            {/* ══════════════ QUÉ PASA DESPUÉS ══════════════ */}
            <section className="cl-section buzonFlow cl-bleed-wash">
                <div className="cl-shell">
                    <header className="clSec__head clSec__head--center">
                        <p className="cl-eyebrow">Transparencia</p>
                        <h2 className="cl-h2">
                            ¿Qué pasa <span className="cl-mark">después</span>?
                        </h2>
                    </header>

                    <ol className="buzonFlow__list">
                        {pasos.map((p, i) => {
                            const Icon = p.icon;
                            return (
                                <li key={p.title} className="buzonFlow__step cl-reveal">
                                    <span className="cl-index buzonFlow__num">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="cl-ico cl-ico--round buzonFlow__ico">
                                        <Icon size={21} />
                                    </span>
                                    <h3 className="buzonFlow__title">{p.title}</h3>
                                    <p className="cl-body buzonFlow__desc">{p.desc}</p>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </section>
        </main>
    );
};

export default BuzonClima;
