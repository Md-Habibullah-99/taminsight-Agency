
import React from "react";
import Header from "../main_components/Header";
import Footer from "../main_components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import useAppBootstrap from "../../hooks/useAppBootstrap";

export default function Layout() {
  useAppBootstrap();
  const location = useLocation();
  const path = location.pathname || '';
  const isAffiliatePage = path.startsWith('/affiliate');

  return (
    <>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
      <div className="cursor-another-outline" data-another-cursor-outline></div>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* By default, show Primary Bottom + Secondary on all pages. Primary Up is optional and hidden on affiliate routes. */}
      <Footer showPrimaryUp={!isAffiliatePage} showPrimaryBottom={true} showSecondary={true} />
    </>
  );
}