import { IoMdArrowForward } from "react-icons/io";
import { PiSquaresFourLight } from "react-icons/pi";

import FilterButton from "./FilterButton";
import Breadcrumb from "./Breadcrumb";
import CategoryIcon from "./CategoryIcon";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { useState } from "react";
import FilterAdvance from "./FilterAdvance";
import FilterPlace from "./FilterPlace";
import FilterCategory from "./FilterCategory";
import FilterPrice from "./FilterPrice";
import FilterStatus from "./FilterStatus";

const ListProductByCategory = ({ category }) => {
  const [filterValues, setFilterValues] = useState({
    status: "",
    hasVideo: false,
    protectedPaying: false,
    shipCode: false,
    postBy: "",
  });
  const [filterPlace, setFilterPlace] = useState("Toàn quốc");
  const [currentChildCategory, setCurrentChildCategory] = useState(
    category.child[0].name
  );
  return (
    <div className="bg-gray-200">
      <div className="bg-white">
        <div className="w-full max-w-screen-lg mx-auto flex items-center text-sm ">
          <FilterAdvance
            filterValues={filterValues}
            setFilterValues={setFilterValues}
          />
          <div className="flex whitespace-nowrap overflow-auto ps-3 py-3 gap-2 items-center">
            <FilterPlace
              filterPlace={filterPlace}
              setFilterPlace={setFilterPlace}
            />
            <FilterCategory
              currentCategory={category}
              currentChildCategory={currentChildCategory}
              setCurrentChildCategory={setCurrentChildCategory}
            />
            <FilterPrice />
            <div
              onClick={() => {
                setFilterValues((prevState) => ({
                  ...prevState,
                  shipCode: !filterValues.shipCode,
                }));
              }}
            >
              <FilterButton
                hasArrow={false}
                name="Ship code"
                isActive={filterValues.shipCode}
              />
            </div>
            <div
              onClick={() => {
                setFilterValues((prevState) => ({
                  ...prevState,
                  protectedPaying: !filterValues.protectedPaying,
                }));
              }}
            >
              <FilterButton
                hasArrow={false}
                name="Thanh toán đảm bảo"
                isActive={filterValues.protectedPaying}
              />
            </div>
            <FilterStatus
              filterValues={filterValues}
              setFilterValues={setFilterValues}
            />
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
        <div className="flex items-center justify-center py-5 overflow-hidden">
          <Pagination />
        </div>
      </div>
    </div>
  );
};
export default ListProductByCategory;
