import { Link } from "react-router-dom";
import logo from "./bechdo-logo.png";
import { CiSearch } from "react-icons/ci";
import { IoChatboxEllipsesOutline, IoMenuOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-10">
        <div className="bg-green-600 p-3">
          <img className="w-48 block mx-auto mb-3" src={logo} alt="" />
          <div className="flex justify-between items-center">
            <div className="flex bg-white items-center px-1 py-1 w-4/5 rounded">
              <CiSearch size="25px" color="grey" />
              <input
                className="w-full py-1 px-1"
                placeholder="Search for items on Shadow Classifeds"
                type="text"
                name="search"
              ></input>
            </div>
            <IoChatboxEllipsesOutline size="25px" />
            <IoMenuOutline size="25px" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
