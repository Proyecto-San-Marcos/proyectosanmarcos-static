import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ProjectTopbar = ({ nombre, logo, logoPSM, badge }) => {
  return (
    <header className="proj-topbar">
      <div className="proj-container proj-topbar__inner">
        <Link to="/" className="proj-topbar__back">
          <span className="proj-topbar__back-circle">
            <ArrowLeft size={20} />
          </span>
          <img className="proj-topbar__psm" src={logoPSM} alt="Proyectos San Marcos" />
        </Link>
        {badge ? (
          <div style={{ textAlign: "center" }}>
            <h1 className="proj-topbar__title">{nombre}</h1>
            <span className="proj-topbar__badge">
              {badge}
            </span>
          </div>
        ) : (
          <h1 className="proj-topbar__title">{nombre}</h1>
        )}
        <div className="proj-topbar__logo">
          <img src={logo} alt={`Logo ${nombre}`} />
        </div>
      </div>
    </header>
  );
};

export default ProjectTopbar;
