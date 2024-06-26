import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown, IoIosCloseCircleOutline } from "react-icons/io";
import { HiOutlineComputerDesktop, HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoNotificationsOutline, IoBagHandleOutline } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { TfiPencilAlt } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";

import { useState } from "react";
import SearchBar from "./SearchBar";
import MenuToggleContainer from "../MenuToggle/MenuToggleContainer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = (props) => {
  const { isMobile } = props;
  const user = useSelector((state) => state.auth.login?.currentUser);
  return (
    <header className="sticky top-0 z-50">
      {isMobile ? MobileHeader() : DesktopHeader(user)}
    </header>
  );
};
const NotiMenuContent = () => {
  const [tabNoti, setTabNoti] = useState(0);

  return (
    <div className="w-96">
      <div className="flex text-center border-b-[1px] border-gray-300">
        {tabNoti === 0 ? (
          <>
            <button
              className="rounded-tl-lg w-1/2 p-4 uppercase font-bold hover:bg-gray-300 border-b-4 border-orange-400"
              onClick={() => setTabNoti(0)}
            >
              Hoạt động
            </button>
            <button
              className="rounded-tr-lg w-1/2 p-4 uppercase font-bold hover:bg-gray-300"
              onClick={() => setTabNoti(1)}
            >
              Tin mới
            </button>
          </>
        ) : (
          <>
            <button
              className="rounded-tl-lg w-1/2 p-4 uppercase font-bold hover:bg-gray-300 "
              onClick={() => setTabNoti(0)}
            >
              Hoạt động
            </button>
            <button
              className="rounded-tr-lg w-1/2 p-4 uppercase font-bold hover:bg-gray-300 border-b-4 border-orange-400"
              onClick={() => setTabNoti(1)}
            >
              Tin mới
            </button>
          </>
        )}
      </div>
      <div className="p-3 text-center">
        {tabNoti === 0 ? (
          <>
            <div className="text-sm py-3">
              Vui lòng đăng nhập để xem danh sách hoạt động
            </div>
            <a href="/login" className="text-blue-700 font-bold">
              Đăng ký / Đăng nhập
            </a>
          </>
        ) : (
          <>
            <div className="text-sm py-3">
              Chúng tôi không có cập nhật nào. Vui lòng kiểm tra lại sau
            </div>
          </>
        )}
      </div>
    </div>
  );
};
const OrdersMenuContent = () => {
  return (
    <div className="w-24">
      <a href="#1" className="p-1 hover:text-gray-300">
        Đơn mua
      </a>
      <br />
      <a href="#1" className="p-1  hover:text-gray-300">
        Đơn bán
      </a>
    </div>
  );
};
const AccountMenuContent = () => {
  return (
    <div className="w-24">
      <Link to="/login" className="hover:text-gray-300 block">
        đăng nhập
      </Link>
      <Link to="#1" className="hover:text-gray-300 block">
        quản lý
      </Link>
    </div>
  );
};
const CategoryListMenuContent = () => {
  return (
    <div className="w-48">
      <a href="#1">
        <li className="flex items-center justify-start gap-3 border-gray-400 border-b-[1px] p-2 hover:bg-gray-400">
          <HiOutlineComputerDesktop size={"25px"} />
          <span>Đồ điện tử</span>
        </li>
      </a>
      <a href="#1">
        <li className="flex items-center justify-start gap-3 border-gray-400 border-b-[1px] p-2 hover:bg-gray-400">
          <HiOutlineComputerDesktop size={"25px"} />
          <span>Đồ điện tử</span>
        </li>
      </a>
    </div>
  );
};
const MobileHeader = () => {
  const [isOpenTabPages, setOpenTabPages] = useState(false);
  return (
    <div className="bg-primary p-3">
      <Link to="/" className="mb-3 flex items-center justify-center">
        <img
          className="object-contain mr-[-50px] h-[30px]"
          src="https://static.chotot.com/storage/APP_WRAPPER/logo/chotot-logo-appwrapper.png"
          alt=""
        />
      </Link>

      <div className="flex justify-between items-center">
        <div className="flex bg-white items-center px-1 py-1 w-4/5 rounded">
          <CiSearch size="25px" color="grey" />
          <input
            className="w-full py-1 px-1 border-none rounded"
            placeholder="Search for items on Shadow Classifeds"
            type="text"
            name="search"
          ></input>
        </div>
        <a href="#1">
          <IoChatboxEllipsesOutline size={25} />
        </a>
        <div className="relative">
          <HiOutlineSquares2X2
            size={25}
            onClick={() => setOpenTabPages(!isOpenTabPages)}
          />
          {isOpenTabPages ? (
            <div className="absolute bg-white w-48 right-0 rounded">
              <div>
                <IoIosCloseCircleOutline
                  size={25}
                  onClick={() => setOpenTabPages(!isOpenTabPages)}
                  className="inline"
                />
                <span className="text-sm font-bold">Chuyển trang</span>
              </div>
              <div className="p-3 text-blue-300">
                <a href="#1">Trang web 1</a>
                <br />
                <a href="#1">Trang web 2</a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
const DesktopHeader = (user) => {
  return (
    <div className="bg-primary py-3">
      <div className="flex items-center justify-between w-full px-6">
        <div className="flex w-[30%] max-w-[30%] justify-center items-center pe-3">
          <Link to="/">
            <img
              className="w-36"
              src="https://static.chotot.com/storage/APP_WRAPPER/logo/chotot-logo-appwrapper.png"
              alt=""
            />
          </Link>

          <MenuToggleContainer
            title={
              <div className="hover:text-gray-400 flex flex-nowrap gap-2 items-center whitespace-nowrap">
                <RxHamburgerMenu size={"20px"} />
                <span>Danh mục</span> <IoIosArrowDown />
              </div>
            }
            isHover={true}
          >
            {CategoryListMenuContent()}
          </MenuToggleContainer>
        </div>
        <SearchBar />
        <div className="flex items-center justify-between gap-4">
          <div className="flex gap-6 items-center">
            <MenuToggleContainer
              title={
                <IoNotificationsOutline
                  size={23}
                  className="hover:text-gray-300"
                />
              }
            >
              {NotiMenuContent()}
            </MenuToggleContainer>
            <a href="#1">
              <IoChatboxEllipsesOutline
                size={23}
                className="hover:text-gray-300"
              />
            </a>
            <MenuToggleContainer
              title={
                <IoBagHandleOutline size={23} className="hover:text-gray-300" />
              }
              isHover={true}
            >
              {OrdersMenuContent()}
            </MenuToggleContainer>

            <a
              href="#1"
              className="hover:text-gray-300 flex gap-2 items-center whitespace-nowrap"
            >
              <BsPostcard size={23} />
              Quản lý tin
            </a>
            {user ? (
              <MenuToggleContainer
                title={
                  <button className="hover:text-gray-300 flex gap-2 items-center whitespace-nowrap">
                    <VscAccount size={23} />
                    {user?.username}
                    <IoIosArrowDown />
                  </button>
                }
              >
                {AccountMenuContent()}
              </MenuToggleContainer>
            ) : (
              <MenuToggleContainer
                title={
                  <button className="hover:text-gray-300 flex gap-2 items-center whitespace-nowrap">
                    <VscAccount size={23} />
                    Tài khoản
                    <IoIosArrowDown />
                  </button>
                }
              >
                {AccountMenuContent()}
              </MenuToggleContainer>
            )}
          </div>
          <div>
            <a
              href="#1"
              className="bg-orange-500 px-4 py-2 uppercase font-bold flex text-white text-sm rounded gap-2 items-center whitespace-nowrap"
            >
              <TfiPencilAlt size={23} />
              Đăng tin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
