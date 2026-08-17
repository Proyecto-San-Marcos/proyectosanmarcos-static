const PillarCard = ({ pillar }) => {
    const Icon = pillar.icon;

    return (
        <article className={`ctrl-pillarCard ctrl-pillarCard--${pillar.tone}`}>
            <span className="ctrl-pillarCard__number">{pillar.number}</span>
            <h3>{pillar.title}</h3>
            <div className="ctrl-pillarCard__icon" aria-hidden="true">
                <Icon size={24} strokeWidth={2.2} />
            </div>
            <span className="ctrl-pillarCard__line" />
            <p>{pillar.description}</p>
        </article>
    );
};

export default PillarCard;
