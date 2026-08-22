import { useState } from "react";
import {
    ArrowRight,
    BriefcaseBusiness,
    CalendarDays,
    CheckCircle2,
    ClipboardList,
    FileCheck2,
    FileText,
    Image,
    Megaphone,
    Network,
    Target,
    UserCheck,
    UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { DetailHero } from "./Shared";
import "./ReclutamientoPages.css";

const recruitmentFlows = [
    {
        id: "general",
        audience: "external",
        label: "General",
        title: "Convocatoria general",
        description: "Proceso para incorporar nuevos miembros a las gerencias de Proyectos San Marcos.",
        icon: UsersRound,
        steps: [
            { title: "Recibimos el requerimiento", text: "Reclutamiento valida las necesidades de las gerencias, el perfil buscado y las vacantes a cubrir.", icon: ClipboardList },
            { title: "Planificamos la convocatoria", text: "Se establecen cronograma, etapas, responsables y criterios de evaluación antes de iniciar la difusión.", icon: CalendarDays },
            { title: "Difundimos y recibimos postulaciones", text: "Se comunica la convocatoria por los canales definidos y se organizan las postulaciones recibidas.", icon: Megaphone },
            { title: "Evaluamos a los postulantes", text: "Se aplican los criterios y formatos de evaluación definidos para seleccionar perfiles alineados a cada necesidad.", icon: Target },
            { title: "Comunicamos y actualizamos", text: "Se comparten los resultados, se orienta a los seleccionados y se actualiza la documentación del proceso.", icon: CheckCircle2 },
        ],
    },
    {
        id: "projects",
        audience: "internal",
        label: "Proyectos PSM",
        title: "Convocatoria para proyectos internos",
        description: "Proceso para conformar los equipos de los proyectos internos de Proyectos San Marcos.",
        context: "Este flujo se adapta a las necesidades vigentes de cada proyecto interno.",
        examples: ["Champions Aniversario", "Sanamente", "Ponni", "4 Patas", "Sembrando Sonrisas"],
        icon: BriefcaseBusiness,
        steps: [
            { title: "Definimos el equipo necesario", text: "La dirección del proyecto comunica los roles, cantidad de vacantes y perfil requerido para su equipo.", icon: BriefcaseBusiness },
            { title: "Alineamos bases y cronograma", text: "Reclutamiento coordina con el proyecto las etapas, criterios y fechas que guiarán la convocatoria.", icon: FileCheck2 },
            { title: "Lanzamos la convocatoria", text: "Se difunde la oportunidad con información clara sobre el proyecto, roles disponibles y condiciones de postulación.", icon: Megaphone },
            { title: "Seleccionamos en conjunto", text: "Se evalúan los perfiles junto con los responsables del proyecto, según los criterios acordados.", icon: UserCheck },
            { title: "Integramos al equipo", text: "Se comunican resultados y se deriva a los miembros seleccionados para su incorporación al proyecto.", icon: CheckCircle2 },
        ],
    },
    {
        id: "referrals",
        audience: "external",
        label: "Referidos",
        title: "Convocatoria de referidos",
        description: "Canal para incorporar candidatos recomendados que respondan a las necesidades de la organización.",
        icon: Megaphone,
        steps: [
            { title: "Registramos la necesidad", text: "Se recibe el requerimiento de la gerencia y se verifica qué perfil y vacantes deben ser atendidos.", icon: ClipboardList },
            { title: "Abrimos el canal de referidos", text: "Se comunica a los miembros la posibilidad de referir perfiles de acuerdo con la convocatoria vigente.", icon: UsersRound },
            { title: "Revisamos la información", text: "Se organiza la información de los candidatos referidos y se valida su relación con el perfil solicitado.", icon: FileText },
            { title: "Aplicamos la evaluación", text: "Los candidatos continúan por las etapas y criterios de selección definidos para el proceso.", icon: Target },
            { title: "Cerramos el proceso", text: "Se comunican los resultados y se actualiza el registro de la convocatoria.", icon: CheckCircle2 },
        ],
    },
    {
        id: "emergency",
        audience: "external",
        label: "Emergencia",
        title: "Convocatoria de emergencia",
        description: "Ruta prioritaria para responder a requerimientos que necesitan atención inmediata.",
        icon: CalendarDays,
        steps: [
            { title: "Validamos la urgencia", text: "Se recibe el requerimiento y se confirma su prioridad, alcance y necesidad de cobertura inmediata.", icon: ClipboardList },
            { title: "Definimos una ruta ágil", text: "Se ajustan cronograma, responsables y criterios mínimos para atender la necesidad sin perder claridad.", icon: CalendarDays },
            { title: "Difundimos de forma focalizada", text: "La convocatoria se comunica a los públicos y canales que permitan una respuesta oportuna.", icon: Megaphone },
            { title: "Evaluamos y coordinamos", text: "Se revisan los perfiles recibidos y se coordina la decisión con el área solicitante.", icon: UserCheck },
            { title: "Cubrimos y registramos", text: "Se confirma la incorporación o solución y se deja actualizado el registro del proceso.", icon: CheckCircle2 },
        ],
    },
    {
        id: "internal-change",
        audience: "internal",
        label: "Cambio de gerencia",
        title: "Convocatoria de cambio interno",
        description: "Proceso de movilidad para miembros de PSM que desean cambiar de gerencia, según las vacantes disponibles.",
        icon: Network,
        steps: [
            { title: "Confirmamos vacantes", text: "Reclutamiento coordina con las gerencias la cantidad de vacantes libres y las condiciones disponibles.", icon: Network },
            { title: "Recibimos la solicitud", text: "El miembro interesado presenta su solicitud de cambio por el canal interno establecido.", icon: ClipboardList },
            { title: "Revisamos la compatibilidad", text: "Se contrasta el perfil del miembro con las necesidades de la gerencia de destino.", icon: Target },
            { title: "Coordinamos la selección", text: "Las gerencias involucradas y Reclutamiento coordinan la evaluación del cambio solicitado.", icon: UserCheck },
            { title: "Confirmamos el movimiento", text: "Se comunica el resultado y se actualiza la información organizacional correspondiente.", icon: CheckCircle2 },
        ],
    },
];

const ProcessesPage = () => {
    const [activeFlowId, setActiveFlowId] = useState("general");
    const [activeStep, setActiveStep] = useState(0);
    const activeFlow = recruitmentFlows.find((flow) => flow.id === activeFlowId);
    const ActiveIcon = activeFlow.icon;
    const activeStepData = activeFlow.steps[activeStep];
    const ActiveStepIcon = activeStepData.icon;
    const externalFlows = recruitmentFlows.filter((flow) => flow.audience === "external");
    const internalFlows = recruitmentFlows.filter((flow) => flow.audience === "internal");

    const selectFlow = (flowId) => {
        setActiveFlowId(flowId);
        setActiveStep(0);
    };

    return (
        <main className="rec-detailPage">
            <DetailHero pageKey="processes" />
            <section className="rec-detailSection rec-flowSection" aria-labelledby="rec-flow-title">
                <div className="rec-detailContainer">
                    <div className="rec-detailHeading rec-detailHeading--center"> 
                        <h2 id="rec-flow-title">Así llevamos a cabo una convocatoria</h2>
                        <span>Conoce las etapas de las convocatorias públicas y cómo se organizan antes de cada selección.</span>
                    </div>

                    <div className="rec-flowExplorer">
                        <div className="rec-flowTabs" role="tablist" aria-label="Tipos de convocatoria">
                            <p className="rec-flowTabs__label">CONVOCATORIAS EXTERNAS</p>
                            {externalFlows.map((flow) => {
                                const Icon = flow.icon;
                                const isActive = flow.id === activeFlowId;

                                return (
                                    <button key={flow.id} className={isActive ? "is-active" : ""} type="button" role="tab" aria-selected={isActive} onClick={() => selectFlow(flow.id)}>
                                        <Icon size={19} />
                                        <span>{flow.label}</span>
                                    </button>
                                );
                            })}
                            <p className="rec-flowTabs__label rec-flowTabs__label--internal">PROCESOS INTERNOS PSM</p>
                            {internalFlows.map((flow) => {
                                const Icon = flow.icon;
                                const isActive = flow.id === activeFlowId;

                                return (
                                    <button key={flow.id} className={isActive ? "is-active" : ""} type="button" role="tab" aria-selected={isActive} onClick={() => selectFlow(flow.id)}>
                                        <Icon size={19} />
                                        <span>{flow.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="rec-flowBoard">
                            <header className="rec-flowBoard__header">
                                <div>
                                    <ActiveIcon size={27} />
                                    <div>
                                        <p>PROCESO SELECCIONADO</p>
                                        <h3>{activeFlow.title}</h3>
                                    </div>
                                </div>
                                <div className="rec-flowBoard__meta"><span className={`rec-flowAudience rec-flowAudience--${activeFlow.audience}`}>{activeFlow.audience === "external" ? "EXTERNO" : "INTERNO PSM"}</span><span>{activeStep + 1} de {activeFlow.steps.length}</span></div>
                            </header>

                            <p className="rec-flowBoard__description">{activeFlow.description}</p>
                            {activeFlow.context && <p className="rec-flowBoard__context">{activeFlow.context}</p>}
                            {activeFlow.examples && <div className="rec-flowExamples" aria-label="Ejemplos de convocatorias de proyectos">{activeFlow.examples.map((example) => <span key={example}>{example}</span>)}</div>}

                            <ol className="rec-interactiveFlow">
                                {activeFlow.steps.map((step, index) => {
                                    const Icon = step.icon;
                                    const isCurrent = index === activeStep;

                                    return (
                                        <li key={step.title}>
                                            <button className={isCurrent ? "is-active" : ""} type="button" onClick={() => setActiveStep(index)} aria-current={isCurrent ? "step" : undefined}>
                                                <span>{String(index + 1).padStart(2, "0")}</span>
                                                <Icon size={19} />
                                                <strong>{step.title}</strong>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ol>

                            <div className="rec-stepDetail" aria-live="polite">
                                <div className="rec-stepDetail__icon"><ActiveStepIcon size={28} /></div>
                                <div className="rec-stepDetail__content">
                                    <p>PASO {String(activeStep + 1).padStart(2, "0")}</p>
                                    <h4>{activeStepData.title}</h4>
                                    <div className="rec-stepDetail__facts rec-stepDetail__facts--single">
                                        <div><strong>Qué ocurre</strong><span>{activeStepData.text}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <aside className="rec-flowEvidence">
                        <Image size={23} />
                        <div>
                            <strong>Información pública del proceso</strong>
                            <p>Las evidencias, flyers y materiales que el área autorice se publicarán aquí cuando estén disponibles.</p>
                        </div>
                    </aside>

                    <nav className="rec-flowLinks" aria-label="Información relacionada">
                        <Link to="/talento-humano/reclutamiento/bases">Ver bases <ArrowRight size={17} /></Link>
                        <Link to="/talento-humano/reclutamiento/actividades">Conocer actividades <ArrowRight size={17} /></Link>
                    </nav>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default ProcessesPage;
