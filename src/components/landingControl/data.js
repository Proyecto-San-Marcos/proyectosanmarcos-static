import {
    CheckCircle2,
    ClipboardCheck,
    FileText,
    Grid2X2,
    LineChart,
    PlusCircle,
    RefreshCcw,
    SunMedium,
} from "lucide-react";

export const pillars = [
    {
        number: "01",
        title: "Control",
        description: "Supervisión de asistencia, participación y licencias.",
        tone: "terracotta",
        icon: Grid2X2,
    },
    {
        number: "02",
        title: "Evaluación",
        description: "Análisis de desempeño, habilidades y resultados.",
        tone: "coral",
        icon: LineChart,
    },
    {
        number: "03",
        title: "Innovación",
        description: "Mejora de metodologías para agilizar procesos.",
        tone: "cyan",
        icon: SunMedium,
    },
];

export const processSteps = [
    {
        step: "Paso 01",
        title: "Monitoreo",
        description:
            "Supervisamos el cumplimiento, asistencia y participación en actividades y asambleas.",
        tone: "red",
        icon: PlusCircle,
    },
    {
        step: "Paso 02",
        title: "Registro y control",
        description:
            "Organizamos licencias, justificaciones y documentación para mantener información confiable.",
        tone: "orange",
        icon: FileText,
    },
    {
        step: "Paso 03",
        title: "Evaluación",
        description:
            "Analizamos el desempeño en criterios de comunicación, responsabilidad y trabajo colaborativo.",
        tone: "cyan",
        icon: LineChart,
    },
    {
        step: "Paso 04",
        title: "Mejora continua",
        description:
            "Generamos retroalimentación e impulsamos procesos para optimizar la articulación con otras unidades.",
        tone: "green",
        icon: RefreshCcw,
    },
];

export const services = [
    {
        title: "Sistema de evaluación",
        description:
            "Consulta y seguimiento de resultados de evaluación para una supervisión más clara.",
        tone: "coral",
        icon: CheckCircle2,
    },
    {
        title: "Actualización de información",
        description:
            "Solicitud de cambios de datos para mantener la base de datos al día.",
        tone: "cyan",
        icon: SunMedium,
    },
    {
        title: "Petición de solicitudes",
        description:
            "Licencias, renuncias, honorarios y otros trámites de forma más ordenada y accesible.",
        tone: "terracotta",
        icon: ClipboardCheck,
    },
];
