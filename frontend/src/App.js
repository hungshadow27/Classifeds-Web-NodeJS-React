import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Entrance/Login";
import Register from "./components/Entrance/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";
import ListProductByCategory from "./components/ListProductByCategory/ListProductByCategory";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (windowSize.width < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize]);
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

  return (
    <Router>
      <div className="page-container">
        <Routes>
          <Route
            path="*"
            element={
              <AppLayout isMobile={isMobile} categoryList={categoryList} />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

function AppLayout({ isMobile, categoryList }) {
  return (
    <>
      <Header isMobile={isMobile} />
      <NavbarMobile isMobile={isMobile} />
      <Routes>
        <Route path="/" element={<Home />} />
        {categoryList.map((category, index) => {
          return (
            <Route
              key={category}
              path={category.slug}
              element={<ListProductByCategory category={category} />}
            />
          );
        })}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
