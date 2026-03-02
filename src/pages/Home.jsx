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
import { FaArrowRight, FaHandsHelping, FaUserGraduate, FaSeedling } from "react-icons/fa";
import Footer from "../components/Footer";
import CardProject from "../components/CardProject";
import NewsPopup from "../components/NewsPopup";

// Registrar ScrollTrigger con GSAP
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const [statsRefInView, statsRefInViewEntry] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Inicializar AOS para animaciones de scroll
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });

    setIsVisible(true);

    // Animación del hero con GSAP
    const heroElement = heroRef.current;
    if (heroElement) {
      gsap.fromTo(
        heroElement.querySelector('.hero-content'),
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out"
        }
      );
    }

    // Timeline para animación de parallax en hero
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroElement,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    tl.to(heroElement.querySelector('.hero-bg'), {
      y: 100,
      scale: 1.1,
    });

    return () => {
      // Limpieza de ScrollTriggers al desmontar
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Sección de Testimonios - datos
  const testimonials = [
    {
      id: 1,
      name: "Carlos Mendoza",
      role: "Estudiante de Ingeniería",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Participar en este voluntariado ha sido una de las mejores decisiones de mi vida universitaria. He adquirido habilidades que ninguna clase podría enseñarme y he formado parte de proyectos que realmente hacen la diferencia."
    },
    {
      id: 2,
      name: "Ana Ramírez",
      role: "Estudiante de Administración",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "El ambiente colaborativo y enfocado en resultados me ha permitido aplicar lo que aprendo en clase en contextos reales. Ahora me siento más preparada para mi futuro profesional."
    },
    {
      id: 3,
      name: "Dr. Felipe Gutiérrez",
      role: "Docente UNMSM",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      text: "Como docente, he visto cómo esta iniciativa transforma a los estudiantes, desarrollando su liderazgo y compromiso social. La universidad necesita más espacios como este."
    },
    {
      id: 4,
      name: "Laura Torres",
      role: "Coordinadora de Proyectos",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "Lo que más valoro es cómo potenciamos el talento de cada voluntario mientras generamos un impacto social tangible. Es inspirador ver cómo crecen profesionalmente mientras ayudan a otros."
    }
  ];

  // Servicios con iconos mejorados
  const services = [
    {
      id: 1,
      icon: <FaHandsHelping size={40} className="text-blue-600" />,
      title: "Gestión de Proyectos",
      description: "Implementamos metodologías efectivas para la planificación y ejecución de proyectos que generan impacto real en nuestra comunidad universitaria y sociedad."
    },
    {
      id: 2,
      icon: <FaUserGraduate size={40} className="text-blue-600" />,
      title: "Capacitación y Desarrollo",
      description: "Ofrecemos talleres y programas formativos para estudiantes interesados en adquirir habilidades de liderazgo, trabajo en equipo y gestión de recursos."
    },
    {
      id: 3,
      icon: <FaSeedling size={40} className="text-blue-600" />,
      title: "Responsabilidad Social",
      description: "Desarrollamos iniciativas que abordan problemas sociales y contribuyen al desarrollo sostenible de nuestras comunidades a través de acciones concretas y medibles."
    }
  ];

  // Componente de contador mejorado con animación
  const StatCounter = ({ value, label, delay = 0 }) => {
    return (
      <div className="flex flex-col items-center">
        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
          {statsRefInView && (
            <CountUp
              start={0}
              end={value}
              duration={2.5}
              separator=","
              delay={delay}
              suffix="+"
            />
          )}
        </div>
        <p className="text-gray-700 font-medium text-lg">{label}</p>
      </div>
    );
  };

  return (
    <div className="overflow-hidden">
      {/* ── Popup de última hora ── */}
      <NewsPopup
        imageUrl=""
        altText="Última hora"
        redirectTo="/"
        delay={800}
      />

      {/* Hero Section - Mejorado con parallax y animaciones */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 to-blue-800/90"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Proyectos San Marcos
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Estudiantes voluntarios impulsando el cambio social a través de la
              gestión de proyectos de alto impacto en nuestra comunidad.
            </motion.p>
          </motion.div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex flex-col items-center"
          >
            <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center pt-1">
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-1.5 h-3 bg-white rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="flex-1">
        {/* Quiénes Somos - Mejorado con mejor layout y efecto de aparición */}
        <section className="py-24 bg-white" id="about">
          <div className="container mx-auto px-6 xl:px-20">
            <div
              className="flex flex-col lg:flex-row items-center gap-16"
              data-aos="fade-up"
            >
              <div className="lg:w-2/5">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
                  <div className="rounded-lg overflow-hidden shadow-2xl relative z-10">
                    <img
                      src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos//grupo.jpeg"
                      alt="Equipo de voluntarios"
                      className="w-full h-auto rounded-lg transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-lg z-0"></div>
                </div>
              </div>

              <div className="lg:w-3/5" data-aos="fade-left" data-aos-delay="200">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    ¿Quiénes Somos?
                  </span>
                  <div className="w-20 h-1 bg-blue-600 mt-2"></div>
                </h2>

                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Somos una organización liderada por estudiantes voluntarios de
                  la Universidad Nacional Mayor de San Marcos, comprometidos con
                  la excelencia y el desarrollo social a través de la gestión de
                  proyectos innovadores y sostenibles.
                </p>

                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Promovemos y aplicamos las buenas prácticas de dirección de
                  proyectos con el objetivo de contribuir al desarrollo de
                  nuestra universidad y sociedad, mediante la ejecución de
                  iniciativas de alto impacto que generan cambios positivos y duraderos.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Compromiso Social</h4>
                      <p className="text-gray-600">Enfocados en generar cambios positivos</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Innovación</h4>
                      <p className="text-gray-600">Soluciones creativas a problemas reales</p>
                    </div>
                  </div>
                </div>

                <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Conoce Nuestra Historia
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestro Impacto - Mejorado con contador animado */}
        <section
          className="py-24 bg-gradient-to-b from-blue-50 to-white"
          id="impact"
          ref={statsRef}
        >
          <div className="container mx-auto px-6 xl:px-20">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Nuestro Impacto
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Los números reflejan el alcance de nuestras iniciativas y el impacto
                que generamos en nuestra comunidad
              </p>
              <div className="w-20 h-1 bg-blue-600 mt-6 mx-auto"></div>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-blue-600">
                <StatCounter value={400} label="Estudiantes beneficiados" delay={0} />
              </div>
              <div className="bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-blue-600">
                <StatCounter value={25} label="Proyectos completados" delay={0.2} />
              </div>
              <div className="bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-blue-600">
                <StatCounter value={10} label="Alianzas institucionales" delay={0.4} />
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Servicios - Mejorado con mejores tarjetas e iconos */}
        <section className="py-24 bg-white" id="services">
          <div className="container mx-auto px-6 xl:px-20">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Nuestros Servicios
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Ofrecemos diversas formas de contribuir al desarrollo universitario y social
              </p>
              <div className="w-20 h-1 bg-blue-600 mt-6 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100 group"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proyectos Destacados - Mejorado con Swiper */}
        <section className="py-20 bg-gray-50" id="projects">
          <div className="container mx-auto px-6 xl:px-20">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Proyectos Destacados
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Conoce algunas de nuestras iniciativas más importantes y su impacto
              </p>
              <div className="w-20 h-1 bg-blue-600 mt-6 mx-auto"></div>
            </div>

            <div className="mt-12" data-aos="fade-up" data-aos-delay="200">
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                pagination={{ clickable: true }}
                navigation
                autoplay={{ delay: 5000 }}
                className="w-full !pt-6 !pb-10 !px-6"
              >
                <SwiperSlide>
                  <div className="h-full">
                    <CardProject
                      imageUrl="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos//rescatando.jpeg"
                      title="Rescatando playas"
                      description="Iniciativa de limpieza y educación ambiental en playas locales. Voluntarios trabajando para preservar la belleza natural y la vida marina."
                      buttonText="Ver más"
                      onButtonClick={() => alert("Ver más sobre Rescatando playas")}
                      className="h-full"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-full">
                    <CardProject
                      imageUrl="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos//sembrando_sonrisas.jpeg"
                      title="Sembrando sonrisas"
                      description="Iniciativa de reforestación y educación ambiental en comunidades vulnerables. Voluntarios trabajando para preservar el medio ambiente."
                      buttonText="Ver más"
                      onButtonClick={() => alert("Ver más sobre Sembrando sonrisas")}
                      className="h-full"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-full">
                    <CardProject
                      imageUrl="https://scontent.flim39-1.fna.fbcdn.net/v/t39.30808-6/488407688_991399479761909_1978576309811572481_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=icwfO92A0coQ7kNvwF4FKVZ&_nc_oc=Adnv-eZ_iumM4UA2D8TAcRq7hDjaxd2mIZKzvV8rx3Rh2xo13Rrjqm_ZfnSc_TFgqa9iAKJFgxL-FaEx5-HNrh2m&_nc_zt=23&_nc_ht=scontent.flim39-1.fna&_nc_gid=Nb3yE7R_PGwyhNbrmwZRtg&oh=00_AfEXL68zxe0cOSDxqJtTOmqfwl7i3v4QykxgQvjXfKlVHw&oe=6801E335"
                      title="4 Patas"
                      description="Iniciativa enfocada en el apoyo de animales en situación de abandono. Voluntarios trabajando para brindarles una segunda oportunidad."
                      buttonText="Ver más"
                      onButtonClick={() => alert("Ver más sobre 4 Patas")}
                      className="h-full"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-full">
                    <CardProject
                      imageUrl="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      title="Educando para el Futuro"
                      description="Programa de refuerzo académico para estudiantes de comunidades rurales, brindando herramientas para mejorar su rendimiento escolar."
                      buttonText="Ver más"
                      onButtonClick={() => alert("Ver más sobre Educando para el Futuro")}
                      className="h-full"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        {/* Testimonios - Carrusel mejorado */}
        <section className="py-24 bg-white" id="testimonials">
          <div className="container mx-auto px-6 xl:px-20">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Testimonios
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Lo que dicen nuestros voluntarios y beneficiarios
              </p>
              <div className="w-20 h-1 bg-blue-600 mt-6 mx-auto"></div>
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
                    <div className="bg-gray-50 rounded-2xl p-10 max-w-4xl mx-auto">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <div className="shrink-0">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        <div>
                          <svg className="w-10 h-10 text-blue-200 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 8c-2.209 0-4 1.791-4 4v10c0 2.209 1.791 4 4 4h12c2.209 0 4-1.791 4-4v-10c0-2.209-1.791-4-4-4h-12zM8.5 15c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5zM20.5 15c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5z"></path>
                          </svg>

                          <p className="text-xl italic text-gray-700 mb-6 leading-relaxed">
                            "{testimonial.text}"
                          </p>

                          <div>
                            <h4 className="font-bold text-lg">{testimonial.name}</h4>
                            <p className="text-blue-600">{testimonial.role}</p>
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

        {/* CTA Section */}
        <section className="py-28 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden" id="join">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ffffff" d="M37.9,-68.5C47.1,-60.5,51.1,-45.7,59.1,-33.5C67.1,-21.3,79.1,-10.7,81.6,1.4C84.1,13.5,77.1,27,67.7,38.5C58.3,50,46.6,59.4,33.8,64.6C21,69.8,7.1,70.7,-6.9,70.3C-20.9,69.9,-41.8,68.2,-52.9,58.3C-64,48.4,-65.2,30.4,-68.6,13.7C-72,-3,-77.5,-18.3,-73.1,-31C-68.6,-43.6,-54.2,-53.5,-40.1,-59.9C-26.1,-66.2,-12.3,-68.9,1.4,-71.3C15.1,-73.7,28.7,-76,37.9,-68.5Z" transform="translate(100 100)" />
            </svg>
          </div>

          <div className="container mx-auto px-6 xl:px-20 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white" data-aos="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                ¿Listo para marcar la diferencia?
              </h2>
              <p className="text-xl mb-10 text-white/90">
                Únete a nuestro equipo de voluntarios y forma parte del cambio que quieres ver en el mundo.
                Desarrolla habilidades profesionales mientras generas un impacto real en la sociedad.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#apply"
                  className="px-8 py-4 bg-white text-blue-700 font-medium rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-lg text-lg"
                >
                  Postula ahora
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all duration-300 rounded-full text-lg"
                >
                  Contáctanos
                </a>
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