import React from "react";

const Hero = () => {
  return (
    <section id="home" className="section_hero">
      <div id="delete-vars-btn" className="hero_header is-home">
        <div data-scroll-reveal="" className="text-eyebrow is-home">
          <div className="wave">
            <div>👋</div>
          </div>
          <div>It's Tamim, Your brand and communication designer!</div>
        </div>
        <div data-scroll-reveal="" className="hero_content is-home">
          <h1 className="hero_heading headling-display heading-gradient">
            <div className="word">My</div>
            <div className="word">Favorite</div>
            <div className="word">Quote -</div>
            <div className="word">"Think,</div>
            <div className="word">Think</div>
            <div className="word">Practice</div>
            <div className="word">Thinking"</div>
          </h1>
          <div data-scroll-reveal="" className="hero_subtitle">
            <p>Since 2018, I've helped 50+ founders transform their brands across SaaS, AI, dating, healthcare,
              e-commerce, fashion and more through designs that create meaningful connections.<br /></p>
          </div>
          <div data-scroll-reveal="" className="hero_cta is-home"><a href="#plans"
              className="btn_cta btn-primary w-inline-block">
              <div className="btn_content">
                <div className="weight-bold">See more</div><svg xmlns="http://www.w3.org/2000/svg"
                  className="svgsprite btn_icon icon" width="100%" viewBox="0 0 16 16" fill="none">
                  <path d="M9.33333 4L13.5 8L9.33333 12M13 8H2.5" stroke="currentColor" stroke-width="1.5"
                    stroke-linecap="square"></path>
                </svg>
              </div>
            </a><a href="https://www.whatsapp.com/" target="_blank" className="btn_cta btn-border w-inline-block">
              <div className="btn_content">
                <div className="weight-bold">Book a Call</div><svg xmlns="http://www.w3.org/2000/svg"
                  className="svgsprite btn_icon icon" width="100%" viewBox="0 0 16 16" fill="none">
                  <path d="M9.33333 4L13.5 8L9.33333 12M13 8H2.5" stroke="currentColor" stroke-width="1.5"
                    stroke-linecap="square"></path>
                </svg>
              </div>
            </a></div>
        </div>
      </div>
      <div className="showreel">
        <div data-scroll-reveal="" className="showreel_container">
          <div className="showreel_container__inner">
            <div data-delay="2000" data-animation="slide" className="slider no-select w-slider" data-autoplay="true"
              data-easing="ease" data-hide-arrows="true" data-disable-swipe="false" data-autoplay-limit="0"
              data-nav-spacing="0" data-duration="0" data-infinite="true">

              <div className="mask w-slider-mask">
                <div className="slide w-slide">

                  <img src="images/hero/tamim_hero_1600.jpg" loading="eager" sizes="(max-width: 2000px) 100vw, 2000px"
                    srcset="images/hero/tamim_hero_1600.jpg 500w, images/hero/tamim_hero_1600.jpg 800w, images/hero/tamim_hero_1080.jpg 1080w, images/hero/tamim_hero_1600.jpg 1600w, images/hero/tamim_hero_1600.jpg 2000w"
                    alt="taminsight-project" className="showreel-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="worked-with-container">
        <div className="work-with logo-cursor-area" data-logo-cursor-area>
          <div className="clients_logo_title">
            <h2 className="line-height-md c-text-tertiary"
              style="font-size:1.3rem; letter-spacing:0.1em; margin-bottom: 1.5rem; text-align:center;">Brands I've
              Worked With</h2>
          </div>
          <div className="logo-grid">
            <div className="company-img-container gazi-group-logo-container">
              <img src="images/companyLogo/Gazi Group Logo Vector.png" alt="Gazi Group Logo" className="gazi-group-logo" />
            </div>
            <div className="company-img-container">
              <img src="images/companyLogo/shajgoj_logo.png" alt="Shajgoj Logo" className="shajgoj-logo" />
            </div>
            <div className="company-img-container">
              <img src="images/companyLogo/bangladesh-finance-seeklogo.png" alt="Bangladesh Finance Logo"
                className="bangladesh-finance-logo" />
            </div>
            <div className="company-img-container">
              <img src="images/companyLogo/ezviz-logo.png" alt="EZVIZ Logo" className="ezviz-logo" />
            </div>
            <div className="company-img-container">
              <img src="images/companyLogo/bangladesh-finance-islamic-seeklogo.png"
                alt="Bangladesh Finance Islamic Logo" className="bangladesh-finance-islamic-logo" />
            </div>
            <div className="company-img-container">
              <img src="images/companyLogo/ultra_logo.png" alt="Ultra Logo" className="ultra-logo" />
            </div>
            <div className="company-img-container">
              <img src="images/companyLogo/bank_asia.png" alt="Bank Asia Logo" className="bank-asia-logo" />
            </div>
            <div className="company-img-container">
              <img src="images/companyLogo/bankAsiaIslamic.png" alt="Bank Asia Islamic Logo"
                className="bank-asia-islamic-logo" />
            </div>
            <div className="company-img-container">
              <img src="images/companyLogo/gaziTyre.png" alt="Gazi Tyres Logo" className="gazi-tyres-logo" />
            </div>
            <div className="company-img-container">
              <img src="images/companyLogo/akij-plastic-logo.png" alt="Akij Plastics Logo" className="akij-plastic-logo" />
            </div>
            <div className="company-img-container">
              <img src="images/companyLogo/bcbLogo.png" alt="BCB Logo" className="bcb-logo-img" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
