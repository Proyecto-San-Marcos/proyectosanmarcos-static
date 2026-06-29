import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

/**
 * NewsPopup – Ventana flotante de información
 *
 * Props:
 *  - imageUrl      : URL de la imagen
 *  - altText       : texto alternativo
 *  - redirectTo    : ruta o URL del botón "Ver más"
 *  - delay         : ms antes de aparecer (default 800)
 *  - footerBg      : color CSS del fondo del footer (default "#fafafa")
 *                    Ej: "#1b3068" para oscuro, "white" para claro
 *  - iconColor     : color CSS único para todos los íonos sociales
 *                    Si no se pasa, cada red usa su color oficial al hacer hover
 */
const NewsPopup = ({
    imageUrl,
    altText = "Información",
    redirectTo = "/",
    delay = 800,
    isButtonVisible = true,
    buttonText = "Ver más",
    aspectRatio = "3/4",
    footerBg = "#fafafa",
    iconColor = null,          // null = color de cada red en hover
}) => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    // Detecta si el fondo del footer es oscuro para adaptar el color base de los íonos
    const isDarkFooter = (() => {
        try {
            const c = footerBg.replace("#", "");
            if (c.length === 6) {
                const r = parseInt(c.slice(0, 2), 16);
                const g = parseInt(c.slice(2, 4), 16);
                const b = parseInt(c.slice(4, 6), 16);
                // luminancia relativa
                return (r * 299 + g * 587 + b * 114) / 1000 < 128;
            }
        } catch { }
        return false;
    })();

    const baseIconColor = isDarkFooter ? "rgba(255,255,255,0.8)" : "rgba(30,30,60,0.75)";
    const baseBorderCol = isDarkFooter ? "rgba(255,255,255,0.18)" : "rgba(30,30,60,0.2)";
    const baseIconBg = isDarkFooter ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)";
    const labelColor = isDarkFooter ? "rgba(255,255,255,0.55)" : "rgba(30,30,60,0.5)";

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    const handleClose = () => {
        setVisible(false);
    };

    const handleVerMas = () => {
        handleClose();
        if (redirectTo.startsWith("http")) {
            window.open(redirectTo, "_blank", "noopener,noreferrer");
        } else {
            navigate(redirectTo);
        }
    };

    // Calcula dimensiones exactas respetando los límites del viewport.
    // Usamos clientHeight (más fiable en móvil que innerHeight) y
    // límites más conservadores en pantallas pequeñas.
    const calcCardSize = () => {
        const [rawW, rawH] = aspectRatio.split("/").map(parseFloat);
        if (!rawW || !rawH) return {};

        const isMobile = window.innerWidth <= 640;

        // clientHeight descuenta la barra de URL del navegador en móvil
        const vh = document.documentElement.clientHeight;
        const vw = window.innerWidth;

        const maxH = vh * (isMobile ? 0.78 : 0.88);
        const maxW = Math.min(vw * (isMobile ? 0.92 : 0.90), isMobile ? 420 : 600);
        const minW = isMobile ? 240 : 260;

        // Intentar height-constrained: height = maxH, width = maxH * (w/h)
        let h = maxH;
        let w = h * (rawW / rawH);

        // Si se excede el ancho máximo, cambia a width-constrained
        if (w > maxW) {
            w = maxW;
            h = w * (rawH / rawW);
        }

        // Forzar ancho mínimo (no recalcula altura — ya es el mínimo razonable)
        if (w < minW) {
            w = minW;
            h = w * (rawH / rawW);
        }

        return { width: Math.round(w), height: Math.round(h) };
    };

    if (!visible) return null;

    return (
        <>
            {/* Overlay */}
            <div className="news-popup__overlay" onClick={handleClose} />

            <div className="news-popup">
                {/* Redes sociales flotantes sobre la imagen */}
                <div className="news-popup__socials-container">
                    <div className="news-popup__socials">
                        {[
                            { href: "https://www.facebook.com/ProyectosSanMarcos", label: "Facebook", color: "#1877F2", icon: <Facebook size={15} /> },
                            { href: "https://www.instagram.com/proyectossm", label: "Instagram", color: "#E1306C", icon: <Instagram size={15} /> },
                            { href: "https://www.tiktok.com/@proyectossanmarcos", label: "TikTok", color: "#000000", bgHover: "rgba(0,0,0,0.8)", icon: <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15}><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" /></svg> },
                            { href: "https://www.linkedin.com/company/proyectossm", label: "LinkedIn", color: "#0A66C2", icon: <Linkedin size={15} /> },
                        ].map(({ href, label, color, bgHover, icon }) => {
                            const finalColor = iconColor || color;
                            const finalBgHover = bgHover || finalColor;

                            return (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    style={{
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        width: 35, height: 35, borderRadius: "50%",
                                        background: "transparent",
                                        color: finalColor,
                                        border: `1.5px solid ${finalColor}`,
                                        transition: "background 0.2s, color 0.2s, transform 0.2s",
                                        textDecoration: "none",
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = finalBgHover;
                                        e.currentTarget.style.color = (label === "TikTok") ? "#fff" : "white";
                                        e.currentTarget.style.transform = "scale(1.1)";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = "transparent";
                                        e.currentTarget.style.color = finalColor;
                                        e.currentTarget.style.transform = "scale(1)";
                                    }}
                                >
                                    {icon}
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Card */}
                <div
                    className="news-popup__card"
                    style={calcCardSize()}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Información"
                >
                    {/* Botón cerrar */}
                    <button
                        className="news-popup__close"
                        onClick={handleClose}
                        aria-label="Cerrar"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {/* Imagen */}
                    <div className="news-popup__image-wrapper">
                        {imageUrl ? (
                            <img src={imageUrl} alt={altText} className="news-popup__image" onError={handleClose} />
                        ) : (
                            <div className="news-popup__image-placeholder">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                    <polyline points="21 15 16 10 5 21" />
                                </svg>
                                <span>Imagen no disponible</span>
                            </div>
                        )}
                    </div>

                    {/* Footer configurado con color de fondo dinámico por la clase o style, aunque para .news-popup__footer el background default está en CSS. Lo forzamos inline para que footerBg mande sobre el CSS. */}
                    {isButtonVisible && (
                        <div className="news-popup__footer" style={{ background: footerBg }}>

                            <button className="news-popup__btn" onClick={handleVerMas}>
                                {buttonText}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>


        </>
    );
};

export default NewsPopup;
