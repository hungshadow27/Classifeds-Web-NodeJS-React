const CategoryIcon = (props) => {
  const { img, name, onClick = () => {}, isActive } = props;
  return (
    <button
      onClick={() => onClick()}
      className="flex flex-col items-center gap-1"
    >
      {isActive ? (
        <div className="p-2 bg-primary rounded-full transition-colors duration-300 ease-linear hover:bg-primary">
          <img src={img} alt="" className="w-9" />
        </div>
      ) : (
        <div className="p-2 bg-gray-100 rounded-full transition-colors duration-300 ease-linear hover:bg-primary">
          <img src={img} alt="" className="w-9" />
        </div>
      )}
      <span>{name}</span>
    </button>
  );
};

export default CategoryIcon;
