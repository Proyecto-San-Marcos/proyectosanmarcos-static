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
  FolderOpen, MessageCircle, Quote
} from "lucide-react";
import Footer from "../components/Footer";
import CardProject from "../components/CardProject";
import NewsPopup from "../components/NewsPopup";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const [statsRefInView] = useInView({ threshold: 0.3, triggerOnce: true });

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
        imageUrl="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/banner_popups/puch.jpg"
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
            <div className="flex flex-col lg:flex-row items-center gap-16" data-aos="fade-up">
              {/* Foto */}
              <div className="lg:w-2/5">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-20 h-20 rounded-lg z-0" style={{ background: "var(--psm-teal-subtle)", border: "2px solid var(--psm-teal)" }} />
                  <div className="rounded-xl overflow-hidden relative z-10" style={{ border: "2px solid var(--psm-teal)" }}>
                    <img
                      src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos//grupo.jpeg"
                      alt="Equipo de voluntarios"
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
                  Somos una organización liderada por estudiantes voluntarios de la Universidad Nacional Mayor de San Marcos, comprometidos con la excelencia y el desarrollo social a través de la gestión de proyectos innovadores y sostenibles.
                </p>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Promovemos y aplicamos las buenas prácticas de dirección de proyectos con el objetivo de contribuir al desarrollo de nuestra universidad y sociedad.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  {[
                    { icon: <CheckCircle2 size={20} />, title: "Compromiso Social", desc: "Enfocados en generar cambios positivos" },
                    { icon: <Zap size={20} />, title: "Innovación", desc: "Soluciones creativas a problemas reales" },
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

                <a href="#milestones" className="psm-btn-primary" style={{ width: "fit-content" }}>
                  Conoce Nuestra Historia
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Nuestro Impacto ── */}
        <section className="py-24 psm-section-white" id="impact" ref={statsRef}>
          <div className="container mx-auto px-6 xl:px-20">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="psm-icon-circle psm-icon-circle--solid">
                  <BarChart3 size={24} color="white" />
                </div>
                <h2 className="psm-heading text-4xl md:text-5xl" style={{ color: "var(--psm-navy-mid)" }}>
                  Nuestro <span style={{ color: "var(--psm-teal)" }}>Impacto</span>
                </h2>
              </div>
              <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--psm-text-body)" }}>
                Los números reflejan el alcance de nuestras iniciativas y el impacto que generamos en nuestra comunidad
              </p>
              <div className="psm-divider mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
              {[
                { value: 400, label: "Estudiantes beneficiados", delay: 0 },
                { value: 25, label: "Proyectos completados", delay: 0.2 },
                { value: 10, label: "Alianzas institucionales", delay: 0.4 },
              ].map(({ value, label, delay }) => (
                <div key={label} className="p-10 rounded-xl flex flex-col items-center" style={{ background: "white", border: "1px solid var(--psm-gray-mid)", boxShadow: "var(--psm-shadow-card)" }}>
                  <div className="text-5xl font-bold mb-2" style={{ color: "var(--psm-teal)", fontFamily: "var(--psm-font-heading)" }}>
                    {statsRefInView && <CountUp start={0} end={value} duration={2.5} separator="," delay={delay} suffix="+" />}
                  </div>
                  <p className="font-medium text-lg" style={{ color: "var(--psm-text-body)" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Nuestros Servicios ── */}
        <section className="py-24 psm-section-light" id="services">
          <div className="container mx-auto px-6 xl:px-20">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="psm-icon-circle psm-icon-circle--solid">
                  <Star size={24} color="white" />
                </div>
                <h2 className="psm-heading text-4xl md:text-5xl" style={{ color: "var(--psm-navy-mid)" }}>
                  Nuestros <span style={{ color: "var(--psm-teal)" }}>Servicios</span>
                </h2>
              </div>
              <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--psm-text-body)" }}>
                Ofrecemos diversas formas de contribuir al desarrollo universitario y social
              </p>
              <div className="psm-divider mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="rounded-xl p-8 bg-white"
                  style={{ border: "1px solid var(--psm-gray-mid)", boxShadow: "var(--psm-shadow-card)", transition: "border-color 0.3s, box-shadow 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--psm-teal)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,180,216,0.15)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--psm-gray-mid)"; e.currentTarget.style.boxShadow = "var(--psm-shadow-card)"; }}
                >
                  <div className="mb-6 flex justify-center">
                    <div className="psm-icon-circle psm-icon-circle--solid" style={{ width: 64, height: 64 }}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="psm-heading text-xl mb-4 text-center" style={{ color: "var(--psm-navy-mid)" }}>{service.title}</h3>
                  <p className="text-center leading-relaxed" style={{ color: "var(--psm-text-body)", fontSize: "0.95rem" }}>
                    {service.description}
                  </p>
                </div>
              ))}
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
                <h2 className="psm-heading text-4xl md:text-5xl" style={{ color: "var(--psm-navy-mid)" }}>
                  Proyectos <span style={{ color: "var(--psm-teal)" }}>Destacados</span>
                </h2>
              </div>
              <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--psm-text-body)" }}>
                Conoce algunas de nuestras iniciativas más importantes y su impacto
              </p>
              <div className="psm-divider mx-auto" />
            </div>

            <div className="mt-12" data-aos="fade-up" data-aos-delay="200">
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
                pagination={{ clickable: true }}
                navigation
                autoplay={{ delay: 5000 }}
                className="w-full !pt-6 !pb-10 !px-6 psm-swiper"
              >
                <SwiperSlide><div className="h-full"><CardProject imageUrl="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/projects/proyecto_rescatandoplayas.jpg" title="Rescatando playas" description="En 𝗥𝗲𝘀𝗰𝗮𝘁𝗮𝗻𝗱𝗼 𝗣𝗹𝗮𝘆𝗮𝘀, hemos trabajado incansablemente para devolverle a nuestras costas la belleza que se merecen. Con el apoyo de más de 50 estudiantes voluntarios, hemos recolectado más de una tonelada de residuos plásticos y hemos limpiado más de 1.5 km de playas. 🌍♻️ Cada acción, por pequeña que sea, es una victoria en nuestro compromiso por un futuro más limpio y un mar más saludable. 🐚" buttonText="Ver más" className="h-full" color="#4158b5" /></div></SwiperSlide>
                <SwiperSlide><div className="h-full"><CardProject imageUrl="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/projects/proyecto_sembrandosonrisas.jpg" title="Sembrando sonrisas" description="En 𝗦𝗲𝗺𝗯𝗿𝗮𝗻𝗱𝗼 𝗦𝗼𝗻𝗿𝗶𝘀𝗮𝘀 logramos llevar esperanza y sonrisas a muchas comunidades, especialmente en zonas rurales como Ayacucho, donde entregamos canastas de víveres, regalos y compartimos momentos de alegría con más de 50 familias y 150 niños. 🎁💖" buttonText="Ver más" className="h-full" color="#f1162e" /></div></SwiperSlide>
                <SwiperSlide><div className="h-full"><CardProject imageUrl="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/projects/proyecto_4patas.jpg" title="4 Patas" description="En 4 PATAS llevamos alimento, esterilizaciones y educación comunitaria a barrios de escasos recursos para mejorar el bienestar de perros y gatos en situación vulnerable. 🥣🐶🐱 Con más de 40 animales esterilizados y decenas de hogares empoderados, contribuimos a reducir el abandono y a promover la tenencia responsable." buttonText="Ver más" className="h-full" color="#ffbd54" /></div></SwiperSlide>
                <SwiperSlide><div className="h-full"><CardProject imageUrl="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/projects/proyecto_sanamente.jpg" title="Sanamente" description={`Durante el 2023, más de 280,000 casos de depresión fueron atendidos. En 𝙎𝙖𝙣𝙖𝙢𝙚𝙣𝙩𝙚, nuestra misión es apoyar el bienestar emocional de los jóvenes, promoviendo la inteligencia emocional y reduciendo el estigma de la salud mental.`} buttonText="Ver más" className="h-full" color="#f44d95" /></div></SwiperSlide>
                <SwiperSlide><div className="h-full"><CardProject imageUrl="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/projects/proyecto_poni.jpg" title="PONI" description="PONI es un proyecto que tiene como objetivo capacitar a los nuevos ingresantes de Proyectos San Marcos (PSM) en la gestión de proyectos y en la integración efectiva dentro de la organización. 💙🌱 PONI ha logrado capacitar a 36 nuevos ingresantes, quienes presentaron propuestas innovadoras alineadas con los ODS. 🌍✨" buttonText="Ver más" className="h-full" color="#1b395d" /></div></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        {/* ── Testimonios ── */}
        <section className="py-24 psm-section-light" id="testimonials">
          <div className="container mx-auto px-6 xl:px-20">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="psm-icon-circle psm-icon-circle--solid">
                  <MessageCircle size={24} color="white" />
                </div>
                <h2 className="psm-heading text-4xl md:text-5xl" style={{ color: "var(--psm-navy-mid)" }}>
                  <span style={{ color: "var(--psm-teal)" }}>Testimonios</span>
                </h2>
              </div>
              <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--psm-text-body)" }}>
                Lo que dicen nuestros voluntarios y beneficiarios
              </p>
              <div className="psm-divider mx-auto" />
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000 }}
                className="testimonial-swiper"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="rounded-2xl p-10 max-w-4xl mx-auto" style={{ background: "var(--psm-navy-dark)", border: "1px solid rgba(0,180,216,0.25)" }}>
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <div className="shrink-0">
                          <div className="w-24 h-24 rounded-full overflow-hidden" style={{ border: "3px solid var(--psm-teal)" }}>
                            <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                          </div>
                        </div>
                        <div>
                          <Quote size={40} style={{ color: "var(--psm-teal)" }} className="mb-4" />
                          <p className="text-lg italic mb-6 leading-relaxed" style={{ color: "var(--psm-teal-light)" }}>
                            "{testimonial.text}"
                          </p>
                          <div>
                            <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
                            <p style={{ color: "var(--psm-teal)" }}>{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Home;