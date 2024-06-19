import React, { useState } from "react";
import MenuToggleContainer from "../MenuToggle/MenuToggleContainer";
import FilterButton from "./FilterButton";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const FilterCategory = ({
  currentCategory,
  currentChildCategory,
  setCurrentChildCategory,
}) => {
  const [categorySelected, setCategorySelected] = useState("");
  const categoryList = [
    {
      id: 0,
      name: "Đồ điện tử",
      slug: "mua-ban-do-dien-tu",
      child: [
        { id: 0, name: "Tất cả đồ điện tử" },
        { id: 1, name: "Điện thoại" },
        { id: 2, name: "Máy tính" },
      ],
    },
    {
      id: 1,
      name: "Thú cưng",
      slug: "mua-ban-thu-cung",
      child: [
        { id: 0, name: "Tất cả thú cưng" },
        { id: 1, name: "Chó" },
        { id: 2, name: "Mèo" },
      ],
    },
  ];
  const [openAllCategory, setOpenAllCategory] = useState(false);
  return (
    <MenuToggleContainer
      title={
        <FilterButton
          hasArrow={true}
          name={currentCategory.name}
          isActive={true}
        />
      }
      position={"fixed"}
    >
      <div className="w-[330px] md:w-[450px] py-3 shadow-lg rounded">
        <div className="text-center text-base font-bold">Danh mục</div>
        <div className="mt-3">
          <div className="text-start">
            {!openAllCategory ? (
              <>
                {currentCategory.child.map((item, index) => {
                  return (
                    <div key={index}>
                      {currentChildCategory.name === item.name ? (
                        <div className="flex items-center font-bold justify-between border-b-[1px] border-gray-100 p-3 cursor-pointer hover:bg-gray-100">
                          {item.name}
                        </div>
                      ) : (
                        <div
                          onClick={() => setCurrentChildCategory(item)}
                          className="flex items-center justify-between border-b-[1px] border-gray-100 p-3 cursor-pointer hover:bg-gray-100"
                        >
                          {item.name}
                        </div>
                      )}
                    </div>
                  );
                })}
                <div
                  onClick={() => setOpenAllCategory((prevstate) => !prevstate)}
                  className="flex items-center gap-2 font-bold border-b-[1px] border-gray-100 p-3 cursor-pointer hover:bg-gray-100"
                >
                  <IoIosArrowBack />
                  <span>Tất cả danh mục</span>
                </div>
              </>
            ) : (
              <>
                {categoryList.map((item, index) => {
                  return (
                    <div key={index}>
                      {currentCategory.name === item.name ? (
                        <div className="flex items-center justify-between font-bold border-b-[1px] border-gray-100 p-3 cursor-pointer hover:bg-gray-100">
                          {item.name}
                        </div>
                      ) : (
                        <Link
                          to={`/category/${item.slug}`}
                          className="flex items-center justify-between border-b-[1px] border-gray-100 p-3 cursor-pointer hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  );
                })}
                <div
                  onClick={() => setOpenAllCategory((prevstate) => !prevstate)}
                  className="flex items-center gap-2 font-bold border-b-[1px] border-gray-100 p-3 cursor-pointer hover:bg-gray-100"
                >
                  <IoIosArrowBack />
                  <span>Quay lại</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </MenuToggleContainer>
  );
};

export default FilterCategory;
