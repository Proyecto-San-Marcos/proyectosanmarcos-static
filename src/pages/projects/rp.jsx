import React, { useState } from "react";
import { Users, Image as ImageIcon, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import ProjectTopbar from "../../components/ProjectTopbar";
import ProjectFooter from "../../components/ProjectFooter";
import "./rp.css";

/**
 * ============================================================
 *  PROYECTO PSM — RP
 *  (Programa de Orientación para Nuevos Integrantes)
 *
 *  Para personalizar:
 *    1. Edita SOLO el objeto `proyecto` de abajo.
 *    2. Pega los links de Supabase en los campos `foto` vacíos.
 *       - introFoto         → foto principal de bienvenida
 *       - sobre[0].foto     → foto redonda sección "¿Qué es RESCATANDO PLAYAS?"
 *       - sobre[1].foto     → foto redonda sección "¿Cómo funciona?"
 *       - sobre[2].foto     → foto redonda sección "¿A quién va dirigido?"
 *       - actividades["2024"][N].foto → fotos del mosaico 2024
 *       - actividades["2025"][N].foto → fotos del mosaico 2025
 *       - actividades["2026"][N].foto → fotos del mosaico 2026
 *       - impacto.foto      → foto de cierre en sección Impacto
 *    3. Ajusta las cifras en impacto.cifras si tienes datos reales.
 * ============================================================
 */
const proyecto = {
  nombre: "RESCATANDO PLAYAS",

  // Logo de Proyectos San Marcos (header + footer)
  logoPSM:
    "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-psm//logo-white.png",

  // Logo redondo propio del proyecto
  // 👉 Reemplaza con el logo oficial de Rescatando Playas cuando lo tengas
  logo: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/logorp.png",

  // ── Intro ──
  intro:
    "**Rescatando Playas** tiene como objetivo principal reducir los residuos de las distintas **playas del Perú**, mientras se genera **conciencia ambiental** en los participantes y en la comunidad. Esta iniciativa busca promover una conexión activa con el **cuidado del entorno marino**, fomentar prácticas responsables de **reciclaje** y gestión de residuos",

  // 👉 URL de Supabase: foto grupal o de bienvenida PONI
  introFoto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/RP2026.jpg",

  // ── Sobre el proyecto (filas alternadas texto / foto redonda) ──
  sobre: [
    {
      texto:
        "**Rescatando playas** nace con el objetivo de concientizar a la **comunidad sanmarquina** a tráves de campañas de limpieza del impacto de la **contaminación**",
      foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/RPKATHERINE.jpg",
    },
    {
      texto:
        "Nos encargamos de proporcionar las **herramientas** necesarias para realizar una **limpieza efectiva** y de gran impacto",
      // 👉 URL de Supabase: foto redonda – presentación o charla PONI
      foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/SOLITARIORP2026.jpg",
    },
    {
      texto:
        "**Producto principal:** Una playa más limpia y libre de residuos sólidos, lograda mediante la **recolección**, **clasificación** y **disposición** adecuada de los desechos.",
      // 👉 URL de Supabase: foto redonda – grupo diverso de voluntarios
      foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/2025RP.jpg",
    },
  ],

  // ── Actividades por edición/año ──
  // `size`: "wide" = 2 columnas | "tall" = 2 filas | "" = 1x1
  // 👉 Pega los links de Supabase en cada campo `foto`.
  actividades: {
    "2025": [
      {
        texto: "**Voluntarios recolectando** residuos en la playa.",
        // 👉 Foto PONI 2024 – sesión de bienvenida
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/2025RP.jpg",
        size: "wide",
      },
      {
        texto: "**Participantes reunidos** durante la jornada.",
        // 👉 Foto PONI 2024 – dinámica grupal
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/20250315_101521.jpg",
        size: "",
      },
      {
        texto: "**Fotografía de voluntarios**junto al punto informativo.",
        // 👉 Foto PONI 2024 – tour o exposición de áreas
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/FOTOCONMURAL.JPG",
        size: "tall",
      },
      {
        texto: "**Foto grupal** luego de lograr el objetivo",
        // 👉 Foto PONI 2024 – panel o charla de líderes
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/20250315_124257.jpg",
        size: "",
      },
      {
        texto: "**Voluntario compartiendo** indicaciones con el equipo.",
        // 👉 Foto PONI 2024 – panel o charla de líderes
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/RPNEITER.JPG",
        size: "",
      },
      {
        texto: "**Fotografía grupal** antes de partir a la playa",
        // 👉 Foto PONI 2024 – compartir o brindis final
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/rescatando.jpeg",
        size: "wide",
      },
    ],
    "2026": [
      {
        texto: "**Edición 2026** — Apertura de la jornada y entrega de materiales.",
        // 👉 Foto PONI 2025 – apertura
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/IMG_20260418_104502.jpg",
        size: "tall",
      },
      {
        texto: "**Edición 2026** — Participantes reunidos antes de iniciar las actividades.",
        // 👉 Foto PONI 2025 – dinámica de roles
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/ORGANIZACIONRP2026.jpg",
        size: "",
      },
      {
        texto: "**Edición 2026** — Traslado de neumáticos recolectados durante la limpieza.",
        // 👉 Foto PONI 2025 – foto grupal
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/IMG_20260418_130506.jpg",
        size: "tall",
      },
      {
        texto: "**Edición 2026** — Fotografía grupal al finalizar la jornada.",
        // 👉 Cargando llanta
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/RP2026GRUPAL.jpg",
        size: "",
      },
    ],
  },

  // ── Impacto del proyecto ──
  impacto: {
    texto:
      "Este proyecto no solo mejora el **entorno físico**, sino que también fomenta un **sentido de pertenencia** y **responsabilidad colectiva** entre los participantes y la comunidad. Cada edición nos recuerda por qué hacemos lo que hacemos: **crecer juntos** como comunidad.",
    // 👉 URL de Supabase: foto de impacto – voluntarios juntos
    foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/20260418_100443.jpg",
    cifras: [
      { num: "2", label: "Ediciones realizadas (2025 · 2026)" },
      { num: "+110 kg", label: "Basura recolectada" },
      { num: "120", label: "Participantes de la comunidad" },
      { num: "+150", label: "Personas concientizadas con el cuidado marino" },
    ],
  },

  // ── Footer ──
  footer: {
    navegacion: [
      { label: "Inicio", href: "#inicio" },
      { label: "Sobre el Proyecto", href: "#sobre" },
      { label: "Actividades", href: "#actividades" },
      { label: "Impacto del Proyecto", href: "#impacto" },
    ],
    contacto: [{ icon: MapPin, text: "Ciudad Universitaria, UNMSM, Lima, Perú" }],
    redes: [
      { label: "Facebook", href: "https://www.facebook.com/ProyectosSanMarcos", icon: Facebook },
      { label: "Instagram", href: "https://www.instagram.com/proyectossm", icon: Instagram },
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

const Poni = () => {
  const { intro, introFoto, sobre, actividades, impacto, footer } = proyecto;
  const anios = Object.keys(actividades);
  const [anioActivo, setAnioActivo] = useState(anios[anios.length - 1]);
  const actsDelAnio = actividades[anioActivo] ?? [];

  return (
    <motion.main
      className="proj-page rp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >

      {/* ===================== HEADER ===================== */}
      <ProjectTopbar
        nombre={proyecto.nombre}
        logo={proyecto.logo}
        logoPSM={proyecto.logoPSM}
        badge="Un mar de cambios"
      />

      {/* ===================== INTRO ===================== */}
      <section id="inicio" className="proj-section proj-dotted">
        <div className="proj-container proj-intro">
          <div className="proj-intro__card">
            <p>{renderRich(intro)}</p>
          </div>
          <Foto src={introFoto} alt="PONI — Bienvenida" shape="rect" />
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
            <Users size={30} className="proj-h2__icon" />
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
    </motion.main>
  );
};

export default Poni;
