
import React from "react";
import Header from "../main_components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {  
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}