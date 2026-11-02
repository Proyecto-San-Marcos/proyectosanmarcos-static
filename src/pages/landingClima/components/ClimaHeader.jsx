import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import "./clima-theme.css";
import "./ClimaShared.css";

/**
 * Encabezado editorial para las vistas internas de Clima.
 * `image` se integra como fondo con superposición de color de marca.
 */
const ClimaHeader = ({
    kicker = "Clima y Cultura Organizacional",
    title,
    lead,
    image,
    backTo = "/talento-humano/clima",
    backLabel = "Volver a Clima",
}) => {
    return (
        <header className={`clHead ${image ? "clHead--photo" : ""}`}>
            {image && (
                <div className="clHead__bg" aria-hidden="true">
                    {/* Si la foto no carga (ej. .heic en Chrome) queda solo el degradado */}
                    <img
                        src={image}
                        alt=""
                        loading="eager"
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                        }}
                    />
                </div>
            )}

            <span className="cl-orb clHead__orb clHead__orb--1" aria-hidden="true" />
            <span className="cl-orb clHead__orb clHead__orb--2" aria-hidden="true" />
            <span className="cl-grain" aria-hidden="true" />

            <div className="cl-shell clHead__inner cl-ink-invert">
                <Link to={backTo} className="clHead__back">
                    <ArrowLeft size={15} />
                    {backLabel}
                </Link>

                <p className="cl-eyebrow clHead__kicker">{kicker}</p>
                <h1 className="cl-display clHead__title">{title}</h1>
                {lead && <p className="clHead__lead">{lead}</p>}
            </div>

            <div className="cl-curve cl-curve--bottom" aria-hidden="true">
                <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
                    <path
                        d="M0,90 L0,48 C260,6 470,72 760,48 C1030,26 1230,-6 1440,22 L1440,90 Z"
                        fill="#ffffff"
                    />
                </svg>
            </div>
        </header>
    );
};

export default ClimaHeader;
