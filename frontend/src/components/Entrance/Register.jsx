import { Link } from "react-router-dom";
import logo from "./logo.png";
const Register = () => {
  return (
    <main className="h-screen md:pt-32 bg-background-login bg-contain">
      <div className="p-3 bg-white md:w-[440px] md:h-[640px] md:mx-auto md:shadow-lg md:rounded">
        <img
          className="w-32 block md:mx-auto"
          src="https://static.chotot.com/storage/marketplace/logo.png"
          alt=""
        />
        <h1 className="text-xl font-bold my-7">Đăng ký tài khoản</h1>
        <form action="">
          <div className="mb-6"></div>
          <div className="mb-6"></div>
          <div className="mb-6"></div>
          <div className="flex items-center text-sm">
            <span>
              Bằng việc Đăng ký, bạn đã đọc và đồng ý với{" "}
              <a href="#1" className="text-blue-700">
                Điều khoản sử dụng
              </a>{" "}
              và{" "}
              <a href="#1" className="text-blue-700">
                Chính sách bảo mật
              </a>{" "}
              của Chợ Tốt
            </span>
          </div>
          <button className="uppercase w-full p-3 bg-orange-700 font-bold text-white mt-4 rounded-md py-2">
            Đăng ký
          </button>
        </form>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full h-px my-8 bg-gray-400 border-0" />
          <span className="absolute px-3 font-normal text-sm text-gray-900 -translate-x-1/2 bg-white left-1/2 ">
            Hoặc đăng nhập bằng
          </span>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <button className="flex items-center gap-2 border py-2 px-3 border-gray-400 rounded h-[38px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0005 1.66797C5.3988 1.66797 1.66797 5.32786 1.66797 9.84202C1.66797 13.9213 4.71464 17.3024 8.6988 17.918V12.2054H6.58214V9.84202H8.6988V8.0411C8.6988 5.99084 9.94297 4.86025 11.8455 4.86025C12.7571 4.86025 13.7121 5.01966 13.7121 5.01966V7.02986H12.6588C11.6255 7.02986 11.3021 7.66096 11.3021 8.3076V9.84038H13.6113L13.2421 12.2037H11.3021V17.9163C15.2863 17.304 18.333 13.9221 18.333 9.84202C18.333 5.32786 14.6021 1.66797 10.0005 1.66797Z"
                fill="#2561CF"
              ></path>
            </svg>
            <span className="font-bold text-sm">Facebook</span>
          </button>
          <button className="flex items-center gap-2 border py-2 px-3 border-gray-400 rounded h-[38px]">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.2992 10.1951C19.2992 9.47569 19.2395 8.95069 19.1102 8.40625H10.7031V11.6534H15.6379C15.5384 12.4604 15.0012 13.6757 13.8072 14.4923L13.7905 14.601L16.4487 16.6133L16.6328 16.6312C18.3242 15.1048 19.2992 12.859 19.2992 10.1951Z"
                fill="#4285F4"
              ></path>
              <path
                d="M10.7042 18.75C13.1219 18.75 15.1515 17.9722 16.634 16.6306L13.8084 14.4916C13.0522 15.0069 12.0374 15.3666 10.7042 15.3666C8.33635 15.3666 6.32663 13.8403 5.61022 11.7306L5.50522 11.7393L2.74122 13.8296L2.70508 13.9278C4.17754 16.7861 7.2021 18.75 10.7042 18.75Z"
                fill="#34A853"
              ></path>
              <path
                d="M5.61025 11.7322C5.42122 11.1878 5.31182 10.6044 5.31182 10.0016C5.31182 9.39881 5.42122 8.8155 5.6003 8.27106L5.59529 8.15511L2.79666 6.03125L2.7051 6.07381C2.09823 7.25994 1.75 8.59191 1.75 10.0016C1.75 11.4113 2.09823 12.7432 2.7051 13.9294L5.61025 11.7322Z"
                fill="#FBBC05"
              ></path>
              <path
                d="M10.7042 4.63331C12.3856 4.63331 13.5198 5.34303 14.1665 5.93612L16.6936 3.525C15.1416 2.11528 13.1219 1.25 10.7042 1.25C7.2021 1.25 4.17754 3.21387 2.70508 6.07218L5.60028 8.26944C6.32664 6.15972 8.33636 4.63331 10.7042 4.63331Z"
                fill="#EB4335"
              ></path>
            </svg>
            <span className="font-bold text-sm">Google</span>
          </button>
          <button className="flex items-center gap-2 border py-2 px-3 border-gray-400 rounded h-[38px]">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1386 4.09766C12.5636 4.09766 11.898 4.84922 10.8011 4.84922C9.67652 4.84922 8.81871 4.10312 7.45386 4.10312C6.11793 4.10312 4.69332 4.91875 3.78863 6.3082C2.51832 8.26758 2.73394 11.9578 4.79136 15.1016C5.5273 16.227 6.51011 17.4891 7.79918 17.5027H7.82261C8.94293 17.5027 9.27574 16.7691 10.8175 16.7605H10.841C12.3597 16.7605 12.6644 17.4984 13.78 17.4984H13.8035C15.0925 17.4848 16.1281 16.0863 16.864 14.9652C17.3937 14.159 17.5906 13.7543 17.9968 12.8422C15.0207 11.7125 14.5425 7.49336 17.4859 5.87578C16.5875 4.75078 15.325 4.09922 14.1347 4.09922L14.1386 4.09766Z"
                fill="#222222"
              ></path>
              <path
                d="M13.7921 0C12.8546 0.0636719 11.7609 0.660547 11.1203 1.43984C10.539 2.14609 10.0609 3.19375 10.2484 4.20977H10.3234C11.3218 4.20977 12.3437 3.60859 12.9406 2.83828C13.5156 2.10508 13.9515 1.06602 13.7921 0Z"
                fill="#222222"
              ></path>
            </svg>
            <span className="font-bold text-sm">Apple ID</span>
          </button>
        </div>
        <div className="text-sm text-center p-6">
          <span>Đã có tài khoản? </span>
          <Link to="/login" className="font-bold text-blue-700">
            Đăng nhập ngay
          </Link>
        </div>
        <div className="absolute bottom-0 left-3 text-sm md:text-white font-medium">
          <span>Được phát triển bởi</span>
          <a href="https://facebook.com/hungshadow27">
            <img src={logo} alt="" className="w-16 py-3" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Register;
