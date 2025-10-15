import React from "react";

import Hero from "../main_components/Hero";
import Projects from "../main_components/Projects";
import Process from "../main_components/Process";
import Plans from "../main_components/Plans";
import Intro from "../main_components/Intro";
import FAQs from "../main_components/FAQs";
import BottomMenuSticky from "../sub_components/BottomMenu_stickey";

export default function Home() {
  return (
    <>
      <div className="page_wrap">
        <Hero />
        <Projects />
        <Process />
        <Plans />
        <Intro />
        <FAQs />
        <BottomMenuSticky />
      </div>
      {/* Footer is rendered by Layout */}
    </>
  )
}