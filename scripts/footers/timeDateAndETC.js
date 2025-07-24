// Debounce function to limit how often a function can fire
function debounce(fn, delay) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(context, args), delay);
    };
}

// Initialize smooth scrolling with Lenis
function initLenis() {
    if (!document.body.classList.contains("sale-page") && Webflow.env("editor") === undefined) {
        const lenis = new Lenis({
            duration: 1,
            easing: e => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 1,
            infinite: false
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
            // You can handle scroll events here if needed
        });
        requestAnimationFrame(raf);
        // Destroy Lenis for Safari or Firefox
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        const isFirefox = /firefox/i.test(navigator.userAgent);
        if (isSafari || isFirefox) {
            lenis.destroy();
        }
    }
}

// Initialize Navbar animation and behavior
function initNavbar() {
    if (typeof gsap === "undefined") return;
    const hamburgerBtn = document.getElementById("humburger-btn");
    const navbarMenu = document.querySelector(".navbar_menu");
    const menuOverlay = document.querySelector(".menu-overlay");
    const navbarTop = document.querySelector(".navbar_top");
    const navbarLogo = navbarTop?.querySelector(".navbar_logo");
    const navbarCta = navbarTop?.querySelector(".navbar_cta");
    const menuLinks = navbarMenu?.querySelectorAll(".navbar_menu_links .btn_link");
    if (!(hamburgerBtn && navbarMenu && menuOverlay && navbarTop)) return;
    let isAnimating = false;
    let isOpen = false;

    // Initial GSAP states
    gsap.set(navbarMenu, {
        x: "-100%",
        opacity: 0,
        rotate: 0,
        visibility: "hidden",
        willChange: "transform, opacity, visibility"
    });
    gsap.set(menuOverlay, {
        opacity: 0,
        visibility: "hidden",
        willChange: "opacity, visibility"
    });
    gsap.set(menuLinks, { y: 20, opacity: 0 });

    // Show/hide menu animation
    function toggleMenu(show) {
        if (isAnimating) return;
        isAnimating = true;
        if (show) {
            navbarMenu.style.visibility = "visible";
            menuOverlay.style.visibility = "visible";
            navbarMenu.style.pointerEvents = "auto";
            menuOverlay.style.pointerEvents = "auto";
            navbarTop.classList.add("is-fixed");
            gsap.to(navbarMenu, { x: "0%", opacity: 1, rotate: 0, duration: 0.5, ease: "power3.out" });
            gsap.to(menuOverlay, { opacity: 1, duration: 1, ease: "power1.out" });
            gsap.to(menuLinks, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.05,
                delay: 0.2,
                ease: "power1.out",
                onComplete: () => { isAnimating = false; }
            });
        } else {
            gsap.to(navbarMenu, { x: "-100%", opacity: 0, duration: 0.4, ease: "power2.inOut" });
            gsap.to(menuLinks, { y: 20, opacity: 0, duration: 0.2, stagger: 0.02, ease: "power1.in" });
            gsap.to(menuOverlay, {
                opacity: 0,
                duration: 1,
                ease: "power1.inOut",
                onComplete: () => {
                    navbarMenu.style.pointerEvents = "none";
                    menuOverlay.style.pointerEvents = "none";
                    navbarMenu.style.visibility = "hidden";
                    menuOverlay.style.visibility = "hidden";
                    navbarTop.classList.remove("is-fixed");
                    isAnimating = false;
                }
            });
        }
    }

    // Navbar logo/cta show/hide
    function showLogoCta() {
        if (navbarLogo && navbarCta) {
            gsap.to([navbarLogo, navbarCta], { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
        }
    }
    function hideLogoCta() {
        if (navbarLogo && navbarCta) {
            gsap.to([navbarLogo, navbarCta], { opacity: 0, y: -2, duration: 0.5, ease: "power2.inOut" });
        }
    }

    // Event listeners
    hamburgerBtn.addEventListener("click", function () {
        if (isAnimating) return;
        isOpen = !isOpen;
        toggleMenu(isOpen);
        navbarMenu.dataset.open = isOpen;
        hamburgerBtn.classList.toggle("is-active");
        const scrollY = window.scrollY;
        if (scrollY !== 0) {
            isOpen ? showLogoCta() : (scrollY > 10 && hideLogoCta());
        }
    });
    menuOverlay.addEventListener("click", function () {
        if (!isAnimating) {
            toggleMenu(false);
            isOpen = false;
            navbarMenu.dataset.open = false;
            hamburgerBtn.classList.remove("is-active");
        }
    });
    window.addEventListener("scroll", debounce(function () {
        if (window.scrollY === 0) showLogoCta();
    }, 100));
}

// Initialize weather and time display
function initWeatherTime() {
    // Update time
    function updateTime() {
        const options = { hour: "numeric", minute: "numeric", hour12: true, timeZone: "Asia/Dhaka" };
        const timeStr = new Date().toLocaleString("en-US", options);
        const timeElem = document.getElementById("time");
        if (timeElem) timeElem.textContent = timeStr;
    }
    // Get weather icon URL
    function getWeatherIcon(main) {
        const baseUrl = "https://raw.githubusercontent.com/Habibullah-Hisam/taminsight-Agency/a319a5f51ee24eace59d01dfecdebea90948d636/images/footerElements/watherIcons/";
        switch (main) {
            case "Clear":
            default:
                return `${baseUrl}clear.svg`;
            case "Clouds":
                return `${baseUrl}clouds.svg`;
            case "Rain":
                return `${baseUrl}rain.svg`;
            case "Snow":
                return `${baseUrl}snow.svg`;
        }
    }
    // Update weather
    function updateWeather() {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=d1e52eafe56386f1439142c04afc5b44`;
        const tempElem = document.getElementById("temperature");
        const iconElem = document.getElementById("weather-icon");
        if (tempElem && iconElem) {
            fetch(apiUrl)
                .then(res => res.json())
                .then(data => {
                    const tempC = (data.main.temp - 273.15).toFixed(1);
                    tempElem.textContent = `${tempC}°C`;
                    iconElem.src = getWeatherIcon(data.weather[0].main);
                })
                .catch(() => {
                    tempElem.textContent = "N/A";
                });
        }
    }
    if (document.getElementById("time")) {
        updateTime();
        setInterval(updateTime, 60000); // Update every minute
    }
    if (document.getElementById("temperature")) {
        updateWeather();
        setInterval(updateWeather, 600000); // Update every 10 minutes
    }
}

// Footer logo animation on scroll
function initFooterAnimations() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    const footerLogo = document.querySelector(".footer_logo");
    if (footerLogo) {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".footer",
                start: "top 80%",
                end: "top 80%",
                toggleActions: "play none none none"
            }
        }).from(footerLogo, {
            skewY: -15,
            y: 600,
            rotation: -15,
            opacity: 0,
            duration: 1.5,
            ease: "circ.inOut"
        });
    }
}

// FAQ toggle functionality
function initFAQ() {
    const faqItems = document.querySelectorAll(".faq_item");
    faqItems.forEach(item => {
        const header = item.querySelector(".faq_header");
        header.addEventListener("click", () => {
            const isOpen = item.classList.contains("is-open");
            faqItems.forEach(i => i.classList.remove("is-open"));
            if (!isOpen) item.classList.add("is-open");
        });
    });
}

// Reload page from bfcache
window.onpageshow = function (event) {
    if (event.persisted) window.location.reload();
};

// Initialize all features on DOM ready
(function () {
    function initAll() {
        initLenis();
        initNavbar();
        initWeatherTime();
        initFooterAnimations();
        initFAQ();
    }
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(initAll, 1);
    } else {
        document.addEventListener("readystatechange", function () {
            if (document.readyState === "complete") initAll();
        });
    }
    setTimeout(() => {
        if (typeof lenis !== "undefined" && lenis) lenis.update();
    }, 1000);
})();