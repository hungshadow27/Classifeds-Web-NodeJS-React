import { useState, useRef } from "react";

const MenuToggleContainer = ({ title, children, isHover, position }) => {
  const catMenu = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const closeOpenMenus = (e) => {
    if (isOpen && !catMenu.current?.contains(e.target)) {
      setOpen(false);
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);

  return (
    <>
      {isHover ? (
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="cursor-pointer" onClick={() => setOpen(!isOpen)}>
            {title}
          </div>
          {isOpen && (
            <>
              <div
                ref={catMenu}
                className={`${
                  position === "fixed" ? "fixed" : "absolute"
                } left-1/2 transform -translate-x-1/2 z-20`}
              >
                <div className="h-3 bg-transparent"></div>
                <div className="bg-white rounded">{children}</div>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="relative">
          <div className="cursor-pointer" onClick={() => setOpen(!isOpen)}>
            {title}
          </div>
          {isOpen && (
            <>
              <div
                ref={catMenu}
                className={`${
                  position === "fixed" ? "fixed" : "absolute"
                } left-1/2 transform -translate-x-1/2 z-20`}
              >
                <div className="h-3 bg-transparent"></div>
                <div className="bg-white rounded">{children}</div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default MenuToggleContainer;
