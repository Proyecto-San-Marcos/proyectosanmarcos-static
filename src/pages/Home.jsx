import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import CardProject from "../components/CardProject";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[calc(100vh-5.5rem)]">
        <div className="absolute inset-0">
          {/* Hero img: Recomendado 1920x1080px */}
          <img
            src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos//foto_grupal.jpeg"
            alt="Estudiantes voluntarios de UNMSM"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-950/80"></div>
        </div>

        <div className=" z-10 container mx-auto px-6 flex flex-col h-full justify-center items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            } transform ${isVisible ? "translate-y-0" : "translate-y-10"}`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
              Proyectos San Marcos
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl mb-8 text-center">
              Estudiantes voluntarios impulsando el cambio social a través de la
              gestión de proyectos de alto impacto.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="btn btn-{white} px-8 py-3">
                Únete al Equipo
              </button>
              <button className="btn bg-transparent border border-white text-white hover:bg-white hover:text-primary px-8 py-3">
                Conoce Más
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Quiénes Somos */}
        <section className="py-20 bg-white" id="about">
          <div className="container mx-auto px-6 xl:px-20">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3">
                {/* imgn de equipo: Recomendado 600x400px */}
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos//grupo.jpeg"
                    alt="Equipo de voluntarios"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  ¿Quiénes Somos?
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  Somos una organización liderada por estudiantes voluntarios de
                  la Universidad Nacional Mayor de San Marcos, comprometidos con
                  la excelencia y el desarrollo social a través de la gestión de
                  proyectos.
                </p>
                <p className="text-gray-700 text-lg mb-6">
                  Promovemos y aplicamos las buenas prácticas de dirección de
                  proyectos con el objetivo de contribuir al desarrollo de
                  nuestra universidad y sociedad, mediante la ejecución de
                  iniciativas de alto impacto.
                </p>
                <button className="btn btn-outline btn-primary">
                  Conoce Nuestra Historia
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestro Impacto */}
        <section className="py-20 bg-neutral-100" id="impact">
          <div className="container mx-auto px-6 xl:px-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              Nuestro Impacto
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-primary text-4xl font-bold mb-4">500+</div>
                <p className="text-gray-700">Estudiantes beneficiados</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-primary text-4xl font-bold mb-4">25+</div>
                <p className="text-gray-700">Proyectos completados</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-primary text-4xl font-bold mb-4">10+</div>
                <p className="text-gray-700">Alianzas institucionales</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Servicios */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 xl:px-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              Nuestros Servicios
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Servicio 1 */}
              <div className="bg-neutral-50 rounded-lg p-8 shadow-md">
                {/* Icono: Recomendado 64x64px */}
                <div className="mb-4 flex justify-center">
                  <img
                    src="https://placehold.co/64x64/1c3a5e/FFFFFF/png?text=1"
                    alt="Gestión de Proyectos"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Gestión de Proyectos
                </h3>
                <p className="text-gray-700 text-center">
                  Implementamos metodologías efectivas para la planificación y
                  ejecución de proyectos que generan impacto real en nuestra
                  comunidad universitaria y sociedad.
                </p>
              </div>

              {/* Servicio 2 */}
              <div className="bg-neutral-50 rounded-lg p-8 shadow-md">
                <div className="mb-4 flex justify-center">
                  <img
                    src="https://placehold.co/64x64/1c3a5e/FFFFFF/png?text=2"
                    alt="Capacitación"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Capacitación y Desarrollo
                </h3>
                <p className="text-gray-700 text-center">
                  Ofrecemos talleres y programas formativos para estudiantes
                  interesados en adquirir habilidades de liderazgo, trabajo en
                  equipo y gestión de recursos.
                </p>
              </div>

              {/* Servicio 3 */}
              <div className="bg-neutral-50 rounded-lg p-8 shadow-md">
                <div className="mb-4 flex justify-center">
                  <img
                    src="https://placehold.co/64x64/1c3a5e/FFFFFF/png?text=3"
                    alt="Responsabilidad Social"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Responsabilidad Social
                </h3>
                <p className="text-gray-700 text-center">
                  Desarrollamos iniciativas que abordan problemas sociales y
                  contribuyen al desarrollo sostenible de nuestras comunidades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Proyectos Destacados */}
        <section className="py-20 bg-neutral-100" id="projects">
          <div className="container mx-auto px-6 xl:px-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              Proyectos Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Proyecto 1 */}
              <CardProject
                imageUrl="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos//rescatando.jpeg"
                title="Rescatando playas"
                description="Iniciativa de limpieza y educación ambiental en playas locales. Voluntarios trabajando para preservar la belleza natural y la vida marina."
                buttonText="Ver más"
                onButtonClick={() => alert("Ver más sobre Rescatando playas")}
              />
              {/* Proyecto 2 */}
              <CardProject
                imageUrl="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos//sembrando_sonrisas.jpeg"
                title="Sembrando sonrisas"
                description="Iniciativa de reforestación y educación ambiental en comunidades vulnerables. Voluntarios trabajando para preservar el medio ambiente y crear conciencia."
                buttonText="Ver más"
                onButtonClick={() => alert("Ver más sobre Sembrando sonrisas")}
              />
              {/* Proyecto 3 */}
              <CardProject
                imageUrl="https://scontent.flim39-1.fna.fbcdn.net/v/t39.30808-6/488407688_991399479761909_1978576309811572481_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=icwfO92A0coQ7kNvwF4FKVZ&_nc_oc=Adnv-eZ_iumM4UA2D8TAcRq7hDjaxd2mIZKzvV8rx3Rh2xo13Rrjqm_ZfnSc_TFgqa9iAKJFgxL-FaEx5-HNrh2m&_nc_zt=23&_nc_ht=scontent.flim39-1.fna&_nc_gid=Nb3yE7R_PGwyhNbrmwZRtg&oh=00_AfEXL68zxe0cOSDxqJtTOmqfwl7i3v4QykxgQvjXfKlVHw&oe=6801E335"
                title="4 Patas"
                description="Iniciativa enfocada en el apoyo de animales en situación de abandono. Voluntarios trabajando para brindarles una segunda oportunidad y mejorar su calidad de vida."
                buttonText="Ver más"
                onButtonClick={() => alert("Ver más sobre 4 Patas")}
              />
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 xl:px-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              Testimonios
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonio 1 */}
              <div className="bg-neutral-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {/* Foto perfil: Recomendado 80x80px circular */}
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://placehold.co/80x80/e9ecef/495057/png?text=Perfil"
                      alt="Estudiante"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Carlos Mendoza</h4>
                    <p className="text-sm text-gray-600">
                      Estudiante de Ingeniería
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  Participar en este voluntariado ha sido una de las mejores
                  decisiones de mi vida universitaria. He adquirido habilidades
                  que ninguna clase podría enseñarme y he formado parte de
                  proyectos que realmente hacen la diferencia.
                </p>
              </div>

              {/* Testimonio 2 */}
              <div className="bg-neutral-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://placehold.co/80x80/e9ecef/495057/png?text=Perfil"
                      alt="Estudiante"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ana Ramírez</h4>
                    <p className="text-sm text-gray-600">
                      Estudiante de Administración
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  El ambiente colaborativo y enfocado en resultados me ha
                  permitido aplicar lo que aprendo en clase en contextos reales.
                  Ahora me siento más preparada para mi futuro profesional.
                </p>
              </div>

              {/* Testimonio 3 */}
              <div className="bg-neutral-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://placehold.co/80x80/e9ecef/495057/png?text=Perfil"
                      alt="Profesor"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dr. Felipe Gutiérrez</h4>
                    <p className="text-sm text-gray-600">Docente UNMSM</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  Como docente, he visto cómo esta iniciativa transforma a los
                  estudiantes, desarrollando su liderazgo y compromiso social.
                  La universidad necesita más espacios como este.
                </p>
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
