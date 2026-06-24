import React, { useState } from "react";
import { Target, Image as ImageIcon, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import "./sembrandoSonrisas.css";

/**
 * ============================================================
 *  PLANTILLA DE PROYECTO PSM
 *  Para crear la página de otro proyecto:
 *    1. Copia este archivo y sembrandoSonrisas.css con otro nombre.
 *    2. Edita SOLO el objeto `proyecto` de abajo.
 *    3. Re-tematiza los colores en el bloque `.proj-page` del .css.
 *
 *  Estructura (igual para todos los proyectos):
 *    Header · Intro · Sobre el proyecto · Actividades · Impacto · Footer
 *
 *  Tip de texto: dentro de los párrafos puedes resaltar palabras
 *  con **dobles asteriscos** y se pintarán del color del proyecto.
 * ============================================================
 */
const proyecto = {
  nombre: "Sembrando Sonrisas",
  // Logo de Proyectos San Marcos (header + footer)
  logoPSM:
    "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-psm//logo-white.png",
  // Logo redondo propio del proyecto
  logo: "https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg",

  // ── Intro ──
  intro:
    "En **Sembrando Sonrisas** logramos llevar **esperanza y sonrisas** a muchas comunidades, especialmente en **zonas rurales** como **Ayacucho**, donde entregamos canastas de víveres, **regalos** y compartimos momentos de alegría con más de **50 familias y 150 niños**. 🎁❤️",
  introFoto: "",

  // ── Sobre el proyecto (filas alternadas texto / foto redonda) ──
  sobre: [
    {
      texto:
        "**Sembrando Sonrisas** nace con el propósito de **brindar** un momento especial a **niños y familias** de comunidades rurales que muchas veces tienen **acceso limitado** a recursos.",
      foto: "",
    },
    {
      texto:
        "Cada año **Sembrando Sonrisas** organiza campañas **solidarias** para recolectar **donaciones** y preparar una jornada navideña llena de **actividades**, juegos y **sorpresas** para los niños.",
      foto: "",
    },
  ],

  // ── Actividades que realizamos, organizadas por edición/año ──
  // El `texto` se muestra como leyenda sobre la foto.
  // `size` arma el mosaico: "wide" (2 col), "tall" (2 filas) o "" (1x1).
  actividades: {
    "2024": [
      { texto: "Entrega de **juguetes** y **regalos** para los **niños**.", foto: "", size: "wide" },
      { texto: "Compartir de **chocolate** caliente y **panetón**.", foto: "", size: "" },
      { texto: "Juegos y **dinámicas** recreativas.", foto: "", size: "tall" },
      { texto: "Entrega de ropa o **víveres** para las **familias**.", foto: "", size: "" },
      { texto: "**Actividades** de integración con la **comunidad**.", foto: "", size: "wide" },
    ],
    "2025": [
      { texto: "Edición **2025** — actividad destacada.", foto: "", size: "wide" },
      { texto: "Edición **2025** — actividad.", foto: "", size: "" },
      { texto: "Edición **2025** — actividad.", foto: "", size: "" },
      { texto: "Edición **2025** — actividad.", foto: "", size: "tall" },
    ],
    "2026": [
      { texto: "Edición **2026** — actividad destacada.", foto: "", size: "wide" },
      { texto: "Edición **2026** — actividad.", foto: "", size: "" },
      { texto: "Edición **2026** — actividad.", foto: "", size: "" },
    ],
  },

  // ── Impacto del proyecto ──
  impacto: {
    texto:
      "**Sembrando Sonrisas** permite llevar momentos de felicidad a **comunidades rurales** y fortalecer el **compromiso** social con la comunidad. Cada año se busca **beneficiar** a más **niños** y **familias**, sembrando esperanza y **alegría** en cada visita.",
    foto: "",
    cifras: [
      { num: "50+", label: "Familias beneficiadas por el proyecto" },
      { num: "150+", label: "Niños beneficiados por el proyecto" },
    ],
  },

  // ── Footer ──
  footer: {
    descripcion:
      "Estudiantes voluntarios de la UNMSM impulsando el cambio social a través de la gestión de proyectos de alto impacto.",
    navegacion: [
      { label: "Inicio", href: "#inicio" },
      { label: "Sobre el Proyecto", href: "#sobre" },
      { label: "Actividades que se Realiza", href: "#actividades" },
      { label: "Impacto del Proyecto", href: "#impacto" },
    ],
    contacto: [{ icon: MapPin, text: "Ciudad Universitaria, UNMSM, Lima, Perú" }],
    redes: [
      { label: "Facebook", href: "https://www.facebook.com/ProyectosSanMarcos", icon: Facebook },
      { label: "Instagram", href: "https://www.instagram.com/proyectossm", icon: Instagram },
      { label: "TikTok", href: "https://www.tiktok.com/@proyectossanmarcos", icon: "tiktok" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/proyectossm", icon: Linkedin },
    ],
  },
};

/* Resalta los **fragmentos** marcados con dobles asteriscos. */
const renderRich = (text) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="proj-hl">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );

/* Caja de imagen con placeholder. shape: "rect" | "round". */
const Foto = ({ src, alt = "", shape = "rect" }) => (
  <div className={`proj-img proj-img--${shape}`}>
    {src ? (
      <img src={src} alt={alt} loading="lazy" />
    ) : (
      <span className="proj-img__ph">
        <ImageIcon size={34} />
      </span>
    )}
  </div>
);

const TikTokIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
  </svg>
);

