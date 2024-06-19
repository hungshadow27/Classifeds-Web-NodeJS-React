import React from "react";
import Breadcrumb from "../ListProductByCategory/Breadcrumb";
import SliderImage from "./SliderImage";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { HiOutlinePhone } from "react-icons/hi2";
import { PiChatsDuotone } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaCommentSms } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductDetail = ({ isMoble }) => {
  const slides = [
    {
      url: "https://cdn.chotot.com/nGYTtFs2eR5G4hrrwwxq2qND11PXMhuO5PXcUXySB18/preset:view/plain/70ad4e9fe825d5d82bfa120d3ecb5347-2866443247620799620.jpg",
      title: "beach",
    },
    {
      url: "https://cdn.chotot.com/CwQI9g0ge5PIZw3nwGwn8TqXhCscknaeDZIOCyHttVE/preset:view/plain/769d8bb87512e7b924aea71230ba2461-2866443248062910482.jpg",
      title: "boat",
    },
    {
      url: "https://cdn.chotot.com/sUpwc0tsdKXhkhR7_C8F26HSjekocbSXDS7br4QWdyg/preset:view/plain/8e712562cf72d88ca8f03d0f768da411-2866443247879808927.jpg",
      title: "forest",
    },
    {
      url: "https://cdn.chotot.com/8GIReCm7XSWlvDBngsSH4YRYrvKVWyBOLWiT-CDkd0k/preset:view/plain/86ed026cc1b5b6005c1a17256fccbdb5-2866443247158493429.jpg",
      title: "city",
    },
    {
      url: "https://cdn.chotot.com/7p7jK3I5kt_o9_2XH5XYNxVY_E4TpapDjW910kr4pGc/preset:view/plain/f59a40e2804f8ce1184703b0629822ac-2866443247455671745.jpg",
      title: "italy",
    },
  ];
  const containerStyles = {
    with: "100%",
    maxWidth: "600px",
    height: "450px",
    margin: "0 auto",
  };
  return (
    <div className="bg-gray-200 pb-3">
      <div className="bg-white border-x-[1px] border-b-[1px] border-gray-300 p-3 w-full max-w-screen-lg mx-auto">
        <div className="pb-6">
          <Breadcrumb first="Chợ tốt" second="Iphone" />
        </div>
        <div className="flex gap-3">
          <div className="w-full md:w-2/3">
            <div style={containerStyles}>
              <SliderImage slides={slides} />
            </div>
            <div className="py-4 space-y-3">
              <div className="font-bold ">Iphone 15</div>
              <div className="text-red-700 flex justify-between items-center ">
                <span className="font-bold">19.000.000 đ</span>
                <button className="flex items-center gap-1 border-[1px] border-red-700 py-1 px-2 rounded-3xl text-sm transition-colors ease-in-out duration-300 hover:bg-red-700 hover:text-white">
                  <span>Lưu tin</span>
                  <FaRegHeart size={20} />
                </button>
              </div>
              <div className="">
                Còn bảo hành được kiểm tra và có thương lượng Máy fullbox , sài
                đc vài tháng nên còn mới , muốn đổi đời máy nên bán cho ai cần ,
                pin 99% , ib zalo để biết thêm chi tiết :***
              </div>
              <button className="text-blue-800 underline">
                Nhấn để hiện số: 0909***
              </button>
              <div>
                <div className="font-bold text-gray-500 mb-1">Khu vực</div>
                <div className="flex items-center gap-2">
                  <CiLocationOn size={25} />
                  <span>Phường Xuân Tân, Thành phố Long Khánh, Đồng Nai</span>
                </div>
              </div>
              <div>
                <div className="font-bold text-gray-500 mb-1">
                  Chia sẻ tin đăng này cho bạn bè:
                </div>
                <div className="flex items-center gap-2">
                  <a href="#1" target="_blank">
                    <img
                      src="https://static.chotot.com/storage/chotot-icons/svg/circle-facebook.svg"
                      className="w-10 h-10"
                      alt=""
                    />
                  </a>
                  <a href="#1" target="_blank">
                    <img
                      src="https://static.chotot.com/storage/chotot-icons/svg/circle-messenger.svg"
                      className="w-10 h-10"
                      alt=""
                    />
                  </a>
                  <a href="#1" target="_blank">
                    <img
                      src="https://static.chotot.com/storage/chotot-icons/svg/circle-zalo.svg"
                      className="w-10 h-10"
                      alt=""
                    />
                  </a>
                  <a href="#1" target="_blank">
                    <img
                      src="https://static.chotot.com/storage/chotot-icons/svg/circle-copylink.svg"
                      className="w-10 h-10"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <img
                    className="w-10"
                    src="https://static.chotot.com/storage/marketplace/shield-iconx4.png"
                    alt=""
                  />
                </div>
                <div>
                  <span className="italic text-sm">
                    Tin đăng này đã được kiểm duyệt. Nếu gặp vấn đề, vui lòng
                    báo cáo tin đăng hoặc liên hệ CSKH để được trợ giúp.
                  </span>
                </div>
              </div>
              <div className="flex justify-center gap-2 items-center text-sm">
                <button className="rounded p-1 hover:bg-gray-300">
                  Báo tin không hợp lệ
                </button>
                <button className="rounded p-1 hover:bg-gray-300">
                  Báo tin đã bán
                </button>
                {!isMoble && (
                  <button className="rounded p-1 text-white bg-orange-500 hover:bg-orange-600">
                    Đăng nhanh - Bán gọn
                  </button>
                )}
              </div>
            </div>
          </div>
          {isMoble ? (
            <div className="fixed left-1/2 transform -translate-x-1/2 bottom-20 z-30 w-full bg-white flex items-center">
              <button className="border-[1px] border-gray-300 flex flex-col items-center text-sm font-bold text-white bg-green-600 w-full py-1">
                <HiOutlinePhone size={25} />
                <div className="">Gọi điện</div>
              </button>
              <button className="border-[1px] border-gray-300 flex flex-col items-center text-sm font-bold w-full py-1">
                <FaCommentSms size={25} color="green" />
                <div className="">SMS</div>
              </button>
              <button className="border-[1px] border-gray-300 flex flex-col items-center text-sm font-bold w-full py-1">
                <PiChatsDuotone size={25} color="green" />
                <div className="">Chat</div>
              </button>
            </div>
          ) : (
            <div className="w-1/3 border-t-[1px] border-gray-300 py-3">
              <div className="flex items-start gap-3">
                <div>
                  <img
                    className="w-14 h-14 rounded-full shadow"
                    src="https://cdn.chotot.com/uac2/20754901"
                    alt=""
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Anh thư</span>
                    <Link
                      to="/user/0"
                      className="py-1 px-4 border-[1px] border-gray-300 rounded text-sm hover:bg-gray-200"
                    >
                      Xem trang
                    </Link>
                  </div>
                  <div className="flex items-center text-sm gap-1 mt-1">
                    <div className="flex items-center gap-1">
                      <FaStar color="orange" />
                      <FaStar color="orange" />
                      <FaStar color="orange" />
                      <FaStar color="orange" />
                      <FaStar color="orange" />
                    </div>
                    <span className="font-bold">5</span>
                    <span className="font-medium text-blue-700">
                      (1 đánh giá)
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs mt-2">
                    <GoDotFill color="green" />
                    <span className="text-gray-500">Hoạt động 1 giờ trước</span>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex justify-between items-center p-2 bg-green-600 rounded text-white cursor-pointer transition-colors ease-in-out duration-300 hover:bg-green-700">
                  <div className="flex items-center gap-2 ">
                    <HiOutlinePhone size={25} />
                    090909***
                  </div>
                  <span className="uppercase text-base font-bold">
                    Bấm để hiện số
                  </span>
                </div>
                <div className="mt-2 flex justify-between items-center p-2 rounded text-green-600 border-[1px] border-gray-300 cursor-pointer transition-colors ease-in-out duration-300 hover:bg-gray-200">
                  <div className="flex items-center gap-2 ">
                    <PiChatsDuotone size={25} />
                  </div>
                  <span className="uppercase text-base font-bold">
                    Chat với người bán
                  </span>
                </div>
              </div>
              <div className="p-2 flex items-center gap-3">
                <div>
                  <img
                    className="w-[100px] h-[100px]"
                    src="https://st.chotot.com/storage/images/tips/4_mobile.png"
                    alt=""
                  />
                </div>
                <div className="flex-1 text-sm italic">
                  <span>
                    Đi cùng 1 người bạn hiểu biết về sản phẩm khi giao dịch.
                  </span>
                  <br />
                  <a className="text-orange-400" href="#1">
                    Tìm hiểu thêm
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
