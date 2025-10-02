
import React, { useEffect } from "react";
import Header from "../main_components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");
    const cursorAnotherOutline = document.querySelector("[data-another-cursor-outline]");

    function onMouseMove(e) {
      const posX = e.clientX;
      const posY = e.clientY;
      if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
      }
      if (cursorOutline) {
        cursorOutline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 500, fill: "forwards" });
      }
      if (cursorAnotherOutline) {
        cursorAnotherOutline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 1000, fill: "forwards" });
      }
    }

    function onClick() {
      if (cursorOutline) {
        cursorOutline.style.height = `20px`;
        cursorOutline.style.width = `20px`;
        setTimeout(() => {
          cursorOutline.style.height = `30px`;
          cursorOutline.style.width = `30px`;
        }, 50);
      }
    }

    function changeCursorColor() {
      const targetSubsection = document.querySelector('.cursor-dot');
      const hoverIntro = document.querySelector('.intro');
      const hoverPricing = document.querySelector('.pricing_card');
      const hoverFooter = document.querySelector('.footer-primary');

      const handleMouseEnter = () => {
        if (targetSubsection) targetSubsection.style.backgroundColor = 'white';
      };
      const handleMouseLeave = () => {
        if (targetSubsection) targetSubsection.style.backgroundColor = 'black';
      };

      if (hoverIntro) {
        hoverIntro.addEventListener('mouseenter', handleMouseEnter);
        hoverIntro.addEventListener('mouseleave', handleMouseLeave);
      }
      if (hoverPricing) {
        hoverPricing.addEventListener('mouseenter', handleMouseEnter);
        hoverPricing.addEventListener('mouseleave', handleMouseLeave);
      }
      if (hoverFooter) {
        hoverFooter.addEventListener('mouseenter', handleMouseEnter);
        hoverFooter.addEventListener('mouseleave', handleMouseLeave);
      }

      return () => {
        if (hoverIntro) {
          hoverIntro.removeEventListener('mouseenter', handleMouseEnter);
          hoverIntro.removeEventListener('mouseleave', handleMouseLeave);
        }
        if (hoverPricing) {
          hoverPricing.removeEventListener('mouseenter', handleMouseEnter);
          hoverPricing.removeEventListener('mouseleave', handleMouseLeave);
        }
        if (hoverFooter) {
          hoverFooter.removeEventListener('mouseenter', handleMouseEnter);
          hoverFooter.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);
    const cleanupChangeCursorColor = changeCursorColor();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      cleanupChangeCursorColor();
    };
  }, []);

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