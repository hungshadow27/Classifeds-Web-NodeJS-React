import React, { useState } from "react";
import MenuToggleContainer from "../MenuToggle/MenuToggleContainer";
import FilterButton from "./FilterButton";

const FilterStatus = ({ filterValues, setFilterValues }) => {
  const [statusSelected, setStatusSelected] = useState(filterValues.status);
  const clearFilterStatus = () => {
    setFilterValues((prevState) => ({ ...prevState, status: "" }));
    setStatusSelected("");
  };
  const handleFilterStatus = () => {
    setFilterValues((prevState) => ({ ...prevState, status: statusSelected }));
  };
  const statusList = ["Còn bảo hành", "Mới", "Đã sử dụng"];

  return (
    <MenuToggleContainer
      title={
        <FilterButton
          hasArrow={true}
          name={filterValues.status === "" ? "Tình trạng" : filterValues.status}
          isActive={filterValues.status === "" ? false : true}
        />
      }
      position={"fixed"}
    >
      <div className="w-[330px] md:w-[450px] p-3 shadow-lg rounded">
        <div className="text-center text-base font-bold">Tình trạng</div>
        <div className="mt-3">
          <div className="text-start">
            <form className="flex flex-col p-1">
              {statusList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b-[1px] border-gray-100 p-2"
                  >
                    <label htmlFor={item}>{item}</label>
                    <input
                      checked={item === filterValues.status}
                      id={item}
                      type="radio"
                      value={item}
                      onChange={() => setStatusSelected(item)}
                      name="default-radio"
                      className="w-5 h-5 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500"
                    />
                  </div>
                );
              })}
            </form>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => clearFilterStatus()}
            className="w-full font-bold text-center p-3 border border-gray-500 rounded hover:bg-gray-200"
          >
            Xoá lọc
          </button>
          <button
            onClick={() => handleFilterStatus()}
            className="w-full font-bold text-white text-center p-3 border border-gray-100 rounded bg-orange-500 hover:bg-orange-200"
          >
            Áp dụng
          </button>
        </div>
      </div>
    </MenuToggleContainer>
  );
};

export default FilterStatus;
