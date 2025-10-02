
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

    // Tooltip + Copy Email interactions scoped here
    function setupCursorTooltipAndCopy() {
      const container = document.querySelector('.footer-primary-up-container');
      let tooltipTimeout;

      function ensureTooltip() {
        if (!cursorDot) return null;
        let tooltip = cursorDot.querySelector('.cursor-tooltip');
        if (!tooltip) {
          tooltip = document.createElement('div');
          tooltip.className = 'cursor-tooltip';
          // Position relative to cursor dot; CSS can further style it
          tooltip.style.position = 'absolute';
          tooltip.style.left = '20px';
          tooltip.style.top = '-30px';
          tooltip.style.display = 'none';
          cursorDot.appendChild(tooltip);
        }
        return tooltip;
      }

      function showCursorTooltip(text) {
        const tooltip = ensureTooltip();
        if (!tooltip) return;
        tooltip.textContent = text;
        tooltip.style.display = 'block';
      }

      function hideCursorTooltip() {
        if (!cursorDot) return;
        const tooltip = cursorDot.querySelector('.cursor-tooltip');
        if (tooltip) tooltip.style.display = 'none';
      }

      const onDocMouseMove = () => {
        // Tooltip follows cursor by being a child of cursorDot; keep offset stable
        if (!cursorDot) return;
        const tooltip = cursorDot.querySelector('.cursor-tooltip');
        if (tooltip && tooltip.style.display === 'block') {
          tooltip.style.left = '20px';
          tooltip.style.top = '-30px';
        }
      };

      document.addEventListener('mousemove', onDocMouseMove);

      const onEnter = () => showCursorTooltip('copy');
      const onLeave = () => {
        hideCursorTooltip();
        if (tooltipTimeout) clearTimeout(tooltipTimeout);
      };
      const onMouseDown = () => {
        showCursorTooltip('Email Copied');
        if (tooltipTimeout) clearTimeout(tooltipTimeout);
        tooltipTimeout = setTimeout(() => {
          showCursorTooltip('copy');
        }, 1000);
      };

      const onClickContainer = (event) => {
        // Prevent navigating if clicking the link itself; we want to copy
        if (event.target.tagName === 'A') {
          event.preventDefault();
        }
        const emailLink = container?.querySelector('.email-link-click-to-copy');
        if (emailLink) {
          let email = '';
          const href = emailLink.getAttribute('href');
          if (href && href.startsWith('mailto:')) {
            email = href.replace('mailto:', '');
          } else {
            email = (emailLink.textContent || '').trim();
          }
          copyToClipboard(email);
          if (isMobileDevice()) {
            showCopyConfirmationTooltip(container);
          }
        }
      };

      function copyToClipboard(text) {
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).catch(() => {
            fallbackCopy(text);
          });
        } else {
          fallbackCopy(text);
        }
      }

      function fallbackCopy(text) {
        const tempInput = document.createElement('textarea');
        tempInput.value = text;
        tempInput.style.position = 'fixed';
        tempInput.style.left = '-9999px';
        document.body.appendChild(tempInput);
        tempInput.select();
        try { document.execCommand('copy'); } catch (_) { /* noop */ }
        document.body.removeChild(tempInput);
      }

      function showCopyConfirmationTooltip(element) {
        if (!element) return;
        element.classList.add('copied-tooltip');
        element.setAttribute('data-tooltip', 'Email Copied!');
        setTimeout(() => {
          element.classList.remove('copied-tooltip');
          element.removeAttribute('data-tooltip');
        }, 1000);
      }

      function isMobileDevice() {
        return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      }

      // Attach to container if present
      if (container) {
        container.style.cursor = 'pointer';
        container.addEventListener('mouseenter', onEnter);
        container.addEventListener('mouseleave', onLeave);
        container.addEventListener('mousedown', onMouseDown);
        container.addEventListener('click', onClickContainer);
      }

      return () => {
        document.removeEventListener('mousemove', onDocMouseMove);
        if (container) {
          container.removeEventListener('mouseenter', onEnter);
          container.removeEventListener('mouseleave', onLeave);
          container.removeEventListener('mousedown', onMouseDown);
          container.removeEventListener('click', onClickContainer);
        }
        if (tooltipTimeout) clearTimeout(tooltipTimeout);
      };
    }

    const cleanupCursorTooltipAndCopy = setupCursorTooltipAndCopy();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      cleanupChangeCursorColor();
      if (typeof cleanupCursorTooltipAndCopy === 'function') cleanupCursorTooltipAndCopy();
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