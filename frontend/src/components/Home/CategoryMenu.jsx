import { Link } from "react-router-dom";

const CategoryMenu = (props) => {
  const { id, url, image, name } = props.category;
  return (
    <Link
      to={url}
      className="min-w-[110px] w-[110px] md:w-[133px] h-[140px] flex flex-col items-center text-center"
    >
      <img src={image} alt="" className="w-[84px] h-[84px] mb-2" />
      <div className="text-sm text-black">{name}</div>
    </Link>
  );
};

export default CategoryMenu;
