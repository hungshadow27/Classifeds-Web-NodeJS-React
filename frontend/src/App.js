import { lazy, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Entrance/Login";
import Register from "./components/Entrance/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import axios from "axios";

const Home = lazy(() => wait().then(() => import("./components/Home/Home")));
const ListProductByCategory = lazy(() =>
  wait().then(() =>
    import("./components/ListProductByCategory/ListProductByCategory")
  )
);
const ProductDetail = lazy(() =>
  wait().then(() => import("./components/ProductDetail/ProductDetail"))
);
const UserPage = lazy(() =>
  wait().then(() => import("./components/UserPage/UserPage"))
);
const RatingUserPage = lazy(() =>
  wait().then(() => import("./components/RatingUserPage/RatingUserPage"))
);

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setMobile] = useState(false);

  const [categoryList, setCategoryList] = useState();
  const fetchCategoryList = async () => {
    try {
      const response = await axios.get("/v1/category");
      setCategoryList(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCategoryList();
  }, []);

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
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Root isMobile={isMobile} />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home categoryList={categoryList} />,
        },
        {
          path: "category/:categorySlug",
          element: <ListProductByCategory />,
        },
        {
          path: "product/:productId",
          element: <ProductDetail isMoble={isMobile} />,
        },
        {
          path: "user/:userId",
          element: <UserPage isMoble={isMobile} />,
        },
        {
          path: "user/:userId/rating",
          element: <RatingUserPage isMoble={isMobile} />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);

  return (
    <RouterProvider router={router} fallbackElement={<LoadingSpinner />} />
  );
}
const wait = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, 500);
  });
};

export default App;
