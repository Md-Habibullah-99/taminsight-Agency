// selectedProjectsAnimation.js
// This script handles various UI animations and interactions for the bottom menu, sticky menu, tab toggles, project image cycling, and client swiper.

(function ($) {
    "use strict";

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
            const width = $el.innerWidth();
            const left = $el.offset().left - $(".bottom-menu").offset().left;
            $shape.css({ left, width });
        }

        // Observe changes to menu links
        const observerConfig = { attributes: true, childList: true, subtree: true };
        const observer = new MutationObserver(() => updateShape());
        $(".bottom-menu-link").each(function () {
            observer.observe($(this)[0], observerConfig);
        });

        $shapeBg.css("transition", `width ${transitionDuration / 2}ms`);
        $shape.css("transition", `all ${transitionDuration}ms`);

        $(window).on("resize", updateShape);
        $(window).on("pageshow", function (e) {
            if (e.originalEvent.persisted) window.location.reload();
        });

        updateShape();
    }

    // Show/hide sticky bottom menu on scroll
    function stickyBottomMenu() {
        const $stickyMenu = $(".bottom-menu-sticky");
        gsap.set($stickyMenu, { y: "100%", autoAlpha: 0 });
        $(window).on("scroll", function () {
            if (window.scrollY > 500) {
                gsap.to($stickyMenu, { y: "0%", scale: 1, autoAlpha: 1, duration: 1, ease: "power3.out" });
                gsap.to($stickyMenu, { autoAlpha: 1, duration: 0.5, ease: "power3.out" });
            } else {
                gsap.to($stickyMenu, { y: "100%", scale: 0.8, autoAlpha: 0, duration: 1, ease: "power3.out" });
                gsap.to($stickyMenu, { autoAlpha: 0, duration: 0.5, ease: "power3.out" });
            }
        });
    }

    // Tab toggle functionality
    function tabToggles() {
        const tabLinks = document.querySelectorAll(".toggle_tabs a[data-tab]");
        tabLinks.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const tab = this.getAttribute("data-tab");
                tabLinks.forEach(t => t.classList.remove("active"));
                this.classList.add("active");
                document.querySelectorAll(".toggle_content > div[data-tab]").forEach(t => t.classList.remove("active"));
                const content = document.querySelectorAll(`.toggle_content > div[data-tab="${tab}"]`);
                if (content.length > 0) content.forEach(t => t.classList.add("active"));
            });
        });
        // Activate default tab
        const defaultTab = document.querySelector('.toggle_tabs a[data-tab="monthly"]');
        if (defaultTab) defaultTab.click();
    }

    // Project image cycling on hover
    function projectImageCycle() {
        $(".project").each(function () {
            const $project = $(this);
            const intervalTime = parseInt($project.attr("giftiming")) || 1000;
            const $images = $project.find(".project_cover img");
            let currentIndex = 0;
            let intervalId;

            function showNextImage() {
                $images.removeClass("style-show");
                currentIndex = (currentIndex + 1) % $images.length;
                $($images[currentIndex]).addClass("style-show");
            }

            function startCycle() {
                showNextImage();
                intervalId = setInterval(showNextImage, intervalTime);
            }

            function stopCycle() {
                clearInterval(intervalId);
            }

            function resetImages() {
                $images.removeClass("style-show");
                $($images[currentIndex = 0]).addClass("style-show");
            }

            resetImages();
            $project.on("mouseenter", startCycle);
            $project.on("mouseleave", function () {
                stopCycle();
                resetImages();
            });
        });
    }

    // Client swiper with progress dots
    function clientSwiper() {
        let swiperInstance, autoSlideTimeout, activeIndex = 0, autoSlideInterval = 12000, initialized = false;
        const $swiper = document.querySelector(".swiper.is-clients");

        function setupSwiper() {
            if (initialized) return;
            initialized = true;
            swiperInstance = new Swiper(".swiper.is-clients", {
                loop: false,
                speed: 500,
                autoplay: false,
                watchSlidesProgress: true,
                allowTouchMove: true
            });
            const slideCount = document.querySelectorAll(".swiper-slide").length;
            const avatars = document.querySelectorAll(".clients_avatar");
            let progressContainer = document.querySelector(".progress-container");
            if (!progressContainer) {
                progressContainer = document.createElement("div");
                progressContainer.className = "progress-container";
                $swiper.appendChild(progressContainer);
                for (let i = 0; i < slideCount; i++) {
                    const dot = document.createElement("div");
                    dot.className = "progress-dot";
                    if (i === 0) dot.classList.add("active");
                    dot.setAttribute("data-index", i);
                    progressContainer.appendChild(dot);
                    dot.addEventListener("click", function () {
                        const idx = parseInt(this.getAttribute("data-index"));
                        clearTimeout(autoSlideTimeout);
                        activeIndex = idx;
                        swiperInstance.slideTo(activeIndex);
                        updateProgress(activeIndex);
                    });
                }
            }
            const dots = document.querySelectorAll(".progress-dot");

            function updateProgress(idx) {
                dots.forEach(dot => dot.classList.remove("active"));
                avatars.forEach(avatar => avatar.classList.remove("active"));
                if (dots[idx]) dots[idx].classList.add("active");
                if (avatars[idx]) avatars[idx].classList.add("active");
                autoSlideTimeout = setTimeout(() => {
                    activeIndex = (activeIndex + 1) % slideCount;
                    swiperInstance.slideTo(activeIndex);
                    updateProgress(activeIndex);
                }, autoSlideInterval);
            }

            setTimeout(() => updateProgress(activeIndex), 100);
            swiperInstance.on("slideChange", function () {
                clearTimeout(autoSlideTimeout);
                activeIndex = swiperInstance.activeIndex;
                updateProgress(activeIndex);
            });
        }

        if ($swiper) {
            const observer = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    setupSwiper();
                    observer.disconnect();
                }
            }, { threshold: 0.3 });
            observer.observe($swiper);
        }
    }

    // Initialize all features
    animateBottomMenu();
    stickyBottomMenu();
    tabToggles();
    projectImageCycle();
    clientSwiper();

})(jQuery);