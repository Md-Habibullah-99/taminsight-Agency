import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import 'swiper/css';

export default function Plans() {
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);
  const autoSlideTimeoutRef = useRef(null);

  useEffect(() => {
    function clientSwiper() {
      let activeIndex = 0;
      const autoSlideInterval = 12000;
      let initialized = false;
      const $swiper = swiperRef.current;

      function setupSwiper() {
        if (initialized || !$swiper) return;
        initialized = true;

        swiperInstanceRef.current = new Swiper($swiper, {
          loop: false,
          speed: 500,
          autoplay: false,
          watchSlidesProgress: true,
          allowTouchMove: true,
        });

        const swiperInstance = swiperInstanceRef.current;
        const slideCount = $swiper.querySelectorAll(".swiper-slide").length;
        const avatars = $swiper.querySelectorAll(".clients_avatar");
        let progressContainer = $swiper.querySelector(".progress-container");

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
              clearTimeout(autoSlideTimeoutRef.current);
              activeIndex = idx;
              swiperInstance.slideTo(activeIndex);
              updateProgress(activeIndex);
            });
          }
        }
        const dots = $swiper.querySelectorAll(".progress-dot");

        function updateProgress(idx) {
          dots.forEach((dot) => dot.classList.remove("active"));
          avatars.forEach((avatar) => avatar.classList.remove("active"));
          if (dots[idx]) dots[idx].classList.add("active");
          if (avatars[idx]) avatars[idx].classList.add("active");

          clearTimeout(autoSlideTimeoutRef.current);
          autoSlideTimeoutRef.current = setTimeout(() => {
            activeIndex = (activeIndex + 1) % slideCount;
            swiperInstance.slideTo(activeIndex);
            updateProgress(activeIndex);
          }, autoSlideInterval);
        }

        setTimeout(() => updateProgress(activeIndex), 100);

        swiperInstance.on("slideChange", function () {
          clearTimeout(autoSlideTimeoutRef.current);
          activeIndex = swiperInstance.activeIndex;
          updateProgress(activeIndex);
        });
      }

      if ($swiper) {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              setupSwiper();
              observer.disconnect();
            }
          },
          { threshold: 0.3 }
        );
        observer.observe($swiper);

        return () => {
            observer.disconnect();
            if (swiperInstanceRef.current) {
                swiperInstanceRef.current.destroy();
            }
            clearTimeout(autoSlideTimeoutRef.current);
        }
      }
    }

    const cleanupSwiper = clientSwiper();

    // Tab toggle functionality
    function setupTabToggles() {
      const tabLinks = Array.from(document.querySelectorAll('.toggle_tabs a[data-tab]'));
      const contentPanels = Array.from(document.querySelectorAll('.toggle_content > div[data-tab]'));

      if (tabLinks.length === 0 || contentPanels.length === 0) {
        return () => {};
      }

      const clickHandlers = new Map();

      tabLinks.forEach((link) => {
        const handler = (e) => {
          e.preventDefault();
          const tab = link.getAttribute('data-tab');

          // Toggle active state on tabs
          tabLinks.forEach((t) => t.classList.remove('active'));
          link.classList.add('active');

          // Toggle active state on content panels
          contentPanels.forEach((panel) => {
            if (panel.getAttribute('data-tab') === tab) {
              panel.classList.add('active');
            } else {
              panel.classList.remove('active');
            }
          });
        };
        clickHandlers.set(link, handler);
        link.addEventListener('click', handler);
      });

      // Activate default tab (monthly) to ensure consistent initial state
      const defaultTab = document.querySelector('.toggle_tabs a[data-tab="monthly"]');
      if (defaultTab) defaultTab.click();

      // Cleanup listeners
      return () => {
        clickHandlers.forEach((handler, link) => {
          link.removeEventListener('click', handler);
        });
      };
    }

    const cleanupTabs = setupTabToggles();

    return () => {
      if (typeof cleanupSwiper === 'function') cleanupSwiper();
      if (typeof cleanupTabs === 'function') cleanupTabs();
    };
  }, []);

  
  
  
  return (
    <>
    <section id="plans" className="subscription">
      <div className="c-bg-filled dark-gradient is-bottom"></div>
      <div className="global-padding global-padding-section">
        <div className="container-large">
          <div className="section-header">
            <div className="section_header_wrapper">
              <h1 data-scroll-reveal="" className="headlng-gradient"><span className="newline">My pricing is simple,
                </span><span className="heading-style-h1">just like my process.</span></h1>
            </div>
          </div>
          <div className="section-content">
            <div className="pricing_grid">
              <div className="pricing_grid_left">
                <div className="pricing_card_tabs toggle_tabs"><a data-tab="monthly"
                    className="btn_cta btn-style-tab active">Monthly</a><a data-tab="custom"
                    className="btn_cta btn-style-tab">Fixed project</a></div>
                <div className="toggle_content">
                  <div data-tab="monthly" className="pricing_card dark active">
                    <div className="price_card_wrapper">
                      <div className="pricing_card_group">
                        <div className="price_card_header">
                          <h6 className="plan-headline-title">Monthly Design Partnership</h6>
                        </div>
                        <div className="pricing_card_investment">
                          <h4 className="subscription_price">$8,000</h4>
                          <div className="plan_price_wrapper">
                            <div><span className="newline weight-bold">per month</span> billed monthly</div>
                          </div>
                        </div>
                        <div className="price_card_content">
                          <ul role="list" className="checklist is-pricing-checklist">
                            <li className="featured-checklist">
                              <div className="checklist-icon">
                                <div className="icon-16"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                    viewBox="0 0 16 16" fill="none" className="svgsprite">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M6.0729 9.7882L12.1823 3.67881C12.5572 3.30391 13.1651 3.30391 13.54 3.67881V3.67881C13.9149 4.05371 13.9149 4.66157 13.54 5.03648L6.78 11.7964C6.38948 12.1869 5.75632 12.1869 5.36579 11.7964L2.67882 9.10942C2.30392 8.73452 2.30391 8.12668 2.67881 7.75177V7.75177C3.05372 7.37685 3.66157 7.37685 4.03648 7.75176L6.0729 9.7882Z"
                                      fill="currentColor" className="path"></path>
                                  </svg></div>
                              </div>
                              <div>Ongoing design support for any project<br /></div>
                            </li>
                            <li className="featured-checklist">
                              <div className="checklist-icon">
                                <div className="icon-16"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                    viewBox="0 0 16 16" fill="none" className="svgsprite">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M6.0729 9.7882L12.1823 3.67881C12.5572 3.30391 13.1651 3.30391 13.54 3.67881V3.67881C13.9149 4.05371 13.9149 4.66157 13.54 5.03648L6.78 11.7964C6.38948 12.1869 5.75632 12.1869 5.36579 11.7964L2.67882 9.10942C2.30392 8.73452 2.30391 8.12668 2.67881 7.75177V7.75177C3.05372 7.37685 3.66157 7.37685 4.03648 7.75176L6.0729 9.7882Z"
                                      fill="currentColor" className="path"></path>
                                  </svg></div>
                              </div>
                              <div>Flexible scope with clear timelines and deliverables<br /></div>
                            </li>
                            <li className="featured-checklist">
                              <div className="checklist-icon">
                                <div className="icon-16"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                    viewBox="0 0 16 16" fill="none" className="svgsprite">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M6.0729 9.7882L12.1823 3.67881C12.5572 3.30391 13.1651 3.30391 13.54 3.67881V3.67881C13.9149 4.05371 13.9149 4.66157 13.54 5.03648L6.78 11.7964C6.38948 12.1869 5.75632 12.1869 5.36579 11.7964L2.67882 9.10942C2.30392 8.73452 2.30391 8.12668 2.67881 7.75177V7.75177C3.05372 7.37685 3.66157 7.37685 4.03648 7.75176L6.0729 9.7882Z"
                                      fill="currentColor" className="path"></path>
                                  </svg></div>
                              </div>
                              <div>Fast turnarounds with 1-2 day revisions<br /></div>
                            </li>
                            <li className="featured-checklist">
                              <div className="checklist-icon">
                                <div className="icon-16"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                    viewBox="0 0 16 16" fill="none" className="svgsprite">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M6.0729 9.7882L12.1823 3.67881C12.5572 3.30391 13.1651 3.30391 13.54 3.67881V3.67881C13.9149 4.05371 13.9149 4.66157 13.54 5.03648L6.78 11.7964C6.38948 12.1869 5.75632 12.1869 5.36579 11.7964L2.67882 9.10942C2.30392 8.73452 2.30391 8.12668 2.67881 7.75177V7.75177C3.05372 7.37685 3.66157 7.37685 4.03648 7.75176L6.0729 9.7882Z"
                                      fill="currentColor" className="path"></path>
                                  </svg></div>
                              </div>
                              <div>Strategic kickoff call to plan your project<br /></div>
                            </li>
                            <li className="featured-checklist">
                              <div className="checklist-icon">
                                <div className="icon-16"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                    viewBox="0 0 16 16" fill="none" className="svgsprite">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M6.0729 9.7882L12.1823 3.67881C12.5572 3.30391 13.1651 3.30391 13.54 3.67881V3.67881C13.9149 4.05371 13.9149 4.66157 13.54 5.03648L6.78 11.7964C6.38948 12.1869 5.75632 12.1869 5.36579 11.7964L2.67882 9.10942C2.30392 8.73452 2.30391 8.12668 2.67881 7.75177V7.75177C3.05372 7.37685 3.66157 7.37685 4.03648 7.75176L6.0729 9.7882Z"
                                      fill="currentColor" className="path"></path>
                                  </svg></div>
                              </div>
                              <div>Weekly calls + private Slack<br /></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="price_card_footer"><a href="https://www.whatsapp.com/" target="_blank"
                          className="btn_cta btn-white w-inline-block">
                          <div className="btn_content"><span>Book a Call</span><svg xmlns="http://www.w3.org/2000/svg"
                              className="svgsprite btn_icon icon" width="100%" viewBox="0 0 16 16" fill="none">
                              <path d="M9.33333 4L13.5 8L9.33333 12M13 8H2.5" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="square"></path>
                            </svg></div>
                        </a></div>
                    </div>
                  </div>
                  <div data-tab="custom" className="pricing_card light">
                    <div className="price_card_wrapper">
                      <div className="pricing_card_group">
                        <div className="price_card_header">
                          <h6 className="plan-headline-title">Custom Solutions</h6>
                        </div>
                        <div className="pricing_card_investment">
                          <h4 className="subscription_price is-inverse">Fixed-scope projects</h4>
                        </div>
                        <div className="price_card_content">
                          <ul role="list" className="checklist is-pricing-checklist">
                            <li className="featured-checklist">
                              <div className="checklist-icon">
                                <div className="icon-16"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                    viewBox="0 0 16 16" fill="none" className="svgsprite">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M6.0729 9.7882L12.1823 3.67881C12.5572 3.30391 13.1651 3.30391 13.54 3.67881V3.67881C13.9149 4.05371 13.9149 4.66157 13.54 5.03648L6.78 11.7964C6.38948 12.1869 5.75632 12.1869 5.36579 11.7964L2.67882 9.10942C2.30392 8.73452 2.30391 8.12668 2.67881 7.75177V7.75177C3.05372 7.37685 3.66157 7.37685 4.03648 7.75176L6.0729 9.7882Z"
                                      fill="currentColor" className="path"></path>
                                  </svg></div>
                              </div>
                              <div>Full project with clear start and finish<br /></div>
                            </li>
                            <li className="featured-checklist">
                              <div className="checklist-icon">
                                <div className="icon-16"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                    viewBox="0 0 16 16" fill="none" className="svgsprite">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M6.0729 9.7882L12.1823 3.67881C12.5572 3.30391 13.1651 3.30391 13.54 3.67881V3.67881C13.9149 4.05371 13.9149 4.66157 13.54 5.03648L6.78 11.7964C6.38948 12.1869 5.75632 12.1869 5.36579 11.7964L2.67882 9.10942C2.30392 8.73452 2.30391 8.12668 2.67881 7.75177V7.75177C3.05372 7.37685 3.66157 7.37685 4.03648 7.75176L6.0729 9.7882Z"
                                      fill="currentColor" className="path"></path>
                                  </svg></div>
                              </div>
                              <div>Fixed price based on your needs<br /></div>
                            </li>
                            <li className="featured-checklist">
                              <div className="checklist-icon">
                                <div className="icon-16"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                    viewBox="0 0 16 16" fill="none" className="svgsprite">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M6.0729 9.7882L12.1823 3.67881C12.5572 3.30391 13.1651 3.30391 13.54 3.67881V3.67881C13.9149 4.05371 13.9149 4.66157 13.54 5.03648L6.78 11.7964C6.38948 12.1869 5.75632 12.1869 5.36579 11.7964L2.67882 9.10942C2.30392 8.73452 2.30391 8.12668 2.67881 7.75177V7.75177C3.05372 7.37685 3.66157 7.37685 4.03648 7.75176L6.0729 9.7882Z"
                                      fill="currentColor" className="path"></path>
                                  </svg></div>
                              </div>
                              <div>Clear timeline and deliverables<br /></div>
                            </li>
                            <li className="featured-checklist">
                              <div className="checklist-icon">
                                <div className="icon-16"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                    viewBox="0 0 16 16" fill="none" className="svgsprite">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M6.0729 9.7882L12.1823 3.67881C12.5572 3.30391 13.1651 3.30391 13.54 3.67881V3.67881C13.9149 4.05371 13.9149 4.66157 13.54 5.03648L6.78 11.7964C6.38948 12.1869 5.75632 12.1869 5.36579 11.7964L2.67882 9.10942C2.30392 8.73452 2.30391 8.12668 2.67881 7.75177V7.75177C3.05372 7.37685 3.66157 7.37685 4.03648 7.75176L6.0729 9.7882Z"
                                      fill="currentColor" className="path"></path>
                                  </svg></div>
                              </div>
                              <div>Additional design support after project completion<br /></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="btn-group-12 on-mobile-full"><a href="https://www.whatsapp.com/" target="_blank"
                          className="btn_cta btn-primary w-inline-block">
                          <div className="btn_content">
                            <div className="weight-bold">Book a Call</div><svg xmlns="http://www.w3.org/2000/svg"
                              className="svgsprite btn_icon icon" width="100%" viewBox="0 0 16 16" fill="none">
                              <path d="M9.33333 4L13.5 8L9.33333 12M13 8H2.5" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="square"></path>
                            </svg>
                          </div>
                        </a><a href="https://tally.so/r/3jGGKa" className="btn_cta btn-white w-inline-block">
                          <div className="btn_content"><span>' Send Inquiry</span></div>
                        </a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing_grid_right">
                <div ref={swiperRef} className="swiper is-clients w-dyn-list">
                  <div role="list" className="swiper-wrapper is-clients w-dyn-items">
                    <div role="listitem" className="swiper-slide w-dyn-item">
                      <div className="clients_testimonial">
                        <div className="clients_testimonial_author">
                          <div className="clients_avatar">
                            <div className="progress-circle-track"><svg viewBox="0 0 70 70" width="100%" className="svgsprite">
                                <circle className="track" cx="35" cy="35" r="30"></circle>
                                <circle className="progress" cx="35" cy="35" r="30"></circle>
                              </svg></div>
                            <div className="clients_avatar_photo"><img
                                src="https://cdn.prod.website-files.com/659fe0cd1346e246d0c68079/67f535ef056798c2701d60f7_luke.jpg"
                                loading="lazy" alt="" className="image" /></div>
                          </div>
                          <div className="clients_info">
                            <h6 className="author_name">Luke Lawal Jr.</h6>
                            <div className="author_profile">Taper, Inc.</div>
                          </div>
                        </div>
                        <div className="clients_testimonial_content">
                          <div className="testimonial_content">Working with Tamim was such a breath of fresh air. The guy
                            is just rock solid - professional, honest, and seriously talented with website and app
                            design. What impressed me most was how he went beyond what we initially asked for. He didn't
                            just meet expectations - he completely blew them away. His attention to detail and
                            commitment to getting things perfect is why we'll definitely be working with him again.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="swiper-slide w-dyn-item">
                      <div className="clients_testimonial">
                        <div className="clients_testimonial_author">
                          <div className="clients_avatar">
                            <div className="progress-circle-track"><svg viewBox="0 0 70 70" width="100%" className="svgsprite">
                                <circle className="track" cx="35" cy="35" r="30"></circle>
                                <circle className="progress" cx="35" cy="35" r="30"></circle>
                              </svg></div>
                            <div className="clients_avatar_photo"><img
                                src="https://cdn.prod.website-files.com/659fe0cd1346e246d0c68079/67f52368e510c49f5e067b45_Krishna%20Dosapati.png"
                                loading="lazy" alt="" className="image" /></div>
                          </div>
                          <div className="clients_info">
                            <h6 className="author_name">Krishna Dosapati</h6>
                            <div className="author_profile">CEO - Clockout</div>
                          </div>
                        </div>
                        <div className="clients_testimonial_content">
                          <div className="testimonial_content">Tamim is the best designer I have ever worked with - period.
                            Not only are his designs immaculate, he puts a lot of thought and his wealth of knowledge
                            across products into guiding better UX decisions. He is also incredibly kind and
                            understanding, and I could not recommend him more.</div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="swiper-slide w-dyn-item">
                      <div className="clients_testimonial">
                        <div className="clients_testimonial_author">
                          <div className="clients_avatar">
                            <div className="progress-circle-track"><svg viewBox="0 0 70 70" width="100%" className="svgsprite">
                                <circle className="track" cx="35" cy="35" r="30"></circle>
                                <circle className="progress" cx="35" cy="35" r="30"></circle>
                              </svg></div>
                            <div className="clients_avatar_photo"><img
                                src="https://cdn.prod.website-files.com/659fe0cd1346e246d0c68079/67f55758274ed8fa9602adab_naomi.jpg"
                                loading="lazy" alt="" className="image" /></div>
                          </div>
                          <div className="clients_info">
                            <h6 className="author_name">Naomi Thomas</h6>
                            <div className="author_profile">Boss Business Market</div>
                          </div>
                        </div>
                        <div className="clients_testimonial_content">
                          <div className="testimonial_content">I can't say enough good things about Tamim. He's the best
                            UX/UI designer I've ever worked with, hands down. His approach to design is mind-blowing -
                            you can tell he puts his heart and soul into every project. I've recommended him for
                            projects of all sizes, even speaking gigs. If you need someone who gets it, Tamim's your
                            guy. Thanks for always delivering amazing work!</div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="swiper-slide w-dyn-item">
                      <div className="clients_testimonial">
                        <div className="clients_testimonial_author">
                          <div className="clients_avatar">
                            <div className="progress-circle-track"><svg viewBox="0 0 70 70" width="100%" className="svgsprite">
                                <circle className="track" cx="35" cy="35" r="30"></circle>
                                <circle className="progress" cx="35" cy="35" r="30"></circle>
                              </svg></div>
                            <div className="clients_avatar_photo"><img
                                src="https://cdn.prod.website-files.com/659fe0cd1346e246d0c68079/67f5576466b2ae2332f3681c_dom.jpg"
                                loading="lazy" alt="" className="image" /></div>
                          </div>
                          <div className="clients_info">
                            <h6 className="author_name">Dr. Dominik Dellermann</h6>
                            <div className="author_profile">Vencortex</div>
                          </div>
                        </div>
                        <div className="clients_testimonial_content">
                          <div className="testimonial_content"> It's rare to find a designer who understands business.
                            Tamim is that rare find - he combines creative design skills with solid business knowledge
                            and coding ability. He helped us build everything from the ground up - strategy, branding,
                            our website, and our dashboard. Every time we work together, I'm reminded of how valuable
                            his perspective is to our team!</div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="swiper-slide w-dyn-item">
                      <div className="clients_testimonial">
                        <div className="clients_testimonial_author">
                          <div className="clients_avatar">
                            <div className="progress-circle-track"><svg viewBox="0 0 70 70" width="100%" className="svgsprite">
                                <circle className="track" cx="35" cy="35" r="30"></circle>
                                <circle className="progress" cx="35" cy="35" r="30"></circle>
                              </svg></div>
                            <div className="clients_avatar_photo"><img
                                src="https://cdn.prod.website-files.com/659fe0cd1346e246d0c68079/67f5589728ba30e6c6a63e16_ahmad.jpg"
                                loading="lazy" alt="" className="image" /></div>
                          </div>
                          <div className="clients_info">
                            <h6 className="author_name">Ahmedalameer</h6>
                            <div className="author_profile">Diyar</div>
                          </div>
                        </div>
                        <div className="clients_testimonial_content">
                          <div className="testimonial_content">It's like Tamim read our minds! He somehow knew exactly what
                            we wanted for our app - even better than we could explain it ourselves. His approach to
                            design isn't just about making things look good (though he does that too). He thinks deeper
                            about the whole experience. The end result was fantastic, and I wouldn't hesitate to
                            recommend him to anyone looking for a designer who goes beyond the surface. Keep up the
                            great work, Tamim!</div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="swiper-slide w-dyn-item">
                      <div className="clients_testimonial">
                        <div className="clients_testimonial_author">
                          <div className="clients_avatar">
                            <div className="progress-circle-track"><svg viewBox="0 0 70 70" width="100%" className="svgsprite">
                                <circle className="track" cx="35" cy="35" r="30"></circle>
                                <circle className="progress" cx="35" cy="35" r="30"></circle>
                              </svg></div>
                            <div className="clients_avatar_photo"><img
                                src="https://cdn.prod.website-files.com/659fe0cd1346e246d0c68079/67f558a100dc0d3c96807a97_fariss.jpg"
                                loading="lazy" alt="" className="image" /></div>
                          </div>
                          <div className="clients_info">
                            <h6 className="author_name">Fares Almuhanna</h6>
                            <div className="author_profile">Avo Rewards</div>
                          </div>
                        </div>
                        <div className="clients_testimonial_content">
                          <div className="testimonial_content">I'm still blown away by what Tamim created for our mobile
                            app. We had basic requirements, and he returned with designs that exceeded our imagination.
                            The way he thinks about user experience is different - more thoughtful, more creative. He
                            didn't just design screens; he solved problems we didn't even know we had. I'm seriously
                            grateful for his work!</div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="swiper-slide w-dyn-item">
                      <div className="clients_testimonial">
                        <div className="clients_testimonial_author">
                          <div className="clients_avatar">
                            <div className="progress-circle-track"><svg viewBox="0 0 70 70" width="100%" className="svgsprite">
                                <circle className="track" cx="35" cy="35" r="30"></circle>
                                <circle className="progress" cx="35" cy="35" r="30"></circle>
                              </svg></div>
                            <div className="clients_avatar_photo"><img
                                src="https://cdn.prod.website-files.com/659fe0cd1346e246d0c68079/67f558aaa62d320d6882290e_scott.jpg"
                                loading="lazy" alt="" className="image" /></div>
                          </div>
                          <div className="clients_info">
                            <h6 className="author_name">Scott Adamson</h6>
                            <div className="author_profile">The Wanderful</div>
                          </div>
                        </div>
                        <div className="clients_testimonial_content">
                          <div className="testimonial_content">I've worked with many designers, but Tamim stands out
                            because he took the time to understand our vision before starting. He's incredibly quick
                            without sacrificing quality, and I genuinely enjoyed the process. His UX/UI work transformed
                            our project. If you're unsure about hiring him - don't be. Just do it.</div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="swiper-slide w-dyn-item">
                      <div className="clients_testimonial">
                        <div className="clients_testimonial_author">
                          <div className="clients_avatar">
                            <div className="progress-circle-track"><svg viewBox="0 0 70 70" width="100%" className="svgsprite">
                                <circle className="track" cx="35" cy="35" r="30"></circle>
                                <circle className="progress" cx="35" cy="35" r="30"></circle>
                              </svg></div>
                            <div className="clients_avatar_photo"><img
                                src="https://cdn.prod.website-files.com/659fe0cd1346e246d0c68079/67f55929d22a1f8e6139aa44_gia.jpg"
                                loading="lazy" alt="" className="image" /></div>
                          </div>
                          <div className="clients_info">
                            <h6 className="author_name">Giacomo</h6>
                            <div className="author_profile">Moneymour</div>
                          </div>
                        </div>
                        <div className="clients_testimonial_content">
                          <div className="testimonial_content">I can't recommend Tamim enough. He's the real deal - honest,
                            hardworking, and brilliant at what he does. He delivered more than we contracted him for,
                            and every bit of it was top-notch. What stood out was his obsession with getting everything
                            just right. We're already planning our next project with him!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}