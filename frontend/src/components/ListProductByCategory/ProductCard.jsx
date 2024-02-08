import { FaRegHeart } from "react-icons/fa";

const ProductCard = () => {
  const product = {
    url: "#1",
    name: "iPhone 14 Plus quốc tế zin all",
    image:
      "https://cdn.chotot.com/tLrU3xcuPeaA8jaxo3t2EqfHa1g05GQ5e7atjYZRt6s/preset:listing/plain/ec9bfc7b526b9b51d23c687cf3374189-2864504747172930463.webp",
    price: 13500000,
    shop: "Lâm mobile",
    time: "1 phút trước",
    place: "Hà Nội",
  };
  return (
    <a
      href={product.url}
      className="flex px-3 py-2 gap-4 items-start bg-white hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:z-10 mb-[1px] relative overflow-hidden"
    >
      <div>
        <img src={product.image} alt="" className="min-w-32 w-32" />
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
      <button className="absolute bottom-3 right-8 z-10">
        <FaRegHeart color="red" size={18} />
      </button>
    </a>
  );
};

export default ProductCard;
