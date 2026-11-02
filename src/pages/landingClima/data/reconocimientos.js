/**
 * Miembro del mes.
 * Completa `nombre`, `area` y `foto` cuando se anuncie cada reconocimiento.
 * Mientras estén en null se muestra la silueta de incógnito y "Por anunciar".
 */
export const MESES = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

const year = new Date().getFullYear();

const miembrosDelMes = MESES.map((mes, i) => ({
    id: `${year}-${String(i + 1).padStart(2, "0")}`,
    mes,
    year,
    nombre: null,
    area: null,
    foto: null,
}));

export default miembrosDelMes;
