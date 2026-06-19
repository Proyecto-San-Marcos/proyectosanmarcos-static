/*eslint-disable react/prop-types */
import { useState, useCallback } from "react";
import Footer from "../components/Footer";
import "./LandingComunidad.css";
 
/* ─────────────────────────────────────────────
   Datos — sección 1: testimonios con video
──────────────────────────────────────────────── */
const testimonios = [
  {
    id: 1,
    nombre: "Valeria Mogrovejo",
    cargo: "Subgerenta de Talento Humano (2025-2026)",
    quote: "Proyectos San Marcos es más que una familia, viví mis mejores momentos aquí.",
    foto: "",
    stats: [
      { num: "4", label: "Proyectos participados" },
      { num: "3", label: "Años de contribución" },
      { num: "1", label: "Dirección de Proyecto" },
    ],
    videoUrl: "",
  },
  {
    id: 2,
    nombre: "Carlos Mendoza",
    cargo: "Ex Gerente de PMO (2023-2024)",
    quote: "Aquí aprendí a liderar proyectos reales con impacto social, algo que ninguna aula puede enseñarte.",
    foto: "",
    stats: [
      { num: "6", label: "Proyectos participados" },
      { num: "2", label: "Años de contribución" },
      { num: "2", label: "Dirección de Proyecto" },
    ],
    videoUrl: "",
  },
  {
    id: 3,
    nombre: "Ana Ramírez",
    cargo: "Coordinadora de Comunicaciones (2024)",
    quote: "PSM me dio las herramientas para crecer profesionalmente mientras generaba un cambio real en mi comunidad.",
    foto: "",
    stats: [
      { num: "3", label: "Proyectos participados" },
      { num: "1", label: "Años de contribución" },
      { num: "0", label: "Dirección de Proyecto" },
    ],
    videoUrl: "",
  },
];
 
/* ─────────────────────────────────────────────
   Datos — sección 2: carrusel de voces
──────────────────────────────────────────────── */
const voces = [
  {
    id: 1,
    nombre: "Marlon Cruzado",
    cargo: "Miembro activo · Ingeniería de telecomunicaciones",
    quote: "Ser parte PSM me permitió tirar con Jhossyana, ahora esta obsesionada conmigo",
    foto: "",
  },
  {
    id: 2,
    nombre: "Sofía Quispe",
    cargo: "Ex coordinadora · Comunicaciones",
    quote: "Lo mejor de PSM es que te tratan como un profesional desde el primer día. Cada proyecto es real, cada decisión importa.",
    foto: "",
  },
  {
    id: 3,
    nombre: "Miguel Torres",
    cargo: "Voluntario · Economía",
    quote: "Gracias a PSM conseguí mi primera práctica. Las habilidades que desarrollé aquí hicieron la diferencia en mi CV.",
    foto: "",
  },
  {
    id: 4,
    nombre: "Daniela Huanca",
    cargo: "Jefa de área · Talento Humano",
    quote: "PSM me enseñó que el trabajo en equipo con propósito puede mover montañas. Cada logro fue colectivo.",
    foto: "",
  },
  {
    id: 5,
    nombre: "Rodrigo Cárdenas",
    cargo: "Ex presidente · 2022-2023",
    quote: "Llevo PSM en el corazón. Formamos proyectos, pero sobre todo formamos personas que quieren cambiar el mundo.",
    foto: "",
  },
];
 
/* ─────────────────────────────────────────────
   Helpers
──────────────────────────────────────────────── */
function getInitials(nombre) {
  return nombre
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}
 
/* ─────────────────────────────────────────────
   Avatar
──────────────────────────────────────────────── */
function Avatar({ nombre, foto, size }) {
  const sz = size ?? 56;
  return (
    <div
      className="comunidad-avatar"
      style={{ width: sz, height: sz, fontSize: sz * 0.35 }}
    >
      {foto ? (
        <img src={foto} alt={nombre} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        getInitials(nombre)
      )}
    </div>
  );
}
 
/* ─────────────────────────────────────────────
   Video placeholder
──────────────────────────────────────────────── */
function VideoPlayer({ videoUrl, nombre }) {
  const firstName = nombre.split(" ")[0];
  return (
    <div className="comunidad-video">
      {videoUrl ? (
        <video src={videoUrl} controls style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <div className="comunidad-video__placeholder">
          <div className="comunidad-video__play-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width={28} height={28} style={{ marginLeft: 4 }}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span>Testimonio de {firstName}</span>
        </div>
      )}
    </div>
  );
}
 
/* ─────────────────────────────────────────────
   Tarjeta de voz (carrusel)
──────────────────────────────────────────────── */
function VozCard({ voz, position }) {
  // position: "center" | "left" | "right" | "hidden"
  return (
    <div className={`voz-card voz-card--${position}`}>
      <div className="voz-card__avatar-wrap">
        <Avatar nombre={voz.nombre} foto={voz.foto} size={72} />
      </div>
      <div className="voz-card__nombre">{voz.nombre}</div>
      <div className="voz-card__cargo">{voz.cargo}</div>
      <p className="voz-card__quote">{voz.quote}</p>
    </div>
  );
}
 
