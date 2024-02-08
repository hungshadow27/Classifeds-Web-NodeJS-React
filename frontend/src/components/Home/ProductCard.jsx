import { FaRegHeart } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
const ProductCard = (props) => {
  const { id, url, image, name, price, time, place } = props.product;
  return (
    <div className="p-2 border-[1px] border-t-gray-300 hover:shadow-md">
      <div className="relative square-image-container">
        <a href={url}>
          <img src={image} alt="" className="square-image" />
        </a>
        <button className="absolute bottom-2 right-2">
          <FaRegHeart color="red" size="20px" />
        </button>
      </div>
      <div className="py-2 h-[60px] text-ellipsis overflow-hidden">
        <a href={url}>{name}</a>
      </div>

      <div className="text-red-700 font-semibold text-sm">
        {price.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })}
      </div>
      <div className="text-xs text-ellipsis overflow-hidden whitespace-nowrap text-gray-600 py-3">
        <IoBagAdd className="inline" />
        &nbsp; &#8231;
        {time}
        &#8231; &nbsp;{place}
      </div>
    </div>
  );
};

export default ProductCard;
