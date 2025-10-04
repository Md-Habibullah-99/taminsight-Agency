import { withBase } from '../utils/withBase.js';
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
        // Toggle dot color based on hovered section (robust across route changes)
        try {
          const highlight = e.target && typeof e.target.closest === 'function'
            ? e.target.closest('.intro, .pricing_card, .footer-primary')
            : null;
          cursorDot.style.backgroundColor = highlight ? 'white' : 'black';
        } catch (_) { /* noop */ }
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
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);
    // Color change handled inline in onMouseMove above

    // --- Tooltip + Copy Email over footer primary up container ---
    const setupCursorTooltipAndCopy = () => {
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

      // Delegated interactions to survive re-renders/route changes
      const delegatedMouseOver = (e) => {
        const container = e.target.closest('.footer-primary-up-container');
        if (!container) return;
        container.style.cursor = 'pointer';
        showCursorTooltip('copy');
      };
      const delegatedMouseOut = (e) => {
        const container = e.target.closest('.footer-primary-up-container');
        if (!container) return;
        if (tooltipTimeout) clearTimeout(tooltipTimeout);
        hideCursorTooltip();
      };
      const delegatedMouseDown = (e) => {
        const container = e.target.closest('.footer-primary-up-container');
        if (!container) return;
        showCursorTooltip('Email Copied');
        if (tooltipTimeout) clearTimeout(tooltipTimeout);
        tooltipTimeout = setTimeout(() => showCursorTooltip('copy'), 1000);
      };
      const delegatedClick = (event) => {
        const container = event.target.closest('.footer-primary-up-container');
        if (!container) return;
        const a = event.target.closest('a');
        if (a) event.preventDefault();
        const emailLink = container.querySelector('.email-link-click-to-copy');
        if (!emailLink) return;
        let email = '';
        const href = emailLink.getAttribute('href');
        if (href && href.startsWith('mailto:')) email = href.replace('mailto:', '');
        else email = (emailLink.textContent || '').trim();
        copyToClipboard(email);
        if (isMobileDevice()) showCopyConfirmationTooltip(container);
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

      // Attach delegated handlers
      document.addEventListener('mouseover', delegatedMouseOver);
      document.addEventListener('mouseout', delegatedMouseOut);
      document.addEventListener('mousedown', delegatedMouseDown);
      document.addEventListener('click', delegatedClick);

      return () => {
        document.removeEventListener('mousemove', onDocMouseMove);
        document.removeEventListener('mouseover', delegatedMouseOver);
        document.removeEventListener('mouseout', delegatedMouseOut);
        document.removeEventListener('mousedown', delegatedMouseDown);
        document.removeEventListener('click', delegatedClick);
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
      const onMenuLinkClick = (e) => {
        const link = e.target.closest('.navbar_menu_links .btn_link, .navbar_menu_links a');
        if (!link) return;
        if (!isAnimating && isOpen) {
          toggleMenu(false);
          isOpen = false;
          navbarMenu.dataset.open = 'false';
          hamburgerBtn.classList.remove('is-active');
        }
      };
      const onHashChangeCloseMenu = () => {
        if (!isAnimating && isOpen) {
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
      navbarMenu.addEventListener('click', onMenuLinkClick);
      window.addEventListener('hashchange', onHashChangeCloseMenu);

      cleanupNavbar = () => {
        hamburgerBtn.removeEventListener('click', onHamburgerClick);
        menuOverlay.removeEventListener('click', onOverlayClick);
        window.removeEventListener('scroll', onScroll);
        navbarMenu.removeEventListener('click', onMenuLinkClick);
        window.removeEventListener('hashchange', onHashChangeCloseMenu);
      };
    }

    // Note: Smooth scrolling (Lenis) fully removed per request

    // --- Time and Weather ---
    const updateTime = () => {
      const options = { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'Asia/Dhaka' };
      const timeStr = new Date().toLocaleString('en-US', options);
      const timeElem = document.getElementById('time');
      if (timeElem) timeElem.textContent = timeStr;
    };
    const getWeatherIcon = (main) => {
      const baseUrl = withBase('/images/footerElements/watherIcons/');
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
  // onMouseMove handles color toggling; no separate cleanup needed
      if (typeof cleanupCursorTooltipAndCopy === 'function') cleanupCursorTooltipAndCopy();
    if (typeof cleanupNavbar === 'function') cleanupNavbar();
      if (timeIntervalId) clearInterval(timeIntervalId);
      if (weatherIntervalId) clearInterval(weatherIntervalId);
    };
  }, []);
}
