import { useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import gsap from 'gsap';
import $ from 'jquery';

export default function BottomMenuSticky() {
  useEffect(() => {
    function animateBottomMenu() {
        const $shape = $(".bottom-menu-shape");
        if (!$shape.length) return;
        const $shapeBg = $(".bottom-menu-shape-bg");
        const transitionDuration = 500;

        function updateShape() {
            $(".bottom-menu-link-bg").css("opacity", "0");
            $shape.css("opacity", "1");
            const $current = $(".bottom-menu-link.active");
            if ($current.length) {
                positionShape($current);
            } else {
                $shape.css("opacity", "0");
            }
        }

        function positionShape($el) {
            const menu = $(".bottom-menu");
            if (!menu.length || !$el.length) return;
            const width = $el.innerWidth();
            const left = $el.offset().left - menu.offset().left;
            $shape.css({ left, width });
        }

        const observerConfig = { attributes: true, attributeFilter: ['class'], childList: false, subtree: false };
        const observer = new MutationObserver(() => {
            updateShape();
        });
        const links = document.querySelectorAll(".bottom-menu-link");
        links.forEach(link => {
            observer.observe(link, observerConfig);
        });

        $shapeBg.css("transition", `width ${transitionDuration / 2}ms`);
        $shape.css("transition", `all ${transitionDuration}ms`);

        const handleResize = () => updateShape();
        const handleClick = (e) => {
            const $target = $(e.currentTarget);
            positionShape($target);
        };

        $(window).on("resize", handleResize);
        $('.bottom-menu-link').on('click', handleClick);

        setTimeout(updateShape, 100); // Initial call

        return () => {
            observer.disconnect();
            $(window).off("resize", handleResize);
            $('.bottom-menu-link').off('click', handleClick);
        };
    }

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

  // Observe page sections and sync active link (pill) based on scroll position
  function observeActiveSection() {
    const sectionIds = ['home','projects','process','plans','quick-intro','faqs'];
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const menu = document.querySelector('.bottom-menu');
    const linkForId = (id) => menu?.querySelector(`a[href$="#${id}"]`);
    let currentActiveId = null;

    const setActive = (id) => {
      if (!id || currentActiveId === id) return;
      currentActiveId = id;
      const links = menu?.querySelectorAll('.bottom-menu-link');
      if (links) links.forEach(l => l.classList.remove('active'));
      const link = linkForId(id);
      if (link) {
        link.classList.add('active');
        // Nudge the pill immediately to reduce perceived lag
        const $el = $(link);
        const $shape = $(".bottom-menu-shape");
        const $menu = $(".bottom-menu");
        if ($shape.length && $menu.length) {
          const width = $el.innerWidth();
          const left = $el.offset().left - $menu.offset().left;
          $shape.css({ left, width, opacity: 1 });
        }
      }
    };

    // IntersectionObserver tuned to the middle band of the viewport
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length) {
        setActive(visible[0].target.id);
      } else {
        // Fallback: pick the section whose top is above viewport center
        const viewportMiddle = window.scrollY + window.innerHeight / 2;
        let candidate = sections[0];
        for (const sec of sections) {
          const top = sec.getBoundingClientRect().top + window.scrollY;
          if (top <= viewportMiddle) candidate = sec;
        }
        if (candidate) setActive(candidate.id);
      }
    }, { root: null, rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] });

    sections.forEach(s => observer.observe(s));

    // Initial sync on mount after layout settles
    const init = () => {
      const viewportMiddle = window.scrollY + window.innerHeight / 2;
      let candidate = sections[0];
      for (const sec of sections) {
        const top = sec.getBoundingClientRect().top + window.scrollY;
        if (top <= viewportMiddle) candidate = sec;
      }
      if (candidate) setActive(candidate.id);
    };
    const initTimeout = setTimeout(init, 100);

    // Also re-evaluate on resize to maintain correct active state
    const onResize = () => init();
    window.addEventListener('resize', onResize);

    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener('resize', onResize);
      observer.disconnect();
    };
  }

  const cleanupObserver = observeActiveSection();

    return () => {
        if (cleanupAnimate) cleanupAnimate();
        if (cleanupSticky) cleanupSticky();
    if (cleanupObserver) cleanupObserver();
    };
  }, []);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <div className="bottom-menu-sticky">
      <div className="bottom-menu-wrap">
        <div className="bottom-menu">
          <NavHashLink smooth to="/#home" className="bottom-menu-link is-link-icon w-inline-block" activeClassName="active" scroll={scrollWithOffset}>
            <div className="bottom-menu-link-bg is-link-bg"></div><svg xmlns="http://www.w3.org/2000/svg" width="100%"
              viewBox="0 0 24 24" fill="none" className="svgsprite svg-s-32">
              <path
                d="M5 12.1799L5 9.54258L12.5 4L20 9.54258L20 12.1799L16.5239 9.6044C15.0772 8.53297 14.066 7.7706 13.4902 7.31731L13.4902 19L11.4888 19L11.4888 7.31731C10.7865 7.86676 9.7823 8.62912 8.47612 9.6044L5 12.1799Z"
                fill="currentColor"></path>
            </svg>
          </NavHashLink>
          <NavHashLink smooth to="/#projects" className="bottom-menu-link w-inline-block" activeClassName="active" scroll={scrollWithOffset}>
            <p className="menu_link-text">Work</p>
            <div className="bottom-menu-link-bg"></div>
          </NavHashLink>
          <NavHashLink smooth to="/#process" className="bottom-menu-link w-inline-block" activeClassName="active" scroll={scrollWithOffset}>
            <p className="menu_link-text fw2">Process</p>
            <div className="bottom-menu-link-bg"></div>
          </NavHashLink>
          <NavHashLink smooth to="/#plans" className="bottom-menu-link w-inline-block" activeClassName="active" scroll={scrollWithOffset}>
            <p className="menu_link-text fw2">Plans</p>
            <div className="bottom-menu-link-bg"></div>
          </NavHashLink>
          <NavHashLink smooth to="/#quick-intro" className="bottom-menu-link w-inline-block" activeClassName="active" scroll={scrollWithOffset}>
            <p className="menu_link-text fw2">About</p>
            <div className="bottom-menu-link-bg"></div>
          </NavHashLink>
          <NavHashLink smooth to="/#faqs" className="bottom-menu-link w-inline-block" activeClassName="active" scroll={scrollWithOffset}>
            <p className="menu_link-text fw2">Faqs</p>
            <div className="bottom-menu-link-bg"></div>
          </NavHashLink>
          <div className="bottom-menu-shape">
            <div className="bottom-menu-shape-bg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
