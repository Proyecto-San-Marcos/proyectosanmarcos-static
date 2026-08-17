const ProcessStep = ({ item }) => {
    const Icon = item.icon;

    return (
        <article className={`ctrl-processStep ctrl-processStep--${item.tone}`}>
            <div className="ctrl-processStep__marker" aria-hidden="true">
                <Icon size={20} strokeWidth={2.4} />
            </div>
            <div className="ctrl-processStep__card">
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <i aria-hidden="true" />
                <p>{item.description}</p>
            </div>
        </article>
    );
};

export default ProcessStep;
