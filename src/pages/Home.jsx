import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users, CheckCircle2, Zap, ArrowRight,
  BarChart3, Star, Handshake, GraduationCap, Sprout,
  FolderOpen, MessageCircle, Quote,
  Target, Eye, Flag, Network,
  Globe, Facebook, Instagram, Linkedin,
  ArrowDown
} from "lucide-react";
import Footer from "../components/Footer";
import CardProject from "../components/CardProject";
import NewsPopup from "../components/NewsPopup";
import Modal from "../components/Modal";
import OrganigramaGallery from "../components/OrganigramaGallery";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [impactModal, setImpactModal] = useState(null);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const [statsRefInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [showAllMilestones, setShowAllMilestones] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out" });
    setIsVisible(true);

    const heroElement = heroRef.current;
    if (heroElement) {
      gsap.fromTo(
        heroElement.querySelector(".hero-content"),
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
      const tl = gsap.timeline({
        scrollTrigger: { trigger: heroElement, start: "top top", end: "bottom top", scrub: true },
      });
      tl.to(heroElement.querySelector(".hero-bg"), { y: 100, scale: 1.1 });
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const testimonials = [
    { id: 1, name: "Carlos Mendoza", role: "Estudiante de Ingeniería", image: "https://randomuser.me/api/portraits/men/32.jpg", text: "Participar en este voluntariado ha sido una de las mejores decisiones de mi vida universitaria. He adquirido habilidades que ninguna clase podría enseñarme y he formado parte de proyectos que realmente hacen la diferencia." },
    { id: 2, name: "Ana Ramírez", role: "Estudiante de Administración", image: "https://randomuser.me/api/portraits/women/44.jpg", text: "El ambiente colaborativo y enfocado en resultados me ha permitido aplicar lo que aprendo en clase en contextos reales. Ahora me siento más preparada para mi futuro profesional." },
    { id: 3, name: "Dr. Felipe Gutiérrez", role: "Docente UNMSM", image: "https://randomuser.me/api/portraits/men/46.jpg", text: "Como docente, he visto cómo esta iniciativa transforma a los estudiantes, desarrollando su liderazgo y compromiso social. La universidad necesita más espacios como este." },
    { id: 4, name: "Laura Torres", role: "Coordinadora de Proyectos", image: "https://randomuser.me/api/portraits/women/65.jpg", text: "Lo que más valoro es cómo potenciamos el talento de cada voluntario mientras generamos un impacto social tangible. Es inspirador ver cómo crecen profesionalmente mientras ayudan a otros." },
  ];

  const services = [
    { id: 1, icon: <Handshake size={32} color="white" />, title: "Gestión de Proyectos", description: "Implementamos metodologías efectivas para la planificación y ejecución de proyectos que generan impacto real en nuestra comunidad universitaria y sociedad." },
    { id: 2, icon: <GraduationCap size={32} color="white" />, title: "Capacitación y Desarrollo", description: "Ofrecemos talleres y programas formativos para estudiantes interesados en adquirir habilidades de liderazgo, trabajo en equipo y gestión de recursos." },
    { id: 3, icon: <Sprout size={32} color="white" />, title: "Responsabilidad Social", description: "Desarrollamos iniciativas que abordan problemas sociales y contribuyen al desarrollo sostenible de nuestras comunidades a través de acciones concretas y medibles." },
  ];

  return (
    <div className="overflow-hidden">
      {/* Popup */}
      <NewsPopup
        imageUrl="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/banner_popups/popup_activo.webp"
        altText="Última hora"
        redirectTo="/"
        delay={800}
        isButtonVisible={false}
        aspectRatio="3/4"
      />

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative h-[calc(100dvh-64px)] md:h-[calc(100dvh-60px)] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 hero-bg">
          <img
            src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos//foto_grupal.jpeg"
            alt="Estudiantes voluntarios de UNMSM"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,22,40,0.88) 0%, rgba(15,32,68,0.94) 100%)" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="font-bold text-white mb-4 tracking-tight leading-tight"
              style={{ fontFamily: "var(--psm-font-heading)", fontSize: "clamp(2.4rem, 7vw, 5rem)", textTransform: "uppercase", letterSpacing: "0.04em" }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            >
              Proyectos{" "}
              <span style={{ color: "var(--psm-teal)" }}>San Marcos</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            >
              Estudiantes voluntarios impulsando el cambio social a través de la gestión de proyectos de alto impacto.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a href="#about" className="psm-btn-primary">Conoce más</a>
              <a href="#projects" className="psm-btn-outline">Ver proyectos</a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }} className="flex flex-col items-center">
            <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center pt-1">
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }} className="w-1.5 h-3 bg-white rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      <main className="flex-1">

        {/* ── Quiénes Somos ── */}
        <section className="py-24 psm-section-light" id="about">
          <div className="container mx-auto px-6 xl:px-20">

            {/* Bloque principal: foto + texto */}
            <div className="flex flex-col lg:flex-row items-center gap-16 mb-20" data-aos="fade-up">
              {/* Foto */}
              <div className="lg:w-2/5">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-20 h-20 rounded-lg z-0" style={{ background: "var(--psm-teal-subtle)", border: "2px solid var(--psm-teal)" }} />
                  <div className="rounded-xl overflow-hidden relative z-10" style={{ border: "2px solid var(--psm-teal)" }}>
                    <img
                      src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos//grupo.jpeg"
                      alt="Comunidad PSM"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg z-0" style={{ background: "var(--psm-teal-subtle)", border: "2px solid var(--psm-teal)" }} />
                </div>
              </div>

              {/* Texto */}
              <div className="lg:w-3/5" data-aos="fade-left" data-aos-delay="200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="psm-icon-circle psm-icon-circle--solid">
                    <Users size={24} color="white" />
                  </div>
                  <h2 className="psm-heading text-4xl md:text-5xl" style={{ color: "var(--psm-navy-mid)" }}>
                    <span style={{ color: "var(--psm-teal)" }}>¿Quiénes</span> Somos?
                  </h2>
                </div>
                <div className="psm-divider mb-6" />

                <p className="text-gray-700 text-lg mb-5 leading-relaxed">
                  Somos una <strong>comunidad estudiantil de voluntarios</strong> comprometidos con el aprendizaje constante, la gestión de proyectos y la responsabilidad social.
                </p>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Nos motiva ser parte del cambio hacia una sociedad más <strong>justa, digna y con mayores oportunidades para todos</strong>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  {[
                    { icon: <CheckCircle2 size={20} />, title: "Compromiso Social", desc: "Motivados por un cambio positivo y duradero" },
                    { icon: <Zap size={20} />, title: "Aprendizaje Constante", desc: "Crecemos junto a cada proyecto que gestionamos" },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div className="psm-icon-circle" style={{ width: 44, height: 44 }}>
                        {icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-gray-800">{title}</h4>
                        <p className="text-gray-600 text-sm">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="psm-buttons">
                  <a href="#milestones" className="psm-btn-primary">
                  Conoce Nuestra Historia
                  <ArrowRight size={16} />
                </a>
                
                <a href="/comunidad" className="psm-btn-secondary">
                  Conoce a Nuestra Comunidad
                  <ArrowRight size={16} />
                </a>
                </div>
                
              </div>
            </div>

            {/* ¿Qué Buscamos? */}
            <div data-aos="fade-up">
              <div className="flex items-center gap-3 mb-8">
                <h3 className="psm-heading text-3xl md:text-4xl" style={{ color: "var(--psm-navy-mid)" }}>
                  ¿Qué <span style={{ color: "var(--psm-teal)" }}>Buscamos</span>?
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <FolderOpen size={28} color="white" />,
                    title: "Proyectos",
                    items: ["Innovación", "Colaboración", "Responsabilidad"],
                  },
                  {
                    icon: <Users size={28} color="white" />,
                    title: "Sociedad",
                    items: ["Conciencia Social", "Transformación Social", "Ciudadanía activa", "Sostenibilidad Social"],
                  },
                  {
                    icon: <Target size={28} color="white" />,
                    title: "Metas",
                    items: ["Compromiso", "Cultura", "Liderazgo", "Propósito"],
                  },
                ].map(({ icon, title, items }, i) => (
                  <div
                    key={title}
                    className="rounded-xl p-7 bg-white"
                    style={{ border: "1px solid var(--psm-gray-mid)", boxShadow: "var(--psm-shadow-card)", transition: "border-color 0.3s, box-shadow 0.3s" }}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--psm-teal)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,180,216,0.15)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--psm-gray-mid)"; e.currentTarget.style.boxShadow = "var(--psm-shadow-card)"; }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="psm-icon-circle psm-icon-circle--solid" style={{ width: 52, height: 52 }}>
                        {icon}
                      </div>
                      <h4 className="psm-heading text-2xl" style={{ color: "var(--psm-navy-mid)" }}>
                        {title}
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--psm-teal)" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── Misión & Visión ── */}
        <section className="py-24 psm-section-white" id="mision">
          <div className="container mx-auto px-6 xl:px-20">
            <div className="flex flex-col lg:flex-row gap-16 items-center" data-aos="fade-up">

              {/* Misión + Visión */}
              <div className="lg:w-3/5 w-full space-y-12">

                {/* Misión */}
                <div data-aos="fade-left" data-aos-delay="100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="psm-icon-circle psm-icon-circle--solid">
                      <Target size={22} color="white" />
                    </div>
                    <h2 className="psm-heading text-4xl" style={{ color: "var(--psm-navy-mid)" }}>
                      <span style={{ color: "var(--psm-teal)" }}>M</span>isión
                    </h2>
                  </div>
                  <div className="psm-divider mb-5" />
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Difundir y promover las buenas prácticas en gestión de proyectos alineados a los Objetivos de Desarrollo Sostenible (ODS) y las necesidades de la sociedad, fortaleciendo la organización y formando futuros gestores de proyectos.
                  </p>
                </div>

                {/* Separador */}
                <div style={{ height: 1, background: "var(--psm-gray-mid)" }} />

                {/* Visión */}
                <div data-aos="fade-left" data-aos-delay="200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="psm-icon-circle psm-icon-circle--solid">
                      <Eye size={22} color="white" />
                    </div>
                    <h2 className="psm-heading text-4xl" style={{ color: "var(--psm-navy-mid)" }}>
                      <span style={{ color: "var(--psm-teal)" }}>V</span>isión
                    </h2>
                  </div>
                  <div className="psm-divider mb-5" />
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Ser el voluntariado más prestigioso a nivel nacional, con proyectos ambiciosos y voluntarios amantes de la excelencia, que generen una huella en la UNMSM y el Perú entero.
                  </p>
                </div>

              </div>

              {/* Imagen lateral */}
              <div className="lg:w-2/5 w-full">
                <div className="relative rounded-2xl overflow-hidden" style={{ border: "2px solid var(--psm-teal)" }}>
                  <img
                    src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/psiqueafest.webp"
                    alt="Equipo PSM"
                    className="w-full h-full object-cover"
                    style={{ minHeight: 340, maxHeight: 480 }}
                  />
                  {/* Badge flotante */}
                  <div
                    className="absolute bottom-4 left-4 px-4 py-2 rounded-xl"
                    style={{ background: "var(--psm-navy)", border: "1px solid var(--psm-teal)" }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--psm-teal)", fontFamily: "var(--psm-font-heading)" }}>
                      Desde 2011
                    </p>
                    <p className="text-white text-sm font-semibold">Transformando la UNMSM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Nuestro Impacto ── */}
        <section className="py-24 psm-section-white" id="impact" ref={statsRef}>
          <div className="container mx-auto px-6 xl:px-20">

            {/* Header */}
            <div className="text-center mb-6" data-aos="fade-up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="psm-icon-circle psm-icon-circle--solid">
                  <BarChart3 size={24} color="white" />
                </div>
                <h2 className="psm-heading text-4xl md:text-5xl text-left md:text-center" style={{ color: "var(--psm-navy-mid)" }}>
                  Nuestro <span style={{ color: "var(--psm-teal)" }}>Impacto</span>
                </h2>
              </div>
              <p className="max-w-3xl mx-auto text-lg leading-relaxed text-justify md:text-center" style={{ color: "var(--psm-text-body)" }}>
                Nuestra labor se sostiene sobre cuatro ejes: las <strong>actividades</strong> que movilizan a nuestros voluntarios y benefician a la comunidad; los <strong>resultados concretos</strong> que demuestran el alcance de cada iniciativa; las <strong>redes de colaboración</strong> con aliados que amplían nuestro trabajo; y la <strong>visibilidad</strong> que hemos ganado tanto en la UNMSM como en espacios digitales.
              </p>
              <div className="psm-divider mx-auto mt-4" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20" data-aos="fade-up" data-aos-delay="200">
              {[
                { value: 70, suffix: "+", label: "Proyectos desde 2011", delay: 0 },
                { value: 200, suffix: "+", label: "Beneficiarios en el último año", delay: 0.15 },
                { value: 165, suffix: "+", label: "Animalitos esterilizados", delay: 0.3 },
                { value: 5, suffix: "", label: "Ediciones de 4 Patas", delay: 0.45 },
              ].map(({ value, suffix, label, delay }) => (
                <div key={label} className="p-8 rounded-xl flex flex-col items-center text-center" style={{ background: "white", border: "1px solid var(--psm-gray-mid)", boxShadow: "var(--psm-shadow-card)" }}>
                  <div className="text-5xl font-bold mb-2" style={{ color: "var(--psm-teal)", fontFamily: "var(--psm-font-heading)" }}>
                    {statsRefInView && <CountUp start={0} end={value} duration={2.5} separator="," delay={delay} suffix={suffix} />}
                  </div>
                  <p className="font-medium text-base leading-snug" style={{ color: "var(--psm-text-body)" }}>{label}</p>
                </div>
              ))}
            </div>

            {/* ¿Qué actividades realizamos? */}
            <div data-aos="fade-up">
              <div className="mb-3">
                <h3 className="psm-heading text-3xl md:text-4xl" style={{ color: "var(--psm-navy-mid)" }}>
                  ¿Qué <span style={{ color: "var(--psm-teal)" }}>Actividades</span> Realizamos?
                </h3>
              </div>
              <p className="text-lg mb-10 leading-relaxed" style={{ color: "var(--psm-text-body)" }}>
                A lo largo del año, hemos organizado una serie de actividades diseñadas para potenciar las habilidades técnicas y fortalecer el espíritu de equipo entre nuestros voluntarios.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Webinars Virtuales",
                    shortDesc: "Charlas formativas sobre gestión de proyectos, metodologías ágiles y liderazgo dictadas por profesionales del sector.",
                    fullDesc: "Charlas formativas sobre gestión de proyectos, metodologías ágiles y liderazgo, dictadas por profesionales del sector para fortalecer las capacidades de nuestros voluntarios. Cada webinar aborda temáticas clave que permiten a los participantes adquirir herramientas prácticas aplicables en sus proyectos.",
                    image: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/tallervirtual.jpg",
                    icon: <Users size={20} color="white" />,
                  },
                  {
                    title: "Taller de Scrum",
                    shortDesc: "Iniciativa de PMO para fortalecer a los miembros en el marco de trabajo Scrum, con base en los webinars previos.",
                    fullDesc: "Iniciativa liderada por la PMO para seguir fortaleciendo a los miembros en este marco de trabajo ágil. Tiene como antecedente los webinars de SCRUM que se realizaron anteriormente. Los participantes aplican metodologías ágiles en simulaciones de proyectos reales.",
                    image: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/scrum.jpg",
                    icon: <Zap size={20} color="white" />,
                  },
                  {
                    title: "Taller de Power BI",
                    shortDesc: "Sesiones virtuales donde se explica la herramienta Power BI para estudiantes, desde el nivel básico hasta avanzado.",
                    fullDesc: "Sesiones virtuales en donde se explicó la herramienta de Power BI para estudiantes, desde el nivel básico hasta el nivel avanzado. Los participantes aprenden a crear dashboards interactivos, visualizar datos y generar reportes profesionales aplicados a la gestión de proyectos.",
                    image: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/powerbi.jpg",
                    icon: <BarChart3 size={20} color="white" />,
                  },
                  {
                    title: "Integraciones",
                    shortDesc: "Espacios recreativos para fortalecer los lazos entre voluntarios a través de dinámicas grupales y juegos colaborativos.",
                    fullDesc: "Espacios recreativos pensados para fortalecer los lazos entre voluntarios a través de dinámicas grupales, juegos colaborativos y momentos de esparcimiento. Las integraciones son fundamentales para construir una comunidad sólida, fomentar la confianza y mantener el espíritu de equipo que caracteriza a PSM.",
                    image: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/integra.jpg",
                    icon: <Star size={20} color="white" />,
                  },
                ].map((act, i) => (
                  <div
                    key={act.title}
                    className="rounded-xl overflow-hidden flex flex-col bg-white"
                    style={{ border: "1px solid var(--psm-gray-mid)", boxShadow: "var(--psm-shadow-card)", transition: "border-color 0.3s, box-shadow 0.3s" }}
                    data-aos="fade-up"
                    data-aos-delay={i * 80}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--psm-teal)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,180,216,0.15)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--psm-gray-mid)"; e.currentTarget.style.boxShadow = "var(--psm-shadow-card)"; }}
                  >
                    {/* Imagen */}
                    <div className="relative h-40 overflow-hidden">
                      <img src={act.image} alt={act.title} className="w-full h-full object-cover" />
                      {/* Badge de título sobre imagen */}
                      <div
                        className="absolute bottom-0 left-0 right-0 px-4 py-2 flex items-center gap-2"
                        style={{ background: "var(--psm-navy)" }}
                      >
                        <div className="psm-icon-circle psm-icon-circle--solid" style={{ width: 32, height: 32, minWidth: 32 }}>
                          {act.icon}
                        </div>
                        <span className="psm-heading text-sm uppercase tracking-wide text-white">{act.title}</span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--psm-text-body)" }}>
                        {act.shortDesc}
                      </p>
                      <button
                        className="psm-btn-outline w-full justify-center text-sm"
                        style={{ padding: "8px 16px", color: "var(--psm-navy-mid)", borderColor: "var(--psm-navy-mid)" }}
                        onClick={() => setImpactModal(act)}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "var(--psm-teal)"; e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = "var(--psm-teal)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--psm-navy-mid)"; e.currentTarget.style.borderColor = "var(--psm-navy-mid)"; }}
                      >
                        Ver más
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal de actividad */}
          {impactModal && (
            <Modal
              onClose={() => setImpactModal(null)}
              label={impactModal.title}
              imageUrl={impactModal.image}
              imageAlt={impactModal.title}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="psm-icon-circle psm-icon-circle--solid">
                  {impactModal.icon}
                </div>
                <h3 className="psm-heading text-2xl" style={{ color: "var(--psm-navy-mid)" }}>
                  {impactModal.title}
                </h3>
              </div>
              <div className="psm-divider mb-4" />
              <p className="text-gray-600 leading-relaxed">{impactModal.fullDesc}</p>
            </Modal>
          )}
        </section>

        {/* ── Hitos Importantes ── */}
        <section className="py-24 psm-section-light" id="milestones">
          <div className="container mx-auto px-6 xl:px-20">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="psm-icon-circle psm-icon-circle--solid">
                  <Flag size={24} color="white" />
                </div>
                <h2 className="psm-heading text-4xl md:text-5xl text-left md:text-center" style={{ color: "var(--psm-navy-mid)" }}>
                  Hitos <span style={{ color: "var(--psm-teal)" }}>Importantes</span>
                </h2>
              </div>
              <p className="max-w-2xl mx-auto text-lg text-justify md:text-center" style={{ color: "var(--psm-text-body)" }}>
                A lo largo de nuestra trayectoria, hemos marcado un antes y un después con iniciativas transformadoras que abarcan desde la innovación hasta el impacto social.
              </p>
              <div className="psm-divider mx-auto" />
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Línea central — solo desktop */}
              <div
                className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
                style={{ background: "var(--psm-teal)", opacity: 0.3 }}
              />
              {/* ── Hitos visibles ── */}
              <div className="space-y-12">
                {[
                  {
                    year: "2011",
                    side: "right",
                    title: "Fundación de PSM",
                    desc: "Nace Proyectos San Marcos, iniciativa liderada por estudiantes de la UNMSM con la visión de transformar la gestión de proyectos en el ámbito universitario y social.",
                    image: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/photo_1.jpg",
                  },
                  {
                    year: "2016",
                    side: "left",
                    title: "65 Proyectos desarrollados",
                    desc: "Alcanzamos la marca de 65 proyectos ejecutados, consolidando nuestra presencia en distintas áreas de impacto social y fortaleciendo nuestra metodología de gestión.",
                    image: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/photo_2.jpg",
                  },
                  {
                    year: "2019",
                    side: "right",
                    title: "CONEGP & 20 talleres",
                    desc: "Se organizó el Congreso Nacional Estudiantil de Gestión de Proyectos (CONEGP) y se realizaron más de 20 talleres formativos, posicionándonos como referentes a nivel nacional.",
                    image: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/photo_4.jpg",
                  },
                  {
                    year: "2020",
                    side: "left",
                    title: "Innova Weekend",
                    desc: "En tiempos de pandemia, desarrollamos 5 sesiones del Innova Weekend: un espacio de innovación y colaboración virtual que mantuvo vivo el espíritu de PSM.",
                    image: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/photo_5.jpg",
                  },
                ].map(({ year, side, title, desc, image }, i) => (
                  <div
                    key={year}
                    className={`flex flex-col md:flex-row items-center gap-8 ${side === "left" ? "md:flex-row-reverse" : ""
                      }`}
                    data-aos={side === "left" ? "fade-right" : "fade-left"}
                    data-aos-delay={i * 100}
                  >
                    {/* Imagen */}
                    <div className="w-full md:w-5/12">
                      <div
                        className="rounded-2xl overflow-hidden"
                        style={{ border: "2px solid var(--psm-gray-mid)", boxShadow: "var(--psm-shadow-card)" }}
                      >
                        <img src={image} alt={title} className="w-full h-56 object-cover" />
                      </div>
                    </div>

                    {/* Nodo central */}
                    <div className="hidden md:flex w-2/12 justify-center">
                      <div
                        className="flex items-center justify-center rounded-full text-white font-bold text-sm z-10"
                        style={{
                          width: 56, height: 56,
                          background: "var(--psm-teal)",
                          fontFamily: "var(--psm-font-heading)",
                          fontSize: "0.8rem",
                          letterSpacing: "0.05em",
                          boxShadow: "0 0 0 4px white, 0 0 0 6px var(--psm-teal)",
                        }}
                      >
                        {year}
                      </div>
                    </div>

                    {/* Texto */}
                    <div className="w-full md:w-5/12">
                      {/* Año visible solo en móvil */}
                      <span
                        className="md:hidden inline-block mb-2 px-3 py-1 rounded-full text-xs font-bold"
                        style={{ background: "var(--psm-teal)", color: "white", fontFamily: "var(--psm-font-heading)" }}
                      >
                        {year}
                      </span>
                      <h3 className="psm-heading text-2xl mb-3" style={{ color: "var(--psm-navy-mid)" }}>
                        {title}
                      </h3>
                      <p className="leading-relaxed" style={{ color: "var(--psm-text-body)" }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* ── Hitos adicionales (colapsados por defecto) ── */}
               {showAllMilestones && (
                  <div className="space-y-12 mt-12">
                    {[
                      {
                    year: "2021",
                    side: "right",
                    title: "Capacitación PMI y SQL",
                    desc: "Se ejecutaron 4 capacitaciones al público externo en PMI, SQL y entre otros",
                    image: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/CapacitacionPMIySQL.jpeg",
                  },
                  {
                    year: "2024",
                    side: "left",
                    title: "Proyectos Sociales",
                    desc: "Se ejecutaron 6 proyectos de impacto social",
                    image: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectossociales.jpg",
                  },
                  {
                    year: "2025",
                    side: "right",
                    title: "Mejora Continua",
                    desc: "Se llevaron a cabo 2 proyectos de mejora interna(crecimiento lineal)",
                    image: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/mejorc.jpeg",
                  },
                  {
                    year: "2026",
                    side: "left",
                    title: "Nueva área",
                    desc: "Se creó la nueva área de Tecnología y Optimización Digital",
                    image: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/tecnologia.png",
                  }, 
                ].map(({ year, side, title, desc, image }, i) => (
                  <div
                    key={year}
                    className={`flex flex-col md:flex-row items-center gap-8 ${side === "left" ? "md:flex-row-reverse" : ""
                      }`}
                    data-aos={side === "left" ? "fade-right" : "fade-left"}
                    data-aos-delay={i * 100}
                  >
                    {/* Imagen */}
                    <div className="w-full md:w-5/12">
                      <div
                        className="rounded-2xl overflow-hidden"
                        style={{ border: "2px solid var(--psm-gray-mid)", boxShadow: "var(--psm-shadow-card)" }}
                      >
                        <img src={image} alt={title} className="w-full h-56 object-cover" />
                      </div>
                    </div>

                    {/* Nodo central */}
                    <div className="hidden md:flex w-2/12 justify-center">
                      <div
                        className="flex items-center justify-center rounded-full text-white font-bold text-sm z-10"
                        style={{
                          width: 56, height: 56,
                          background: "var(--psm-teal)",
                          fontFamily: "var(--psm-font-heading)",
                          fontSize: "0.8rem",
                          letterSpacing: "0.05em",
                          boxShadow: "0 0 0 4px white, 0 0 0 6px var(--psm-teal)",
                        }}
                      >
                        {year}
                      </div>
                    </div>

                    {/* Texto */}
                    <div className="w-full md:w-5/12">
                      {/* Año visible solo en móvil */}
                      <span
                        className="md:hidden inline-block mb-2 px-3 py-1 rounded-full text-xs font-bold"
                        style={{ background: "var(--psm-teal)", color: "white", fontFamily: "var(--psm-font-heading)" }}
                      >
                        {year}
                      </span>
                      <h3 className="psm-heading text-2xl mb-3" style={{ color: "var(--psm-navy-mid)" }}>
                        {title}
                      </h3>
                      <p className="leading-relaxed" style={{ color: "var(--psm-text-body)" }}>
                        {desc}
                      </p>
                    </div>
                  </div>

                ))} 
                </div>
                  )}
                  {/* ── Botón Ver más / Ver menos ── */}
                  <div className="flex justify-center mt-10">
                    <button
                        onClick={() => setShowAllMilestones((v) => !v)}
                        className="psm-btn-outline2"
                        style={{ 
                          background: "var(--psm-teal)", 
                          color: "white", 
                          borderColor: "var(--psm-teal)" 
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "var(--psm-teal)";
                          e.currentTarget.style.color = "white";
                          e.currentTarget.style.borderColor = "var(--psm-teal)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "var(--psm-teal)";
                          e.currentTarget.style.color = "white";
                          e.currentTarget.style.borderColor = "var(--psm-teal)";
                        }}
                      >
                        {showAllMilestones ? "Ver menos" : "Ver más"}
                        <ArrowDown 
                          size={20} 
                          style={{ 
                            transform: showAllMilestones ? "rotate(180deg)" : "rotate(0deg)", 
                            transition: "transform 0.2s" 
                          }} 
                        />
                      </button>
            </div>
          </div>
        </div>
      </section>



        {/* ── Organigrama ── */}
        <section className="py-24 psm-section-white" id="organigrama">
          <div className="container mx-auto px-6 xl:px-20">
            <div className="text-center mb-12" data-aos="fade-up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="psm-icon-circle psm-icon-circle--solid">
                  <Network size={24} color="white" />
                </div>
                <h2 className="psm-heading text-4xl md:text-5xl text-left md:text-center" style={{ color: "var(--psm-navy-mid)" }}>
                  Nuestro <span style={{ color: "var(--psm-teal)" }}>Organigrama</span>
                </h2>
              </div>
              <p className="max-w-2xl mx-auto text-lg text-justify md:text-center" style={{ color: "var(--psm-text-body)" }}>
                Nuestra estructura organizacional está diseñada para materializar los valores que guían cada una de nuestras iniciativas, articulando roles, procesos y sinergias.
              </p>
              <div className="psm-divider mx-auto" />
            </div>

            <div data-aos="fade-up" data-aos-delay="150">
              <OrganigramaGallery
                images={[
                  {
                    src: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/organigrama/presidencia.jpg",
                    alt: "Organigrama de Presidencia",
                    title: "Presidencia",
                  },
                  {
                    src: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/organigrama/pmo.jpg",
                    alt: "Gerencia de PMO",
                    title: "PMO",
                  },
                  {
                    src: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/organigrama/comunicaciones.jpg",
                    alt: "Gerencia de Comunicaciones",
                    title: "Comunicaciones",
                  },
                  {
                    src: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/organigrama/finanzas.jpg",
                    alt: "Gerencia de Finanzas",
                    title: "Finanzas",
                  },
                  {
                    src: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/organigrama/talentohumano.jpg",
                    alt: "Gerencia de Talento Humano",
                    title: "Talento Humano",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* ── Proyectos Destacados ── */}
        <section className="py-20 psm-section-white" id="projects">
          <div className="container mx-auto px-6 xl:px-20">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="psm-icon-circle psm-icon-circle--solid">
                  <FolderOpen size={24} color="white" />
                </div>
                <h2 className="psm-heading text-4xl md:text-5xl text-left md:text-center" style={{ color: "var(--psm-navy-mid)" }}>
                  Proyectos <span style={{ color: "var(--psm-teal)" }}>Destacados</span>
                </h2>
              </div>
              <p className="max-w-2xl mx-auto text-lg text-justify md:text-center" style={{ color: "var(--psm-text-body)" }}>
                Conoce algunas de nuestras iniciativas más importantes y su impacto
              </p>
              <div className="psm-divider mx-auto" />
            </div>

            {/* Grid dinámico — sin Swiper */}
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              {[
                {
                  imageUrl: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/projects/proyecto_rescatandoplayas.jpg",
                  title: "Rescatando Playas",
                  color: "#4158b5",
                  description: "En 𝗥𝗲𝘀𝗰𝗮𝘁𝗮𝗻𝗱𝗼 𝗣𝗹𝗮𝘆𝗮𝘀, hemos trabajado incansablemente para devolverle a nuestras costas la belleza que se merecen. Con el apoyo de más de 50 estudiantes voluntarios, hemos recolectado más de una tonelada de residuos plásticos y hemos limpiado más de 1.5 km de playas. 🌍♻️",
                  link: "/proyectos/rp"
                },
                {
                  imageUrl: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/projects/proyecto_sembrandosonrisas.jpg",
                  title: "Sembrando Sonrisas",
                  color: "#f1162e",
                  description: "En 𝗦𝗲𝗺𝗯𝗿𝗮𝗻𝗱𝗼 𝗦𝗼𝗻𝗿𝗶𝘀𝗮𝘀 logramos llevar esperanza y sonrisas a muchas comunidades, especialmente en zonas rurales como Ayacucho, donde entregamos canastas de víveres, regalos y compartimos momentos de alegría con más de 50 familias y 150 niños. 🎁💖",
                  link: "/proyectos/sembrando-sonrisas"
                },
                {
                  imageUrl: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/projects/proyecto_4patas.jpg",
                  title: "4 Patas",
                  color: "#ffbd54",
                  description: "En 4 PATAS llevamos alimento, esterilizaciones y educación comunitaria a barrios de escasos recursos para mejorar el bienestar de perros y gatos en situación vulnerable. 🥣🐶🐱 Con más de 40 animales esterilizados y decenas de hogares empoderados.",
                  link: "/proyectos/cuatro-patas"
                },
                {
                  imageUrl: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/projects/proyecto_sanamente.jpg",
                  title: "Sanamente",
                  color: "#f44d95",
                  description: "Durante el 2023, más de 280,000 casos de depresión fueron atendidos. En 𝙎𝙖𝙣𝙖𝙢𝙚𝙣𝙩𝙚, nuestra misión es apoyar el bienestar emocional de los jóvenes, promoviendo la inteligencia emocional y reduciendo el estigma de la salud mental.",
                  link: "/proyectos/sanamente"
                },
                {
                  imageUrl: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/projects/proyecto_poni.jpg",
                  title: "PONI",
                  color: "#1b395d",
                  description: "PONI capacita a los nuevos ingresantes de PSM en la gestión de proyectos y en la integración efectiva dentro de la organización. 💙🌱 Ha logrado capacitar a 36 nuevos ingresantes, quienes presentaron propuestas innovadoras alineadas con los ODS. 🌍✨",
                  link: "/proyectos/poni"
                },
              ].map((project, i) => (
                <div
                  key={project.title}
                  className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)] h-full"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <CardProject
                    imageUrl={project.imageUrl}
                    title={project.title}
                    description={project.description}
                    color={project.color}
                    link={project.link}
                    className="h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Nuestra Presencia ── */}
        <section className="py-24 psm-section-light" id="presencia">
          <div className="container mx-auto px-6 xl:px-20">

            {/* Header + intro */}
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-16" data-aos="fade-up">
              <div className="lg:w-3/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="psm-icon-circle psm-icon-circle--solid">
                    <Globe size={24} color="white" />
                  </div>
                  <h2 className="psm-heading text-4xl md:text-5xl" style={{ color: "var(--psm-navy-mid)" }}>
                    Nuestra <span style={{ color: "var(--psm-teal)" }}>Presencia</span>
                  </h2>
                </div>
                <div className="psm-divider mb-6" />
                <p className="text-gray-600 text-lg leading-relaxed text-justify">
                  El alcance y la visibilidad que Proyectos San Marcos ha construido tanto en el entorno universitario como en el ecosistema digital ha sido gracias a las alianzas estratégicas y plataformas de interacción en redes sociales. Hemos consolidado una comunidad de seguidores y colaboradores que respaldan nuestra labor y amplían nuestro mensaje.
                </p>
              </div>

              <div className="lg:w-2/5">
                <div className="rounded-2xl overflow-hidden" style={{ border: "2px solid var(--psm-teal)", boxShadow: "var(--psm-shadow-card)" }}>
                  <img
                    src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/photo_3.JPG"
                    alt="Presencia PSM"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="mb-16" data-aos="fade-up">
              <p className="text-lg mb-8" style={{ color: "var(--psm-text-body)" }}>
                En cuanto a presencia en redes sociales, disponemos de más de:
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { platform: "Facebook", followers: 18000, suffix: "k", divisor: 1000, color: "#1877F2", icon: <Facebook size={28} />, link: "https://www.facebook.com/ProyectosSanMarcos" },
                  { platform: "LinkedIn", followers: 4400, suffix: "k", divisor: 1000, color: "#0A66C2", icon: <Linkedin size={28} />, link: "https://www.linkedin.com/company/proyectossm" },
                  { platform: "Instagram", followers: 2200, suffix: "k", divisor: 1000, color: "#E1306C", icon: <Instagram size={28} />, link: "https://www.instagram.com/proyectossm" },
                  { platform: "TikTok", followers: 260, suffix: "", divisor: 1, color: "#000000", icon: <svg viewBox="0 0 24 24" fill="currentColor" width={28} height={28}><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" /></svg>, link: "https://www.tiktok.com/@proyectossanmarcos" },
                ].map(({ platform, followers, suffix, divisor, color, icon, link }) => (
                  <a
                    key={platform}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl p-6 flex flex-col items-center text-center bg-white transition-all duration-300"
                    style={{ border: "1px solid var(--psm-gray-mid)", boxShadow: "var(--psm-shadow-card)", textDecoration: "none" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = `0 8px 32px ${color}30`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--psm-gray-mid)"; e.currentTarget.style.boxShadow = "var(--psm-shadow-card)"; }}
                    data-aos="fade-up"
                  >
                    <div className="mb-3" style={{ color }}>{icon}</div>
                    <div className="text-4xl font-bold mb-1" style={{ color: "var(--psm-navy-mid)", fontFamily: "var(--psm-font-heading)" }}>
                      {statsRefInView && <CountUp start={0} end={followers / divisor} duration={2.5} decimals={divisor > 1 ? 1 : 0} suffix={suffix + "+"} />}
                    </div>
                    <p className="text-sm font-medium" style={{ color: "var(--psm-text-muted)" }}>seguidores en <span style={{ color }}>{platform}</span></p>
                  </a>
                ))}
              </div>
            </div>

            {/* Alianzas */}
            <div data-aos="fade-up">
              <p className="text-lg mb-8" style={{ color: "var(--psm-text-body)" }}>
                Contamos con <strong style={{ color: "var(--psm-teal)" }}>9 alianzas estratégicas</strong> y con miras a seguir creciendo.
              </p>
              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
                {[
                  "PMI", "Athenea", "Impact Starter", "Data Analytics Center",
                  "Datux", "W/E Asesoría", "Code", "Hult Prize Perú", "Voluntariado UNMSM",
                ].map((alianza, i) => (
                  <div
                    key={alianza}
                    className="rounded-xl p-3 flex items-center justify-center text-center bg-white"
                    style={{ border: "1px solid var(--psm-gray-mid)", boxShadow: "var(--psm-shadow-card)", minHeight: 72, transition: "border-color 0.3s" }}
                    data-aos="zoom-in"
                    data-aos-delay={i * 50}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--psm-teal)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--psm-gray-mid)")}
                  >
                    <span className="text-xs font-semibold leading-tight" style={{ color: "var(--psm-navy-mid)", fontFamily: "var(--psm-font-body)" }}>{alianza}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Home;