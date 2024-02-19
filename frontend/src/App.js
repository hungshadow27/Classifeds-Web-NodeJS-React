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
  return (
    <Router>
      <div className="page-container">
        <Routes>
          <Route path="*" element={<AppLayout isMobile={isMobile} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

function AppLayout({ isMobile }) {
  return (
    <>
      <Header isMobile={isMobile} />
      <NavbarMobile isMobile={isMobile} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":category" element={<ListProductByCategory />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
