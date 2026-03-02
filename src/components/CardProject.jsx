import { useState, useCallback } from "react";
import Modal from "./Modal";

const CardProject = ({ imageUrl, title, description, className = "" }) => {
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

        {/* Título */}
        <div className="card-project__body">
          <h3 className="card-project__title">{title}</h3>
        </div>
      </div>

      {open && (
        <Modal
          onClose={handleClose}
          label={title}
          imageUrl={imageUrl}
          imageAlt={title}
        >
          <h2 className="card-modal__title">{title}</h2>
          <p className="card-modal__desc">{description}</p>
        </Modal>
      )}
    </>
  );
};

export default CardProject;