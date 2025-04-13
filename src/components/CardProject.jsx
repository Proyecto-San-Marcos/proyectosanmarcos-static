import PropTypes from "prop-types";

const CardProject = ({
  imageUrl,
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      {/* imgn proyecto: Recomendado 600x400px */}
      <div className="aspect-[5/2]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
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
