import PropTypes from "prop-types";

const CardProject = ({
  imageUrl,
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
      {/* imgn proyecto: Recomendado 600x400px */}
      <div className="aspect-[5/2] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-110"
        />
      </div>

      <div className="p-6 grow flex flex-col justify-betwee">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-link" onClick={onButtonClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

CardProject.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default CardProject;
