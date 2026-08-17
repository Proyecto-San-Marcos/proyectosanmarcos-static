const SectionHeader = ({ eyebrow, title, description, align = "left", light = false, titleId }) => (
    <div className={`ctrl-sectionHeader ctrl-sectionHeader--${align} ${light ? "ctrl-sectionHeader--light" : ""}`}>
        {eyebrow && <p className="ctrl-eyebrow">{eyebrow}</p>}
        <h2 className="ctrl-sectionTitle" id={titleId}>
            {title}
        </h2>
        {description && <p className="ctrl-sectionText">{description}</p>}
    </div>
);

export default SectionHeader;
