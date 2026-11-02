/**
 * Integraciones por año.
 *
 * status:
 *  - "ready"   → tiene fotos, se muestra la galería.
 *  - "soon"    → edición futura, se anuncia como próximamente.
 *  - "pending" → material de años anteriores gestionado por Marketing; aún no disponible.
 */
const BUCKET = "https://uvsnieedcxndpdlyemgn.supabase.co/storage/v1/object/public/photos";

const fotos2025 = [
    "20250816_153719",
    "20250816_153722",
    "20250816_163548",
    "20250816_163551",
    "20250816_172013",
    "20250816_180304",
    "20250816_180305",
    "20250816_180338",
    "20250816_180342",
    "20250816_181236",
    "20250816_181228",
].map((n) => `${BUCKET}/Intergras-2025/${n}.jpg`);

const fotos2024 = ["16", "17", "18", "19", "20", "21", "22"].map(
    (n) => `${BUCKET}/integracion-2024/${n}.jpeg`
);

const integraciones = [
    {
        year: 2026,
        title: "Integración General 2026",
        status: "soon",
        cover: null,
        fotos: [],
    },
    {
        year: 2025,
        title: "Integración General 2025",
        status: "ready",
        cover: fotos2025[0],
        fotos: fotos2025,
    },
    {
        year: 2024,
        title: "Integración General 2024",
        status: "ready",
        cover: fotos2024[0],
        fotos: fotos2024,
    },
    { year: 2023, title: "Integración General 2023", status: "pending", cover: null, fotos: [] },
    { year: 2022, title: "Integración General 2022", status: "pending", cover: null, fotos: [] },
    { year: 2021, title: "Integración General 2021", status: "pending", cover: null, fotos: [] },
    { year: 2020, title: "Integración General 2020", status: "pending", cover: null, fotos: [] },
];

export default integraciones;
