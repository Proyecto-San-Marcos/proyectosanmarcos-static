import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [areasOpenDesktop, setAreasOpenDesktop] = useState(false);
  const [areasOpenMobile, setAreasOpenMobile] = useState(false);

  const dropdownRef = useRef(null);

  const listItems = useMemo(
    () => [
      { name: "Inicio", link: "/" },
      { name: "¿Quiénes somos?", link: "#about" },
      { name: "¿Qué hacemos?", link: "#impact" },
      { name: "Proyectos", link: "#projects" },
    ],
    []
  );

  const areasItems = useMemo(
    () => [
      { name: "Clima", link: "/talento-humano/clima" },
      { name: "Control", link: "/talento-humano/control" },
      { name: "Reclutamiento", link: "/talento-humano/reclutamiento" },
    ],
    []
  );

  const closeAll = () => {
    setMobileOpen(false);
    setAreasOpenDesktop(false);
    setAreasOpenMobile(false);
  };

  // Cerrar dropdown desktop (click afuera / ESC)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeAll();
    };

    const onClick = (e) => {
      if (!dropdownRef.current) return;
      if (areasOpenDesktop && !dropdownRef.current.contains(e.target)) {
        setAreasOpenDesktop(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [areasOpenDesktop]);

  // Lock scroll cuando mobileOpen
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  const scrollToHash = (hash) => {
    if (!hash?.startsWith("#")) return;
    const el = document.querySelector(hash);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
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

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("/")}
            className="flex items-center gap-2"
            aria-label="Ir al inicio"
            type="button"
          >
            <img
              src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-psm/logo-nobg.png"
              alt="Logo"
              className="h-10 w-auto"
              loading="lazy"
            />
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-8">
            {listItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNav(item.link)}
                className="text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                type="button"
              >
                {item.name}
              </button>
            ))}

            {/* Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setAreasOpenDesktop((v) => !v)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                type="button"
                aria-haspopup="menu"
                aria-expanded={areasOpenDesktop}
              >
                Áreas de trabajo
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform ${areasOpenDesktop ? "rotate-180" : ""
                    }`}
                />
              </button>

              {areasOpenDesktop && (
                <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-slate-100 bg-white">
                  <div className="px-3 py-2 text-xs font-semibold text-slate-500">
                    Talento humano
                  </div>
                  <div className="h-px bg-slate-100" />
                  {areasItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNav(item.link)}
                      className="w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition"
                      type="button"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA desktop */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNav("#join")}
              className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
              type="button"
            >
              Quiero unirme
            </button>
          </div>

          {/* Mobile button */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 px-3 py-2 text-slate-900 hover:bg-slate-50 transition"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            type="button"
          >
            {mobileOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* ✅ Portal: el drawer sale fuera del layout y SIEMPRE se ve */}
      {mobileOpen &&
        createPortal(
          <div className="fixed inset-0 z-[9999] lg:hidden">
            {/* overlay */}
            <button
              className="absolute inset-0 bg-black/35"
              onClick={closeAll}
              aria-label="Cerrar menú"
              type="button"
            />

            {/* panel full screen para evitar “ver el fondo” */}
            <aside className="absolute inset-0 bg-white">
              {/* header panel */}
              <div className="flex h-16 items-center justify-between px-5 border-b border-slate-100">
                <img
                  src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-psm/logo-nobg.png"
                  alt="Logo"
                  className="h-9 w-auto"
                  loading="lazy"
                />
                <button
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-3 py-2 text-slate-900 hover:bg-slate-50 transition"
                  onClick={closeAll}
                  aria-label="Cerrar"
                  type="button"
                >
                  <XIcon className="h-5 w-5" />
                </button>
              </div>

              {/* content */}
              <div className="h-[calc(100%-64px)] overflow-y-auto px-5 py-4">
                <div className="space-y-1">
                  {listItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNav(item.link)}
                      className="w-full text-left rounded-xl px-4 py-3 text-[15px] font-semibold text-slate-900 hover:bg-slate-50 transition"
                      type="button"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

                <div className="my-4 h-px bg-slate-100" />

                {/* Áreas acordeón */}
                <button
                  onClick={() => setAreasOpenMobile((v) => !v)}
                  className="w-full flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold text-slate-900 hover:bg-slate-50 transition"
                  type="button"
                  aria-expanded={areasOpenMobile}
                >
                  <span>Áreas de trabajo</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 transition-transform ${areasOpenMobile ? "rotate-180" : ""}`}
                  />
                </button>

                {areasOpenMobile && (
                  <div className="mt-2 space-y-1 pl-1">
                    {areasItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNav(item.link)}
                        className="w-full text-left rounded-xl px-4 py-3 text-[14px] font-medium text-slate-700 hover:bg-slate-50 transition"
                        type="button"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}

                <div className="my-5 h-px bg-slate-100" />

                <button
                  onClick={() => handleNav("#join")}
                  className="w-full rounded-full bg-blue-600 text-white py-3 text-[15px] font-semibold hover:bg-blue-700 transition inline-flex items-center justify-center gap-2"
                  type="button"
                >
                  Quiero unirme <ArrowRightIcon className="h-4 w-4" />
                </button>

                <p className="mt-3 text-xs text-slate-500 text-center">
                  Proceso claro · Comunicación rápida
                </p>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </header>
  );
};

export default Navbar;

/* Icons inline */
function MenuIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function XIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDownIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h12M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}