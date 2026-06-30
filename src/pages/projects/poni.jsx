import React, { useState } from "react";
import { Users, Image as ImageIcon, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import ProjectTopbar from "../../components/ProjectTopbar";
import ProjectFooter from "../../components/ProjectFooter";
import "./poni.css";

/**
 * ============================================================
 *  PROYECTO PSM — PONI
 *  (Programa de Orientación para Nuevos Integrantes)
 *
 *  Para personalizar:
 *    1. Edita SOLO el objeto `proyecto` de abajo.
 *    2. Pega los links de Supabase en los campos `foto` vacíos.
 *       - introFoto         → foto principal de bienvenida
 *       - sobre[0].foto     → foto redonda sección "¿Qué es PONI?"
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
  nombre: "PONI",

  // Logo de Proyectos San Marcos (header + footer)
  logoPSM:
    "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-psm//logo-white.png",

  // Logo redondo propio del proyecto
  // 👉 Reemplaza con el logo oficial de PONI cuando lo tengas
  logo: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/WhatsApp%20Image%202026-06-29%20at%2000.48.31.png",

  // ── Intro ──
  intro:
    "**PONI** es el programa de **bienvenida oficial** de Proyectos San Marcos para todos los **nuevos integrantes**. Un espacio pensado para que cada persona que se suma a nuestra organización se sienta **parte del equipo** desde el primer día. 🤝✨",

  // 👉 URL de Supabase: foto grupal o de bienvenida PONI
  introFoto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/poni_bienvenida.jpeg",

  // ── Sobre el proyecto (filas alternadas texto / foto redonda) ──
  sobre: [
    {
      texto:
        "**PONI** nace de la necesidad de **integrar** a los nuevos voluntarios de manera cálida y organizada. Sabemos que llegar a una nueva organización puede ser **desafiante**, por eso diseñamos una experiencia de **orientación** que hace sentir a cada persona **bienvenida** y preparada desde el inicio.",
      // 👉 URL de Supabase: foto redonda – actividad de integración
      foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/poni_actividad.jpeg",
    },
    {
      texto:
        "Durante el programa, los nuevos integrantes conocen la **estructura** de la organización, sus **áreas de trabajo**, los proyectos activos y, sobre todo, al **equipo** que los recibirá. Es una oportunidad para hacer **nuevas amistades** y entender cómo **contribuir** desde el primer día.",
      // 👉 URL de Supabase: foto redonda – presentación o charla PONI
      foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/poni_charla.jpeg",
    },
    {
      texto:
        "PONI está dirigido a **todos los nuevos voluntarios** de Proyectos San Marcos, sin importar el área al que pertenezcan. La **diversidad** de perfiles hace que cada edición sea **única**, enriqueciendo la experiencia con **distintas perspectivas** y talentos.",
      // 👉 URL de Supabase: foto redonda – grupo diverso de voluntarios
      foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/poni_grupal.jpeg",
    },
  ],

  // ── Actividades por edición/año ──
  // `size`: "wide" = 2 columnas | "tall" = 2 filas | "" = 1x1
  // 👉 Pega los links de Supabase en cada campo `foto`.
  actividades: {
    "2024": [
      {
        texto: "**Sesión de bienvenida** y presentación de la organización.",
        // 👉 Foto PONI 2024 – sesión de bienvenida
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/poni_202400.jpg",
        size: "wide",
      },
      {
        texto: "**Dinámica de integración** entre nuevos y antiguos voluntarios.",
        // 👉 Foto PONI 2024 – dinámica grupal
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/poni_202401.jpg",
        size: "",
      },
      {
        texto: "**Tour virtual** por las áreas de trabajo y proyectos activos.",
        // 👉 Foto PONI 2024 – tour o exposición de áreas
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/poni_202402.jpg",
        size: "tall",
      },
      {
        texto: "**Palabras de líderes** y testimonios de voluntarios con trayectoria.",
        // 👉 Foto PONI 2024 – panel o charla de líderes
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/poni_202403.jpg",
        size: "",
      },
      {
        texto: "**Palabras de líderes** y testimonios de voluntarios con trayectoria.",
        // 👉 Foto PONI 2024 – panel o charla de líderes
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/IMG-20240225-WA0060.jpg",
        size: "",
      },
      {
        texto: "**Compartir** de cierre: brindis de bienvenida entre todos los integrantes.",
        // 👉 Foto PONI 2024 – compartir o brindis final
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/poni_202404.jpg",
        size: "wide",
      },
    ],
    "2025": [
      {
        texto: "**Edición 2025** — Apertura y presentación de la nueva generación.",
        // 👉 Foto PONI 2025 – apertura
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/poni_202500.jpeg",
        size: "tall",
      },
      {
        texto: "**Edición 2025** — Dinámica de roles y áreas.",
        // 👉 Foto PONI 2025 – dinámica de roles
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/poni_202501.jpeg",
        size: "",
      },
      {
        texto: "**Edición 2025** — Cierre y fotografía grupal.",
        // 👉 Foto PONI 2025 – foto grupal
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/poni_202503.jpeg",
        size: "tall",
      },
      {
        texto: "**Edición 2025** — Actividad de trabajo en equipo.",
        // 👉 Foto PONI 2025 – actividad de equipo
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/poni_202502.jpeg",
        size: "",
      },
    ],
    "2026": [
      {
        texto: "**Edición 2026** — Bienvenida a los nuevos integrantes.",
        // 👉 Foto PONI 2026 – bienvenida
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/poni_202600.jpg",
        size: "wide",
      },
      {
        texto: "**Edición 2026** — Dinámicas de integración.",
        // 👉 Foto PONI 2026 – dinámicas
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/poni_202601.jpg",
        size: "",
      },
      {
        texto: "**Edición 2026** — Dinámicas de integración.",
        // 👉 Foto PONI 2026 – dinámicas
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/2.jpg",
        size: "",
      },
      {
        texto: "**Edición 2026** — Dinámicas de integración.",
        // 👉 Foto PONI 2026 – dinámicas
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/4.jpg",
        size: "",
      },
      {
        texto: "**Edición 2026** — Dinámicas de integración.",
        // 👉 Foto PONI 2026 – dinámicas
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/5.jpg",
        size: "",
      },
      {
        texto: "**Edición 2026** — Dinámicas de integración.",
        // 👉 Foto PONI 2026 – dinámicas
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/6.jpg",
        size: "",
      },
      {
        texto: "**Edición 2026** — Dinámicas de integración.",
        // 👉 Foto PONI 2026 – dinámicas
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/7.jpg",
        size: "",
      },
      {
        texto: "**Edición 2026** — Compartir de cierre.",
        // 👉 Foto PONI 2026 – cierre
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/poni_202602.jpg",
        size: "",
      },
    ],
  },

  // ── Impacto del proyecto ──
  impacto: {
    texto:
      "**PONI** fortalece la **identidad organizacional** de Proyectos San Marcos al asegurar que cada nuevo integrante comience su camino con **claridad**, **motivación** y un sentido real de **pertenencia**. Cada edición nos recuerda por qué hacemos lo que hacemos: **crecer juntos** como comunidad.",
    // 👉 URL de Supabase: foto de impacto – voluntarios juntos
    foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/impacto.jpeg",
    cifras: [
      { num: "3", label: "Ediciones realizadas (2024 · 2025 · 2026)" },
      { num: "60+", label: "Nuevos integrantes orientados" },
      { num: "100%", label: "Voluntarios que pasaron por PONI" },
      { num: "∞", label: "Lazos de amistad y trabajo en equipo" },
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
      className="proj-page poni"
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
        badge="Programa de Orientación para Nuevos Integrantes"
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
