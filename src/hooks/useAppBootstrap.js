import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function useAppBootstrap() {
  useEffect(() => {
    // --- BFCache: reload if page restored from back-forward cache ---
    const onPageShow = (event) => {
      if (event.persisted) window.location.reload();
    };
    window.addEventListener('pageshow', onPageShow);

    // --- Debounce helper ---
    const debounce = (fn, delay = 100) => {
      let t;
      return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), delay);
      };
    };

    // --- Custom Cursor interactions (dot and outlines) ---
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');
    const cursorAnotherOutline = document.querySelector('[data-another-cursor-outline]');

    const onMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
      if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
      }
      if (cursorOutline) {
        cursorOutline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 500, fill: 'forwards' });
      }
      if (cursorAnotherOutline) {
        cursorAnotherOutline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 1000, fill: 'forwards' });
      }
    };
    const onClick = () => {
      if (cursorOutline) {
        cursorOutline.style.height = '20px';
        cursorOutline.style.width = '20px';
        setTimeout(() => {
          cursorOutline.style.height = '30px';
          cursorOutline.style.width = '30px';
        }, 50);
      }
    };
    // Cursor color change over specific sections
    const changeCursorColor = () => {
      const targetSubsection = document.querySelector('.cursor-dot');
      const hoverIntro = document.querySelector('.intro');
      const hoverPricing = document.querySelector('.pricing_card');
      const hoverFooter = document.querySelector('.footer-primary');

      const handleMouseEnter = () => { if (targetSubsection) targetSubsection.style.backgroundColor = 'white'; };
      const handleMouseLeave = () => { if (targetSubsection) targetSubsection.style.backgroundColor = 'black'; };

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
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);
    const cleanupChangeCursorColor = changeCursorColor();

    // --- Tooltip + Copy Email over footer primary up container ---
    const setupCursorTooltipAndCopy = () => {
      const container = document.querySelector('.footer-primary-up-container');
      let tooltipTimeout;

      function ensureTooltip() {
        if (!cursorDot) return null;
        let tooltip = cursorDot.querySelector('.cursor-tooltip');
        if (!tooltip) {
          tooltip = document.createElement('div');
          tooltip.className = 'cursor-tooltip';
          tooltip.style.position = 'absolute';
          tooltip.style.left = '20px';
          tooltip.style.top = '-30px';
          tooltip.style.display = 'none';
          cursorDot.appendChild(tooltip);
        }
        return tooltip;
      }
      const showCursorTooltip = (text) => {
        const tooltip = ensureTooltip();
        if (!tooltip) return;
        tooltip.textContent = text;
        tooltip.style.display = 'block';
      };
      const hideCursorTooltip = () => {
        if (!cursorDot) return;
        const tooltip = cursorDot.querySelector('.cursor-tooltip');
        if (tooltip) tooltip.style.display = 'none';
      };
      const onDocMouseMove = () => {
        if (!cursorDot) return;
        const tooltip = cursorDot.querySelector('.cursor-tooltip');
        if (tooltip && tooltip.style.display === 'block') {
          tooltip.style.left = '20px';
          tooltip.style.top = '-30px';
        }
      };
      document.addEventListener('mousemove', onDocMouseMove);

      const onEnter = () => showCursorTooltip('copy');
      const onLeave = () => { hideCursorTooltip(); if (tooltipTimeout) clearTimeout(tooltipTimeout); };
      const onMouseDown = () => {
        showCursorTooltip('Email Copied');
        if (tooltipTimeout) clearTimeout(tooltipTimeout);
        tooltipTimeout = setTimeout(() => showCursorTooltip('copy'), 1000);
      };
      const onClickContainer = (event) => {
        if (event.target.tagName === 'A') event.preventDefault();
        const emailLink = container?.querySelector('.email-link-click-to-copy');
        if (emailLink) {
          let email = '';
          const href = emailLink.getAttribute('href');
          if (href && href.startsWith('mailto:')) email = href.replace('mailto:', '');
          else email = (emailLink.textContent || '').trim();
          copyToClipboard(email);
          if (isMobileDevice()) showCopyConfirmationTooltip(container);
        }
      };

      function copyToClipboard(text) {
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
        } else fallbackCopy(text);
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
    };
    const cleanupCursorTooltipAndCopy = setupCursorTooltipAndCopy();

    // --- Navbar animation and behavior (GSAP) ---
    const hamburgerBtn = document.getElementById('humburger-btn');
    const navbarMenu = document.querySelector('.navbar_menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const navbarTop = document.querySelector('.navbar_top');
    let cleanupNavbar = () => {};
    if (hamburgerBtn && navbarMenu && menuOverlay && navbarTop && gsap) {
      const navbarLogo = navbarTop.querySelector('.navbar_logo');
      const navbarCta = navbarTop.querySelector('.navbar_cta');
      const menuLinks = navbarMenu.querySelectorAll('.navbar_menu_links .btn_link');
      let isAnimating = false;
      let isOpen = false;

      gsap.set(navbarMenu, { x: '-100%', opacity: 0, rotate: 0, visibility: 'hidden', willChange: 'transform, opacity, visibility' });
      gsap.set(menuOverlay, { opacity: 0, visibility: 'hidden', willChange: 'opacity, visibility' });
      gsap.set(menuLinks, { y: 20, opacity: 0 });

      function toggleMenu(show) {
        if (isAnimating) return;
        isAnimating = true;
        if (show) {
          navbarMenu.style.visibility = 'visible';
          menuOverlay.style.visibility = 'visible';
          navbarMenu.style.pointerEvents = 'auto';
          menuOverlay.style.pointerEvents = 'auto';
          navbarTop.classList.add('is-fixed');
          gsap.to(navbarMenu, { x: '0%', opacity: 1, rotate: 0, duration: 0.5, ease: 'power3.out' });
          gsap.to(menuOverlay, { opacity: 1, duration: 1, ease: 'power1.out' });
          gsap.to(menuLinks, { y: 0, opacity: 1, duration: 0.8, stagger: 0.05, delay: 0.2, ease: 'power1.out', onComplete: () => { isAnimating = false; } });
        } else {
          gsap.to(navbarMenu, { x: '-100%', opacity: 0, duration: 0.4, ease: 'power2.inOut' });
          gsap.to(menuLinks, { y: 20, opacity: 0, duration: 0.2, stagger: 0.02, ease: 'power1.in' });
          gsap.to(menuOverlay, { opacity: 0, duration: 1, ease: 'power1.inOut', onComplete: () => {
            navbarMenu.style.pointerEvents = 'none';
            menuOverlay.style.pointerEvents = 'none';
            navbarMenu.style.visibility = 'hidden';
            menuOverlay.style.visibility = 'hidden';
            navbarTop.classList.remove('is-fixed');
            isAnimating = false;
          } });
        }
      }
      const showLogoCta = () => { if (navbarLogo && navbarCta) gsap.to([navbarLogo, navbarCta], { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }); };
      const hideLogoCta = () => { if (navbarLogo && navbarCta) gsap.to([navbarLogo, navbarCta], { opacity: 0, y: -2, duration: 0.5, ease: 'power2.inOut' }); };
      const onHamburgerClick = () => {
        if (isAnimating) return;
        isOpen = !isOpen;
        toggleMenu(isOpen);
        navbarMenu.dataset.open = String(isOpen);
        hamburgerBtn.classList.toggle('is-active');
        const scrollY = window.scrollY;
        if (scrollY !== 0) isOpen ? showLogoCta() : scrollY > 10 && hideLogoCta();
      };
      const onOverlayClick = () => {
        if (!isAnimating) {
          toggleMenu(false);
          isOpen = false;
          navbarMenu.dataset.open = 'false';
          hamburgerBtn.classList.remove('is-active');
        }
      };
      const onScroll = debounce(() => { if (window.scrollY === 0) showLogoCta(); }, 100);

      hamburgerBtn.addEventListener('click', onHamburgerClick);
      menuOverlay.addEventListener('click', onOverlayClick);
      window.addEventListener('scroll', onScroll);

      cleanupNavbar = () => {
        hamburgerBtn.removeEventListener('click', onHamburgerClick);
        menuOverlay.removeEventListener('click', onOverlayClick);
        window.removeEventListener('scroll', onScroll);
      };
    }

    // --- Lenis smooth scrolling (global) ---
    let rafId;
    let lenisInstance;
    const initLenis = () => {
      try {
        const isSalePage = document.body.classList.contains('sale-page');
        const isWebflowEditor = typeof window !== 'undefined' && window.Webflow && typeof window.Webflow.env === 'function'
          ? window.Webflow.env('editor') !== undefined
          : false;
        if (isSalePage || isWebflowEditor) return () => {};

        const LenisCtor = typeof window !== 'undefined' ? window.Lenis : undefined;
        if (!LenisCtor) return () => {};

        lenisInstance = new LenisCtor({
          duration: 1,
          easing: (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 1,
          infinite: false,
        });
        const raf = (time) => {
          lenisInstance?.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        // Optional hook
        lenisInstance.on('scroll', () => {});
        rafId = requestAnimationFrame(raf);
        return () => {
          if (rafId) cancelAnimationFrame(rafId);
          if (lenisInstance) { try { lenisInstance.destroy(); } catch (_) {} lenisInstance = undefined; }
        };
      } catch (_) {
        return () => {};
      }
    };
    const cleanupLenis = initLenis();

    // --- Time and Weather ---
    const updateTime = () => {
      const options = { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'Asia/Dhaka' };
      const timeStr = new Date().toLocaleString('en-US', options);
      const timeElem = document.getElementById('time');
      if (timeElem) timeElem.textContent = timeStr;
    };
    const getWeatherIcon = (main) => {
      const baseUrl = '/images/footerElements/watherIcons/';
      switch (main) {
        case 'Clouds': return `${baseUrl}clouds.svg`;
        case 'Rain': return `${baseUrl}rain.svg`;
        case 'Snow': return `${baseUrl}snow.svg`;
        case 'Night': return `${baseUrl}moon.png`;
        case 'Clear':
        default: return `${baseUrl}clear.svg`;
      }
    };
    const updateWeather = () => {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=d1e52eafe56386f1439142c04afc5b44`;
      const tempElem = document.getElementById('temperature');
      const iconElem = document.getElementById('weather-icon');
      if (!(tempElem && iconElem)) return;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          if (!data || !data.main || !data.weather) throw new Error('Bad weather payload');
          const tempC = (data.main.temp - 273.15).toFixed(1);
          tempElem.textContent = `${tempC}°C`;
          iconElem.src = getWeatherIcon(data.weather[0].main);
          iconElem.alt = data.weather[0].description || data.weather[0].main || 'weather';
        })
        .catch(() => { tempElem.textContent = 'N/A'; });
    };
    const hasTime = !!document.getElementById('time');
    const hasTemp = !!document.getElementById('temperature');
    let timeIntervalId;
    let weatherIntervalId;
    if (hasTime) {
      updateTime();
      timeIntervalId = setInterval(updateTime, 60_000);
    }
    if (hasTemp) {
      updateWeather();
      weatherIntervalId = setInterval(updateWeather, 600_000);
    }

    // --- Cleanup all ---
    return () => {
      window.removeEventListener('pageshow', onPageShow);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      if (typeof cleanupChangeCursorColor === 'function') cleanupChangeCursorColor();
      if (typeof cleanupCursorTooltipAndCopy === 'function') cleanupCursorTooltipAndCopy();
      if (typeof cleanupNavbar === 'function') cleanupNavbar();
      if (typeof cleanupLenis === 'function') cleanupLenis();
      if (timeIntervalId) clearInterval(timeIntervalId);
      if (weatherIntervalId) clearInterval(weatherIntervalId);
    };
  }, []);
}
