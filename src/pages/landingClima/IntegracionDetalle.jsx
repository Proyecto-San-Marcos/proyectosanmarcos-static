import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Images, Users, Puzzle, Expand, Hourglass, ArrowLeft } from "lucide-react";
import Modal from "../../components/Modal";
import ClimaHeader from "./components/ClimaHeader";
import CoverImage from "./components/CoverImage";
import useReveal from "./components/useReveal";
import integraciones from "./data/integraciones";
import "./components/clima-theme.css";
import "./IntegracionDetalle.css";

const dinamicas = [
    {
        title: "Rompehielos y bienvenida",
        desc: "Actividades para conocernos, perder la timidez y empezar la jornada con buena energía. El objetivo es que nadie se quede fuera de la conversación.",
        icon: Users,
    },
    {
        title: "Trabajo en equipo y confianza",
        desc: "Retos grupales que fortalecen la comunicación, la confianza y el compañerismo dentro del equipo, mezclando a voluntarios de distintas áreas.",
        icon: Puzzle,
    },
];

/* Patrón de tamaños del mosaico; se repite cada 7 piezas para cualquier cantidad de fotos. */
const patron = ["big", "wide", "sq", "tall", "sq", "wide", "sq"];

const emptyCopy = {
    soon: {
        title: "Estamos preparando esta edición",
        desc: "Muy pronto compartiremos aquí las fotos y los mejores momentos. Mientras tanto, revive las ediciones anteriores.",
    },
    pending: {
        title: "Material en gestión",
        desc: "Esta edición fue organizada por otra área. Estamos recopilando su material con Marketing para publicarlo aquí.",
    },
};

const IntegracionDetalle = () => {
    const { year } = useParams();
    const [lightbox, setLightbox] = useState(null);
    // Fotos que el navegador no pudo decodificar: no se abren en el lightbox.
    const [rotas, setRotas] = useState(() => new Set());

    const data = integraciones.find((i) => String(i.year) === year);
    useReveal([year, data?.status]);

    const marcarRota = (src) => setRotas((prev) => new Set(prev).add(src));

    if (!data) {
        return (
            <main className="cl-root">
                <ClimaHeader
                    title="Integración no encontrada"
                    lead="Aún no hay contenido registrado para este año."
                    backTo="/talento-humano/clima/integraciones"
                    backLabel="Volver a integraciones"
                />
            </main>
        );
    }

    const sinFotos = data.status !== "ready" || data.fotos.length === 0;

    return (
        <main className="cl-root">
            <ClimaHeader
                title={data.title}
                lead={
                    sinFotos
                        ? "Esta edición aún no tiene galería publicada."
                        : "Un vistazo a los mejores momentos de esta integración."
                }
                image={data.cover}
                backTo="/talento-humano/clima/integraciones"
                backLabel="Volver a integraciones"
            />

            {sinFotos ? (
                /* ══════════════ ESTADO VACÍO ══════════════ */
                <section className="cl-section cl-section--flush">
                    <div className="cl-shell">
                        <div className="empty cl-reveal">
                            <span className="empty__ring" aria-hidden="true" />
                            <span className="cl-ico cl-ico--round cl-ico--solid empty__ico">
                                <Hourglass size={26} />
                            </span>
                            <h2 className="cl-h2 empty__title">{emptyCopy[data.status]?.title}</h2>
                            <p className="cl-lead empty__desc">{emptyCopy[data.status]?.desc}</p>
                            <Link to="/talento-humano/clima/integraciones" className="cl-btn">
                                <ArrowLeft size={16} /> Ver otras ediciones
                            </Link>
                        </div>
                    </div>
                </section>
            ) : (
                /* ══════════════ COLLAGE ══════════════ */
                <section className="cl-section cl-section--flush mosaic">
                    <div className="cl-shell">
                        <header className="clSec__head clSec__head--split">
                            <div>
                                <p className="cl-eyebrow">
                                    <Images size={14} style={{ marginRight: 2 }} />
                                    Galería · {data.fotos.length} fotos
                                </p>
                                <h2 className="cl-h2">
                                    Así lo <span className="cl-mark">vivimos</span>
                                </h2>
                            </div>
                            <p className="cl-note mosaic__hint">Toca cualquier foto para ampliarla</p>
                        </header>
                    </div>

                    <div className="cl-shell--wide cl-shell mosaic__grid">
                        {data.fotos.map((src, idx) => {
                            const rota = rotas.has(src);
                            return (
                                <button
                                    key={src}
                                    type="button"
                                    className={`mosaic__cell mosaic__cell--${patron[idx % patron.length]}`}
                                    onClick={() => !rota && setLightbox(src)}
                                    disabled={rota}
                                    aria-label={rota ? "Foto no disponible" : `Ampliar foto ${idx + 1}`}
                                >
                                    <CoverImage
                                        src={src}
                                        alt={`${data.title} — foto ${idx + 1}`}
                                        loading="lazy"
                                        onFail={marcarRota}
                                    />
                                    {!rota && (
                                        <span className="mosaic__hover">
                                            <Expand size={20} />
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </section>
            )}

            {/* ══════════════ DINÁMICAS ══════════════ */}
            <section className="cl-section dyn cl-bleed-wash">
                <div className="cl-shell">
                    <header className="clSec__head clSec__head--center">
                        <p className="cl-eyebrow">Dinámicas realizadas</p>
                        <h2 className="cl-h2">Lo que siempre hacemos</h2>
                    </header>

                    <div className="dyn__grid">
                        {dinamicas.map((d, i) => {
                            const Icon = d.icon;
                            return (
                                <article key={d.title} className="dyn__panel cl-reveal">
                                    <span className="dyn__num" aria-hidden="true">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="cl-ico cl-ico--round dyn__ico">
                                        <Icon size={24} />
                                    </span>
                                    <h3 className="cl-h3 dyn__title">{d.title}</h3>
                                    <p className="cl-body dyn__desc">{d.desc}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {lightbox && (
                <Modal
                    onClose={() => setLightbox(null)}
                    label="Foto ampliada"
                    imageUrl={lightbox}
                    imageAlt={data.title}
                    className="mosaic__lightbox"
                />
            )}
        </main>
    );
};

export default IntegracionDetalle;
