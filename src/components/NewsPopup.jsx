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

    if (!visible) return null;

    return (
        <>
            {/* Overlay */}
            <div className="news-popup__overlay" onClick={handleClose} />

            {/* Card */}
            <div
                className="news-popup__card"
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
                <div className="news-popup__footer">
                    <button className="news-popup__btn" onClick={handleVerMas}>
                        Ver más
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
            </div>
        </>
    );
};

export default NewsPopup;
