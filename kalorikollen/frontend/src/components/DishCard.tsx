interface DishCardProps {
    title: string;
    imageSrc: string;
    onClick?: () => void;
}

const DishCard: React.FC<DishCardProps> = ({ title, imageSrc, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center cursor-pointer
      hover:shadow-lg transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500
      w-28 sm:w-32 md:w-36"
        >
            <img src={imageSrc} alt={title} className="w-full h-24 object-cover" />
            <span className="p-2 text-center text-sm font-medium text-gray-700">{title}</span>
        </button>
    );
};

export default DishCard;