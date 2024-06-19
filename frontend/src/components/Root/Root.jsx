import React, { Suspense, useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import { Outlet } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
const Root = ({ isMobile }) => {
  return (
    <>
      <Header isMobile={isMobile} />
      <main className="min-h-[700px]">
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <NavbarMobile isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </>
  );
};

export default Root;
