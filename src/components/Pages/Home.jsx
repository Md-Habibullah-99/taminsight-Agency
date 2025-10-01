import React from "react";

import Hero from "../main_components/Hero";
import Projects from "../main_components/Projects";
import Process from "../main_components/Process";
import Plans from "../main_components/Plans";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Process />
      <Plans />
    </>
  )
}