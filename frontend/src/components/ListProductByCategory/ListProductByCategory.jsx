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

const productList = [
  {
    id: 0,
    category: 0,
    name: "iPhone 14 Plus quốc tế zin all",
    image:
      "https://cdn.chotot.com/tLrU3xcuPeaA8jaxo3t2EqfHa1g05GQ5e7atjYZRt6s/preset:listing/plain/ec9bfc7b526b9b51d23c687cf3374189-2864504747172930463.webp",
    price: 13500000,
    shop: "Lâm mobile",
    time: "1 phút trước",
    place: "Hà Nội",
  },
  {
    id: 1,
    category: 0,
    name: "iphone 12 Pro Q/Tế Nguyên Zin Áp Suất",
    image:
      "https://cdn.chotot.com/orkxMubtHzxC4lyB1P5Lz4yDwqKsQARRG4JXNOotR-I/preset:listing/plain/c08c0c40b539c21ef31936203351811e-2758226230755808893.jpg",
    price: 8499000,
    shop: "Lâm mobile",
    time: "1 phút trước",
    place: "Hà Nội",
  },
  {
    id: 2,
    category: 0,
    name: "cần bán laptop HP hiệu năng cao, bảo hành dài",
    image:
      "https://cdn.chotot.com/NzjBf6PMz7jLxXjRw3FqyCK5zEhVqrhzd-8-gHl2LCo/preset:view/plain/486983f19e47f0f6fc2b87a71117eb6a-2866567717866935269.jpg",
    price: 13500000,
    shop: "Lâm mobile",
    time: "1 phút trước",
    place: "Hà Nội",
  },
  {
    id: 3,
    category: 0,
    name: "Apple Watch Series 6 40mm Đỏ NEW SEAL 100%",
    image:
      "https://cdn.chotot.com/omtOUpEbKHV4P7F1sk4JtROVL8foEqGA7bvBpPyuSc4/preset:listing/plain/96df94eb5bbe22766c3bcaefd37ea59b-2864210111228707804.webp",
    price: 4900000,
    shop: "Lâm mobile",
    time: "1 phút trước",
    place: "Hà Nội",
  },
  {
    id: 4,
    category: 0,
    name: "Dàn i5 10400F,16GB, GTX 1660S, SSD 500GB",
    image:
      "https://cdn.chotot.com/Sq0BVCBdnOHUF3U4j0vz2dXJe26TWk6wWei9osM8sms/preset:listing/plain/ae32e48ce93ed9ce6cc8b6573b908335-2814551270666645888.jpg",
    price: 9990000,
    shop: "Lâm mobile",
    time: "1 phút trước",
    place: "Hà Nội",
  },
  {
    id: 5,
    category: 0,
    name: "Dư card Gtx 1660Ti",
    image:
      "https://cdn.chotot.com/LxU_4p8acByI7IH1k5O1gXl8gY12GhsKg4VV71gJ9HY/preset:listing/plain/759cf2877841d0cbd8367729f568c93d-2866567803700745189.webp",
    price: 2800000,
    shop: "Lâm mobile",
    time: "1 phút trước",
    place: "Hà Nội",
  },
  {
    id: 6,
    category: 1,
    name: "(8.512) Mate 50 pro q tế, da Kulun",
    image:
      "https://cdn.chotot.com/6G3jLJy51OU_kIIemfkU06aCEngYBARjVU9YcCR-QDo/preset:listing/plain/4c000914b78ad2c2b3ab9e8bde82824c-2866566472392923791.webp",
    price: 11390000,
    shop: "Lâm mobile",
    time: "1 phút trước",
    place: "Hà Nội",
  },
];
const categoryList = [
  {
    id: 0,
    name: "Đồ điện tử",
    slug: "mua-ban-do-dien-tu",
    child: [
      { id: 0, name: "Tất cả đồ điện tử" },
      { id: 1, name: "Điện thoại" },
      { id: 2, name: "Máy tính" },
    ],
  },
  {
    id: 1,
    name: "Thú cưng",
    slug: "mua-ban-thu-cung",
    child: [
      { id: 0, name: "Tất cả thú cưng" },
      { id: 1, name: "Chó" },
      { id: 2, name: "Mèo" },
    ],
  },
];
const ListProductByCategory = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParams = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(() => {
    return pageParams === null ? 1 : parseInt(pageParams);
  });

  console.log(currentPage);
  const [listProductForPage, setListProductForPage] = useState([]);

  const splitProductList = (productList, currentPage) => {
    const productsPerPage = 3;
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return productList
      .filter((item) => item.category === currentCategory.id)
      .slice(startIndex, endIndex);
  };
  let { categorySlug } = useParams();
  const currentCategory = categoryList.find(
    (item) => item.slug === categorySlug
  );
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await wait().then(() => {
          setListProductForPage(splitProductList(productList, currentPage));
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, currentCategory]);

  const [filterValues, setFilterValues] = useState({
    status: "",
    hasVideo: false,
    protectedPaying: false,
    shipCode: false,
    postBy: "Tất cả",
  });
  const [filterPlace, setFilterPlace] = useState("Toàn quốc");
  const [currentChildCategory, setCurrentChildCategory] = useState(
    currentCategory.child[0]
  );
  const [filterPrice, setFilterPrice] = useState({ start: "", end: "" });

  const [orderBy, setOrderBy] = useState("Tin mới trước");
  const handleOrderBy = (orderBy) => {
    setOrderBy(orderBy);
  };
  const listPostBy = ["Tất cả", "Cá nhân", "Bán chuyên"];
  const listOrderBy = ["Tin mới trước", "Giá thấp trước", "Giá cao trước"];
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
            <FilterCategory
              currentCategory={currentCategory}
              currentChildCategory={currentChildCategory}
              setCurrentChildCategory={setCurrentChildCategory}
            />
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
            Mua Bán {currentCategory.name}
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
          {currentCategory.child.slice(1).map((item, index) => {
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
          })}
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
          {listProductForPage.map((item, index) => {
            return <ProductCard product={item} key={index} />;
          })}
        </div>
        <div className="flex items-center justify-center py-5 overflow-hidden">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxPages={2}
          />
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
