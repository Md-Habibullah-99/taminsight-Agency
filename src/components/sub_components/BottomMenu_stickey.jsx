import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import $ from 'jquery'; // Assuming jQuery is available globally or installed
import { Link } from 'react-router-dom';

export default function BottomMenuSticky() {
  useEffect(() => {
    // Animate bottom menu shape and highlight current link
    function animateBottomMenu() {
        const $shape = $(".bottom-menu-shape");
        const $shapeBg = $(".bottom-menu-shape-bg");
        const transitionDuration = 500;

        function updateShape() {
            $(".bottom-menu-link-bg").css("opacity", "0");
            $shape.css("opacity", "1");
            const $current = $(".bottom-menu-link.w--current");
            if ($current.length) {
                positionShape($current);
            } else {
                $shape.css("opacity", "0");
            }
        }

        function positionShape($el) {
            const menu = $(".bottom-menu");
            if (!menu.length) return;
            const width = $el.innerWidth();
            const left = $el.offset().left - menu.offset().left;
            $shape.css({ left, width });
        }

        // Observe changes to menu links
        const observerConfig = { attributes: true, childList: true, subtree: true };
        const observer = new MutationObserver(() => updateShape());
        const links = document.querySelectorAll(".bottom-menu-link");
        links.forEach(link => {
            observer.observe(link, observerConfig);
        });

        $shapeBg.css("transition", `width ${transitionDuration / 2}ms`);
        $shape.css("transition", `all ${transitionDuration}ms`);

        const handleResize = () => updateShape();
        const handlePageShow = (e) => {
            if (e.originalEvent && e.originalEvent.persisted) window.location.reload();
        };

        $(window).on("resize", handleResize);
        $(window).on("pageshow", handlePageShow);

        updateShape();

        return () => {
            observer.disconnect();
            $(window).off("resize", handleResize);
            $(window).off("pageshow", handlePageShow);
        };
    }

    // Show/hide sticky bottom menu on scroll
    function stickyBottomMenu() {
        const $stickyMenu = $(".bottom-menu-sticky");
        if (!$stickyMenu.length) return;
        
        gsap.set($stickyMenu, { y: "100%", autoAlpha: 0 });
        
        const handleScroll = () => {
            if (window.scrollY > 500) {
                gsap.to($stickyMenu, { y: "0%", scale: 1, autoAlpha: 1, duration: 1, ease: "power3.out" });
            } else {
                gsap.to($stickyMenu, { y: "100%", scale: 0.8, autoAlpha: 0, duration: 1, ease: "power3.out" });
            }
        };

        $(window).on("scroll", handleScroll);

        return () => {
            $(window).off("scroll", handleScroll);
        };
    }

    const cleanupAnimate = animateBottomMenu();
    const cleanupSticky = stickyBottomMenu();

    return () => {
        cleanupAnimate();
        cleanupSticky();
    };
  }, []);

  return (
    <div className="bottom-menu-sticky">
      <div className="bottom-menu-wrap">
        <div className="bottom-menu"><Link to="#home" className="bottom-menu-link is-link-icon w-inline-block">
            <div className="bottom-menu-link-bg is-link-bg"></div><svg xmlns="http://www.w3.org/2000/svg" width="100%"
              viewBox="0 0 24 24" fill="none" className="svgsprite svg-s-32">
              <path
                d="M5 12.1799L5 9.54258L12.5 4L20 9.54258L20 12.1799L16.5239 9.6044C15.0772 8.53297 14.066 7.7706 13.4902 7.31731L13.4902 19L11.4888 19L11.4888 7.31731C10.7865 7.86676 9.7823 8.62912 8.47612 9.6044L5 12.1799Z"
                fill="currentColor"></path>
            </svg>
          </Link><a href="#projects" className="bottom-menu-link w-inline-block">
            <p className="menu_link-text">Work</p>
            <div className="bottom-menu-link-bg"></div>
          </a><a href="#process" className="bottom-menu-link w-inline-block">
            <p className="menu_link-text fw2">Process</p>
            <div className="bottom-menu-link-bg"></div>
          </a><a href="#plans" className="bottom-menu-link w-inline-block">
            <p className="menu_link-text fw2">Plans</p>
            <div className="bottom-menu-link-bg"></div>
          </a><a href="#quick-intro" className="bottom-menu-link w-inline-block">
            <p className="menu_link-text fw2">About</p>
            <div className="bottom-menu-link-bg"></div>
          </a><a href="#faqs" className="bottom-menu-link w-inline-block">
            <p className="menu_link-text fw2">Faqs</p>
            <div className="bottom-menu-link-bg"></div>
          </a>
          <div className="bottom-menu-shape">
            <div className="bottom-menu-shape-bg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
