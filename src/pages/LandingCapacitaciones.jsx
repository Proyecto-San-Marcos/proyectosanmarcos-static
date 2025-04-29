import React, { useState, useEffect } from 'react';
import { BookOpen, Layers, Sparkles, ClipboardList } from "lucide-react";
import { ChevronLeft, ChevronRight, ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import Footer from "../components/Footer";

const LandingCapacitaciones = () => {
  const items = [
    {
      title: 'Talleres Prácticos',
      description: 'Aprende haciendo con actividades dinámicas y colaborativas.',
      iconBg: 'bg-yellow-200',
      icon: '📘',
    },
    {
      title: 'Cursos Especializados',
      description: 'Profundiza en temas clave para potenciar tu desarrollo profesional.',
      iconBg: 'bg-gray-200',
      icon: '⏳',
    },
    {
      title: 'Charlas Inspiradoras',
      description: 'Descubre nuevas ideas que te motivarán a dar lo mejor de ti.',
      iconBg: 'bg-purple-200',
      icon: '❓',
    },
    {
      title: 'Capacitación a Medida',
      description: 'Diseñamos contenidos personalizados según las necesidades de tu equipo.',
      iconBg: 'bg-red-200',
      icon: '📚',
    },
  ];

  // 🖼️ Galería
  const images = [
    'https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos//PowerBI.jpeg',
    'https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos//MarcaPersonal.jpeg',
    'https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos//ContenidoEnRedes.jpeg',
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const equipo = [
    {
      nombre: 'Pedro Sanchez',
      descripcion: 'Ex jefe del área',
      imagen: 'https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/img-miembros//img296%20-%20Pedro%20Sanchez.jpg',
    },
    {
      nombre: 'Frank Aguilar',
      descripcion: 'Jefe del área',
      imagen: 'https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/img-miembros//IMG-20240718-WA0051%20-%20WALTER%20FRANK%20AGUILAR%20MARCELO.jpg',
    },
    {
      nombre: 'Joel Patricio',
      descripcion: 'Jefe revocado del área',
      imagen: 'https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/img-miembros//foto%20joel%20CV%20-%20Jhoel%20Patricio.png',
    },
    {
      nombre: 'Edson Condezo',
      descripcion: 'Miembro activo del área',
      imagen: 'https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/img-miembros//FOTO_PSM%20-%20Edson%20Roy%20Condezo%20Figueroa.jpeg',
    },
    {
      nombre: 'Alexander Pineda',
      descripcion: 'Miembro activo del área.',
      imagen: 'https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/img-miembros//WhatsApp%20Image%202024-08-22%20at%2010.22.30%20AM%20-%20Alekey.jpeg',
    },
    {
      nombre: 'Mallku Contreras',
      descripcion: 'Miembro activo del área.',
      imagen: 'https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/img-miembros//foto_terno%20-%20MALLKU%20CONTRERAS%20GUARDIA.jpg',
    },
    {
      nombre: 'Andres Arenas',
      descripcion: 'Miembro activo del área.',
      imagen: 'https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/img-miembros//WhatsApp%20Image%202025-01-28%20at%2011.52.56%20PM%20-%20ANDRES%20LEHI%20ARENAS%20CHICLLA.jpeg',
    },
    {
      nombre: 'Anggie Occ',
      descripcion: 'Miembro activo del área.',
      imagen: 'https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/img-miembros//IMG_20240804_033019%20-%20ANGGI%20THALIA%20OCC%20CAMPOS.jpg',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [visibles, setVisibles] = useState(3);
  
  useEffect(() => {
    // Ajustar número de tarjetas visibles según el ancho de pantalla
    const handleResize = () => {
      setVisibles(window.innerWidth < 768 ? 1 : 3);
    };
    
    // Ejecutar al inicio para establecer el valor inicial
    handleResize();
    
    // Agregar listener para cambios de tamaño de pantalla
    window.addEventListener('resize', handleResize);
    
    // Limpiar listener cuando el componente se desmonte
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % (equipo.length - visibles + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <main className="relative">
      {/* Sección 1 - Hero */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white w-full">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10 py-16 relative" style={{ zIndex: 0 }}>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Área de<br />
              Capacitación y<br />
              Desarrollo
            </h1>
            <p className="text-sm md:text-base font-semibold text-gray-300 mb-3">
              Fortalecemos las habilidades de nuestros miembros a través de talleres y cursos dinámicos, orientados al desarrollo personal y profesional.
            </p>
            <p className="text-sm md:text-base font-semibold text-red-400">
              Trabajamos en equipo para potenciar el aprendizaje y promover el crecimiento continuo.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center pointer-events-none">
            <div className="relative" style={{ zIndex: 0 }}>
              <div className="absolute w-64 h-64 rounded-full bg-blue-900 opacity-30 blur-xl" style={{ zIndex: -1 }}></div>
              <img
                src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-psm//logoCapa.png"
                alt="Logo capacitación"
                className="w-48 md:w-64 lg:w-80 max-w-full h-auto animate-pulse relative"
                style={{ zIndex: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Beneficios del área */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-blue-50 text-gray-800 w-full py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative" style={{ zIndex: 0 }}>
          <div className="flex justify-center transform hover:scale-105 transition duration-500 pointer-events-none">
            <div className="relative" style={{ zIndex: 0 }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur opacity-20" style={{ zIndex: -1 }}></div>
              <img
                src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-lading//3D%20young%20woman%20at%20work%20with%20laptop%20writing%20Illustration.png"
                alt="Ilustración capacitación"
                className="w-[250px] md:w-[350px] lg:w-[400px] h-auto relative"
                style={{ zIndex: 0 }}
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              ¿Qué puede hacer el <span className="text-blue-600">Área de Capacitaciones</span> por ti?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Beneficio 1 */}
              <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:bg-yellow-50 border-l-4 border-yellow-400">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <BookOpen className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Talleres Prácticos</h3>
                  <p className="text-sm text-gray-600">Aprende haciendo con actividades dinámicas y colaborativas.</p>
                </div>
              </div>

              {/* Beneficio 2 */}
              <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:bg-gray-50 border-l-4 border-gray-400">
                <div className="bg-gray-100 p-3 rounded-xl">
                  <Layers className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Cursos Especializados</h3>
                  <p className="text-sm text-gray-600">Profundiza en temas clave para potenciar tu desarrollo profesional.</p>
                </div>
              </div>

              {/* Beneficio 3 */}
              <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:bg-purple-50 border-l-4 border-purple-400">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Sparkles className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Charlas Inspiradoras</h3>
                  <p className="text-sm text-gray-600">Descubre nuevas ideas que te impulsarán a dar lo mejor de ti.</p>
                </div>
              </div>

              {/* Beneficio 4 */}
              <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:bg-red-50 border-l-4 border-red-400">
                <div className="bg-red-100 p-3 rounded-xl">
                  <ClipboardList className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Capacitación a Medida</h3>
                  <p className="text-sm text-gray-600">Diseñamos contenidos personalizados según tus necesidades.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Galería de capacitaciones */}
      <section className="bg-gradient-to-tr from-gray-100 via-blue-50 to-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
            Capacitaciones Realizadas
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">Conoce nuestros últimos talleres y actividades para el desarrollo de habilidades profesionales</p>

          <div className="max-w-4xl mx-auto flex flex-col" style={{ zIndex: 0 }}>
            <div className="flex items-center justify-center gap-4 pointer-events-auto">
              <button
                onClick={handlePrev}
                className="bg-white hover:bg-blue-50 transition p-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 duration-300"
                aria-label="Anterior imagen"
              >
                <ChevronLeft className="w-7 h-7 text-blue-600" />
              </button>
              
              <div className="overflow-hidden rounded-xl shadow-lg bg-white">
                <div className="group relative pointer-events-none">
                  <img
                    src={images[index]}
                    alt={`Capacitación ${index + 1}`}
                    className="w-full h-[500px] object-contain transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
              </div>
              
              <button
                onClick={handleNext}
                className="bg-white hover:bg-blue-50 transition p-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 duration-300"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-7 h-7 text-blue-600" />
              </button>
            </div>
            
            <div className="flex justify-center mt-6 gap-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === index 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 w-6' 
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                  aria-label={`Ir a imagen ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Conoce al equipo */}
      <section className="bg-gradient-to-b from-blue-100 via-indigo-50 to-white py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
          Conoce al equipo
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">Un equipo comprometido con tu desarrollo profesional y personal</p>

        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center items-center">
            <button
              onClick={prev}
              className="bg-white rounded-full p-3 shadow-md hover:shadow-lg hover:scale-110 transition-transform mr-4 text-blue-600 hover:bg-blue-50"
              disabled={current === 0}
              aria-label="Ver miembros anteriores"
            >
              <ArrowLeftCircle className="w-9 h-9" />
            </button>

            <div className="flex flex-wrap justify-center gap-8 py-4 overflow-visible">
              {equipo.slice(current, current + visibles).map((persona, idx) => (
                <div
                  key={idx}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div>
                  <div className="bg-white text-blue-900 rounded-2xl p-5 w-60 shadow-md group-hover:shadow-xl transform group-hover:scale-105 transition duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <div className="rounded-xl mb-3 overflow-hidden w-full h-[220px] flex items-center justify-center bg-gradient-to-b from-blue-50 to-gray-50 relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                      <img
                        src={persona.imagen}
                        alt={persona.nombre}
                        className="object-cover w-[120px] h-[170px] rounded-md z-10 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-bold text-lg text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{persona.nombre}</h3>
                    <p className="text-sm text-center text-gray-600 mt-1 italic">{persona.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={next}
              className="bg-white rounded-full p-3 shadow-md hover:shadow-lg hover:scale-110 transition-transform ml-4 text-blue-600 hover:bg-blue-50"
              disabled={current + visibles >= equipo.length}
              aria-label="Ver miembros siguientes"
            >
              <ArrowRightCircle className="w-9 h-9" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LandingCapacitaciones;