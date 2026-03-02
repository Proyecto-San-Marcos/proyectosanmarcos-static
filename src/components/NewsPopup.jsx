import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * NewsPopup – Ventana flotante de información
 *
 * Props:
 *  - imageUrl   : URL de la imagen a mostrar
 *  - altText    : texto alternativo de la imagen
 *  - redirectTo : ruta o URL a la que redirige el botón "Ver más"
 *  - delay      : ms antes de aparecer (default 800)
 *  - sessionKey : clave sessionStorage para no repetir (default "newsPopupSeen")
 */
const NewsPopup = ({
    imageUrl,
    altText = "Información",
    redirectTo = "/",
    delay = 800,
    sessionKey = "newsPopupSeen",
    isButtonVisible = true,
    buttonText = "Ver más",
    aspectRatio = "3/4",
}) => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const alreadySeen = sessionStorage.getItem(sessionKey);
        if (alreadySeen) return;

        const timer = setTimeout(() => setVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay, sessionKey]);

    const handleClose = () => {
        setVisible(false);
        sessionStorage.setItem(sessionKey, "true");
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
                        <img src={imageUrl} alt={altText} className="news-popup__image" />
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

                {/* Footer */}
                {isButtonVisible && (
                    <div className="news-popup__footer">
                        <button className="news-popup__btn" onClick={handleVerMas}>
                            {buttonText}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default NewsPopup;
