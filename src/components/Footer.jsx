import { MapPin, Mail, Phone, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/ProyectosSanMarcos", icon: <Facebook size={18} /> },
  { label: "Instagram", href: "https://www.instagram.com/proyectossm", icon: <Instagram size={18} /> },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@proyectossanmarcos",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
      </svg>
    ),
  },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/proyectossm", icon: <Linkedin size={18} /> },
];

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "#about", label: "¿Quiénes somos?" },
  { href: "#impact", label: "Nuestro Impacto" },
  { href: "#projects", label: "Proyectos" },
  { href: "#presencia", label: "Nuestra Presencia" },
  { href: "#milestones", label: "Hitos Importantes" },
];

const areaLinks = [
  { href: "#organigrama", label: "Presidencia" },
  { href: "#organigrama", label: "Gerencia de PMO" },
  { href: "#organigrama", label: "Comunicaciones" },
  { href: "#organigrama", label: "Finanzas" },
  { href: "#organigrama", label: "Talento Humano" },
];

const contactItems = [
  { icon: <MapPin size={16} />, text: "Ciudad Universitaria, UNMSM, Lima, Perú" },
  { icon: <Mail size={16} />, text: "voluntariado@unmsm.edu.pe" },
  { icon: <Phone size={16} />, text: "(+51) 123-456-789" },
];

const SocialBtn = ({ label, href, icon }) => (
  <a
    aria-label={label}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center rounded-lg transition-all duration-300"
    style={{
      width: 38, height: 38,
      background: "rgba(255,255,255,0.08)",
      color: "rgba(255,255,255,0.75)",
      border: "1px solid rgba(255,255,255,0.15)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "var(--psm-teal)";
      e.currentTarget.style.color = "white";
      e.currentTarget.style.borderColor = "var(--psm-teal)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "rgba(255,255,255,0.08)";
      e.currentTarget.style.color = "rgba(255,255,255,0.75)";
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
    }}
  >
    {icon}
  </a>
);

const NavItem = ({ href, label }) => (
  <li>
    <a
      href={href}
      className="text-sm transition-colors duration-200"
      style={{ color: "rgba(255,255,255,0.75)" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--psm-teal)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
    >
      {label}
    </a>
  </li>
);

const Footer = () => (
  <footer>
    {/* ── Área principal ── */}
    <div
      className="pt-16 pb-12"
      style={{ background: "var(--psm-navy)", borderTop: "3px solid var(--psm-teal)" }}
    >
      <div className="container mx-auto px-6 xl:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">

          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-psm//logo.png"
                alt="PSM Logo"
                className="w-12 h-12 rounded-lg object-contain"
                style={{ background: "rgba(255,255,255,0.08)", padding: "4px" }}
              />
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
              Estudiantes voluntarios de la UNMSM impulsando el cambio social
              a través de la gestión de proyectos de alto impacto.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((s) => <SocialBtn key={s.label} {...s} />)}
            </div>
          </div>

          {/* Nav */}
          <nav className="lg:col-span-2" aria-label="Navegación">
            <h3
              className="mb-5 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--psm-teal)", fontFamily: "var(--psm-font-heading)" }}
            >
              Navegación
            </h3>
            <ul className="space-y-3">
              {navLinks.map((l) => <NavItem key={l.href} {...l} />)}
            </ul>
          </nav>

          {/* Áreas */}
          <nav className="lg:col-span-2" aria-label="Áreas">
            <h3
              className="mb-5 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--psm-teal)", fontFamily: "var(--psm-font-heading)" }}
            >
              Áreas
            </h3>
            <ul className="space-y-3">
              {areaLinks.map((l) => <NavItem key={l.href} {...l} />)}
            </ul>
          </nav>

          {/* Contacto */}
          <div className="lg:col-span-4">
            <h3
              className="mb-5 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--psm-teal)", fontFamily: "var(--psm-font-heading)" }}
            >
              Contacto
            </h3>
            <ul className="space-y-4">
              {contactItems.map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0" style={{ color: "var(--psm-teal)" }}>
                    {icon}
                  </span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>

    {/* ── Sub-footer ── */}
    <div style={{ background: "var(--psm-navy-dark)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="container mx-auto px-6 xl:px-20 py-4">
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          <p>
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "var(--psm-teal)" }}>Proyectos San Marcos</span>
            {" "}— Todos los derechos reservados.
          </p>
          <p>
            Hecho con ❤️ por voluntarios de la{" "}
            <span style={{ color: "var(--psm-teal)" }}>UNMSM</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
