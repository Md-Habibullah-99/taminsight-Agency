import React from "react";

export default function Intro() {
  return (
    <>
    <section id="quick-intro" className="intro">
      <div className="c-bg-filled into-gradient"></div>
      <div className="global-padding global-padding-section">
        <div className="container-large">
          <div className="quickintro-grid">
            <div className="quickintro-grid__item is-left">
              <div data-scroll-reveal="" className="text-eyebrow is-intro">
                <div className="icon-16"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 200 200"
                    fill="none" className="svgsprite">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M120 0H80V51.7157L43.4315 15.1472L15.1472 43.4314L51.7158 80H0V120H51.7157L15.1472 156.568L43.4315 184.853L80 148.284V200H120V148.284L156.569 184.853L184.853 156.569L148.284 120H200V80H148.284L184.853 43.4314L156.569 15.1471L120 51.7157V0Z"
                      fill="currentColor"></path>
                  </svg></div>
                <div className="pl-8 fw2">Meet Tamim<br /></div>
              </div>
              <h4>I'm the guy behind taminsight - more than just a pixel-perfect designer.</h4>
              <div className="quickintro-focus"><span className="quickintro-focus-area"><svg xmlns="http://www.w3.org/2000/svg"
                    width="100%" viewBox="0 0 24 24" fill="none" className="svgsprite svg-s-32">
                    <path
                      d="M11.8201 4L14.4574 4L20 11.5L14.4574 19H11.8201L14.3956 15.5239C15.467 14.0772 16.2294 13.066 16.6827 12.4902L5 12.4902L5 10.4888L16.6827 10.4888C16.1332 9.78652 15.3709 8.7823 14.3956 7.47612L11.8201 4Z"
                      fill="currentColor"></path>
                  </svg><span>Designer</span></span><span className="quickintro-focus-area"><svg
                    xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"
                    className="svgsprite svg-s-32">
                    <path
                      d="M11.8201 4L14.4574 4L20 11.5L14.4574 19H11.8201L14.3956 15.5239C15.467 14.0772 16.2294 13.066 16.6827 12.4902L5 12.4902L5 10.4888L16.6827 10.4888C16.1332 9.78652 15.3709 8.7823 14.3956 7.47612L11.8201 4Z"
                      fill="currentColor"></path>
                  </svg><span>Educator</span></span><span className="quickintro-focus-area"><svg
                    xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"
                    className="svgsprite svg-s-32">
                    <path
                      d="M11.8201 4L14.4574 4L20 11.5L14.4574 19H11.8201L14.3956 15.5239C15.467 14.0772 16.2294 13.066 16.6827 12.4902L5 12.4902L5 10.4888L16.6827 10.4888C16.1332 9.78652 15.3709 8.7823 14.3956 7.47612L11.8201 4Z"
                      fill="currentColor"></path>
                  </svg><span>Creator</span></span></div>
            </div>
            <div className="quickintro-grid__item is-right">
              <div className="quickintro-hero"><img src="images/tamim_profile_1600.png" loading="lazy"
                  sizes="(max-width: 1464px) 100vw, 1464px"
                  srcset="images/tamim_profile_500.png 500w, images/tamim_profile_800.png 800w, images/tamim_profile_1080.png 1080w, images/tamim_profile_1600.png 1464w"
                  alt="" className="quickintro-img" /></div>
              <div className="quickintro-tamim">
                <h4 className="quickintro-tamim-hi heading-h2 heading-style-h4">Hello <span className="newline">there!</span>
                </h4>
                <div className="quickintro-tamim-about">
                  <p>I'm Tamim, a Prague-based independent designer with over 14 years of
                    experience.<br /><br />I help founders and brands create digital experiences that drive real
                    business results. As a designer, I focus on authenticity, transparency, and problem-solving above
                    all. No flashy language or trendy tricks-just effective solutions. <br /><br />I listen intently
                    to your needs and strive to make your vision a reality. I transform ideas into designs that truly
                    connect with your audience.<br /><br />What sets me apart? I genuinely care about creating
                    meaningful work that delivers value. If you need someone reliable who puts your goals first, we
                    could be a good match. We aim to build lasting relationships, not just finish one project.
                    <br /><br />How can I help bring your next idea to life?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}