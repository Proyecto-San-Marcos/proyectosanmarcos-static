import { useState } from "react";
import { FileText, Eye, Download, ShieldCheck } from "lucide-react";
import Modal from "../../components/Modal";
import ClimaHeader from "./components/ClimaHeader";
import useReveal from "./components/useReveal";
import "./components/clima-theme.css";
import "./Documentos.css";

// Google Docs oficiales del área. `/preview` se incrusta sin barra de edición;
// `/export?format=pdf` entrega el documento como PDF.
const gdoc = (id) => ({
    preview: `https://docs.google.com/document/d/${id}/preview`,
    download: `https://docs.google.com/document/d/${id}/export?format=pdf`,
});

const documentos = [
    {
        id: "valores",
        nombre: "Valores de la Organización",
        desc: "Los principios que guían nuestra forma de trabajar como voluntariado: compromiso, empatía y responsabilidad en cada acción.",
        meta: "Documento institucional · PDF",
        ...gdoc("1eesyjugEWEiGNaiGPKkeMMOqdtsImwZwPBEMZoVpHTY"),
    },
    {
        id: "politicas",
        nombre: "Políticas del Buen Clima",
        desc: "Lineamientos para mantener un ambiente sano, respetuoso y colaborativo dentro de todas las áreas de PSM.",
        meta: "Documento institucional · PDF",
        ...gdoc("1IR2hwM5ArrW3NR_u19uDmQqaRg-d5Z9H64dOADC-kio"),
    },
];

const Documentos = () => {
    const [preview, setPreview] = useState(null);
    useReveal();

    return (
        <main className="cl-root">
            <ClimaHeader
                title="Documentos importantes"
                lead="Las políticas y valores que sostienen nuestra cultura organizacional."
                image="https://picsum.photos/seed/psm-docs-hero/1600/900"
            />

            {/* ══════════════ INTRO ══════════════ */}
            <section className="cl-section cl-section--flush clIntro">
                <div className="cl-shell clIntro__grid">
                    <span className="clIntro__glyph" aria-hidden="true">“</span>
                    <div className="clIntro__body">
                        <p>
                            En PSM creemos que un ambiente positivo y una cultura organizacional
                            sólida son fundamentales para el bienestar de nuestros voluntarios y el
                            éxito de nuestras iniciativas. Por ello, promovemos un conjunto de
                            políticas que garantizan un clima de respeto, inclusión y colaboración.
                            Además, nuestros valores guían cada acción dentro del voluntariado,
                            asegurando que trabajemos con compromiso, empatía y responsabilidad para
                            generar un impacto.
                        </p>
                        <p>
                            Esta sección reúne las políticas y valores que rigen nuestra
                            organización, fomentando un entorno donde cada voluntario pueda crecer,
                            aportar y sentirse parte de una comunidad.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════════ DOCUMENTOS ══════════════ */}
            <section className="cl-section docs cl-bleed-wash">
                <div className="cl-shell">
                    <header className="clSec__head clSec__head--center">
                        <p className="cl-eyebrow">
                            <ShieldCheck size={14} style={{ marginRight: 2 }} />
                            Los puedes descargar acá
                        </p>
                        <h2 className="cl-h2">
                            Documentos <span className="cl-mark">disponibles</span>
                        </h2>
                    </header>

                    <div className="docs__list">
                        {documentos.map((doc, i) => (
                            <article key={doc.id} className="docs__row cl-reveal">
                                {/* Pila de hojas con esquina doblada */}
                                <div className="docs__art" aria-hidden="true">
                                    <span className="docs__sheet docs__sheet--back" />
                                    <span className="docs__sheet docs__sheet--mid" />
                                    <div className="docs__sheet docs__sheet--front">
                                        <span className="docs__fold" />
                                        <FileText size={30} />
                                        <span className="docs__lines">
                                            <i /><i /><i />
                                        </span>
                                    </div>
                                </div>

                                <div className="docs__body">
                                    <span className="cl-index docs__num">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="cl-h3 docs__title">{doc.nombre}</h3>
                                    <p className="cl-body docs__desc">{doc.desc}</p>
                                    <p className="cl-note docs__meta">{doc.meta}</p>

                                    <div className="docs__actions">
                                        <button
                                            type="button"
                                            className="cl-btn cl-btn--ghost"
                                            onClick={() => setPreview(doc)}
                                        >
                                            <Eye size={16} /> Vista previa
                                        </button>
                                        <a
                                            href={doc.download}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cl-btn"
                                        >
                                            <Download size={16} /> Descargar PDF
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {preview && (
                <Modal onClose={() => setPreview(null)} label={preview.nombre} className="docPreview cl-root">
                    <div className="docPreview__bar">
                        <h3 className="docPreview__title">{preview.nombre}</h3>
                        <a
                            href={preview.download}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cl-link"
                        >
                            Descargar PDF <Download size={14} />
                        </a>
                    </div>
                    <iframe src={preview.preview} title={preview.nombre} className="docPreview__frame" />
                </Modal>
            )}
        </main>
    );
};

export default Documentos;
