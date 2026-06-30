import React from "react";

const TikTokIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
  </svg>
);

const ProjectFooter = ({ footer, logoPSM }) => {
  if (!footer) return null;

  return (
    <footer className="proj-footer">
      <div className="proj-container proj-footer__grid">
        {/* Columna Brand */}
        <div className="proj-footer__brand">
          <img className="proj-footer__logo" src={logoPSM} alt="Proyectos San Marcos" />
          <p>{footer.descripcion}</p>
          <div className="proj-footer__socials">
            {footer.redes?.map((r, i) => {
              const Icon = r.icon === "tiktok" ? TikTokIcon : r.icon;
              return (
                <a
                  href={r.href}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={r.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Columna Navegación */}
        <div className="proj-footer__col">
          <h3>Navegación</h3>
          <ul>
            {footer.navegacion?.map((n, i) => (
              <li key={i}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna Contacto */}
        <div className="proj-footer__col">
          <h3>Contacto</h3>
          <ul>
            {footer.contacto?.map((c, i) => (
              <li key={i}>
                <div className="proj-footer__contact">
                  <c.icon size={16} />
                  <span>{c.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default ProjectFooter;
