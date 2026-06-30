import React, { useState } from "react";
import { Target, Image as ImageIcon, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import ProjectTopbar from "../../components/ProjectTopbar";
import ProjectFooter from "../../components/ProjectFooter";
import "./cuatroPatas.css";

/**
 * ============================================================
 *  PLANTILLA DE PROYECTO PSM
 *  Para crear la página de otro proyecto:
 *    1. Copia este archivo y cuatroPatas.css con otro nombre.
 *    2. Edita SOLO el objeto `proyecto` de abajo.
 *    3. Re-tematiza los colores en el bloque `.proj-page` del .css.
 *
 *  Estructura (igual para todos los proyectos):
 *    Header · Intro · Sobre el proyecto · Actividades · Impacto · Footer
 *
 *  Tip de texto: dentro de los párrafos puedes resaltar palabras
 *  con **dobles asteriscos** y se pintarán del color del proyecto. //interesante
 * ============================================================
 */
const proyecto = {
  nombre: "Cuatro Patas",
  // Logo de Proyectos San Marcos (header + footer)
  logoPSM:
    "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-psm//logo-white.png",
  // Logo redondo propio del proyecto
  logo: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/0cd25687-5c10-4b7c-bc9a-0a2188e38a22.webp",
  //logo: "/logoGemini.jpg",

  // ── Intro ──
  intro:
    "En **4 Patas** apoyamos el **bienestar animal**, trabajamos para mejorar la vida de **perros y gatos en situación de vulnerabilidad** en barrios de escasos recursos, llevando **alimento**, **esterilizaciones** y **educación comunitaria** sobre la tenencia responsable. 🐾",
    introFoto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/910b4782-8fbf-4c70-9339-4fa3e4679ba3.webp",

  // ── Sobre el proyecto (filas alternadas texto / foto redonda) ──
  sobre: [
    {
      texto:
        "**4 Patas** nace para enfrentar una realidad que se repite en muchos barrios: perros y gatos abandonados, sin alimento ni atención médica, y familias sin recursos para esterilizar a sus mascotas. Nuestro objetivo es **concientizar** a la población sobre la **sobrepoblación de mascotas** y reducir el **abandono animal**.",
      foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/ab9e62ff-6285-472d-8a1e-e64ada9e72a5.webp",
    },
    {
      texto:
        "Cada edición combina tres frentes: **talleres de concientización**, actividades de financiamiento como el **PATAFEST**, y **jornadas de esterilización** gratuitas en alianza con albergues y juntas vecinales de la zona.",
      foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/fdd1d0bb-735a-437c-84bc-c2b276272753.webp",
    },
  ],

  // ── Actividades que realizamos, organizadas por edición/año ──
  // El `texto` se muestra como leyenda sobre la foto.
  // `size` arma el mosaico: "wide" (2 col), "tall" (2 filas) o "" (1x1).
  actividades: {
    "2021": [
      { texto: "El inicio de un gran Viaje: **Primera edición** del proyecto - Huarochirí, Lima.", 
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/75b1a0d2-c15e-45f7-98c3-2b06d0f924c1.webp",
        size:"wide"
      },
    ],
    "2022": [
      { texto: "**Segunda edición** del proyecto, en alianza con la organización de pobladores **\"Grupo Bolognesi\"** en San Juan de Lurigancho.", 
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2022_4Patas/8345e76c-fae8-4f16-a5cd-59ca02c26fa1.webp",
        size:"wide"
      },
      { texto: "Jornada de **esterilización** para perritos y gatitos.",
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2022_4Patas/8a41f41a-4b53-40b1-853d-6ba7fcc9ee8e.webp",
        size:"tall"
      },
      { texto: "Cada perrito es trasladado con **cuidado** antes de su atención.",
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2022_4Patas/094a207c-c1bc-48ea-90ca-62badb551d2e.webp",
        size: "tall"
      },
      { texto: "**Comederos comunitarios** instalados para perritos sin hogar.",
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2022_4Patas/a6a4674a-3140-4b80-bc9f-0b80b31736a6.webp",
        size: ""
      },
      { texto: "**Armando** los comederos PVC antes de salir a instalarlos." ,
        foto:"https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2022_4Patas/1001f707-034f-4688-aab0-804b59fd08bc.webp",
        size: ""
      },
      { texto: "De vuelta a casa tras su **esterilización**, con una **segunda oportunidad**." ,
        foto:"https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2022_4Patas/7253ee3b-3699-4395-9f3e-ec56ee977164.webp",
        size: "tall"
      },
      { texto: "El equipo, listo tras armar los **bebederos** que llevaremos a la comunidad." ,
        foto:"https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2022_4Patas/6af9e9f3-291c-4d10-9b4a-3850bcb63e14.webp",
        size: "wide"
      },
      

    ],
    "2024": [
      { texto: "**Tercera edición** del proyecto: jornada de esterilización en **Pachacámac**, Residencial Santísimo Salvador **\"Las Palmas\"**.",
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2024_4patas/45dc5cef-83a6-441a-80d8-3361d39d985a.webp",
        size: "wide"
      },
      { texto: "Hasta los **mas pequeños**: Brindando ayuda a un cachorrito en situación de calle.",
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2024_4patas/5ee2dddb-58ba-4113-a1a8-fbe933c0c274.webp",
        size: "tall"
      },
      { texto: "Campaña de esterilización ** \"4 Patas\".**",
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2024_4patas/b3402107-c7d9-40de-9a66-3596c975e189.webp",
        size: "tall"
      },
      { texto: "En plena **jornada de esterilización**, junto al equipo médico veterinario.",
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2024_4patas/aa6cd889-f9c0-4e9e-8a39-7e7f9f313928.webp",
        size: ""
      },
      { texto: "**Alimentando** perritos en las calles.",
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2024_4patas/4aace766-1ef6-47c4-8795-88fd2698fa30.webp",
        size: "tall"
      },
      { texto: "**Cada mirada** cuenta: ayudando a todos.",
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2024_4patas/626716f2-b7b9-4270-96ed-47e002fe62ad.webp",
        size: "tall"
      },
      { texto: "Todo por **ellos**",
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2024_4patas/1486d324-22d4-4d7c-a124-452f982e750d.webp",
        size: ""
      },
    ],
    "2025": [
      { texto: "**Cada plato cuenta**: comida para los animalitos en situación de calle.",
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2025_4Patas/0d9682b7-e98c-40ae-9c22-2f41e980457b.webp",
        size: "tall"
      },
      { texto: "**Taller de concientización** - SJL",
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2025_4Patas/5aec75b5-ea1e-43b3-99e6-4d2a781241ad.webp",
        size: "wide"
      },
      { texto: "Cuarta Edición, en apoyo al albergue **\"Adopta una Mascota\"**",
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2025_4Patas/e7e6dc86-b396-4708-988f-7768e767a873.webp",
        size: ""
      },
      { texto: "**Talleres de concientización**: esterilización y cuidado responsable, explicados puerta a puerta.",
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2025_4Patas/c86b516e-d9e0-447c-b43c-75dcebed1faf.webp",
        size: "tall"
      },
      { texto: "**Alimentando** a los perritos de la comunidad, un plato a la vez.",
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2025_4Patas/3bc02a5a-c548-4360-89aa-9c6df9b71690.webp",
        size: "tall"
      },
      { texto: "**Preparando** las charlas sobre alimentación saludable para perritos en cada etapa de su vida",
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2025_4Patas/f573ecb6-2011-4d52-9b22-12b71b2e90d9.webp",
        size: ""
      },
      { texto: "Cada **paso** cuenta",
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2025_4Patas/3364ccbd-fa61-439c-9fe8-2325ee61ef67.webp",
        size: ""
      },
      { texto: "**Una mirada** que lo dice todo",
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2025_4Patas/144dc2eb-13c9-48bf-ba06-b25546511d1b.webp",
        size: ""
      },
    ],
    "2026": [
      { texto: "Nuevas jornadas de esterilización y alimentación, ** Nueva Actualizacion** muy pronto.",
        foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/2026_4Patas/7836041c-69e7-4be4-9f41-8f39539fd8d1.webp",
        size: "tall"
      },
     
    ],
  },

  // ── Impacto del proyecto ──
  impacto: {
    texto:
      "Desde 2021, **4 Patas** ha esterilizado, alimentado y dado **segundas oportunidades** a decenas de perros y gatos en situaciónes vulnerables en multiples lugares como : Huarochirí, San Juan de Lurigancho y Pachacámac. Cada edición contribuye a **reducir el abandono animal** y a sembrar una cultura de **tenencia responsable**.",
    foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/proyectos/4patas/06c675ce-b07b-469a-bdda-57f0ff285d3b.webp",
    cifras: [
      { num: "165+", label: "Animalitos esterilizados en las 5 ediciones del proyecto" },
      { num: "5", label: "Ediciones realizadas desde 2021" },
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

const CuatroPatas = () => {
  const { intro, introFoto, sobre, actividades, impacto, footer } = proyecto;
  const anios = Object.keys(actividades);
  // Edición seleccionada por defecto: la más reciente disponible.
  const [anioActivo, setAnioActivo] = useState(anios[anios.length - 1]);
  const actsDelAnio = actividades[anioActivo] ?? [];

  return (
    <motion.main
      className="proj-page cuatro-patas"
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
          <Foto src={introFoto} alt="Cuatro Patas" shape="rect" />
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

export default CuatroPatas;
