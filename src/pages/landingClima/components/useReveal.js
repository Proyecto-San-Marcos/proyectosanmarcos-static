import { useEffect } from "react";

/**
 * Revela los elementos con la clase .cl-reveal cuando entran en pantalla.
 *
 * El contenido nunca debe quedarse invisible: si el observer no llega a
 * dispararse (navegación directa a un ancla, pestaña en segundo plano,
 * prefers-reduced-motion), hay dos redes de seguridad — revelado inmediato
 * de lo que ya está a la vista y un temporizador que muestra el resto.
 */
const useReveal = (deps = []) => {
    useEffect(() => {
        const nodes = Array.from(document.querySelectorAll(".cl-reveal:not(.is-in)"));
        if (!nodes.length) return;

        const revealAll = () => nodes.forEach((n) => n.classList.add("is-in"));

        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce || typeof IntersectionObserver === "undefined") {
            revealAll();
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-in");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
        );

        nodes.forEach((node) => {
            // Lo que ya está dentro (o por encima) del viewport se muestra de una vez.
            if (node.getBoundingClientRect().top < window.innerHeight) {
                node.classList.add("is-in");
            } else {
                observer.observe(node);
            }
        });

        // Red de seguridad: nada puede quedarse oculto de forma permanente.
        const failsafe = window.setTimeout(revealAll, 2500);

        return () => {
            window.clearTimeout(failsafe);
            observer.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};

export default useReveal;
