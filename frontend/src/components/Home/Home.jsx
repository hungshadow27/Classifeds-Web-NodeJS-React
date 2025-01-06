import { useEffect, useRef, useState } from "react";
import Slider from "../Slider/Slider";
import CategoryMenu from "./CategoryMenu";
import IntroduceCollapse from "./IntroduceCollapse";
import ProductCard from "./ProductCard";
import SubMenu from "./SubMenu";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import axios from "axios";
const subMenuList = [
  {
    image:
      "https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FYAZT-yk1q6NsX00pyCMCkztFxEX1LT9OW2G1B8WlaXk%2Fpreset%3Araw%2Fplain%2Fae798f4ba155d2c9f30d555b77a526b6-2853893244263399934.jpg&w=256&q=95",
    name: "Thu mua điện thoại",
  },
  {
    image:
      "https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FvmzgXwahsyAR3yqOFOxlC4I54sBtGC8KeSqPhnVqo3M%2Fpreset%3Araw%2Fplain%2Fea30aa00d4c36d21a6d56fe745397327-2741458954087890671.jpg&w=256&q=95",
    name: "Nạp đồng Tốt",
  },
  {
    image:
      "https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FTIuAGrBq3aKlyK_5A6rZF6W9TpYYcYrkCMX8qao5jYY%2Fpreset%3Araw%2Fplain%2F508bf25ad611db4034fa5dfde0fe8a73-2741458967710030990.jpg&w=256&q=95",
    name: "Chợ tốt ưu đãi",
  },
  {
    image:
      "https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2Fpu3VBwfaHY7VoKkMMkZjYA1tKHBZtt8GDpIYaJgrweU%2Fpreset%3Araw%2Fplain%2Fd5647aa85eaa65381b0a8032499cb915-2815961809231084449.jpg&w=256&q=95",
    name: "Thu mua ô tô",
  },
  {
    image:
      "https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FPeH_Zz-8hDT7yZ8F2Mm-BI4p7HWGasDhgq8I_7xdXyk%2Fpreset%3Araw%2Fplain%2Fe16cec7ca2ff9d7649268427ea9c1e4e-2741458979427623023.jpg&w=256&q=95",
    name: "Tin đăng đã lưu",
  },
  {
    image:
      "https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FBJ2sRQGytbTbBoxCqR3juzBaObXNvsJz9Q9KC8O73gQ%2Fpreset%3Araw%2Fplain%2F930641d458c0e05889f865e35a0edefb-2763757223248164734.jpg&w=256&q=95",
    name: "Tin đăng cho tặng",
  },
];

