import { CiFilter } from "react-icons/ci";
import { IoMdArrowForward } from "react-icons/io";
import { PiSquaresFourLight } from "react-icons/pi";

import FilterButton from "./FilterButton";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import CategoryIcon from "./CategoryIcon";
import ProductCard from "./ProductCard";

const ListProductByCategory = () => {
  return (
    <>
      <div className="bg-gray-200">
        <div className="bg-white">
          <div className="w-full max-w-screen-lg mx-auto flex items-center text-sm ">
            <div className="flex items-center border-e border-gray-300 p-2">
              <CiFilter size={20} />
              <span>Lọc</span>
            </div>
            <div className="flex whitespace-nowrap overflow-auto ps-3 py-3 gap-2 items-center">
              <FilterButton hasArrow={true} name="Toàn quốc" />
              <FilterButton hasArrow={true} name="Đồ điện tử" isActive={true} />
              <FilterButton hasArrow={true} name="Giá" />
              <FilterButton hasArrow={false} name="Ship code" />
              <FilterButton hasArrow={false} name="Thanh toán đảm bảo" />
              <FilterButton hasArrow={true} name="Tình trạng" />
            </div>
          </div>
        </div>
        <div className="w-full max-w-screen-lg mx-auto">
          <div className="px-2 py-5">
            <Breadcrumb first="Chợ tốt" second="Đồ điện tử" />
            <h1 className="text-base font-bold mt-2">
              Mua Bán Đồ Điện Tử Thông Minh, Chính Hãng, Giá Rẻ Tại Toàn quốc
            </h1>
          </div>
          <div className="text-sm bg-white p-3 rounded">
            <h4 className="font-bold mb-5">Gợi ý khu vực</h4>
            <div className="flex gap-3 items-center flex-wrap">
              <FilterButton hasArrow={false} name="Khu vực gần tôi" />
              <FilterButton hasArrow={false} name="Tp Hồ Chí Minh" />
              <FilterButton hasArrow={false} name="Hà Nội" />
              <FilterButton hasArrow={false} name="Đà Nẵng" />
              <div className="flex items-center gap-1">
                <span>Xem thêm</span>
                <IoMdArrowForward />
              </div>
            </div>
          </div>
          <div className="text-sm bg-white py-3 px-5 mt-2 rounded flex gap-9 overflow-auto whitespace-nowrap">
            <CategoryIcon
              img="https://static.chotot.com/storage/c2cCategories/5010.svg"
              name="Điện thoại"
              url="#1"
            />
            <CategoryIcon
              img="https://static.chotot.com/storage/c2cCategories/5010.svg"
              name="Điện thoại"
              url="#1"
            />
            <CategoryIcon
              img="https://static.chotot.com/storage/c2cCategories/5010.svg"
              name="Điện thoại"
              url="#1"
            />
            <CategoryIcon
              img="https://static.chotot.com/storage/c2cCategories/5010.svg"
              name="Điện thoại"
              url="#1"
            />
          </div>
          <div className="text-sm bg-white mt-2 rounded flex justify-between items-center">
            <div className="flex items-center">
              <button className="px-3 py-4 font-bold text-orange-600 border-b-4 border-orange-200">
                Tất cả
              </button>
              <button className="px-3 py-4 ">Cá nhân</button>
              <button className="px-3 py-4 ">Bán chuyên</button>
            </div>
            <div className="flex items-center me-3 gap-2">
              <FilterButton
                name="Tin mới trước"
                hasArrow={true}
                isActive={true}
              ></FilterButton>
              <PiSquaresFourLight size={28} />
            </div>
          </div>
          <div className="flex flex-col mt-1">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ListProductByCategory;
