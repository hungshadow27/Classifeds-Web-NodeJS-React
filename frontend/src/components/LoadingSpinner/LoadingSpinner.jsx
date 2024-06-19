import React from "react";
import "./Spinner.css";
const LoadingSpinner = () => {
  return (
    <div className="w-full h-screen bg-slate-900 bg-opacity-40 fixed z-40">
      <div className="flex flex-col items-center gap-3 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-slate-800 text-white px-12 py-10 rounded-lg shadow">
        <div className="loader"></div>
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
