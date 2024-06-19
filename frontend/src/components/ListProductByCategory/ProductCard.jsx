import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="flex px-3 py-2 gap-4 items-start bg-white hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:z-10 mb-[1px] relative overflow-hidden"
    >
      <div>
        <img
          src={product.image}
          alt=""
          className="min-w-32 w-32 h-32 object-cover"
        />
      </div>
      <div>
        <span className="text-ellipsis overflow-hidden">{product.name}</span>
        <div className="text-red-700 font-semibold text-sm">
          {product.price.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </div>
        <div className="text-xs flex items-center text-ellipsis overflow-hidden whitespace-nowrap text-gray-600 py-3 gap-1 absolute bottom-0">
          <img
            className="w-6"
            src="https://static.chotot.com/storage/chotot-icons/svg/user.svg"
            alt=""
          />
          <span>Hung Shadow</span>
          &nbsp; &#8231;
          {product.time}
          &#8231; &nbsp;{product.place}
        </div>
      </div>
      <button className="absolute bottom-9 right-8 md:bottom-3 z-10 hover:bg-orange-500 rounded-full">
        <FaRegHeart color="red" size={18} />
      </button>
    </Link>
  );
};

export default ProductCard;
