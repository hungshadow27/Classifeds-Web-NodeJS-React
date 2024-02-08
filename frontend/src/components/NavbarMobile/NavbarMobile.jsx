import { GoHomeFill } from "react-icons/go";
import { BsPostcard } from "react-icons/bs";
import { TfiPencilAlt } from "react-icons/tfi";
import { IoNotificationsOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";

const NavbarMobile = (props) => {
  const { isMobile } = props;
  return (
    <>
      {isMobile && (
        <nav className="fixed bottom-0 z-10 w-full bg-white  shadow flex justify-between p-2 items-baseline px-4">
          <NavLink
            to={"/"}
            className="flex flex-col gap-1 items-center"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "",
            })}
          >
            <GoHomeFill size={25} />
            <span className="text-xs font-medium">Trang chủ</span>
          </NavLink>
          <NavLink
            to={"/login"}
            className="flex flex-col gap-1 items-center"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "",
            })}
          >
            <BsPostcard size={25} />
            <span className="text-xs font-medium">Quản lý tin</span>
          </NavLink>
          <NavLink
            to={"/login"}
            className="flex flex-col gap-1 items-center bg-yellow-700 p-3 rounded-full"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "",
            })}
          >
            <TfiPencilAlt size={30} />
            <span className="text-xs font-medium">Đăng tin</span>
          </NavLink>
          <NavLink
            to={"/login"}
            className="flex flex-col gap-1 items-center"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "",
            })}
          >
            <IoNotificationsOutline size={25} />
            <span className="text-xs font-medium">Thông báo</span>
          </NavLink>
          <NavLink
            to={"/login"}
            className="flex flex-col gap-1 items-center"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "",
            })}
          >
            <VscAccount size={25} />
            <span className="text-xs font-medium">Tài khoản</span>
          </NavLink>
        </nav>
      )}
    </>
  );
};

export default NavbarMobile;
