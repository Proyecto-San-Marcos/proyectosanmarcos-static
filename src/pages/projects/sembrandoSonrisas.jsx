import React, { useState } from "react";
import { Target, Image as ImageIcon, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import ProjectTopbar from "../../components/ProjectTopbar";
import ProjectFooter from "../../components/ProjectFooter";
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
  logo: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sembrandosonrisas/eabf734f-75df-4ada-9d3a-e646414113d1.webp",

  // ── Intro ──
  intro:
    "En **Sembrando Sonrisas** logramos llevar **esperanza y sonrisas** a muchas comunidades, especialmente en **zonas rurales** como **Ayacucho**, donde entregamos canastas de víveres, **regalos** y compartimos momentos de alegría con más de **50 familias y 150 niños**. 🎁❤️",
  introFoto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sembrandosonrisas/674c27ad-5364-4fce-b7aa-08e2e182c78d.webp",

  // ── Sobre el proyecto (filas alternadas texto / foto redonda) ──
  sobre: [
    {
      texto:
        "**Sembrando Sonrisas** nace con el propósito de **brindar** un momento especial a **niños y familias** de comunidades rurales que muchas veces tienen **acceso limitado** a recursos.",
      foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sembrandosonrisas/17bea29d-d0c2-49ce-93f4-0533db2d3999.webp",
    },
    {
      texto:
        "Cada año **Sembrando Sonrisas** organiza campañas **solidarias** para recolectar **donaciones** y preparar una jornada navideña llena de **actividades**, juegos y **sorpresas** para los niños.",
      foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sembrandosonrisas/d84fa74b-faa9-4ce4-8eb1-a8b068f4edb3.webp",
    },
  ],

  // ── Actividades que realizamos, organizadas por edición/año ──
  // El `texto` se muestra como leyenda sobre la foto.
  // `size` arma el mosaico: "wide" (2 col), "tall" (2 filas) o "" (1x1).
  actividades: {
    "2024": [
      { texto: "Entrega de **juguetes** y **regalos** para los **niños**.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sembrandosonrisas/2a39981a-129c-47b1-bd70-dadb9beb237a.webp", size: "wide" },
      { texto: "Compartir de **chocolate** caliente y **panetón**.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sembrandosonrisas/3ce8479a-3522-4030-8f0c-3ed99c5ea0c0.webp", size: "" },
      { texto: "Juegos y **dinámicas** recreativas.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sembrandosonrisas/fc537e71-1ab9-4640-b398-909498bd533e.webp", size: "tall" },
      { texto: "Entrega de ropa o **víveres** para las **familias**.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sembrandosonrisas/5ad7eb02-058d-4db8-86df-86749da1dd00.webp", size: "" },
      { texto: "**Actividades** de integración con la **comunidad**.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sembrandosonrisas/19cde529-a9fa-4826-b38a-2e7edcc0e903.webp", size: "wide" },
    ],
    "2025": [
      { texto: "Edición **2025** — Entrega de **juguetes** y **regalos** para los **niños**.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sembrandosonrisas/2185f334-9d91-43b0-af91-335363945d80.webp", size: "wide" },
      { texto: "Edición **2025** — Compartir de **chocolate** caliente y **panetón**.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sembrandosonrisas/674c27ad-5364-4fce-b7aa-08e2e182c78d.webp", size: "" },
      { texto: "Edición **2025** — Juegos y **dinámicas** recreativas.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sembrandosonrisas/c8ee16ec-81be-4192-b33e-8434ac9602b6.webp", size: "" },
      { texto: "Edición **2025** — Entrega de ropa o **víveres** para las **familias**.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sembrandosonrisas/888ccb02-5b2a-49da-901e-dabe28a6f865.webp", size: "tall" },
    ]
  },

  // ── Impacto del proyecto ──
  impacto: {
    texto:
      "**Sembrando Sonrisas** permite llevar momentos de felicidad a **comunidades rurales** y fortalecer el **compromiso** social con la comunidad. Cada año se busca **beneficiar** a más **niños** y **familias**, sembrando esperanza y **alegría** en cada visita.",
    foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sembrandosonrisas/eb18766b-3461-4fec-b16f-bff30a7a5431.webp",
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

const SembrandoSonrisas = () => {
  const { intro, introFoto, sobre, actividades, impacto, footer } = proyecto;
  const anios = Object.keys(actividades);
  // Edición seleccionada por defecto: la más reciente disponible.
  const [anioActivo, setAnioActivo] = useState(anios[anios.length - 1]);
  const actsDelAnio = actividades[anioActivo] ?? [];

  return (
    <main className="proj-page sembrando-sonrisas">
      <ProjectTopbar nombre={proyecto.nombre} logo={proyecto.logo} logoPSM={proyecto.logoPSM} />

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
                className={`proj-tile ${a.size === "wide" ? "proj-tile--wide" : ""} ${a.size === "tall" ? "proj-tile--tall" : ""
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

      <ProjectFooter footer={footer} logoPSM={proyecto.logoPSM} />
    </main>
  );
};

export default SembrandoSonrisas;
