import { IoMdArrowForward } from "react-icons/io";
import { PiSquaresFourLight } from "react-icons/pi";
import FilterButton from "./FilterButton";
import Breadcrumb from "./Breadcrumb";
import CategoryIcon from "./CategoryIcon";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import FilterAdvance from "./FilterAdvance";
import FilterPlace from "./FilterPlace";
import FilterCategory from "./FilterCategory";
import FilterPrice from "./FilterPrice";
import FilterStatus from "./FilterStatus";
import MenuToggleContainer from "../MenuToggle/MenuToggleContainer";
import { useParams, useSearchParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import axios from "axios";

const ListProductByCategory = () => {
  const [filterValues, setFilterValues] = useState({
    status: "",
    hasVideo: false,
    protectedPaying: false,
    shipCode: false,
    postBy: "Tất cả",
  });
  const [filterPlace, setFilterPlace] = useState("Toàn quốc");
  const [filterPrice, setFilterPrice] = useState({ start: "", end: "" });

  const [orderBy, setOrderBy] = useState("Tin mới trước");
  const handleOrderBy = (orderBy) => {
    setOrderBy(orderBy);
  };
  const listPostBy = ["Tất cả", "Cá nhân", "Bán chuyên"];
  const listOrderBy = ["Tin mới trước", "Giá thấp trước", "Giá cao trước"];
  ///////////////////
  const [isLoading, setLoading] = useState(false);
  const [productForPage, setProductForPage] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  let { categorySlug } = useParams();
  const FetchDatas = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/v1/category/slug/${categorySlug}`);
      setCurrentCategory(response.data);
      console.log(response.data);
      const productResponse = await axios.get(
        `/v1/product/category/${categorySlug}`
      );
      setProductForPage(productResponse.data);
      console.log(productResponse.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchDatas();
  }, [categorySlug]);

  return (
    <div className="bg-gray-200">
      {isLoading && <LoadingSpinner />}
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
            {/* <FilterCategory
              currentCategory={currentCategory}
              currentChildCategory={currentChildCategory}
              setCurrentChildCategory={setCurrentChildCategory}
            /> */}
            <FilterPrice
              filterPrice={filterPrice}
              setFilterPrice={setFilterPrice}
            />
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
            {/* Mua Bán {currentCategory.name} */}
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
          {/* {currentCategory.child.slice(1).map((item, index) => {
            return (
              <div key={index}>
                {item.name === currentChildCategory.name ? (
                  <div>
                    <CategoryIcon
                      img="https://static.chotot.com/storage/c2cCategories/5010.svg"
                      name={item.name}
                      onClick={() =>
                        setCurrentChildCategory(currentCategory.child[0])
                      }
                      isActive={true}
                    />
                  </div>
                ) : (
                  <div>
                    <CategoryIcon
                      img="https://static.chotot.com/storage/c2cCategories/5010.svg"
                      name={item.name}
                      onClick={() => setCurrentChildCategory(item)}
                      isActive={false}
                    />
                  </div>
                )}
              </div>
            );
          })} */}
        </div>
        <div className="text-sm bg-white mt-2 rounded flex justify-between items-center">
          <div className="flex items-center">
            {listPostBy.map((item, index) => {
              return (
                <div key={index}>
                  {item === filterValues.postBy ? (
                    <button className="px-3 py-4 font-bold text-orange-600 border-b-4 border-orange-200 hover:bg-orange-100">
                      {item}
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        setFilterValues((prevState) => ({
                          ...prevState,
                          postBy: item,
                        }))
                      }
                      className="px-3 py-4 hover:bg-gray-100"
                    >
                      {item}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex items-center me-3 gap-2">
            <MenuToggleContainer
              title={
                <FilterButton
                  name={orderBy}
                  hasArrow={true}
                  isActive={true}
                ></FilterButton>
              }
            >
              <div className="w-[200px] p-1 shadow-lg rounded">
                <div className="text-center text-base font-bold">
                  Sắp xếp theo
                </div>
                <div className="mt-3">
                  <div className="text-start">
                    <form className="flex flex-col p-1">
                      {listOrderBy.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center justify-between border-b-[1px] border-gray-100 p-2"
                          >
                            <label htmlFor={item}>{item}</label>
                            <input
                              checked={item === orderBy}
                              id={item}
                              type="radio"
                              value={item}
                              onChange={() => handleOrderBy(item)}
                              name="default-radio"
                              className="w-5 h-5 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500"
                            />
                          </div>
                        );
                      })}
                    </form>
                  </div>
                </div>
              </div>
            </MenuToggleContainer>

            <PiSquaresFourLight size={28} />
          </div>
        </div>
        <div className="flex flex-col mt-1">
          {productForPage.length === 0 ? (
            <p className="text-center pt-4">Không có sản phẩm nào</p>
          ) : (
            productForPage.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </div>
        <div className="flex items-center justify-center py-5 overflow-hidden">
          {/* <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxPages={2}
          /> */}
        </div>
      </div>
    </div>
  );
};
const wait = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, 1000);
  });
};
export default ListProductByCategory;
