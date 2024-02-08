const CategoryIcon = (props) => {
  const { img, name, url } = props;
  return (
    <a href={url} className="flex flex-col items-center gap-1">
      <div className="p-2 bg-gray-100 rounded-full transition-colors duration-300 ease-linear hover:bg-primary">
        <img src={img} alt="" className="w-9" />
      </div>
      <span>{name}</span>
    </a>
  );
};

export default CategoryIcon;
