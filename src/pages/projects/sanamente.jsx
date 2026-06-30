import React, { useState } from "react";
import { Target, Image as ImageIcon, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import ProjectTopbar from "../../components/ProjectTopbar";
import ProjectFooter from "../../components/ProjectFooter";
import "./sanamente.css";

const proyecto = {
  nombre: "Sanamente",
  logoPSM:
    "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-psm//logo-white.png",
  logo: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sanamente/79348089-e37d-4066-a6e6-c35bd28c73ef.webp",

  // ── Intro ──
  intro:
    "En **Sanamente** trabajamos por el **bienestar emocional** de los jóvenes, creando espacios de **escucha**, **diálogo** y reflexión. Promovemos la **inteligencia emocional** y reducimos el estigma de la **salud mental** en colegios y comunidades.",
  introFoto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sanamente/94df369e-db3b-4b1f-8f73-140f8bd469a3.webp",

  // ── Sobre el proyecto ──
  sobre: [
    {
      texto:
        "**Sanamente** nace como respuesta a una realidad urgente: durante el 2023, más de **280,000 casos de depresión** fueron atendidos en el Perú y la **ansiedad** sigue siendo uno de los trastornos más comunes entre **jóvenes**. Por eso apostamos por la **prevención** y la **educación emocional**.",
      foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sanamente/23fc0f62-69a4-4c5a-8792-e17772f5ba0b.webp",
    },
    {
      texto:
        "A través de **charlas**, **talleres** y dinámicas vivenciales, llevamos herramientas prácticas a **jóvenes** para que puedan gestionar sus emociones, conocerse mejor y tomar **decisiones** con mayor claridad y **propósito**.",
      foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sanamente/a9e99f61-9234-49d7-8c77-0a3e27be5ff0.webp",
    },
  ],

  // ── Actividades organizadas por edición/año ──
  actividades: {
    "2023": [
      { texto: "**Charlas informativas** para rendir una prueba.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sanamente/c565be4e-e717-4513-bd7c-128d65867e33.webp", size: "wide" },
      { texto: "**Preparación 360** para el examen de admisión.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sanamente/9feacf66-1e44-4caa-bd15-56b548232ad0.webp", size: "" },
      { texto: "Dinámica **grupal** con los participantes.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sanamente/223062e4-c4a9-4dc2-b855-a13f391daf3d.webp", size: "" },
      { texto: "Charla sobre **salud mental** y psicología.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sanamente/313cfa45-9688-4305-864e-31d8d5da802a.webp", size: "wide" },
    ],
    "2024": [
      { texto: "**PsiqueaFest 2024** jornada de bienestar emocional en la **UNMSM**.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sanamente/b58ad482-4504-4d40-ab1a-dfaa4181586a.webp", size: "wide" },
      { texto: "Dinámicas **lúdicas** e interactivas con los asistentes.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sanamente/53803714-db73-49c6-bf20-ab9d129b9546.webp", size: "" },
      { texto: "Dinámica de **autoconocimiento emocional**.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sanamente/0ced7ed9-eddf-495f-84f0-42b3cffef791.webp", size: "tall" },
      { texto: "Charlas de **salud mental** en el PsiqueaFest.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sanamente/53b6c830-ebee-4841-b7fc-84e80c1c65c9.webp", size: "" },
      { texto: "Actividad creativa de **expresión emocional**.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sanamente/3b56693f-01ef-4117-8732-9192760e0503.webp", size: "wide" },
    ],
    "2025": [
      { texto: "**PsiqueaFest 2025** en la I.E. N.° 0013 Bernardo O'Higgins.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sanamente/4cdde1e4-1438-47b3-9dbd-4f1ba9640fcf.webp", size: "wide" },
      { texto: "Jóvenes del **PsiqueaFest 2025**.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sanamente/b1178b58-dfa0-402f-855d-7fc2bae3f796.webp", size: "tall" },
      { texto: "Dinámica de **identificación emocional**.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sanamente/67b650fe-fdcf-4a0b-a322-81ea18b9b56d.webp", size: "" },
      { texto: "Espacios de **escucha y diálogo** con los estudiantes.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sanamente/56ad3dc4-5120-480e-978c-f96158170e2f.webp", size: "" },
      { texto: "Dinámicas de **escucha** y reflexión grupal.", foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sanamente/d27fd842-bc86-4cbe-8d82-584e62b986d0.webp", size: "wide" },
    ],
  },

  // ── Impacto del proyecto ──
  impacto: {
    texto:
      "**Sanamente** busca transformar la forma en que los jóvenes entienden y cuidan su **salud mental**. Con cada edición, más estudiantes acceden a herramientas para **gestionar sus emociones**, fortalecer su **orientación vocacional** y construir un **futuro** consciente y saludable.",
    foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/sanamente/1d61c09d-8a0d-487f-8007-e32055cc988a.webp",
    cifras: [
      { num: "94+", label: "Jóvenes beneficiados por el proyecto" },
      { num: "3", label: "Ediciones realizadas (2023–2025)" },
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

const Sanamente = () => {
  const { intro, introFoto, sobre, actividades, impacto, footer } = proyecto;
  const anios = Object.keys(actividades);
  // Edición seleccionada por defecto: la más reciente disponible.
  const [anioActivo, setAnioActivo] = useState(anios[anios.length - 1]);
  const actsDelAnio = actividades[anioActivo] ?? [];

  return (
    <motion.main
      className="proj-page sanamente"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <ProjectTopbar nombre={proyecto.nombre} logo={proyecto.logo} logoPSM={proyecto.logoPSM} />

      {/* ===================== INTRO ===================== */}
      <section id="inicio" className="proj-section proj-dotted">
        <div className="proj-container proj-intro">
          <div className="proj-intro__card">
            <p>{renderRich(intro)}</p>
          </div>
          <Foto src={introFoto} alt="Sanamente" shape="rect" />
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

      <ProjectFooter footer={footer} logoPSM={proyecto.logoPSM} />
    </motion.main>
  );
};

export default Sanamente;
