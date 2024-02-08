import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex w-full items-center z-10 pe-8">
      <div className="bg-white flex items-center rounded w-full p-1">
        <input
          type="text"
          name=""
          id=""
          className="text-sm w-full focus:outline-none"
          placeholder="Tìm kiếm sản phẩm trên chợ tốt"
        />
        <button className="bg-orange-600 w-12 rounded py-[2px]">
          <CiSearch
            size="25px"
            color="white"
            fontWeight={"bold"}
            className="mx-auto"
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
