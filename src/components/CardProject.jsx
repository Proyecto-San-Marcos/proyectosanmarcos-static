import { motion } from "framer-motion";

const CardProject = ({ imageUrl, title, description, buttonText, onButtonClick, className }) => {
  return (
    <motion.div
      className={`bg-white rounded-xl overflow-hidden border border-gray-200 h-full flex flex-col ${className}`}
    >
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{description}</p>

        <button
          onClick={onButtonClick}
          className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          {buttonText}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default CardProject;