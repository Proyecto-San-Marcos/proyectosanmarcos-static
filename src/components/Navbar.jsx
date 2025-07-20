import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const wrapperRef = useRef(null);
  
  const listItems = [
    { name: "Inicio", link: "/" },
    { name: "¿Quienes somos?", link: "#about" },
    { name: "¿Qué hacemos?", link: "#impact" },
    { name: "Proyectos", link: "#projects" },
  ];
  
  const areasItems = [
    { name: "Capacitaciones", link: "/talento-humano/capacitaciones" },
    { name: "Clima", link: "/talento-humano/clima" },
    { name: "Control", link: "/talento-humano/control" },
    { name: "Reclutamiento", link: "/talento-humano/reclutamiento" },
  ];

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Verificar posición inicial
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Cerrar dropdown cuando se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <>
      {/* Banner En Construcción */}
      <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-center py-2 text-white font-medium relative z-50">
        <div className="container mx-auto flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>Web en construcción</span>
        </div>
      </div>

      {/* Navbar Sticky */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-white shadow-md" 
            : "bg-white/95"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="main navigation"
            className="flex h-16 md:h-20 items-center justify-between font-medium text-slate-800"
            role="navigation"
          >
            {/* Logo */}
            <a
              id="logo"
              aria-label="Logo"
              aria-current="page"
              className="flex items-center gap-2 py-3 focus:outline-none lg:flex-1"
              href="/"
            >
              <img 
                src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-psm//logo-nobg.png" 
                alt="Logo" 
                className="h-10 md:h-12 w-auto" 
              />
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-12">
              <ul className="flex items-center space-x-4">
                {listItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="block px-3 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <li className="relative" ref={wrapperRef}>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    Áreas de trabajo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`ml-1.5 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50">
                      <div className="py-1">
                        {areasItems.map((item, index) => (
                          <a
                            key={index}
                            href={item.link}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
            
            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-md text-sm font-medium text-white bg-blue-600 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
              >
                Quiero unirme
              </a>
            </div>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover: focus:outline-none"
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isToggleOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </nav>
        </div>
        
        {/* Mobile menu, show/hide based on menu state */}
        {isToggleOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {listItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="block px-3 py-2.5 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-blue-600 rounded-md"
                  onClick={() => setIsToggleOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="relative py-2">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-blue-600 rounded-md"
                >
                  Áreas de trabajo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`ml-auto h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isOpen && (
                  <div className="mt-2 space-y-1 px-3">
                    {areasItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        className="block py-2 pl-6 pr-3 text-base font-medium text-gray-600 hover:text-blue-600"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="pt-2 pb-1">
                <a
                  href="#contact"
                  className="flex items-center justify-center w-full px-4 py-2.5 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                  onClick={() => setIsToggleOpen(false)}
                >
                  Quiero unirme
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;