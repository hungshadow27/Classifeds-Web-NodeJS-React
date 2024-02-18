import React, { useState } from "react";
import MenuToggleContainer from "../MenuToggle/MenuToggleContainer";
import { CiFilter } from "react-icons/ci";

const FilterAdvance = ({ filterValues, setFilterValues }) => {
  const [statusSelected, setStatusSelected] = useState(filterValues.status);
  const [postBySelected, setPostBySelected] = useState(filterValues.postBy);
  const [hasVideoSelected, setHasVideoSelected] = useState(
    filterValues.hasVideo
  );
  const [protectedPayingSelected, setProtectedPayingSelected] = useState(
    filterValues.protectedPaying
  );
  const [shipCodeSelected, setShipCodeSelected] = useState(
    filterValues.shipCode
  );

  const clearFilterValues = () => {
    setFilterValues(() => ({
      status: "",
      hasVideo: false,
      protectedPaying: false,
      shipCode: false,
      postBy: "",
    }));
    setStatusSelected("");
    setPostBySelected("");
    setHasVideoSelected(false);
    setProtectedPayingSelected(false);
    setShipCodeSelected(false);
  };
  const updateFilterValues = () => {
    setFilterValues({
      status: statusSelected,
      hasVideo: hasVideoSelected,
      protectedPaying: protectedPayingSelected,
      shipCode: shipCodeSelected,
      postBy: postBySelected,
    });
  };
  const handleFilter = () => {
    updateFilterValues();
  };
  const statusList = ["Còn bảo hành", "Mới", "Đã sử dụng"];
  const postByList = ["Cá nhân", "Bán chuyên", "Đối tác Chợ Tốt"];
  const otherList = ["Có video", "Thanh toán đảm bảo", "Ship code"];
  return (
    <MenuToggleContainer
      title={
        <div className="flex items-center">
          <CiFilter size={20} />
          <span>Lọc</span>
        </div>
      }
      position={"fixed"}
    >
      <div className="w-[330px] md:w-[450px] p-3 shadow-lg rounded">
        <div className="text-center text-base font-bold">Lọc nâng cao</div>
        <div className="mt-3">
          <div className="text-start">
            <div className="text-base font-bold">Tình trạng</div>
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

          <div className="text-start mb-2">
            <div className="text-base font-bold mb-2">{otherList[0]}</div>
            <div>
              <input
                type="checkbox"
                id={otherList[0]}
                value={otherList[0]}
                className="hidden peer"
                required=""
                onChange={() => setHasVideoSelected((prevState) => !prevState)}
                checked={filterValues.hasVideo || hasVideoSelected}
              />
              <label
                htmlFor={otherList[0]}
                className="inline-flex items-center justify-between py-2 px-3 rounded-3xl bg-white border border-gray-500 cursor-pointer hover:bg-gray-300  peer-checked:font-bold peer-checked:border-orange-500 peer-checked:hover:bg-orange-100  peer-checked:text-orange-500"
              >
                <div>{otherList[0]}</div>
              </label>
            </div>
          </div>
          <div className="text-start mb-2">
            <div className="text-base font-bold mb-2">{otherList[1]}</div>
            <div>
              <input
                type="checkbox"
                id={otherList[1]}
                value={otherList[1]}
                className="hidden peer"
                required=""
                onChange={() =>
                  setProtectedPayingSelected((prevState) => !prevState)
                }
                checked={
                  filterValues.protectedPaying || protectedPayingSelected
                }
              />
              <label
                htmlFor={otherList[1]}
                className="inline-flex items-center justify-between py-2 px-3 rounded-3xl bg-white border border-gray-500 cursor-pointer hover:bg-gray-300  peer-checked:font-bold peer-checked:border-orange-500 peer-checked:hover:bg-orange-100  peer-checked:text-orange-500"
              >
                <div>{otherList[1]}</div>
              </label>
            </div>
          </div>
          <div className="text-start mb-2">
            <div className="text-base font-bold mb-2">{otherList[2]}</div>
            <div>
              <input
                type="checkbox"
                id={otherList[2]}
                value={otherList[2]}
                className="hidden peer"
                required=""
                onChange={() => setShipCodeSelected((prevState) => !prevState)}
                checked={filterValues.shipCode || shipCodeSelected}
              />
              <label
                htmlFor={otherList[2]}
                className="inline-flex items-center justify-between py-2 px-3 rounded-3xl bg-white border border-gray-500 cursor-pointer hover:bg-gray-300  peer-checked:font-bold peer-checked:border-orange-500 peer-checked:hover:bg-orange-100  peer-checked:text-orange-500"
              >
                <div>{otherList[2]}</div>
              </label>
            </div>
          </div>

          <div className="text-start mb-2">
            <div className="text-base font-bold mb-2">Đăng bởi</div>
            <form className="flex flex-col p-1">
              {postByList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b-[1px] border-gray-100 p-2"
                  >
                    <label htmlFor={item}>{item}</label>
                    <input
                      checked={item === filterValues.postBy}
                      id={item}
                      type="radio"
                      value={item}
                      onChange={() => setPostBySelected(item)}
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
            onClick={() => clearFilterValues()}
            className="w-full font-bold text-center p-3 border border-gray-500 rounded hover:bg-gray-200"
          >
            Xoá lọc
          </button>
          <button
            onClick={() => handleFilter()}
            className="w-full font-bold text-white text-center p-3 border border-gray-100 rounded bg-orange-500 hover:bg-orange-200"
          >
            Áp dụng
          </button>
        </div>
      </div>
    </MenuToggleContainer>
  );
};

export default FilterAdvance;
