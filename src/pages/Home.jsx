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

        <div className="absolute z-10 container mx-auto px-6 flex flex-col h-full justify-center items-center">
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

        {/* Contacto */}
        <section className="py-20 bg-neutral-100">
          <div className="container mx-auto px-6 xl:px-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              Contáctanos
            </h2>

            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-gray-700">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border rounded-md"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border rounded-md"
                      placeholder="tucorreo@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-gray-700"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full p-3 border rounded-md"
                      placeholder="¿Cómo podemos ayudarte?"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary px-8 py-3">
                    Enviar Mensaje
                  </button>
                </form>
              </div>

              <div className="md:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-md h-full">
                  <h3 className="text-xl font-semibold mb-4">
                    Información de Contacto
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-primary mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Ubicación</h4>
                        <p className="text-gray-700">
                          Ciudad Universitaria, UNMSM, Lima, Perú
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-primary mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-gray-700">
                          voluntariado@unmsm.edu.pe
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-primary mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Teléfono</h4>
                        <p className="text-gray-700">(+51) 123-456-789</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold mb-4">Síguenos en:</h4>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="text-primary hover:text-primary-dark"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-facebook"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-primary hover:text-primary-dark"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-instagram"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-primary hover:text-primary-dark"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-linkedin"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
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
