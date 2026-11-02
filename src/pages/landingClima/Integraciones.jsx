import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, Hourglass } from "lucide-react";
import ClimaHeader from "./components/ClimaHeader";
import CoverImage from "./components/CoverImage";
import useReveal from "./components/useReveal";
import integraciones from "./data/integraciones";
import "./components/clima-theme.css";
import "./Integraciones.css";

const estadoLabel = {
    soon: "Próximamente",
    pending: "Material en gestión",
};

const Integraciones = () => {
    useReveal();

    // La pieza destacada es la última edición que ya tiene fotos.
    const destacada = integraciones.find((i) => i.status === "ready");
    const resto = integraciones.filter((i) => i !== destacada);
    const conFotos = integraciones.filter((i) => i.status === "ready").length;

    return (
        <main className="cl-root">
            <ClimaHeader
                title="Integración que nos unen"
                lead="Un repaso a los momentos que fortalecen nuestro equipo, año a año."
                image={destacada?.cover}
            />

            <section className="cl-section cl-section--flush integra">
                <div className="cl-shell">
                    <header className="clSec__head clSec__head--split">
                        <div>
                            <p className="cl-eyebrow">
                                <Sparkles size={14} style={{ marginRight: 2 }} />
                                Integraciones por año
                            </p>
                            <h2 className="cl-h2">
                                Elige una edición <br />
                                para <span className="cl-mark">revivirla</span>
                            </h2>
                        </div>
                        <p className="cl-body integra__count">
                            <strong>{conFotos}</strong> ediciones con galería
                            <br />
                            {integraciones.length} registradas desde{" "}
                            {integraciones[integraciones.length - 1].year}
                        </p>
                    </header>

                    {/* Edición destacada — pieza ancha */}
                    {destacada && (
                        <Link
                            to={`/talento-humano/clima/integraciones/${destacada.year}`}
                            className="integra__hero cl-reveal"
                        >
                            <CoverImage src={destacada.cover} alt={destacada.title} loading="lazy" />
                            <span className="integra__veil" />
                            <span className="integra__stamp">Última edición</span>
                            <div className="integra__heroBody">
                                <span className="integra__heroYear">{destacada.year}</span>
                                <div>
                                    <h3 className="integra__heroTitle">{destacada.title}</h3>
                                    <span className="integra__heroGo">
                                        Ver galería · {destacada.fotos.length} fotos{" "}
                                        <ArrowUpRight size={17} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    )}

                    {/* Resto de ediciones */}
                    <div className="integra__grid">
                        {resto.map((item) => {
                            const ready = item.status === "ready";
                            return (
                                <Link
                                    key={item.year}
                                    to={`/talento-humano/clima/integraciones/${item.year}`}
                                    className={`integra__tile ${ready ? "" : "integra__tile--muted"} cl-reveal`}
                                >
                                    <div className="integra__thumb">
                                        <CoverImage
                                            src={item.cover}
                                            alt={item.title}
                                            soonLabel={estadoLabel[item.status]}
                                            loading="lazy"
                                        />
                                        {ready && <span className="integra__tileVeil" />}
                                        <span className="integra__year">{item.year}</span>
                                    </div>

                                    <div className="integra__tileBody">
                                        <h3 className="integra__tileTitle">{item.title}</h3>
                                        {ready ? (
                                            <span className="integra__pill">
                                                Ver más <ArrowUpRight size={15} />
                                            </span>
                                        ) : (
                                            <span className="integra__pill integra__pill--soft">
                                                <Hourglass size={13} /> {estadoLabel[item.status]}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    <p className="cl-note integra__note">
                        Las ediciones anteriores a 2024 fueron organizadas por otras áreas; estamos
                        recopilando su material con Marketing.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Integraciones;
