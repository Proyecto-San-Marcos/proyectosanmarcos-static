import { useEffect } from "react";
import { createPortal } from "react-dom";

/**
 * Modal – componente reutilizable
 *
 * Props:
 *  - onClose      : función para cerrar el modal (requerido)
 *  - label        : texto para aria-label (accesibilidad)
 *  - imageUrl     : URL de la imagen a mostrar en la columna izquierda (opcional)
 *  - imageAlt     : alt de la imagen
 *  - children     : contenido del panel derecho (o único si no hay imagen)
 *  - className    : clase extra para el panel
 */
const Modal = ({ onClose, label = "Modal", imageUrl, imageAlt = "", children, className = "" }) => {
    // Cerrar con Escape y bloquear scroll del body
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return createPortal(
        <div
            className="card-modal__overlay"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={label}
        >
            <div
                className={`card-modal__panel ${className}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Imagen lateral (opcional) */}
                {imageUrl && (
                    <div className="card-modal__img-wrap">
                        <img
                            src={imageUrl}
                            alt={imageAlt}
                            className="card-modal__img"
                            loading="lazy"
                        />
                    </div>
                )}

                {/* Cuerpo / contenido */}
                <div className="card-modal__body">
                    {children}
                </div>

                {/* Botón cerrar */}
                <button className="card-modal__close" onClick={onClose} aria-label="Cerrar">
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
            </div>
        </div>,
        document.body
    );
};

export default Modal;
