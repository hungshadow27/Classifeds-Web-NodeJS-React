import { FaRegHeart } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
  const { _id, image, name, price, createdAt } = props.product;
  const place = "props.product.seller.contactInfo.location";
  return (
    <div className="p-2 border-[1px] border-t-gray-300 hover:shadow-md">
      <div className="relative square-image-container">
        <Link to={`/product/${_id}`}>
          <img src={image[0]} alt="" className="square-image" />
        </Link>
        <button className="absolute bottom-2 right-2">
          <FaRegHeart color="red" size="20px" />
        </button>
      </div>
      <div className="py-2 h-[60px] text-ellipsis overflow-hidden">
        <Link to={`/product/${_id}`}>{name}</Link>
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
        {createdAt}
        &#8231; &nbsp;{place}
      </div>
    </div>
  );
};

export default ProductCard;
