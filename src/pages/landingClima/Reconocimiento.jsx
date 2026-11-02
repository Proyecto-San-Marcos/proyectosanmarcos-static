import { Trophy, UserRound, Medal, Handshake, Lightbulb, Flame, Star, CalendarDays } from "lucide-react";
import ClimaHeader from "./components/ClimaHeader";
import useReveal from "./components/useReveal";
import miembrosDelMes from "./data/reconocimientos";
import "./components/clima-theme.css";
import "./Reconocimiento.css";

const criterios = [
    {
        title: "Compromiso",
        desc: "Cumples lo que prometes, llegas a tiempo y sostienes tus responsabilidades aun cuando la semana se complica.",
        icon: Medal,
    },
    {
        title: "Colaboración",
        desc: "Sumas a otros equipos, compartes lo que sabes y celebras los logros de tus compañeros como propios.",
        icon: Handshake,
    },
    {
        title: "Iniciativa",
        desc: "Propones mejoras, levantas la mano ante un problema y conviertes ideas en acciones concretas.",
        icon: Lightbulb,
    },
    {
        title: "Constancia",
        desc: "Tu aporte no es de un día: acompañas al voluntariado mes a mes con la misma energía.",
        icon: Flame,
    },
];

const Reconocimiento = () => {
    useReveal();

    const hoy = new Date();
    const mesActual = hoy.getMonth(); // 0-11
    const destacado = miembrosDelMes[mesActual];
    const anteriores = miembrosDelMes.slice(0, mesActual).reverse();

    return (
        <main className="cl-root">
            <ClimaHeader
                title="Reconocimiento"
                lead="Celebramos, mes a mes, a quienes hacen del voluntariado un mejor lugar."
                image="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos//grupo.jpeg"
            />

            {/* ══════════════ MIEMBRO DEL MES ══════════════ */}
            <section className="cl-section cl-section--flush reco">
                <div className="cl-shell reco__grid">
                    <div className="reco__copy">
                        <p className="cl-eyebrow">
                            <Trophy size={14} style={{ marginRight: 2 }} />
                            Miembro del mes
                        </p>
                        <h2 className="cl-h2">
                            Alguien que <br />
                            <span className="cl-mark">marcó la diferencia</span>
                        </h2>
                        <p className="cl-lead reco__lead">
                            Cada mes el equipo de Clima destaca a un voluntario cuyo aporte
                            inspiró al resto. El anuncio se hace en las reuniones generales y
                            queda registrado aquí.
                        </p>

                        {anteriores.length > 0 && (
                            <div className="reco__past">
                                <span className="reco__pastLabel">
                                    <CalendarDays size={13} /> Meses anteriores
                                </span>
                                <ul className="reco__pastList">
                                    {anteriores.map((m) => (
                                        <li key={m.id} className="reco__pastItem" title={`${m.mes} · Por anunciar`}>
                                            <span className="reco__pastAvatar">
                                                {m.foto ? <img src={m.foto} alt={m.nombre || ""} /> : <UserRound size={16} />}
                                            </span>
                                            <span className="reco__pastMes">{m.mes.slice(0, 3)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Tarjeta destacada */}
                    <article className="reco__card cl-reveal">
                        <span className="reco__cardGlow" aria-hidden="true" />
                        <span className="cl-chip cl-chip--solid reco__cardMes">
                            {destacado.mes} {destacado.year}
                        </span>

                        <div className="reco__portrait">
                            {destacado.foto ? (
                                <img src={destacado.foto} alt={destacado.nombre || ""} />
                            ) : (
                                <span className="reco__incognito" aria-label="Fotografía por anunciar">
                                    <UserRound size={92} strokeWidth={1.4} />
                                </span>
                            )}
                            <span className="reco__laurel reco__laurel--l" aria-hidden="true" />
                            <span className="reco__laurel reco__laurel--r" aria-hidden="true" />
                        </div>

                        <h3 className="reco__name">{destacado.nombre || "Por anunciar"}</h3>
                        <p className="reco__area">
                            {destacado.area || "El reconocimiento de este mes se revelará pronto"}
                        </p>

                        <div className="reco__stars" aria-hidden="true">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <Star key={i} size={14} />
                            ))}
                        </div>
                    </article>
                </div>
            </section>

            {/* ══════════════ GANA RECONOCIMIENTO ══════════════ */}
            <section className="cl-section recoHow cl-bleed-wash">
                <div className="cl-shell">
                    <header className="clSec__head clSec__head--center">
                        <p className="cl-eyebrow">Gana reconocimiento</p>
                        <h2 className="cl-h2">¿Cómo se elige?</h2>
                        <p className="cl-body clSec__lead">
                            No hay fórmula secreta. Miramos cuatro cosas que cualquier voluntario
                            puede cultivar desde su primer día.
                        </p>
                    </header>

                    <ol className="recoHow__list">
                        {criterios.map((c, i) => {
                            const Icon = c.icon;
                            return (
                                <li key={c.title} className="recoHow__item cl-reveal">
                                    <span className="cl-index recoHow__num">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="cl-ico cl-ico--round recoHow__ico">
                                        <Icon size={22} />
                                    </span>
                                    <div>
                                        <h3 className="cl-h3">{c.title}</h3>
                                        <p className="cl-body recoHow__desc">{c.desc}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </section>
        </main>
    );
};

export default Reconocimiento;
