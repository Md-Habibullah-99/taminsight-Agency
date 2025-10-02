
import React from "react";
import Header from "../main_components/Header";
import { Outlet } from "react-router-dom";
import useAppBootstrap from "../../hooks/useAppBootstrap";

export default function Layout() {
  useAppBootstrap();

  return (
    <>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
      <div className="cursor-another-outline" data-another-cursor-outline></div>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}