import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const listItems = [
    {
      name: "Inicio",
      link: "/",
    },
    {
      name: "¿Quienes somos?",
      link: "/about",
    },
    {
      name: "¿Qué hacemos?",
      link: "#",
    },
    {
      name: "Voluntariado",
      link: "#",
    },
  ];

  const areasItems = [
    {
      name: "Capacitaciones",
      link: "/talento-humano/capacitaciones",
    },
    {
      name: "Clima",
      link: "/talento-humano/clima",
    },
    {
      name: "Control",
      link: "/talento-humano/control",
    },
    {
      name: "Reclutamiento",
      link: "/talento-humano/reclutamiento",
    },
  ];

  //funcion para cuando sale del ref se cierre 
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
      <header
        className={`border-b-1 relative z-20 w-full border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden`}
      >
        <div className="relative mx-auto max-w-full px-6">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Logo --> */}
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              href="javascript:void(0)"
            >
              <img src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-psm//logo-nobg.png" alt="" className="w-20" />
            </a>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                    ${
                      isToggleOpen
                        ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                        : ""
                    }
                  `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              {listItems.map((item, index) => (
                <li key={index} role="none" className="flex items-stretch">
                  <a
                    role="menuitem"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-neutral-500 focus:text-neutral-600 focus:outline-none focus-visible:outline-none lg:px-8"
                    href={item.link}
                  >
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="true"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-neutral-500 focus:text-neutral-600 focus:outline-none focus-visible:outline-none lg:px-8 cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-expanded={isOpen ? " true" : "false"}
                >
                  <span>Áreas de trabajo</span>
                  <span className="relative only:-mx-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-labelledby="t-01 d-01"
                      role="graphics-symbol"
                    >
                      <title id="t-01">Button icon</title>
                      <desc id="d-01">
                        An icon describing the buttons usage
                      </desc>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </a>
                {/*  <!-- Start Menu list --> */}
                <ul
                  className={`${
                    isOpen ? "flex" : "hidden"
                  } absolute top-full z-10 mt-1 flex w-72 list-none flex-col rounded bg-white py-2 shadow-md shadow-slate-500/10 `}
                  ref={wrapperRef}
                >
                  {areasItems.map((item, index) => {
                    return (
                      <li key={index}
                      >
                        <a
                          className={` flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 hover:bg-neutral-50 hover:text-neutral-500 focus:bg-neutral-50 focus:text-neutral-600 focus:outline-none focus-visible:outline-none`}
                          href={item.link}
                        >
                          <span className="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
                            <span className="truncate leading-5">
                              {item.name}
                            </span>
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              <button className="btn btn-primary">Quiero unirme</button>
            </div>
          </nav>
        </div>
      </header>
      {/*<!-- End Basic Navbar--> */}
    </>
  );
};

export default Navbar;
