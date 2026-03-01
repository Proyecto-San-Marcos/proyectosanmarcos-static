import React, { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  Layers,
  Sparkles,
  ClipboardList,
  ChevronLeft,
  ChevronRight,
  ArrowLeftCircle,
  ArrowRightCircle,
} from "lucide-react";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LandingCapacitaciones = () => {
  // ✅ Beneficios (tus insumos)
  const items = useMemo(
    () => [
      {
        title: "Talleres Prácticos",
        description:
          "Aprende haciendo con actividades dinámicas y colaborativas.",
        iconBg: "bg-yellow-100",
        Icon: BookOpen,
        accent: "border-yellow-300",
        hover: "hover:bg-yellow-50",
        iconColor: "text-yellow-700",
      },
      {
        title: "Cursos Especializados",
        description:
          "Profundiza en temas clave para potenciar tu desarrollo profesional.",
        iconBg: "bg-slate-100",
        Icon: Layers,
        accent: "border-slate-300",
        hover: "hover:bg-slate-50",
        iconColor: "text-slate-700",
      },
      {
        title: "Charlas Inspiradoras",
        description: "Descubre nuevas ideas que te impulsarán a dar lo mejor de ti.",
        iconBg: "bg-purple-100",
        Icon: Sparkles,
        accent: "border-purple-300",
        hover: "hover:bg-purple-50",
        iconColor: "text-purple-700",
      },
      {
        title: "Capacitación a Medida",
        description: "Diseñamos contenidos personalizados según tus necesidades.",
        iconBg: "bg-red-100",
        Icon: ClipboardList,
        accent: "border-red-300",
        hover: "hover:bg-red-50",
        iconColor: "text-red-700",
      },
    ],
    []
  );

  // ✅ Galería (tus insumos)
  const images = useMemo(
    () => [
      "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos//PowerBI.jpeg",
      "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos//MarcaPersonal.jpeg",
      "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos//ContenidoEnRedes.jpeg",
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => setIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // ✅ Equipo (tus insumos)
  const equipo = useMemo(
    () => [
      {
        nombre: "Pedro Sanchez",
        descripcion: "Ex jefe del área",
        imagen:
          "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/img-miembros//img296%20-%20Pedro%20Sanchez.jpg",
      },
      {
        nombre: "Frank Aguilar",
        descripcion: "Jefe del área",
        imagen:
          "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/img-miembros//IMG-20240718-WA0051%20-%20WALTER%20FRANK%20AGUILAR%20MARCELO.jpg",
      },
      {
        nombre: "Joel Patricio",
        descripcion: "Jefe revocado del área",
        imagen:
          "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/img-miembros//foto%20joel%20CV%20-%20Jhoel%20Patricio.png",
      },
      {
        nombre: "Edson Condezo",
        descripcion: "Miembro activo del área",
        imagen:
          "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/img-miembros//FOTO_PSM%20-%20Edson%20Roy%20Condezo%20Figueroa.jpeg",
      },
      {
        nombre: "Alexander Pineda",
        descripcion: "Miembro activo del área.",
        imagen:
          "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/img-miembros//WhatsApp%20Image%202024-08-22%20at%2010.22.30%20AM%20-%20Alekey.jpeg",
      },
      {
        nombre: "Mallku Contreras",
        descripcion: "Miembro activo del área.",
        imagen:
          "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/img-miembros//foto_terno%20-%20MALLKU%20CONTRERAS%20GUARDIA.jpg",
      },
      {
        nombre: "Andres Arenas",
        descripcion: "Miembro activo del área.",
        imagen:
          "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/img-miembros//WhatsApp%20Image%202025-01-28%20at%2011.52.56%20PM%20-%20ANDRES%20LEHI%20ARENAS%20CHICLLA.jpeg",
      },
      {
        nombre: "Anggie Occ",
        descripcion: "Miembro activo del área.",
        imagen:
          "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/img-miembros//IMG_20240804_033019%20-%20ANGGI%20THALIA%20OCC%20CAMPOS.jpg",
      },
    ],
    []
  );

  // Carrusel equipo (responsive)
  const [current, setCurrent] = useState(0);
  const [visibles, setVisibles] = useState(3);

  useEffect(() => {
    const handleResize = () => setVisibles(window.innerWidth < 768 ? 1 : 3);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxStart = Math.max(0, equipo.length - visibles);
  const next = () => setCurrent((prev) => Math.min(prev + 1, maxStart));
  const prev = () => setCurrent((prev) => Math.max(prev - 1, 0));

  return (
    <main className="relative bg-white">
      {/* ===================== HERO ===================== */}
      <section className="w-full text-white bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Área de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Capacitación
              </span>{" "}
              y <br />
              Desarrollo
            </h1>

            <p className="text-sm md:text-base text-slate-200 mb-3 font-medium">
              Fortalecemos las habilidades de nuestros miembros a través de
              talleres y cursos dinámicos, orientados al desarrollo personal y
              profesional.
            </p>

            <p className="text-sm md:text-base text-blue-200 font-semibold">
              Trabajamos en equipo para potenciar el aprendizaje y promover el
              crecimiento continuo.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="#capacitaciones"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                Ver capacitaciones
              </a>
              <a
                href="#equipo"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/35 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Conoce al equipo
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-blue-500/15 blur-2xl" />
              <img
                src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-psm//logoCapa.png"
                alt="Logo capacitación"
                className="w-56 md:w-72 lg:w-80 h-auto relative"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== BENEFICIOS ===================== */}
      <section className="w-full py-20 px-6 bg-gradient-to-br from-white via-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-blue-600/10 blur-xl" />
              <img
                src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-lading//3D%20young%20woman%20at%20work%20with%20laptop%20writing%20Illustration.png"
                alt="Ilustración capacitación"
                className="w-[260px] md:w-[380px] lg:w-[420px] h-auto relative"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center md:text-left">
              Lo que el{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">
                Área de Capacitaciones
              </span>{" "}
              puede hacer por ti
            </h2>

            <p className="text-slate-600 mb-8 text-center md:text-left">
              Creamos experiencias prácticas, dinámicas y enfocadas en el
              crecimiento personal y profesional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map(({ title, description, Icon, iconBg, accent, hover, iconColor }) => (
                <div
                  key={title}
                  className={`flex items-start gap-4 bg-white p-5 rounded-2xl border ${accent} ${hover} transition-colors`}
                >
                  <div className={`${iconBg} p-3 rounded-xl border border-black/5`}>
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== GALERÍA ===================== */}
      <section
        id="capacitaciones"
        className="py-20 px-6 bg-gradient-to-tr from-slate-100 via-blue-50 to-slate-100"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">
            Capacitaciones Realizadas
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-xl mx-auto">
            Conoce nuestros últimos talleres y actividades para el desarrollo de habilidades profesionales.
          </p>

          {/* ✅ SOLO 1 BORDE: wrapper principal */}
          <div className="psm-swiper bg-white border border-slate-200 rounded-3xl overflow-hidden px-6 py-10">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 6500, disableOnInteraction: false }}
              spaceBetween={24}
              slidesPerView={1}
              loop
              className="w-full"
            >
              {images.map((src, i) => (
                <SwiperSlide key={src + i}>
                  {/* ✅ SIN BORDE: solo padding + fondo limpio */}
                  <div className="px-2">
                    <div className="text-sm font-semibold text-slate-700 mb-4">
                      Capacitación {i + 1}
                    </div>

                    {/* ✅ Imagen con un solo contenedor (sin borde) */}
                    <div className="rounded-2xl bg-slate-50 overflow-hidden">
                      <img
                        src={src}
                        alt={`Capacitación ${i + 1}`}
                        className="w-full h-[320px] sm:h-[460px] md:h-[560px] object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ===================== EQUIPO ===================== */}
      <section
        id="equipo"
        className="py-16 px-6 bg-gradient-to-b from-blue-100 via-indigo-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">
            Conoce al equipo
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-xl mx-auto">
            Un equipo comprometido con tu desarrollo profesional y personal.
          </p>

          {/* ✅ Wrapper blanco que tapa laterales (no se ven cards cortadas) */}
          <div className="psm-swiper bg-white border border-slate-200 rounded-3xl overflow-hidden px-6 py-10">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full"
            >
              {equipo.map((persona) => (
                <SwiperSlide key={persona.nombre}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white overflow-hidden">
                    <div className="p-6">
                      {/* Foto más “pro”: llena el contenedor */}
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden h-[220px] flex items-center justify-center">
                        <img
                          src={persona.imagen}
                          alt={persona.nombre}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      <h3 className="mt-4 text-lg font-extrabold text-center text-slate-900">
                        {persona.nombre}
                      </h3>
                      <p className="text-sm text-center text-slate-600 mt-1">
                        {persona.descripcion}
                      </p>

                      <div className="mt-5">
                        <button
                          type="button"
                          className="w-full py-2.5 rounded-full border border-blue-200 text-blue-700 font-semibold hover:bg-blue-50 transition-colors"
                          onClick={() => alert(`Ver perfil de ${persona.nombre}`)}
                        >
                          Ver perfil
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default LandingCapacitaciones;