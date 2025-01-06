import React, { useEffect, useState } from "react";
import Breadcrumb from "../ListProductByCategory/Breadcrumb";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import MenuToggleContainer from "../MenuToggle/MenuToggleContainer";
import { PiShareFat } from "react-icons/pi";
import { IoFlagOutline } from "react-icons/io5";
import ProductCard from "../Home/ProductCard";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const productList = [
  {
    id: 3,
    url: "#",
    name: "Iphone 15 / 128G Pink",
    image:
      "https://cdn.chotot.com/WwO0W6_LKwj5WKbKY0arBk8saHsd4Y-GL59Yc0HTvQk/preset:listing/plain/70ad4e9fe825d5d82bfa120d3ecb5347-2866443247620799620.jpg",
    price: 19000000,
    time: "1 ngày trước",
    place: "Đồng Nai",
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
    id: 5,
    url: "#",
    name: "Mèo anh cái tớ màu 2 mắt hiếm chân lửng",
    image:
      "https://cdn.chotot.com/8OikPuKiN2fGBf59bPMODCSMWaD47XITvwrttVqmN7c/preset:listing/plain/03f489b0e7266f3e94857fb18c234fec-2863769851405108188.jpg",
    price: 1300000,
    time: "1 ngày trước",
    place: "Hà nội",
  },
];
const UserPage = () => {
  const [tabProduct, setTabProduct] = useState(0);
  const [isLoading, setLoading] = useState(false);
  let { userId } = useParams();
  const [user, setUser] = useState({});
  const FetchDatas = async () => {
    try {
      setLoading(true);
      const userResponse = await axios.get(`/v1/user/${userId}`);
      setUser(userResponse.data);
      console.log(userResponse.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchDatas();
  }, []);
  return (
    <div className="bg-gray-100 pb-3 overflow-hidden">
      <div className="p-3 w-full max-w-screen-lg mx-auto">
        <div className="pb-6">
          <Breadcrumb
            first="Chợ tốt"
            second={`Trang cá nhân của ${user?.name}`}
          />
        </div>
        <div className="grid grid-cols-3 gap-3 items-start">
          <div className="col-span-3 md:col-span-1 rounded-lg border-[1px] border-gray-200 bg-white">
            <div className="relative">
              <img
                className="w-full h-44 md:h-28 object-cover rounded-t-lg"
                src="https://graph.facebook.com/v2.8/1752812548381774/picture?type=large"
                alt=""
              />
              <div className="absolute -bottom-12 left-4">
                <div className="relative">
                  <img
                    className="w-24 h-24 rounded-full border-2 border-white shadow-md"
                    src="https://graph.facebook.com/v2.8/1752812548381774/picture?type=large"
                    alt=""
                  />
                  <span className="absolute bottom-1 right-2 border-2 border-white rounded-full w-4 h-4 bg-green-500"></span>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="bg-gray-200 rounded py-1 px-2 inline-block float-end">
                <MenuToggleContainer
                  title={<HiDotsHorizontal size={20} color="gray" />}
                >
                  <div className="bg-white border-[1px] border-gray-300 rounded w-56  shadow z-20">
                    <button className="flex items-center gap-2 py-2 px-3 hover:bg-gray-200 w-full">
                      <PiShareFat size={20} />
                      <span>Sao chép liên kết</span>
                    </button>
                    <button className="flex items-center gap-2 py-2 px-3 hover:bg-gray-200 w-full">
                      <IoFlagOutline size={20} />
                      <span>Báo cáo trang cá nhân</span>
                    </button>
                  </div>
                </MenuToggleContainer>
              </div>
              <div className="mt-12 space-y-3">
                <span className="text-lg font-bold">{user?.name}</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold">5.0</span>
                  <div className="flex items-center gap-1">
                    <FaStar color="orange" />
                    <FaStar color="orange" />
                    <FaStar color="orange" />
                    <FaStar color="orange" />
                    <FaStar color="orange" />
                  </div>
                  <Link to="/user/0/rating" className="text-blue-800">
                    ( 1 đánh giá )
                  </Link>
                </div>
                <div className="text-sm">
                  <span>
                    Người theo dõi: <span className="font-bold">0</span>
                  </span>
                  <span className="border-r-[1px] border-gray-400 mx-4"></span>
                  <span>
                    Đang theo dõi: <span className="font-bold">0</span>
                  </span>
                </div>
                <button className="w-full px-4 py-1 rounded bg-orange-400 font-bold text-white hover:bg-orange-300">
                  + Theo dõi
                </button>
                <div className="flex items-start gap-2 text-gray-600 text-sm">
                  <IoCalendarOutline size={20} />
                  <span className="flex-1">
                    Đã tham gia:{" "}
                    <span className="text-black">2 năm 8 tháng</span>
                  </span>
                </div>
                <div className="flex items-start gap-2 text-gray-600 text-sm">
                  <FaRegCircleCheck size={20} />
                  <span className="flex-1">
                    Đã xác thực: <span className="text-black">SMS, FB</span>
                  </span>
                </div>
                <div className="flex items-start gap-2 text-gray-600 text-sm">
                  <IoLocationOutline size={20} />
                  <span className="flex-1">
                    Địa chỉ:{" "}
                    <span className="text-black">
                      {user?.contactInfo?.location}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-2 rounded-lg border-[1px] border-gray-200 bg-white">
            <div className="w-full">
              <div className="flex text-center border-b-[1px] border-gray-300">
                <button
                  className={`rounded-tl-lg w-1/2 p-4 font-bold hover:bg-gray-300 ${
                    tabProduct === 0 ? "border-b-4 border-orange-400" : ""
                  }`}
                  onClick={() => setTabProduct(0)}
                >
                  Đang hiển thị
                </button>
                <button
                  className={`rounded-tr-lg w-1/2 p-4 font-bold hover:bg-gray-300 ${
                    tabProduct === 1 ? "border-b-4 border-orange-400" : ""
                  }`}
                  onClick={() => setTabProduct(1)}
                >
                  Đã bán
                </button>
              </div>
              <div className="p-3 min-h-[356px]">
                {tabProduct === 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3">
                    {user?.products?.map((item, index) => {
                      return <ProductCard key={index} product={item} />;
                    })}
                  </div>
                ) : (
                  <div className="border-b-[1px] border-gray-200 py-2">
                    <div className="font-bold">Loptop Asus win10 2017</div>
                    <span className="text-sm">2 năm trước</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
