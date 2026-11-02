import {
    Rocket,
    Users,
    Eye,
    MessageSquare,
    Building2,
    Angry,
    Frown,
    Meh,
    Smile,
    Laugh,
    ExternalLink,
    ClipboardCheck,
    CalendarCheck,
    CalendarClock,
    Lock,
} from "lucide-react";
import ClimaHeader from "./components/ClimaHeader";
import useReveal from "./components/useReveal";
import "./components/clima-theme.css";
import "./EvaluacionClima.css";

/**
 * Periodos de evaluación del año.
 *  - "closed" → ya se aplicó; si hay `url` se enlaza el formulario cerrado como referencia.
 *  - "soon"   → aún no abre.
 *  - "open"   → recibiendo respuestas (enlaza al formulario).
 */
const periodos = [
    { mes: "Abril", estado: "closed", url: null },
    { mes: "Agosto", estado: "closed", url: "https://forms.gle/8bZVhrf1aA6TULex9" },
    { mes: "Diciembre", estado: "soon", url: null },
];

const estadoUI = {
    open: { label: "Abierta", icon: ExternalLink },
    closed: { label: "Cerrada", icon: Lock },
    soon: { label: "Próximamente", icon: CalendarClock },
};

const indicadores = [
    { label: "Autorrealización", icon: Rocket, hint: "Crecimiento y desarrollo personal" },
    { label: "Involucramiento laboral", icon: Users, hint: "Compromiso con el equipo" },
    { label: "Supervisión", icon: Eye, hint: "Acompañamiento y guía" },
    { label: "Comunicación", icon: MessageSquare, hint: "Claridad y apertura" },
    { label: "Condiciones laborales", icon: Building2, hint: "Recursos y entorno" },
];

const calificadores = [
    { label: "Muy desfavorable", icon: Angry, tone: "r1" },
    { label: "Desfavorable", icon: Frown, tone: "r2" },
    { label: "Medio", icon: Meh, tone: "r3" },
    { label: "Favorable", icon: Smile, tone: "r4" },
    { label: "Muy favorable", icon: Laugh, tone: "r5" },
];

const EvaluacionClima = () => {
    useReveal();

    return (
        <main className="cl-root">
            <ClimaHeader
                title="Evaluación clima"
                lead="Medimos cómo se siente el equipo para poder mejorar con evidencia."
                image="https://picsum.photos/seed/psm-eval-hero/1600/900"
            />

            {/* ══════════════ INTRO ══════════════ */}
            <section className="cl-section cl-section--flush clIntro">
                <div className="cl-shell clIntro__grid">
                    <span className="clIntro__glyph" aria-hidden="true">“</span>
                    <div className="clIntro__body">
                        <p>
                            La Evaluación de Clima es un proceso que se realiza periódicamente para
                            conocer la percepción de los miembros sobre su entorno dentro del área y
                            detectar oportunidades de mejora. A través de esta evaluación, se
                            analizan aspectos clave como la autorrealización, el involucramiento
                            laboral, la supervisión, la comunicación y las condiciones laborales, con
                            el fin de fortalecer el ambiente organizacional, optimizar la gestión y
                            mejorar la experiencia de los miembros.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════════ INDICADORES ══════════════ */}
            <section className="cl-section evalInd cl-bleed-wash">
                <div className="cl-shell">
                    <header className="clSec__head clSec__head--center">
                        <p className="cl-eyebrow">
                            <ClipboardCheck size={14} style={{ marginRight: 2 }} />
                            Indicadores evaluados
                        </p>
                        <h2 className="cl-h2">
                            ¿Qué <span className="cl-mark">medimos</span>?
                        </h2>
                    </header>

                    <ol className="evalInd__track">
                        {indicadores.map((ind, i) => {
                            const Icon = ind.icon;
                            return (
                                <li key={ind.label} className="evalInd__step cl-reveal">
                                    <span className="evalInd__ring">
                                        <Icon size={24} />
                                        <span className="evalInd__badge">{i + 1}</span>
                                    </span>
                                    <h3 className="evalInd__label">{ind.label}</h3>
                                    <p className="evalInd__hint">{ind.hint}</p>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </section>

            {/* ══════════════ CALIFICADORES ══════════════ */}
            <section className="cl-section evalScale">
                <div className="cl-shell">
                    <header className="clSec__head clSec__head--center">
                        <p className="cl-eyebrow">Calificadores</p>
                        <h2 className="cl-h2">Así se interpreta cada resultado</h2>
                    </header>

                    <div className="evalScale__wrap cl-reveal">
                        <div className="evalScale__bar" aria-hidden="true" />
                        <ul className="evalScale__list">
                            {calificadores.map((c) => {
                                const Icon = c.icon;
                                return (
                                    <li key={c.label} className={`evalScale__item evalScale__item--${c.tone}`}>
                                        <span className="evalScale__face">
                                            <Icon size={28} />
                                        </span>
                                        <span className="evalScale__label">{c.label}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ══════════════ PERIODOS ══════════════ */}
            <section className="evalRes" aria-label="Periodos de evaluación">
                <span className="cl-orb evalRes__orb" aria-hidden="true" />
                <span className="cl-grain" aria-hidden="true" />

                <div className="cl-shell evalRes__inner cl-ink-invert">
                    <div>
                        <p className="cl-eyebrow">
                            <CalendarCheck size={14} style={{ marginRight: 2 }} />
                            Calendario {new Date().getFullYear()}
                        </p>
                        <h2 className="cl-h2 evalRes__title">
                            Tres momentos <br />al año
                        </h2>
                        <p className="evalRes__desc">
                            La evaluación se aplica en tres periodos. Cuando uno está abierto,
                            encontrarás aquí el acceso directo al formulario.
                        </p>
                    </div>

                    <ol className="evalPer">
                        {periodos.map((p, i) => {
                            const ui = estadoUI[p.estado];
                            const Icon = ui.icon;
                            const abierta = p.estado === "open";
                            return (
                                <li key={p.mes} className={`evalPer__item evalPer__item--${p.estado} cl-reveal`}>
                                    <span className="evalPer__num">{String(i + 1).padStart(2, "0")}</span>
                                    <div className="evalPer__body">
                                        <h3 className="evalPer__mes">{p.mes}</h3>
                                        <span className="evalPer__estado">
                                            <Icon size={13} /> {ui.label}
                                        </span>
                                    </div>
                                    {p.url && (
                                        <a
                                            href={p.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`cl-btn ${abierta ? "cl-btn--paper" : "cl-btn--onDark"} evalPer__btn`}
                                        >
                                            {abierta ? "Responder" : "Ver formulario"} <ExternalLink size={15} />
                                        </a>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </section>
        </main>
    );
};

export default EvaluacionClima;
