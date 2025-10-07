import React, { useEffect, useRef } from 'react';
import { withBase } from '../../utils/withBase.js';
import "../../Styles/selected_projects/selectedProjects.css";

function Projects() {
  
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const container = video.closest('.video-container');
    if (!container) return;

    const handleMouseEnter = () => {
      video.play();
      video.loop = true;
    };

    const handleMouseLeave = () => {
      video.pause();
      video.currentTime = 0;
      video.loop = false;
      video.load();
    };

    const handleResponsiveAutoplay = () => {
      const isSmallScreen = window.innerWidth <= 530;
      if (isSmallScreen) {
        video.play();
        video.setAttribute('autoplay', '');
        video.setAttribute('loop', '');
        video.setAttribute('muted', '');
      } else {
        video.pause();
        video.removeAttribute('autoplay');
        video.removeAttribute('loop');
        video.removeAttribute('muted');
        video.currentTime = 0;
        video.load();
      }
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResponsiveAutoplay);
    window.addEventListener('DOMContentLoaded', handleResponsiveAutoplay);
    handleResponsiveAutoplay(); // Initial check

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResponsiveAutoplay);
      window.removeEventListener('DOMContentLoaded', handleResponsiveAutoplay);
    };
  }, []);

  // Cross-browser image cycling on hover (Chromium + Firefox)
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const projects = Array.from(root.querySelectorAll('.project'));
    const timers = new Map();
    const cleanups = [];

    projects.forEach((project) => {
      // Skip if this project is primarily a video container
      if (project.closest('.video-container')) return;

      const images = project.querySelectorAll('.project_cover img');
      if (!images || images.length <= 1) return;

      // Initialize state: show first image
      images.forEach((img) => img.classList.remove('style-show'));
      images[0].classList.add('style-show');

      let index = 0;
      const intervalTime = parseInt(project.getAttribute('giftiming')) || 1000;

      const showNext = () => {
        images[index].classList.remove('style-show');
        index = (index + 1) % images.length;
        images[index].classList.add('style-show');
      };

      const onEnter = () => {
        if (timers.has(project)) return;
        // Prime the next frame immediately for snappy UX
        showNext();
        const id = setInterval(showNext, intervalTime);
        timers.set(project, id);
      };

      const onLeave = () => {
        const id = timers.get(project);
        if (id) {
          clearInterval(id);
          timers.delete(project);
        }
        // Reset to first image on leave
        images.forEach((img) => img.classList.remove('style-show'));
        index = 0;
        images[0].classList.add('style-show');
      };

      project.addEventListener('mouseenter', onEnter);
      project.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        project.removeEventListener('mouseenter', onEnter);
        project.removeEventListener('mouseleave', onLeave);
      });
    });

    return () => {
      // Clear all timers and listeners
      timers.forEach((id) => clearInterval(id));
      timers.clear();
      cleanups.forEach((fn) => fn());
    };
  }, []);
  
  return (
    <section ref={sectionRef} id="projects" className="section-projects">
      <div className="global-padding global-padding-section is-project">
        <div className="container-large is-project">
          <div className="section-header">
            <h1 data-scroll-reveal="" className="headlng-gradient-2">Selected <span
              className="heading-style-h1 font-fixed">projects</span></h1>
          </div>
          <div className="projects_grid">
            <div className="projects_grid_items">
              <div data-scroll-reveal="" className="project_card"><a data-cursor-text=""
                href="https://visualtamim.artstation.com/albums/7180650" target="_blank"
                className="project w-inline-block">
                <div className="project_preview aspect-2">
                  <div className="project_cover"><img sizes="(max-width: 1500px) 100vw, 1500px"
                    srcSet={[500,800,1080].map(w=>`${withBase('/images/selectedProjects/publication/tamim-khan-annual-report-9-'+w+'.jpg')} ${w}w`).join(', ')}
                    alt=""
                    src={withBase('/images/selectedProjects/publication/tamim-khan-annual-report-9-1080.jpg')}
                    loading="lazy" className="img_absolute" /><img sizes="(max-width: 1500px) 100vw, 1500px"
                      srcSet={[500,800,1080].map(w=>`${withBase('/images/selectedProjects/publication/tamim-khan-annual-report-2-'+w+'.jpg')} ${w}w`).join(', ')}
                      alt=""
                      src={withBase('/images/selectedProjects/publication/tamim-khan-annual-report-2-1080.jpg')}
                      loading="lazy" className="img_absolute" /><img sizes="(max-width: 1500px) 100vw, 1500px"
                        srcSet={[500,800,1080].map(w=>`${withBase('/images/selectedProjects/publication/tamim-khan-annual-report-3-'+w+'.jpg')} ${w}w`).join(', ')}
                        alt=""
                        src={withBase('/images/selectedProjects/publication/tamim-khan-annual-report-3-1080.jpg')}
                        loading="lazy" className="img_absolute" /><img sizes="(max-width: 1500px) 100vw, 1500px"
                          srcSet={[500,800,1080].map(w=>`${withBase('/images/selectedProjects/publication/tamim-khan-annual-report-4-'+w+'.jpg')} ${w}w`).join(', ')}
                          alt=""
                          src={withBase('/images/selectedProjects/publication/tamim-khan-annual-report-4-1080.jpg')}
                          loading="lazy" className="img_absolute" /><img sizes="(max-width: 1500px) 100vw, 1500px"
                            srcSet={[500,800,1080].map(w=>`${withBase('/images/selectedProjects/publication/tamim-khan-annual-report-6-'+w+'.jpg')} ${w}w`).join(', ')}
                            alt=""
                            src={withBase('/images/selectedProjects/publication/tamim-khan-annual-report-6-1080.jpg')}
                            loading="lazy" className="img_absolute" /></div>
                </div>
                <div className="project_caption">
                  <p data-scroll-reveal="" className="project_headling">Flyer, Brochure & Publication</p>
                  <p data-scroll-reveal="" className="project_description">Engaging print materials designed to inform,
                    inspire, and captivate. Each piece combines compelling visuals with clear messaging to effectively
                    communicate your brand's story and offerings.</p>
                </div>
              </a></div>
              <div data-scroll-reveal="" className="project_card"><a data-cursor-text=""
                href="https://visualtamim.artstation.com/albums/7540800" target="_blank"
                className="project w-inline-block">
                <div className="project_preview aspect-1">
                  <div className="project_cover"><img sizes="(max-width: 1000px) 100vw, 1000px"
                    srcSet={[500,800].map(w=>`${withBase('/images/selectedProjects/packaging/tamim-khan-packaging-01-'+w+'.jpg')} ${w}w`).join(', ')}
                    alt=""
                    src={withBase('/images/selectedProjects/packaging/tamim-khan-packaging-01-800.jpg')}
                    loading="lazy" className="img_absolute" /><img sizes="(max-width: 1000px) 100vw, 1000px"
                      srcSet={[500,800].map(w=>`${withBase('/images/selectedProjects/packaging/tamim-khan-packaging-02-'+w+'.jpg')} ${w}w`).join(', ')}
                      alt=""
                      src={withBase('/images/selectedProjects/packaging/tamim-khan-packaging-02-800.jpg')}
                      loading="lazy" className="img_absolute" /><img sizes="(max-width: 1000px) 100vw, 1000px"
                        srcSet={[500,800].map(w=>`${withBase('/images/selectedProjects/packaging/tamim-khan-packaging-03-'+w+'.jpg')} ${w}w`).join(', ')}
                        alt=""
                        src={withBase('/images/selectedProjects/packaging/tamim-khan-packaging-03-800.jpg')}
                        loading="lazy" className="img_absolute" /><img sizes="(max-width: 1000px) 100vw, 1000px"
                          srcSet={`${withBase('/images/selectedProjects/packaging/tamim-khan-packaging-04.jpg')} 800w`}
                          alt=""
                          src={withBase('/images/selectedProjects/packaging/tamim-khan-packaging-04.jpg')}
                          loading="lazy" className="img_absolute" /><img sizes="(max-width: 1000px) 100vw, 1000px"
                            srcSet={[500,800].map(w=>`${withBase('/images/selectedProjects/packaging/tamim-khan-packaging-05-'+w+'.jpg')} ${w}w`).join(', ')}
                            alt="vi"
                            src={withBase('/images/selectedProjects/packaging/tamim-khan-packaging-05-800.jpg')}
                            loading="lazy" className="img_absolute" /></div>
                </div>
                <div className="project_caption">
                  <p data-scroll-reveal="" className="project_headling">Packaging & Label Design</p>
                  <p data-scroll-reveal="" className="project_description">Creative and functional packaging solutions
                    that make products stand out on the shelf. Designs focus on both aesthetics and usability,
                    ensuring a memorable and impactful customer experience.</p>
                </div>
              </a></div>
              <div data-scroll-reveal="" className="project_card"><a data-cursor-text=""
                href="https://visualtamim.artstation.com/albums/7199639" target="_blank"
                className="project w-inline-block">
                <div className="project_preview aspect-4">
                  <div className="project_cover"><img sizes="(max-width: 1500px) 100vw, 1500px"
                    srcSet={[500,800,1080].map(w=>`${withBase('/images/selectedProjects/media/tamim-khan-fathers-day-gazi-tyre-'+w+'.jpg')} ${w}w`).join(', ')}
                    alt=""
                    src={withBase('/images/selectedProjects/media/tamim-khan-fathers-day-gazi-tyre-1080.jpg')}
                    loading="lazy" className="img_absolute" /><img sizes="(max-width: 1500px) 100vw, 1500px"
                      srcSet={[500,800,1080].map(w=>`${withBase('/images/selectedProjects/media/tamim-khan-social-media-02-'+w+'.jpg')} ${w}w`).join(', ')}
                      alt=""
                      src={withBase('/images/selectedProjects/media/tamim-khan-social-media-02-1080.jpg')}
                      loading="lazy" className="img_absolute" /><img sizes="(max-width: 1500px) 100vw, 1500px"
                        srcSet={[500,800,1080].map(w=>`${withBase('/images/selectedProjects/media/tamim-khan-gazi-tyre-03-'+w+'.jpg')} ${w}w`).join(', ')}
                        alt=""
                        src={withBase('/images/selectedProjects/media/tamim-khan-gazi-tyre-03-1080.jpg')}
                        loading="lazy" className="img_absolute" /><img sizes="(max-width: 1500px) 100vw, 1500px"
                          srcSet={[500,800,1080].map(w=>`${withBase('/images/selectedProjects/media/tamim-khan-social-media-04-'+w+'.jpg')} ${w}w`).join(', ')}
                          alt=""
                          src={withBase('/images/selectedProjects/media/tamim-khan-social-media-04-1080.jpg')}
                          loading="lazy" className="img_absolute" /></div>
                </div>
                <div className="project_caption">
                  <p data-scroll-reveal="" className="project_headling">Social Media</p>
                  <p data-scroll-reveal="" className="project_description">Dynamic and visually appealing content
                    crafted for digital platforms. Each design is optimized to boost engagement, strengthen brand
                    presence, and connect with your target audience online.</p>
                </div>
              </a></div>
            </div>
            <div className="projects_grid_items">
              <div className="project_card is-empty-space"></div>
              <div data-scroll-reveal="" className="project_card"><a data-cursor-text=""
                href="https://visualtamim.artstation.com/albums/7199642" target="_blank"
                className="project w-inline-block">
                <div className="project_preview aspect-2">
                  <div className="project_cover"><img sizes="(max-width: 1500px) 100vw, 1500px"
                    srcSet={[500,800,1080].map(w=>`${withBase('/images/selectedProjects/press-ads/tamim-khan-press-ads-01-'+w+'.jpg')} ${w}w`).join(', ')}
                    alt=""
                    src={withBase('/images/selectedProjects/press-ads/tamim-khan-press-ads-01-1080.jpg')}
                    loading="lazy" className="img_absolute" /><img sizes="(max-width: 1500px) 100vw, 1500px"
                      srcSet={[500,800,1080].map(w=>`${withBase('/images/selectedProjects/press-ads/tamim-khan-press-ads-02-'+w+'.jpg')} ${w}w`).join(', ')}
                      alt=""
                      src={withBase('/images/selectedProjects/press-ads/tamim-khan-press-ads-02-1080.jpg')}
                      loading="lazy" className="img_absolute" /><img sizes="(max-width: 1500px) 100vw, 1500px"
                        srcSet={[500,800,1080].map(w=>`${withBase('/images/selectedProjects/press-ads/tamim-khan-press-ads-03-'+w+'.jpg')} ${w}w`).join(', ')}
                        alt=""
                        src={withBase('/images/selectedProjects/press-ads/tamim-khan-press-ads-03-1080.jpg')}
                        loading="lazy" className="img_absolute" /><img sizes="(max-width: 1500px) 100vw, 1500px"
                          srcSet={[500,800,1080].map(w=>`${withBase('/images/selectedProjects/press-ads/tamim-khan-press-ads-04-'+w+'.jpg')} ${w}w`).join(', ')}
                          alt=""
                          src={withBase('/images/selectedProjects/press-ads/tamim-khan-press-ads-04-1080.jpg')}
                          loading="lazy" className="img_absolute" /></div>
                </div>
                <div className="project_caption">
                  <p data-scroll-reveal="" className="project_headling">Press Ads</p>
                  <p data-scroll-reveal="" className="project_description">Strategically crafted press advertisements
                    designed to capture attention and generate interest. Each ad is tailored to effectively
                    communicate your message and drive engagement.</p>
                </div>
              </a></div>
              <div data-scroll-reveal="" className="project_card"><a giftiming="1100" data-cursor-text=""
                href="https://visualtamim.artstation.com/albums/9010331" target="_blank"
                className="project w-inline-block">
                <div className="project_preview aspect-2">
                  <div className="project_cover"><img sizes="(max-width: 1500px) 100vw, 1500px"
                    srcSet={[500,800,1080].map(w=>`${withBase('/images/selectedProjects/logo&identity/tamim-khan-logo-design-01-'+w+'.jpg')} ${w}w`).join(', ')}
                    alt=""
                    src={withBase('/images/selectedProjects/logo&identity/tamim-khan-logo-design-01-1080.jpg')}
                    loading="lazy" className="img_absolute" /><img sizes="(max-width: 1500px) 100vw, 1500px"
                      srcSet={[500,800,1080].map(w=>`${withBase('/images/selectedProjects/logo&identity/tamim-khan-logo-design-02-'+w+'.jpg')} ${w}w`).join(', ')}
                      alt=""
                      src={withBase('/images/selectedProjects/logo&identity/tamim-khan-logo-design-02-1080.jpg')}
                      loading="lazy" className="img_absolute" /><img sizes="(max-width: 1500px) 100vw, 1500px"
                        srcSet={[500,800,1080].map(w=>`${withBase('/images/selectedProjects/logo&identity/tamim-khan-logo-design-03-'+w+'.jpg')} ${w}w`).join(', ')}
                        alt=""
                        src={withBase('/images/selectedProjects/logo&identity/tamim-khan-logo-design-03-1080.jpg')}
                        loading="lazy" className="img_absolute" /><img sizes="(max-width: 1500px) 100vw, 1500px"
                          srcSet={[500,800,1080].map(w=>`${withBase('/images/selectedProjects/logo&identity/tamim-khan-logo-design-04-'+w+'.jpg')} ${w}w`).join(', ')}
                          alt=""
                          src={withBase('/images/selectedProjects/logo&identity/tamim-khan-logo-design-04-1080.jpg')}
                          loading="lazy" className="img_absolute" /><img sizes="(max-width: 1000px) 100vw, 1000px"
                            srcSet={[500,800,1000].map(w=>`${withBase('/images/selectedProjects/logo&identity/tamim-khan-logo-design-05-'+w+'.jpg')} ${w}w`).join(', ')}
                            alt=""
                            src={withBase('/images/selectedProjects/logo&identity/tamim-khan-logo-design-05-1080.jpg')}
                            loading="lazy" className="img_absolute" /></div>
                </div>
                <div className="project_caption">
                  <p data-scroll-reveal="" className="project_headling">Logo & Identity Design</p>
                  <p data-scroll-reveal="" className="project_description">Tailored logo and identity designs that
                    encapsulate your brand’s essence. Each design is created to be versatile, memorable, and
                    reflective of your brand values, ensuring a strong visual impact across all platforms.</p>
                </div>
              </a></div>
              <div data-scroll-reveal="" className="project_card is-last-project video-container"><a data-cursor-text=""
                href="https://visualtamim.artstation.com/albums/7184382" target="_blank" className="project w-inline-block">
                <div className="project_preview aspect-4">
                  <div className="project_cover">

                    <video
                      ref={videoRef}
                      src="https://cdn.artstation.com/p/video_sources/001/479/516/gazi-tyres-03.mp4"
                      className="video-content"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster={withBase('/images/selectedProjects/motion-visual/tamim-khan-gazitayre-post-01.png')}
                    ></video>
                  </div>
                </div>
                <div className="project_caption">
                  <p data-scroll-reveal="" className="project_headling">Motion Visual</p>
                  <p data-scroll-reveal="" className="project_description">Dynamic motion graphics that bring your brand to life. From animated logos to engaging social media content, each visual is crafted to capture attention and tell a compelling story.</p>
                </div>
              </a></div>
            </div>
          </div>

          <div className="section-footer is-flex">
            <div data-scroll-reveal="" className="btn-group-12 gap-12">
              <div data-scroll-reveal="" className="btn-group-12 on-mobile-full"><a href="https://guthib.com/"
                className="btn_cta btn-primary w-inline-block">
                <div className="btn_content">
                  <div className="weight-bold">View recent work</div><svg xmlns="http://www.w3.org/2000/svg"
                    className="svgsprite btn_icon icon" width="100%" viewBox="0 0 16 16" fill="none">
                    <path d="M9.33333 4L13.5 8L9.33333 12M13 8H2.5" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="square"></path>
                  </svg>
                </div>
              </a><a href="https://www.guthib.com" className="btn_cta btn-border w-inline-block">
                  <div className="btn_content">
                    <div>Dribbble</div><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24"
                      fill="none" className="svgsprite btn_icon">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM14.6026 21.7874C13.7722 22.0076 12.8998 22.125 12 22.125C10.6383 22.125 9.3394 21.8562 8.15345 21.3688C9.27883 17.2148 12.3908 14.2396 15.9559 12.9146C16.5742 15.9112 16.1137 19.1247 14.6026 21.7874ZM17.2675 20.6486C18.2345 18.0151 18.4249 15.1142 17.8323 12.3789C19.263 12.09 20.7224 12.0635 22.1198 12.3271C22.0079 15.8529 20.0934 18.9238 17.2675 20.6486ZM21.9883 10.3319C20.4412 10.105 18.8481 10.1714 17.2925 10.5036C16.9911 9.65803 16.6106 8.84342 16.1573 8.06991C17.4359 7.33144 18.6018 6.39877 19.6 5.30979C20.8234 6.69853 21.6722 8.42527 21.9883 10.3319ZM18.1794 3.97872C17.2791 4.9644 16.2199 5.80263 15.0582 6.45596C14.274 5.45928 13.3668 4.56193 12.3553 3.79144L12.3309 3.77284L12.3055 3.75593C12.3054 3.75585 12.3032 3.75439 12.2986 3.75113C12.2932 3.74731 12.286 3.74216 12.2768 3.73546C12.2581 3.72189 12.235 3.70477 12.2072 3.68398C12.1757 3.66041 12.1441 3.63656 12.1102 3.61093L12.1032 3.60572C12.0758 3.58496 12.0467 3.56299 12.0148 3.53905C11.9459 3.48722 11.8703 3.43084 11.8008 3.38108C11.7523 3.3463 11.6825 3.29711 11.6113 3.25373L11.5661 3.22247C11.4734 3.15829 11.3341 3.0618 11.2077 2.98415C11.0895 2.90132 10.9298 2.80695 10.8252 2.74569C10.724 2.68641 10.615 2.62421 10.5473 2.58555L10.4953 2.55583C10.4828 2.54856 10.472 2.54252 10.4675 2.54002L10.4666 2.53953C10.4587 2.53512 10.45 2.53029 10.4421 2.52595L10.4315 2.52009C10.4163 2.51178 10.4012 2.50346 10.3855 2.4947C10.3675 2.48469 10.353 2.47644 10.3424 2.47026L10.335 2.46514L10.3092 2.44936C10.2157 2.39222 10.1183 2.34005 10.0654 2.31173L10.0459 2.30127L10.0233 2.28909L10.0001 2.27813C9.94988 2.25445 9.87379 2.21818 9.78807 2.17731L9.78605 2.17635C9.75914 2.16353 9.73113 2.15018 9.70285 2.13671C10.4409 1.9655 11.2099 1.875 12 1.875C14.3265 1.875 16.4697 2.65964 18.1794 3.97872ZM7.03624 3.17316C5.53447 4.0195 4.27039 5.238 3.36912 6.70354C4.44122 7.24727 5.59274 7.63145 6.77899 7.84264L6.78154 7.84309L6.78409 7.84358C8.25 8.1126 9.76122 8.1054 11.2407 7.83866C11.9194 7.71612 12.5861 7.53394 13.2328 7.29729C12.6249 6.57828 11.9421 5.92595 11.1951 5.35466C11.144 5.31919 11.0873 5.27708 11.0409 5.24239C11.0058 5.21614 10.9646 5.18501 10.9239 5.1543L10.9228 5.15349C10.8958 5.13314 10.8692 5.11303 10.8447 5.09468C10.7779 5.04443 10.7172 4.99924 10.6669 4.96324C10.6342 4.93983 10.6155 4.9272 10.6078 4.92199C10.6049 4.92006 10.6035 4.91915 10.6036 4.9191L10.5749 4.9029L10.5411 4.87999C10.4913 4.84624 10.4471 4.8156 10.4065 4.78751L10.4061 4.78725C10.3172 4.72573 10.2459 4.67641 10.1736 4.6335L10.1262 4.60534L10.0835 4.573C10.0848 4.57396 10.084 4.57348 10.0809 4.5714L10.0805 4.57112C10.073 4.5661 10.053 4.55286 10.0162 4.53C9.96675 4.49936 9.90615 4.46318 9.84139 4.42523C9.74952 4.37145 9.66585 4.32371 9.59967 4.28595L9.59183 4.28148C9.56421 4.2657 9.53982 4.25178 9.51942 4.24001L9.51739 4.23885L9.50138 4.23L9.4938 4.22584C9.47877 4.21759 9.4587 4.20653 9.43827 4.19516C9.41434 4.18185 9.38532 4.1655 9.35708 4.14896C9.34163 4.13993 9.31283 4.12298 9.28058 4.10205C9.24094 4.07843 9.19842 4.05559 9.14779 4.0284L9.14554 4.02716C9.08498 3.99851 9.0096 3.96259 8.92962 3.92441C8.77909 3.85264 8.61207 3.77303 8.49615 3.71912L8.48367 3.71331L8.43128 3.68712C8.2477 3.60202 8.02795 3.51869 7.78184 3.42538L7.78099 3.42506C7.7274 3.40475 7.67258 3.38396 7.61659 3.36258C7.4648 3.3081 7.30717 3.25849 7.14205 3.20652L7.14165 3.2064C7.10685 3.19545 7.07172 3.18439 7.03624 3.17316ZM2.51396 8.45228C3.74945 9.07575 5.07312 9.51569 6.43504 9.75844C8.13986 10.071 9.88658 10.0606 11.5865 9.75412C12.554 9.57944 13.4986 9.3012 14.4044 8.93044C14.8075 9.60063 15.1466 10.3068 15.4163 11.04C11.3493 12.5049 7.8001 15.8147 6.39642 20.4343C3.67094 18.6199 1.875 15.5197 1.875 12C1.875 10.7518 2.10087 9.55634 2.51396 8.45228Z"
                        fill="currentColor"></path>
                    </svg>
                  </div>
                </a></div>
            </div>
            <p className="text-center c-text-tertiary">As you know, most of my work I can’t disclose publicly, <span
              className="newline">you know what I mean (under NDA).</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
