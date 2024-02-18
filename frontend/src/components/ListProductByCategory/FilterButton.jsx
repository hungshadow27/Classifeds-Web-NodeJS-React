import { IoMdArrowDropdown } from "react-icons/io";
const FilterButton = (props) => {
  const { hasArrow, name, isActive } = props;
  return (
    <>
      {isActive ? (
        <button className="flex items-center py-2 px-3 border text-orange-500 border-orange-500 font-bold bg-orange-50 rounded-3xl hover:bg-orange-100">
          <span>{name}</span>
          {hasArrow && <IoMdArrowDropdown size={20} />}
        </button>
      ) : (
        <button className="flex items-center py-2 px-3 border border-gray-500 rounded-3xl hover:bg-gray-300">
          <span>{name}</span>
          {hasArrow && <IoMdArrowDropdown size={20} />}
        </button>
      )}
    </>
  );
};

export default FilterButton;
