import { useState } from "react";

    interface CollapsibleContainerProps {
    title: string;
    children: React.ReactNode;
    }

const CollapsibleContainer: React.FC<CollapsibleContainerProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
    <div className="bg-emerald-100 shadow-lg rounded-xl mb-4 max-w-screen-xl mx-auto overflow-hidden">
      <div
        className="flex justify-between items-center px-4 py-1 bg-emerald-600 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-white text-xl font-semibold">{title}</h2>
        <span className="text-white text-2xl transform transition-transform duration-200">
          {isOpen ? '−' : '+'}
        </span>
      </div>

      {isOpen && (
        <div className="p-4 flex flex-wrap gap-2 justify-start">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleContainer;
