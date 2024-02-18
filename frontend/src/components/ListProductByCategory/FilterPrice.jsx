import React, { useState } from "react";
import MenuToggleContainer from "../MenuToggle/MenuToggleContainer";
import FilterButton from "./FilterButton";

const FilterPrice = ({ filterPrice, setFilterPrice }) => {
  const [inputPrice, setInputPrice] = useState({
    start: filterPrice.start,
    end: filterPrice.end,
  });
  const clearFilterPrice = () => {
    setFilterPrice({ start: "", end: "" });
    setInputPrice({});
  };
  const handleFilterPrice = () => {
    setFilterPrice({ start: inputPrice.start, end: inputPrice.end });
    console.log(filterPrice);
  };
  return (
    <MenuToggleContainer
      title={<FilterButton hasArrow={true} name="Giá" />}
      position={"fixed"}
    >
      <div className="w-[330px] md:w-[450px] p-3 shadow-lg rounded">
        <div className="text-center text-base font-bold">Chọn mức giá</div>
        <div className="mt-5">
          <div className="flex items-center gap-3">
            <div className="relative mb-3" data-te-input-wrapper-init>
              <input
                type="number"
                min={0}
                className="peer block min-h-[auto] w-full rounded border-[1px] px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-gray-400 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none   [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput2"
                placeholder="Giá tối thiểu"
                onChange={(e) =>
                  setInputPrice((prevState) => ({
                    ...prevState,
                    start: e.target.value,
                  }))
                }
              />
              <label
                htmlFor="exampleFormControlInput2"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.9] peer-focus:text-gray-400 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
              >
                Giá tối thiểu
              </label>
            </div>
            <span>-</span>
            <div className="relative mb-3" data-te-input-wrapper-init>
              <input
                type="number"
                min={0}
                className="peer block min-h-[auto] w-full rounded border-[1px] px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-gray-400 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none   [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput3"
                placeholder="Giá tối đa"
                onChange={(e) =>
                  setInputPrice((prevState) => ({
                    ...prevState,
                    end: e.target.value,
                  }))
                }
              />
              <label
                htmlFor="exampleFormControlInput3"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.9] peer-focus:text-gray-400 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
              >
                Giá tối đa
              </label>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => clearFilterPrice()}
              className="w-full font-bold text-center p-3 border border-gray-500 rounded hover:bg-gray-200"
            >
              Xoá lọc
            </button>
            <button
              onClick={() => handleFilterPrice()}
              className="w-full font-bold text-white text-center p-3 border border-gray-100 rounded bg-orange-500 hover:bg-orange-200"
            >
              Áp dụng
            </button>
          </div>
        </div>
      </div>
    </MenuToggleContainer>
  );
};

export default FilterPrice;
