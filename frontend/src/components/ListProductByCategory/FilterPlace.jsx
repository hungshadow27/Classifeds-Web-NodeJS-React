import React, { useState } from "react";
import MenuToggleContainer from "../MenuToggle/MenuToggleContainer";
import FilterButton from "./FilterButton";

const FilterPlace = ({ filterPlace, setFilterPlace }) => {
  const [placeSelected, setPlaceSelected] = useState(filterPlace);
  const clearFilterPlace = () => {
    setFilterPlace("Toàn quốc");
    setPlaceSelected("Toàn quốc");
  };
  const handleFilterPlace = () => {
    setFilterPlace(placeSelected);
  };
  const cityList = ["Toàn quốc", "Hải Phòng", "Hà Nội", "TP.Hồ Chí Minh"];
  return (
    <MenuToggleContainer
      title={
        <FilterButton
          hasArrow={true}
          name={filterPlace}
          isActive={filterPlace !== "Toàn quốc"}
        />
      }
      position={"fixed"}
    >
      <div className="w-[330px] md:w-[450px] p-3 shadow-lg rounded">
        <div className="text-center text-base font-bold">Địa điểm</div>
        <div className="mt-3">
          <div className="text-start">
            <div className="text-base font-bold">Tỉnh/Thành phố</div>
            <form className="flex flex-col p-1">
              {cityList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b-[1px] border-gray-100 p-2"
                  >
                    <label htmlFor={item}>{item}</label>
                    <input
                      checked={item === filterPlace}
                      id={item}
                      type="radio"
                      value={item}
                      onChange={() => {
                        setPlaceSelected(item);
                      }}
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
            className="w-full font-bold text-center p-3 border border-gray-500 rounded hover:bg-gray-200"
            onClick={() => {
              clearFilterPlace();
            }}
          >
            Xoá lọc
          </button>
          <button
            className="w-full font-bold text-white text-center p-3 border border-gray-100 rounded bg-orange-500 hover:bg-orange-200"
            onClick={() => {
              handleFilterPlace();
            }}
          >
            Áp dụng
          </button>
        </div>
      </div>
    </MenuToggleContainer>
  );
};

export default FilterPlace;
