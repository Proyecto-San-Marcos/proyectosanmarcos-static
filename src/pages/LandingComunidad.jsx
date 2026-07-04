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
    nombre: "William Choquecahua",
    cargo: "Gerente Finanzas (2023-2024)",
    quote: "Me siento muy agradecido de haber formado parte de esta familia.",
    foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/WlliamChoquecahua.jpeg",
    stats: [
      { num: "3", label: "Proyectos participados" },
      { num: "4", label: "Años de contribución" },
      { num: "1", label: "Dirección de Proyecto" },
    ],
    videoUrl: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/sign/video/WhatsApp%20Video%202026-06-26%20at%2011.43.32.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZTM3NGQ4MS1lMzY2LTQwZDctYTM2MC0xNWQxZThjMDQ5MGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlby9XaGF0c0FwcCBWaWRlbyAyMDI2LTA2LTI2IGF0IDExLjQzLjMyLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODI0OTY0NDMsImV4cCI6MTgxNDAzMjQ0M30.7eeESDWylYZg3wrqlce9uRzLJkql5sMsTjZIlj0a8rI",
  
  },
  {
    id: 2,
    nombre: "Jhosep Pariona",
    cargo: "Presidente(2023-2024)",
    quote: "Es un voluntariado que me ayudó muchísimo profesionalmente",
    foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/JhosepPariona.jpeg",
    stats: [
      { num: "9", label: "Proyectos participados" },
      { num: "6", label: "Años de contribución" },
      { num: "1", label: "Dirección de Proyecto" },
    ],
    videoUrl: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/sign/video/WhatsApp%20Video%202026-06-26%20at%2017.05.24.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZTM3NGQ4MS1lMzY2LTQwZDctYTM2MC0xNWQxZThjMDQ5MGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlby9XaGF0c0FwcCBWaWRlbyAyMDI2LTA2LTI2IGF0IDE3LjA1LjI0Lm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODI1MTIwMTgsImV4cCI6MTgxNDA0ODAxOH0.KPHXMglMXcRB6EzKmtv3UAtbBPW24_L3nOQ8E9Zs8NU",
  },
  {
    id: 3,
    nombre: "Gerardo Pe",
    cargo: "Influencer peruano",
    quote: "Un gran saludo por los 15 años de PSM",
    foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/272630322_492070995617859_7366802639801048003_n.jpg",
    stats: [
      { num: "+347k", label: "Followers Instagram" },
      { num: "+468k", label: "Suscribers Youtube" },
      { num: "1", label: "Amigo recuperado" },
    ],
    videoUrl: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/sign/video/gerardoPe.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZTM3NGQ4MS1lMzY2LTQwZDctYTM2MC0xNWQxZThjMDQ5MGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlby9nZXJhcmRvUGUubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MzEzMTgxMSwiZXhwIjoxODE0NjY3ODExfQ.nqS7WHCjOv8iQluogwXmQy4K7PzRqx0YETuj-wZp6fg",
  },
];
 
/* ─────────────────────────────────────────────
   Datos — sección 2: carrusel de voces
──────────────────────────────────────────────── */
const voces = [
  {
    id: 1,
    nombre: "Marlon Cruzado",
    cargo: "Gerente · Talento Humano 2025/26",
    quote: "Ser parte PSM me permitió generar nuevas amistades y mejorar para mi futuro profesional, estoy agradecido con cada miembro por su dedicación. Sigamos haciendo historia💙",
    foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/WhatsApp%20Image%202026-07-03%20at%2022.04.44.jpeg",
  },
  {
    id: 2,
    nombre: "Eliann Estalla",
    cargo: "Gerenta · Comunicaciones 2025/26",
    quote: "Proyectos San Marcos marcó un antes y un después en mi vida. Me enseñó que los proyectos son mucho más que trabajo: son compromiso, servicio y voluntad. Me llevo grandes aprendizajes, personas increíbles, amistades valiosas y recuerdos que siempre atesoraré. Hoy me despido con el corazón lleno de gratitud de este voluntariado que me vio crecer, tanto en lo profesional como en lo personal 💙",
    foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/WhatsApp%20Image%202022-03-22%20at%2012.49.38%20PM%20-%20ELIANN%20ESTEFANI%20ESTALLA%20AUQUI.jpeg",
  },
  {
    id: 3,
    nombre: "Valeria Mogrovejo",
    cargo: "Subgerenta · Talento Humano 2025/26",
    quote: "Ser parte de Proyectos San Marcos ha sido una experiencia que inspira y transforma. A lo largo de este camino he visto cómo el compromiso, el trabajo en equipo y las ganas de generar un impacto positivo pueden cambiar vidas. Gracias a todas las personas que forman esta gran comunidad por compartir su tiempo, conocimientos y pasión 💙",
    foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/IMG_2569%20-%20Valeria%20Alejandra%20Mogrovejo%20Romero.jpeg",
  },
  {
    id: 4,
    nombre: "Sebastian Rojas",
    cargo: "Gerente · Finanzas 2025/26",
    quote: "PSM fue mucho más que un voluntariado; fue un espacio donde crecí personal y profesionalmente. Aprendí el valor del trabajo en equipo, el liderazgo y el compromiso, mientras fortalecía habilidades y conocía personas que dejaron una huella en mí. Agradezco haber iniciado este camino en Sanamente 2023 y haber tenido la oportunidad de ser DP de Sembrando Sonrisas en Ayacucho, experiencias que siempre recordaré. 💙",
    foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/IMG-20230804-WA0117%20-%20SEBASTIAN%20ANDRE%20ROJAS%20DUENAS.jpg",
  },
  {
    id: 5,
    nombre: "Xenia Aguirre",
    cargo: "Gerenta · PMO 2025/26",
    quote: "Ser parte de Proyectos San Marcos es descubrir que servir también transforma💙 Durante estos 15 años, cada proyecto ha dejado una huella en los 4 patitas, los niños, la comunidad universitaria y el medio ambiente, mientras formaba líderes comprometidos con generar un cambio",
    foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/xenia%20aguirre.png",
  },
  {
    id: 6,
    nombre: "Neyter Aylas",
    cargo: "Gerente · Comunicaciones 2026/27",
    quote: "Las palabras que le puedo dedicar a psm a lo largo de todos los años que he estados aquí son muchas, pero siendo simples y sinceros se pueden resumir en tres palabras: agradecimiento, crecimiento y diversión.#PSM15💙",
    foto: "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos/Neiter%20Aylas.png",
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
                <span className="comunidad-h2__accent">TESTI</span>MONIOS Y <span className="comunidad-h2__accent">SALU</span>DOS
              </h2>
              <p className="comunidad-subtitle">
                Mensajes, recuerdos y saludos de nuestra comunidad por este 15 aniversario:
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
          <h2
          className="voces-section__title"
          style={{
            background: "linear-gradient(90deg, #17C6EC 0%, #17C6EC 48%, #1E2E73 52%, #1E2E73 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            textTransform: "uppercase",
          }}
        >
          Voces de nuestra comunidad
        </h2>
 
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
 
