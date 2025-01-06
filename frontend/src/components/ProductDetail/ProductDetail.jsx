import React, { useEffect, useState } from "react";
import Breadcrumb from "../ListProductByCategory/Breadcrumb";
import SliderImage from "./SliderImage";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { HiOutlinePhone } from "react-icons/hi2";
import { PiChatsDuotone } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaCommentSms } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import axios from "axios";

const ProductDetail = ({ isMoble }) => {
  const containerStyles = {
    with: "100%",
    maxWidth: "600px",
    height: "450px",
    margin: "0 auto",
  };
  const [isLoading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  let { productId } = useParams();
  const [productImages, setProductImages] = useState([{ url: "", title: "" }]);
  const FetchDatas = async () => {
    try {
      setLoading(true);
      const productResponse = await axios.get(`/v1/product/${productId}`);
      setProduct(productResponse.data);
      console.log(productResponse.data);
      setProductImages(
        productResponse.data?.image.map((url) => ({
          url,
          title: "Image",
        }))
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchDatas();
  }, []);
  return (
    <div className="bg-gray-200 pb-3">
      {isLoading && <LoadingSpinner />}
      <div className="bg-white border-x-[1px] border-b-[1px] border-gray-300 p-3 w-full max-w-screen-lg mx-auto">
        <div className="pb-6">
          <Breadcrumb first="Chợ tốt" second="Iphone" />
        </div>
        <div className="flex gap-3">
          <div className="w-full md:w-2/3">
            <div style={containerStyles}>
              <SliderImage slides={productImages} />
            </div>
            <div className="py-4 space-y-3">
              <div className="font-bold ">{product?.name}</div>
              <div className="text-red-700 flex justify-between items-center ">
                <span className="font-bold">
                  {product?.price?.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
                <button className="flex items-center gap-1 border-[1px] border-red-700 py-1 px-2 rounded-3xl text-sm transition-colors ease-in-out duration-300 hover:bg-red-700 hover:text-white">
                  <span>Lưu tin</span>
                  <FaRegHeart size={20} />
                </button>
              </div>
              <div className="">{product?.description}</div>
              <button className="text-blue-800 underline">
                Nhấn để hiện số: {product?.seller?.contactInfo?.phone}***
              </button>
              <div>
                <div className="font-bold text-gray-500 mb-1">Khu vực</div>
                <div className="flex items-center gap-2">
                  <CiLocationOn size={25} />
                  <span>{product?.seller?.contactInfo?.location}</span>
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
                    src="https://graph.facebook.com/v2.8/1752812548381774/picture?type=large"
                    alt=""
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{product?.seller?.name}</span>
                    <Link
                      to={`/user/${product?.seller?._id}`}
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
