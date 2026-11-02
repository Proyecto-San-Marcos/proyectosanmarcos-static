import { useState } from "react";
import { ImageOff, Hourglass } from "lucide-react";
import "./CoverImage.css";

/**
 * Imagen con estado de respaldo.
 *  - Sin `src` (edición futura / material pendiente) → placeholder "Próximamente".
 *  - `src` que falla al cargar (ej. .heic en Chrome) → placeholder "Imagen no disponible".
 * Así la galería nunca muestra el ícono de imagen rota del navegador.
 */
const CoverImage = ({ src, alt = "", className = "", soonLabel = "Próximamente", onFail, ...rest }) => {
    const [failed, setFailed] = useState(false);

    const handleError = () => {
        setFailed(true);
        onFail?.(src);
    };

    if (!src || failed) {
        const Icon = src ? ImageOff : Hourglass;
        return (
            <div className={`clCover ${className}`} role="img" aria-label={alt || soonLabel}>
                <span className="clCover__ring" aria-hidden="true" />
                <Icon size={30} />
                <span className="clCover__label">{src ? "Imagen no disponible" : soonLabel}</span>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={handleError}
            {...rest}
        />
    );
};

export default CoverImage;
