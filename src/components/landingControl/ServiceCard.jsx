import { ArrowRight, Star } from "lucide-react";

const ServiceCard = ({ service, position }) => {
    const Icon = service.icon;
    const isActive = position === "active";

    return (
        <article className={`ctrl-serviceCard ctrl-serviceCard--${position} ctrl-serviceCard--${service.tone}`}>
            {isActive && (
                <span className="ctrl-serviceCard__badge">
                    <Star size={14} fill="currentColor" /> DESTACADO
                </span>
            )}
            <div className="ctrl-serviceCard__icon" aria-hidden="true">
                <Icon size={24} strokeWidth={2.2} />
            </div>
            <h3>{service.title}</h3>
            <span className="ctrl-serviceCard__line" />
            <p>{service.description}</p>
            {isActive && (
                <button className="ctrl-serviceCard__link" type="button">
                    Ver más <ArrowRight size={17} />
                </button>
            )}
        </article>
    );
};

export default ServiceCard;
