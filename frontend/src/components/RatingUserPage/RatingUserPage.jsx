import React from "react";
import Breadcrumb from "../ListProductByCategory/Breadcrumb";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const RatingUserPage = () => {
  return (
    <div className="bg-gray-100 pb-3 overflow-hidden">
      <div className="p-3 w-full max-w-screen-lg mx-auto">
        <div className="pb-6">
          <Breadcrumb first="Chợ tốt" second="Trang cá nhân của Anh Thư" />
        </div>
        <div className="bg-white p-4 flex items-start gap-3 shadow rounded">
          <div className="">
            <img
              className="w-20 h-20 rounded-full"
              src="https://cdn.chotot.com/uac2/20754901"
              alt=""
            />
          </div>
          <div className="space-y-2">
            <div className="text-lg font-medium">Anh Thư</div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">5</span>
              <div className="flex items-center gap-1">
                <FaStar size={23} color="orange" />
                <FaStar size={23} color="orange" />
                <FaStar size={23} color="orange" />
                <FaStar size={23} color="orange" />
                <FaStar size={23} color="orange" />
              </div>
            </div>
            <div className="text-sm text-gray-500">1 đánh giá</div>
          </div>
        </div>
        <div className="p-4 shadow rounded bg-white mt-3 space-y-2">
          <h3 className="text-lg font-bold">Tất cả đánh giá(1)</h3>
          <div className="flex items-start gap-3 border-b-[1px] border-gray-200 py-2">
            <div className="">
              <img
                className="w-8 h-8 rounded-full"
                src="https://cdn.chotot.com/U8XpydaWruV_Xu1hCSysDzWWvWI54M0dPfYJnkQCLPM/preset:uac/plain/40b4801a78e32405db0a16cfb8831f4c-2682701766680329178.jpg"
                alt=""
              />
            </div>
            <div className="space-y-2 w-full">
              <div className="font-bold">Nguyễn Đức Mạnh</div>
              <div className="text-sm">Giao tiếp lịch sự, thân thiện.</div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <FaStar size={23} color="orange" />
                  <FaStar size={23} color="orange" />
                  <FaStar size={23} color="orange" />
                  <FaStar size={23} color="orange" />
                  <FaStar size={23} color="orange" />
                </div>
                <span className="text-sm text-gray-500">2 năm trước</span>
              </div>
              <Link
                to="/product/0"
                className="flex items-center gap-3 bg-gray-100 rounded overflow-hidden"
              >
                <img
                  className="w-14 h-14 object-cover"
                  src="https://cdn.chotot.com/WwO0W6_LKwj5WKbKY0arBk8saHsd4Y-GL59Yc0HTvQk/preset:listing/plain/70ad4e9fe825d5d82bfa120d3ecb5347-2866443247620799620.jpg"
                  alt=""
                />
                <div>
                  <div className="font-medium">Iphone 15</div>
                  <span className="text-red-700 font-semibold text-sm">
                    19.000.000 VND
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingUserPage;