/* ─────────────────────────────────────────────
   Página principal
──────────────────────────────────────────────── */
function LandingComunidad() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [vozIdx, setVozIdx] = useState(0);
  const t = testimonios[activeIdx];
 
  const total = voces.length;
  const prev = useCallback(() => setVozIdx((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setVozIdx((i) => (i + 1) % total), [total]);
 
  function getPosition(i) {
    const diff = (i - vozIdx + total) % total;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === total - 1) return "left";
    return "hidden";
  }
 
  return (
    <main className="comunidad-page">
 
      {/* ══ HERO BANNER ══ */}
      <section className="comunidad-hero">
        <div className="comunidad-hero__overlay" />
        <div className="comunidad-hero__logo">
          <img
            src="https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/icons-psm//logo-white.png"
            alt="Proyectos San Marcos"
          />
        </div>
        <div className="comunidad-hero__content">
          <h1 className="comunidad-hero__title">
            COMUNIDAD{" "}
            <span className="comunidad-hero__title-accent">PROYECTOS SAN MARCOS</span>
          </h1>
          <div className="comunidad-hero__divider" />
        </div>
      </section>
 
      {/* ══ SECCIÓN 1: TESTIMONIOS CON VIDEO ══ */}
      <section className="comunidad-section">
        <div className="comunidad-container">
 
          <div className="comunidad-heading-row">
            <div className="psm-icon-circle psm-icon-circle--solid">
              <svg viewBox="0 0 24 24" fill="white" width={22} height={22}>
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />
              </svg>
            </div>
            <div>
              <h2 className="comunidad-h2">
                <span className="comunidad-h2__accent">TESTI</span>MONIOS
              </h2>
              <p className="comunidad-subtitle">
                Lo que significa ser parte de Proyectos San Marcos, en sus propias palabras:
              </p>
            </div>
          </div>
 
          {/* Selector */}
          <div className="comunidad-selector">
            {testimonios.map((item, i) => (
              <button
                key={item.id}
                type="button"
                className={"comunidad-selector__btn" + (activeIdx === i ? " comunidad-selector__btn--active" : "")}
                onClick={() => setActiveIdx(i)}
              >
                <Avatar nombre={item.nombre} foto={item.foto} size={32} />
                <span>{item.nombre.split(" ")[0]}</span>
              </button>
            ))}
          </div>
 
          {/* Tarjeta */}
          <div className="comunidad-card">
            <VideoPlayer videoUrl={t.videoUrl} nombre={t.nombre} />
            <div className="comunidad-card__right">
              <div className="comunidad-quote">
                <svg viewBox="0 0 36 28" fill="var(--psm-teal)" width={36} height={28} className="comunidad-quote__icon">
                  <path d="M0 28V16.8C0 7.47 6.22 1.71 18.67 0l1.86 3.27C14.31 4.98 10.73 8.4 9.8 13.53H16V28H0zm20 0V16.8C20 7.47 26.22 1.71 38.67 0l1.86 3.27C34.31 4.98 30.73 8.4 29.8 13.53H36V28H20z" />
                </svg>
                <p className="comunidad-quote__text">{t.quote}</p>
                <div className="comunidad-quote__author">
                  <Avatar nombre={t.nombre} foto={t.foto} size={50} />
                  <div>
                    <div className="comunidad-quote__name">{t.nombre}</div>
                    <div className="comunidad-quote__cargo">{t.cargo}</div>
                  </div>
                </div>
              </div>
 
              <div className="comunidad-stats">
                {t.stats.map((s, i) => (
                  <div key={s.label} className="comunidad-stats__group">
                    <div className="comunidad-stat">
                      <div className="comunidad-stat__num">{s.num}</div>
                      <div className="comunidad-stat__label">{s.label}</div>
                    </div>
                    {i < t.stats.length - 1 && <div className="comunidad-stats__divider" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
 
        </div>
      </section>
 
      {/* ══ SECCIÓN 2: CARRUSEL DE VOCES ══ */}
      <section className="voces-section">
        {/* Fondo con foto + overlay teal */}
        <div className="voces-section__bg" />
 
        <div className="voces-section__inner">
          <h2 className="voces-section__title">Voces de nuestra comunidad</h2>
 
          {/* Carrusel de 3 tarjetas */}
          <div className="voces-carousel">
            {voces.map((v, i) => (
              <VozCard key={v.id} voz={v} position={getPosition(i)} />
            ))}
          </div>
 
          {/* Dots */}
          <div className="voces-dots">
            {voces.map((_, i) => (
              <button
                key={i}
                type="button"
                className={"voces-dot" + (i === vozIdx ? " voces-dot--active" : "")}
                onClick={() => setVozIdx(i)}
                aria-label={`Ir a testimonio ${i + 1}`}
              />
            ))}
          </div>
 
          {/* Flechas */}
          <button type="button" className="voces-arrow voces-arrow--left" onClick={prev} aria-label="Anterior">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button type="button" className="voces-arrow voces-arrow--right" onClick={next} aria-label="Siguiente">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </section>
 
      <Footer />
    </main>
  );
}
 
export default LandingComunidad;
 