const Sanamente = () => {
  const { intro, introFoto, sobre, actividades, impacto, footer } = proyecto;
  const anios = Object.keys(actividades);
  // Edición seleccionada por defecto: la más reciente disponible.
  const [anioActivo, setAnioActivo] = useState(anios[anios.length - 1]);
  const actsDelAnio = actividades[anioActivo] ?? [];

  return (
    <main className="proj-page">
      {/* ===================== HEADER ===================== */}
      <header className="proj-topbar">
        <div className="proj-container proj-topbar__inner">
          <img className="proj-topbar__psm" src={proyecto.logoPSM} alt="Proyectos San Marcos" />
          <h1 className="proj-topbar__title">{proyecto.nombre}</h1>
          <div className="proj-topbar__logo">
            <img src={proyecto.logo} alt={`Logo ${proyecto.nombre}`} />
          </div>
        </div>
      </header>

      {/* ===================== INTRO ===================== */}
      <section id="inicio" className="proj-section proj-dotted">
        <div className="proj-container proj-intro">
          <div className="proj-intro__card">
            <p>{renderRich(intro)}</p>
          </div>
          <Foto src={introFoto} alt="Sembrando Sonrisas" shape="rect" />
        </div>
      </section>

      {/* ================= SOBRE EL PROYECTO ================= */}
      <section id="sobre" className="proj-section proj-dotted proj-section--soft">
        <div className="proj-container">
          <h2 className="proj-h2">
            <span className="proj-hl">Sobre el</span> Proyecto
          </h2>

          <div className="proj-rows">
            {sobre.map((row, i) => (
              <div key={i} className={`proj-row ${i % 2 ? "proj-row--reverse" : ""}`}>
                <div className="proj-row__text">
                  <p>{renderRich(row.texto)}</p>
                </div>
                <Foto src={row.foto} shape="round" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ACTIVIDADES ================= */}
      <section id="actividades" className="proj-section proj-dotted">
        <div className="proj-container">
          <h2 className="proj-h2 proj-h2--center">
            <span className="proj-hl">Actividades</span> que realizamos
          </h2>

          {/* Selector de edición por año */}
          <div className="proj-tabs" role="tablist" aria-label="Edición por año">
            {anios.map((anio) => (
              <button
                key={anio}
                type="button"
                role="tab"
                aria-selected={anio === anioActivo}
                className={`proj-tab ${anio === anioActivo ? "proj-tab--active" : ""}`}
                onClick={() => setAnioActivo(anio)}
              >
                {anio}
              </button>
            ))}
          </div>

          {/* Mosaico de fotos con la actividad como leyenda */}
          <div className="proj-mosaic" key={anioActivo}>
            {actsDelAnio.map((a, i) => (
              <figure
                key={i}
                className={`proj-tile ${a.size === "wide" ? "proj-tile--wide" : ""} ${
                  a.size === "tall" ? "proj-tile--tall" : ""
                }`}
              >
                {a.foto ? (
                  <img src={a.foto} alt={a.texto.replace(/\*\*/g, "")} loading="lazy" />
                ) : (
                  <span className="proj-tile__ph">
                    <ImageIcon size={34} />
                  </span>
                )}
                <figcaption className="proj-tile__cap">{renderRich(a.texto)}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMPACTO ================= */}
      <section id="impacto" className="proj-section proj-dotted proj-section--soft">
        <div className="proj-container">
          <h2 className="proj-h2 proj-h2--center proj-h2--icon">
            <Target size={30} className="proj-h2__icon" />
            <span>
              <span className="proj-hl">Impacto del</span> Proyecto
            </span>
          </h2>

          <div className="proj-impact">
            <div className="proj-impact__text">
              <p>{renderRich(impacto.texto)}</p>

              <div className="proj-stats">
                {impacto.cifras.map((c, i) => (
                  <div key={i} className="proj-stat">
                    <div className="proj-stat__num">{c.num}</div>
                    <div className="proj-stat__label">{c.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <Foto src={impacto.foto} shape="rect" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sanamente;
