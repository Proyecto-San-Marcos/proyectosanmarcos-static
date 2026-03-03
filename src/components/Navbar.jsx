import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [areasOpenDesktop, setAreasOpenDesktop] = useState(false);
  const [areasOpenMobile, setAreasOpenMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);

  const listItems = useMemo(() => [
    { name: "Inicio", link: "/" },
    { name: "¿Quiénes somos?", link: "#about" },
    { name: "¿Qué hacemos?", link: "#impact" },
    { name: "Proyectos", link: "#projects" },
  ], []);

  const areasItems = useMemo(() => [
    { name: "Clima", link: "/talento-humano/clima" },
    { name: "Control", link: "/talento-humano/control" },
    { name: "Reclutamiento", link: "/talento-humano/reclutamiento" },
  ], []);

  const closeAll = () => {
    setMobileOpen(false);
    setAreasOpenDesktop(false);
    setAreasOpenMobile(false);
  };

  // Sombra al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar dropdown desktop con click afuera / ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeAll(); };
    const onClick = (e) => {
      if (areasOpenDesktop && dropdownRef.current && !dropdownRef.current.contains(e.target))
        setAreasOpenDesktop(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [areasOpenDesktop]);

  // Lock scroll en menú móvil
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  const scrollToHash = (hash) => {
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNav = (href) => {
    if (href.startsWith("#")) {
      closeAll();
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToHash(href), 120);
        return;
      }
      scrollToHash(href);
      return;
    }
    closeAll();
    navigate(href);
  };

  /* ── Estilos de link de navegación ── */
  const linkStyle = {
    fontFamily: "var(--psm-font-body)",
    fontWeight: 600,
    fontSize: "0.875rem",
    color: "var(--psm-navy-mid)",
    background: "none",
    border: "none",
    cursor: "pointer",
    transition: "color 0.2s",
    padding: "4px 0",
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur"
      style={{
        borderBottom: scrolled
          ? "2px solid var(--psm-teal)"
          : "1px solid var(--psm-gray-mid)",
        transition: "border-color 0.3s, box-shadow 0.3s",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav className="flex h-16 items-center justify-between">

          {/* Logo + Nombre */}
          <button
            onClick={() => handleNav("/")}
            className="flex items-center gap-2"
            aria-label="Ir al inicio"
            type="button"
          >
            <img
              src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-psm/logo-nobg.png"
              alt="PSM Logo"
              className="h-12 w-auto"
              loading="lazy"
            />
          </button>

          {/* ── Desktop menu ── */}
          <div className="hidden lg:flex items-center gap-8">
            {listItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNav(item.link)}
                style={linkStyle}
                type="button"
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--psm-teal)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--psm-navy-mid)")}
              >
                {item.name}
              </button>
            ))}

            {/* Dropdown áreas */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setAreasOpenDesktop((v) => !v)}
                style={linkStyle}
                className="inline-flex items-center gap-1"
                type="button"
                aria-haspopup="menu"
                aria-expanded={areasOpenDesktop}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--psm-teal)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--psm-navy-mid)")}
              >
                Áreas de trabajo
                <ChevronDown
                  size={16}
                  style={{ transition: "transform 0.2s", transform: areasOpenDesktop ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {areasOpenDesktop && (
                <div
                  className="absolute right-0 mt-3 w-56 overflow-hidden rounded-xl bg-white"
                  style={{ border: "1px solid var(--psm-gray-mid)", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
                >
                  <div
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "var(--psm-teal)", fontFamily: "var(--psm-font-heading)", borderBottom: "1px solid var(--psm-gray-mid)" }}
                  >
                    Talento humano
                  </div>
                  {areasItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNav(item.link)}
                      className="w-full text-left px-4 py-3 text-sm transition-colors"
                      style={{ fontFamily: "var(--psm-font-body)", color: "var(--psm-navy-mid)" }}
                      type="button"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--psm-gray-light)";
                        e.currentTarget.style.color = "var(--psm-teal)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--psm-navy-mid)";
                      }}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── Botón hamburguesa (móvil) ── */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-xl px-3 py-2 transition"
            style={{
              border: "1px solid var(--psm-gray-mid)",
              color: "var(--psm-navy-mid)",
            }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            type="button"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* ── Drawer móvil (portal) ── */}
      {mobileOpen &&
        createPortal(
          <div className="fixed inset-0 z-[9999] lg:hidden">
            {/* overlay */}
            <button
              className="absolute inset-0"
              style={{ background: "rgba(10,22,40,0.5)" }}
              onClick={closeAll}
              aria-label="Cerrar menú"
              type="button"
            />

            {/* panel */}
            <aside
              className="absolute inset-0 flex flex-col"
              style={{ background: "white" }}
            >
              {/* Header del panel */}
              <div
                className="flex h-16 items-center justify-between px-5"
                style={{ borderBottom: "2px solid var(--psm-teal)" }}
              >
                <div className="flex items-center gap-2">
                  <img
                    src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-psm/logo-nobg.png"
                    alt="PSM Logo"
                    className="h-12 w-auto"
                    loading="lazy"
                  />
                </div>
                <button
                  className="inline-flex items-center justify-center rounded-xl px-3 py-2 transition"
                  style={{ border: "1px solid var(--psm-gray-mid)", color: "var(--psm-navy-mid)" }}
                  onClick={closeAll}
                  aria-label="Cerrar"
                  type="button"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto px-5 py-6">
                <div className="space-y-1">
                  {listItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNav(item.link)}
                      className="w-full text-left rounded-xl px-4 py-3 transition-colors"
                      style={{
                        fontFamily: "var(--psm-font-body)",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: "var(--psm-navy-mid)",
                      }}
                      type="button"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--psm-gray-light)";
                        e.currentTarget.style.color = "var(--psm-teal)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--psm-navy-mid)";
                      }}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

                <div className="my-4 h-px" style={{ background: "var(--psm-gray-mid)" }} />

                {/* Áreas acordeón */}
                <button
                  onClick={() => setAreasOpenMobile((v) => !v)}
                  className="w-full flex items-center justify-between rounded-xl px-4 py-3 transition-colors"
                  style={{
                    fontFamily: "var(--psm-font-body)",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "var(--psm-navy-mid)",
                  }}
                  type="button"
                  aria-expanded={areasOpenMobile}
                >
                  <span>Áreas de trabajo</span>
                  <ChevronDown
                    size={18}
                    style={{ transition: "transform 0.2s", transform: areasOpenMobile ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                {areasOpenMobile && (
                  <div className="mt-1 space-y-1 pl-2">
                    {areasItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNav(item.link)}
                        className="w-full text-left rounded-xl px-4 py-2.5 text-sm transition-colors"
                        style={{
                          fontFamily: "var(--psm-font-body)",
                          color: "var(--psm-text-body)",
                        }}
                        type="button"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "var(--psm-gray-light)";
                          e.currentTarget.style.color = "var(--psm-teal)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "var(--psm-text-body)";
                        }}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}

                <div className="my-6 h-px" style={{ background: "var(--psm-gray-mid)" }} />
              </div>
            </aside>
          </div>,
          document.body
        )}
    </header>
  );
};

export default Navbar;