const productList = [
  {
    id: 1,
    url: "#",
    name: "Giày cũ",
    image:
      "https://cdn.chotot.com/aLAJOwJoZx50Ok8b8dfaO5ldMOtNtZcaQPTvPh-h82w/preset:listing/plain/c913a73cafbd9f3b437a8dc305fecee2-2863773780310000604.jpg",
    price: 600000,
    time: "1 ngày trước",
    place: "Hà nội",
  },
  {
    id: 2,
    url: "#",
    name: "Sony Xperia 10 IV",
    image:
      "https://cdn.chotot.com/5IKEDaKnuf9_uICowJYMI27lEuvcPGx90BBs1Pms5Uk/preset:listing/plain/3a7eefa64442ca7826f2b7a381e0ab33-2848866312207572974.jpg",
    price: 3990000,
    time: "1 ngày trước",
    place: "Tp Hồ Chí Minh",
  },
  {
    id: 3,
    url: "#",
    name: "Xuc xich",
    image:
      "https://cdn.chotot.com/y9jt38EWeP3iUitgVhLzyNg17N1fpbSWiYGrqD6VrXw/preset:listing/plain/729606efedce56b38e225d44b7a75ade-2863772709115888604.jpg",
    price: 1200000,
    time: "1 ngày trước",
    place: "Tp Hồ Chí Minh",
  },
  {
    id: 4,
    url: "#",
    name: "Wave Thái 110 xe dọn keng - Biển số Hà Nội",
    image:
      "https://cdn.chotot.com/P4TTzGt0D1nZtBP1AGupsYfsizldtAkGRsdbuAnghy4/preset:listing/plain/826c373ece76a9d6e47b601f3af7062c-2863769651635848156.jpg",
    price: 27000000,
    time: "1 ngày trước",
    place: "Tp Hồ Chí Minh",
  },
  {
    id: 5,
    url: "#",
    name: "Mèo anh cái tớ màu 2 mắt hiếm chân lửng",
    image:
      "https://cdn.chotot.com/8OikPuKiN2fGBf59bPMODCSMWaD47XITvwrttVqmN7c/preset:listing/plain/03f489b0e7266f3e94857fb18c234fec-2863769851405108188.jpg",
    price: 1300000,
    time: "1 ngày trước",
    place: "Hà nội",
  },
  {
    id: 6,
    url: "#",
    name: "Vườn mai vàng thuần chậu #SỐ_LƯỢNG_LỚN_ĐỦ",
    image:
      "https://cdn.chotot.com/bD1OCQRdbp_8noIQwQvF1nxdjeGD2fCPnolTAaW9AiU/preset:listing/plain/408099ff3396f21b17948d05f7eda1ec-2863773817153618908.jpg",
    price: 999999,
    time: "1 ngày trước",
    place: "An Giang",
  },
];
const Home = ({ categoryList }) => {
  const [bannerList, setBannerList] = useState([
    {
      id: 1,
      image:
        "https://cdn.chotot.com/admincentre/L-0BzzzssVkS1_CeqkJff-kZ9CdPEZTq3ZHXY4Tm1SM/preset:raw/plain/ed7a163922bdcd68ae058f5b10153cca-2862449191143559944.jpg",
      url: "#",
    },
    {
      id: 2,
      image:
        "https://cdn.chotot.com/admincentre/8QV4y_SoeF1Je4LTI6gzRbX2u0SJOsHl4eKe-VAxHVo/preset:raw/plain/348113ce94fe12816a36cdacd64141c5-2861345876585237174.jpg",
      url: "#",
    },
    {
      id: 3,
      image:
        "https://cdn.chotot.com/admincentre/aSGLsopmSpE9C-cOt57Kxgrr4XdHi6x9HTI66asUGyQ/preset:raw/plain/4607d9ea1e5e95616b080e9ed9c751bf-2862621424316852321.jpg",
      url: "#",
    },
  ]);
  const [isLoading, setLoading] = useState(false);

  const [latestProducts, setLatestProducts] = useState([]);
  const fetchLatestProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/v1/product/latest");
      setLatestProducts(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchLatestProducts();
  }, []);

  return (
    <>
      <div className="md:bg-background-tet bg-fixed pb-3">
        {isLoading && <LoadingSpinner />}
        <div className="w-full max-w-screen-lg mx-auto">
          <div className="bg-white p-3 mb-3">
            <Slider />
            <div className="flex overflow-x-auto gap-2 mt-3">
              {subMenuList.map((item, index) => {
                return <SubMenu key={index} menu={item} />;
              })}
            </div>
          </div>
          <div className="bg-white p-3 pb-0">
            <h2 className="text-lg font-semibold mb-3">Khám phá danh mục</h2>
            <div className="flex flex-col h-[310px] items-start overflow-auto bg-white flex-wrap">
              {categoryList?.map((item, index) => {
                return <CategoryMenu key={index} category={item} />;
              })}
            </div>
          </div>
          <div className="bg-white p-3 pb-0">
            <h2 className="text-lg font-semibold mb-3">Chợ tốt có gì mới?</h2>
            <div className="grid grid-cols-4 gap-4 py-3">
              {bannerList.map((item, index) => {
                return index === 0 ? (
                  <a key={index} href={item.url} className="col-span-4">
                    <img src={item.image} alt="" className="w-full" />
                  </a>
                ) : (
                  <a key={index} href={item.url} className="col-span-2">
                    <img src={item.image} alt="" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="bg-white p-3 pb-0 my-3">
            <h2 className="text-lg font-semibold mb-3">Tin đăng mới</h2>
            <div className="grid grid-cols-2 md:grid-cols-5">
              {latestProducts.map((item, index) => {
                return <ProductCard key={index} product={item} />;
              })}
            </div>
          </div>
          <IntroduceCollapse />
        </div>
      </div>
    </>
  );
};

export default Home;
