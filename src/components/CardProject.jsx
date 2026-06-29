import { useState } from "react";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CardProject = ({ imageUrl, title, description, link, className = "", color = "#FFFFFF" }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (link) navigate(link);
  };

  return (
    <>
      {/* ── Card ── */}
      <div
        className={`card-project ${className}`}
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ cursor: "pointer", position: "relative", borderRadius: "0.75rem", overflow: "hidden", boxShadow: "var(--psm-shadow-card)", transition: "box-shadow 0.3s", boxShadow: hovered ? "0 12px 40px rgba(0,180,216,0.25)" : "var(--psm-shadow-card)" }}
      >
        {/* Imagen */}
        <div className="card-project__img-wrap" style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={imageUrl}
            alt={title}
            className="card-project__img"
            loading="lazy"
            style={{ transition: "transform 0.5s ease", transform: hovered ? "scale(1.08)" : "scale(1)" }}
          />

          {/* Overlay hover */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              background: "rgba(10,22,40,0.72)",
              backdropFilter: "blur(3px)",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.35s ease",
              pointerEvents: hovered ? "auto" : "none",
            }}
          >
            {/* Ícono circular */}
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: "var(--psm-teal)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: hovered ? "translateY(0) scale(1)" : "translateY(12px) scale(0.8)",
                transition: "transform 0.35s ease",
                boxShadow: "0 0 0 4px rgba(0,180,216,0.25)",
              }}
            >
              <Eye size={22} color="white" />
            </div>

            {/* Texto */}
            <span
              style={{
                color: "white",
                fontSize: "0.8rem",
                fontFamily: "var(--psm-font-heading)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                transform: hovered ? "translateY(0)" : "translateY(10px)",
                transition: "transform 0.35s ease 0.05s",
              }}
            >
              Ver proyecto
            </span>
          </div>
        </div>

        {/* Título */}
        <div
          className="card-project__body"
          style={{
            backgroundColor: color,
            transition: "filter 0.3s",
            filter: hovered ? "brightness(1.08)" : "brightness(1)",
          }}
        >
          <h3 className="card-project__title">{title}</h3>
        </div>
      </div>

    </>
  );
};

export default CardProject;