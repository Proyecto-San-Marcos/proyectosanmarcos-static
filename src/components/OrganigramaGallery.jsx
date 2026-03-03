import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * OrganigramaGallery
 *
 * Props:
 *  - images: [{ src, alt, title }]  — array de imágenes del organigrama
 */
const OrganigramaGallery = ({ images = [] }) => {
    const [selected, setSelected] = useState(null); // índice de imagen abierta

    const open = (i) => setSelected(i);
    const close = useCallback(() => setSelected(null), []);
    const prev = useCallback(() => setSelected((s) => (s - 1 + images.length) % images.length), [images.length]);
    const next = useCallback(() => setSelected((s) => (s + 1) % images.length), [images.length]);

    // Teclado: Escape / flechas
    useEffect(() => {
        if (selected === null) return;
        const onKey = (e) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [selected, close, prev, next]);

    return (
        <>
            {/* ── Grid de miniaturas ── */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {images.map((img, i) => (
                    <button
                        key={img.src + i}
                        type="button"
                        onClick={() => open(i)}
                        className="group relative rounded-xl overflow-hidden focus:outline-none"
                        style={{
                            border: "2px solid var(--psm-gray-mid)",
                            boxShadow: "var(--psm-shadow-card)",
                            transition: "border-color 0.3s, box-shadow 0.3s",
                            aspectRatio: "4/3",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "var(--psm-teal)";
                            e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,180,216,0.2)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "var(--psm-gray-mid)";
                            e.currentTarget.style.boxShadow = "var(--psm-shadow-card)";
                        }}
                        aria-label={`Ver ${img.title || `organigrama ${i + 1}`}`}
                    >
                        <img
                            src={img.src}
                            alt={img.alt || img.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                        {/* Overlay hover */}
                        <div
                            className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: "rgba(10,22,40,0.65)" }}
                        >
                            <ZoomIn size={28} color="white" />
                            {img.title && (
                                <span
                                    className="text-xs font-semibold uppercase tracking-wide text-white text-center px-2"
                                    style={{ fontFamily: "var(--psm-font-heading)" }}
                                >
                                    {img.title}
                                </span>
                            )}
                        </div>
                    </button>
                ))}
            </div>

            {/* ── Lightbox (portal) ── */}
            {selected !== null &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[9999] flex items-center justify-center"
                        style={{ background: "rgba(10,22,40,0.92)" }}
                        onClick={close}
                    >
                        {/* Panel */}
                        <div
                            className="relative flex flex-col items-center"
                            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Imagen */}
                            <img
                                src={images[selected].src}
                                alt={images[selected].alt || images[selected].title}
                                className="rounded-xl object-contain"
                                style={{ maxWidth: "85vw", maxHeight: "80vh", boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}
                            />

                            {/* Título */}
                            {images[selected].title && (
                                <p
                                    className="mt-4 text-white text-sm font-semibold uppercase tracking-widest"
                                    style={{ fontFamily: "var(--psm-font-heading)", color: "var(--psm-teal-light)" }}
                                >
                                    {images[selected].title}
                                </p>
                            )}

                            {/* Contador */}
                            <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                                {selected + 1} / {images.length}
                            </p>
                        </div>

                        {/* Botón cerrar */}
                        <button
                            type="button"
                            onClick={close}
                            aria-label="Cerrar"
                            className="absolute top-4 right-4 flex items-center justify-center rounded-full transition-colors"
                            style={{
                                width: 44, height: 44,
                                background: "rgba(255,255,255,0.12)",
                                border: "1px solid rgba(255,255,255,0.2)",
                                color: "white",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--psm-teal)")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
                        >
                            <X size={20} />
                        </button>

                        {/* Flechas (si hay más de 1 imagen) */}
                        {images.length > 1 && (
                            <>
                                <button
                                    type="button"
                                    onClick={(e) => { e.stopPropagation(); prev(); }}
                                    aria-label="Anterior"
                                    className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-colors"
                                    style={{
                                        width: 44, height: 44,
                                        background: "rgba(255,255,255,0.12)",
                                        border: "1px solid rgba(255,255,255,0.2)",
                                        color: "white",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--psm-teal)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
                                >
                                    <ChevronLeft size={22} />
                                </button>
                                <button
                                    type="button"
                                    onClick={(e) => { e.stopPropagation(); next(); }}
                                    aria-label="Siguiente"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-colors"
                                    style={{
                                        width: 44, height: 44,
                                        background: "rgba(255,255,255,0.12)",
                                        border: "1px solid rgba(255,255,255,0.2)",
                                        color: "white",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--psm-teal)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
                                >
                                    <ChevronRight size={22} />
                                </button>
                            </>
                        )}
                    </div>,
                    document.body
                )}
        </>
    );
};

export default OrganigramaGallery;
