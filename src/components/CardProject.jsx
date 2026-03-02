import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

/* ─────────────────────────────────────────────
   Modal (se renderiza en <body> via portal)
───────────────────────────────────────────── */
const ProjectModal = ({ imageUrl, title, description, onClose }) => {
  // Cerrar con Escape
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
      aria-label={title}
    >
      <div
        className="card-modal__panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen — proporción 3:4 */}
        <div className="card-modal__img-wrap">
          <img
            src={imageUrl}
            alt={title}
            className="card-modal__img"
            loading="lazy"
          />
        </div>

        {/* Contenido */}
        <div className="card-modal__body">
          <h2 className="card-modal__title">{title}</h2>
          <p className="card-modal__desc">{description}</p>
        </div>

        {/* Botón cerrar */}
        <button
          className="card-modal__close"
          onClick={onClose}
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
      </div>
    </div>,
    document.body
  );
};

/* ─────────────────────────────────────────────
   CardProject
───────────────────────────────────────────── */
const CardProject = ({ imageUrl, title, description, buttonText = "Ver más", className = "" }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <div className={`card-project ${className}`} onClick={handleOpen}>
        {/* Imagen — proporción 3:4 */}
        <div className="card-project__img-wrap">
          <img
            src={imageUrl}
            alt={title}
            className="card-project__img"
            loading="lazy"
          />
        </div>

        {/* Cuerpo */}
        <div className="card-project__body">
          <h3 className="card-project__title">{title}</h3>
        </div>
      </div>

      {open && (
        <ProjectModal
          imageUrl={imageUrl}
          title={title}
          description={description}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default CardProject;