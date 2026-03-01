import { useState } from "react";

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const listItems = [
    { name: "Inicio", link: "/" },
    { name: "¿Quiénes somos?", link: "#about" },
    { name: "¿Qué hacemos?", link: "#impact" },
    { name: "Proyectos", link: "#projects" },
  ];

  const areasItems = [
    { name: "Capacitaciones", link: "/talento-humano/capacitaciones" },
    { name: "Clima", link: "/talento-humano/clima" },
    { name: "Control", link: "/talento-humano/control" },
    { name: "Reclutamiento", link: "/talento-humano/reclutamiento" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="flex h-16 items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-psm/logo-nobg.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {listItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </a>
            ))}

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors"
              >
                Áreas de trabajo
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-xl">
                  {areasItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-gray-50 transition"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#join"
              className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
            >
              Quiero unirme
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-slate-800"
            onClick={() => setIsToggleOpen(!isToggleOpen)}
          >
            ☰
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isToggleOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-3">
            {listItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block text-base font-medium text-slate-800"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#join"
              className="block mt-3 px-6 py-3 rounded-full bg-blue-600 text-white text-center font-semibold"
            >
              Quiero unirme
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;