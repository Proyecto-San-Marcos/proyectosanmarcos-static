import { useState } from "react";
import { ArrowRight, BriefcaseBusiness, ClipboardList, Network } from "lucide-react";
import Footer from "../../components/Footer";
import { DetailHero } from "./Shared";
import "./ReclutamientoPages.css";

const requestTypes = [
    { title: "Convocatoria de referidos", role: "Jefatura o cojefatura", description: "Para incorporar perfiles recomendados según las necesidades de una gerencia.", details: "Perfil requerido, vacantes y fecha estimada.", icon: ClipboardList },
    { title: "Cambio de gerencia", role: "Jefatura o cojefatura", description: "Para coordinar vacantes disponibles y movimientos internos de miembros.", details: "Gerencias involucradas, vacantes y condiciones del cambio.", icon: Network },
    { title: "Equipo de proyecto", role: "Dirección de proyecto", description: "Para solicitar apoyo en la conformación o complemento de un equipo de proyecto interno.", details: "Proyecto, roles requeridos y cantidad de vacantes.", icon: BriefcaseBusiness },
];

const RequestsPage = () => (
    <main className="rec-detailPage">
        <DetailHero pageKey="requests" />
        <RequestsContent />
        <Footer />
    </main>
);




const RequestsContent = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedType, setSelectedType] = useState(requestTypes[0].title);
    const [isPrepared, setIsPrepared] = useState(false);
    const [details, setDetails] = useState("");


    const selectedRequest = requestTypes.find(
        (request) => request.title === selectedType
    );


    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!details.trim()) {
            return;
        }

        setIsPrepared(true);
    }


    return (
        <section className="rec-detailSection" aria-labelledby="rec-request-title">
            <div className="rec-detailContainer">
                <div className="rec-requestIntro">
                    <h2 id="rec-request-title">Solicita apoyo para tu convocatoria</h2>
                    <span>Jefaturas, cojefaturas y direcciones de proyecto podrán registrar aquí la información inicial de su requerimiento.</span>
                    <button className="rec-requestStart" type="button" aria-expanded={isFormOpen} onClick={() => { setIsFormOpen(true); setIsPrepared(false); }}>
                        Iniciar solicitud <ArrowRight size={17} />
                    </button>
                </div>

                {isFormOpen && (
                    <form className="rec-requestForm" onSubmit={handleSubmit}>
                        <div className="rec-requestForm__header"><p>FORMULARIO DE SOLICITUD</p><h3>Indica el requerimiento que deseas registrar</h3></div>
                        <label>Tipo de solicitud<select value={selectedType} onChange={(event) => { setSelectedType(event.target.value); setIsPrepared(false); }}>{requestTypes.map((request) => <option key={request.title}>{request.title}</option>)}</select></label>
                        <div className="rec-requestForm__hint"><strong>Información a incluir:</strong><span>{selectedRequest.details}</span></div>
                        <label>Detalle del requerimiento<textarea rows="4" value={details} onChange={(event) => setDetails(event.target.value)} placeholder="Describe brevemente la necesidad de tu equipo." /></label>
                        <div className="rec-requestForm__actions">
                            <button type="submit" disabled={!details.trim()}>Preparar solicitud <ArrowRight size={17} /></button>
                            <button type="button" onClick={() => setIsFormOpen(false)}>Cancelar</button>
                        </div>
                        {isPrepared && <p className="rec-requestForm__status" role="status">Solicitud enviada.</p>}
                    </form>
                )}

                <div className="rec-requestInfoGrid" aria-label="Tipos de solicitud disponibles">
                    {requestTypes.map((request) => {
                        const Icon = request.icon;

                        return <article key={request.title}><Icon size={23} /><div><p>QUIÉN SOLICITA</p><strong>{request.role}</strong><h3>{request.title}</h3><span>{request.description}</span></div></article>;
                    })}
                </div>
            </div>
        </section>
    );
};

export default RequestsPage;
