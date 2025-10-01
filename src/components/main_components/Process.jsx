import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LottiePlayer from "../sub_components/LottiePlayer";

const steps = [
  {
    title: "Creative Director with Vision",
    description:
      "I help brands and founders achieve meaningful results, which drives business and improves lives. My approach is straightforward: I focus on four key areas - design, business, marketing, and psychology.",
    lottie_src:
      "https://cdn.prod.website-files.com/65111bc3d36d02e461763c5f/654fa7c15cc9f1e795bb9529_unlimted-request.json",
  },
  {
    title: "Fast-Track Delivery",
    description:
      "From concept to Figma design, and on to Webflow or Framer projects, I deliver results. I'll keep you updated every 48 hours to ensure your project stays on track.",
    lottie_src:
      "https://cdn.prod.website-files.com/65111bc3d36d02e461763c5f/655097f7746087a0082c2a85_fast-work.json",
  },
  {
    title: "Your Design Partner",
    description:
      "As your design partner, I'm here to help you get results fast. This will drive business growth and help us build a strong partnership. If your needs change, we'll change with them. You'll always know what to expect from me.",
    lottie_src:
      "https://cdn.prod.website-files.com/65111bc3d36d02e461763c5f/654fcc1a8009cb2c99f9d328_design-quality.json",
  },
];

function Process() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  
  return (
    <section id="how-it-works" className="services">
      <div id="process" className="c-bg-filled gradient-process"></div>
      <div className="global-padding global-padding-section">
        <div className="container-large">
          <div className="section-header">
            <div className="section_header_wrapper">
              <div data-scroll-reveal="" className="text-eyebrow is-process">
                <div>from chaos to clarity '</div>
              </div>
              <h1 data-scroll-reveal="" className="heading-gradient is-bg-cream"><span className="newline">I keep the process
                </span><span className="newline">simple and the results</span><span className="newline heading-style-h1">
                  extraordinary.</span></h1>
            </div>
          </div>
          <div className="section-content">
            <div className="block_main_wrapper">

              <div data-scroll-reveal="" className="simple_steps">
                {steps.map((step, idx) => (
                  <div
                    className="simple_steps_item"
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                    key={idx}
                  >
                    <div className="card_steps_icon">
                      <LottiePlayer src={step.lottie_src} />
                    </div>
                    <div className="simple-step-content">
                      <h6 className="mb-16">{step.title}</h6>
                      <div className="body-text line-height-3">
                        {step.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="svg-arrow-down"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 102 110"
                  fill="none" className="svgsprite">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M50.7033 62.9562C50.5986 72.6396 47.6532 78.5514 43.9298 81.7563C40.2067 84.961 35.4143 85.7182 31.0205 84.5374C26.6095 83.352 22.7232 80.2416 20.8756 75.8688C19.0518 71.5525 19.1048 65.7341 23.088 58.8925C28.1466 50.2037 38.1867 45.3297 49.0246 44.8123C50.0429 50.1115 50.7788 55.9713 50.7033 62.9562ZM19.6311 56.88C25.4208 46.9356 36.4564 41.5813 48.2007 40.8645C48.149 40.6332 48.0971 40.4029 48.0449 40.1734C47.6845 38.5888 47.3071 37.0271 46.9324 35.4768C45.7803 30.7098 44.6543 26.0506 44.1297 21.1679C43.4815 15.1346 43.7311 8.6951 45.8341 0.931319L49.6949 1.97713C47.7297 9.23231 47.5084 15.1705 48.1068 20.7406C48.6011 25.341 49.6415 29.6487 50.7759 34.3452L50.776 34.3454C51.1608 35.9387 51.5565 37.5768 51.9453 39.2863C52.059 39.7865 52.1718 40.2914 52.283 40.8015C57.7823 40.9653 63.3216 42.1295 68.4471 44.2989C77.2685 48.0325 85.0304 54.7791 89.4827 64.6819C93.5588 73.7479 94.7917 85.3017 91.7254 99.3537C92.0394 99.1703 92.3591 99.0031 92.6832 98.8513C95.7831 97.3996 99.0891 97.4474 101.237 97.9321L100.356 101.834C98.8757 101.5 96.5082 101.477 94.3796 102.474C92.366 103.417 90.3678 105.358 89.5627 109.392L85.6401 108.609C86.4459 104.571 85.3639 101.894 83.8475 100.12C82.2583 98.2603 80.0647 97.255 78.5871 96.9215L79.4676 93.0197C81.6181 93.5049 84.6355 94.8851 86.8883 97.521C87.2025 97.8886 87.4996 98.2783 87.776 98.6902C90.7497 85.2207 89.5108 74.4991 85.8344 66.3221C81.8388 57.4349 74.8812 51.3656 66.888 47.9825C62.4539 46.1058 57.7506 45.0662 53.0972 44.8225C54.0769 50.1136 54.7785 56.0189 54.703 62.9995C54.59 73.4512 51.3864 80.6157 46.5393 84.7879C41.6918 88.9604 35.4923 89.8811 29.9824 88.4003C24.4897 86.9242 19.5606 83.0336 17.191 77.4256C14.7976 71.7612 15.1255 64.619 19.6311 56.88Z"
                    fill="currentColor"></path>
                </svg></div>
              <div className="work-areas">
                <h1 className="work_areas"><span className="work_areas_list skill-1">
                    <div className="gradient-brand">Brand</div>
                  </span><span className="work_areas_list skill-2">
                    <div className="svg_span_arrow"><img
                        src="https://cdn.prod.website-files.com/65111bc3d36d02e461763c5f/652288d800afd1e2a4cd76cc_long-arrow.svg"
                        loading="lazy" alt="" className="svgsprite_img" /></div>
                    <div className="headlng-gradient">Product</div>
                  </span><span className="work_areas_list skill-3">
                    <div className="headlng-gradient">Experience</div>
                    <div className="svg_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 200 200"
                        fill="none" className="svgsprite">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M120 0H80V51.7157L43.4315 15.1472L15.1472 43.4314L51.7158 80H0V120H51.7157L15.1472 156.568L43.4315 184.853L80 148.284V200H120V148.284L156.569 184.853L184.853 156.569L148.284 120H200V80H148.284L184.853 43.4314L156.569 15.1471L120 51.7157V0Z"
                          fill="currentColor"></path>
                      </svg></div>
                  </span><span className="work_areas_list skill-4">
                    <div className="headlng-gradient">Delivered</div>
                  </span></h1>
              </div>
              <div className="service_offer">
                <div className="service_offer_title-container">
                  <p className="service_offer_title">
                    Discover our services that spark positive change
                  </p>
                </div>
                <div className="service_offer-services">
                  <div className="service_offer-service">
                    <h5 className="service_offer-service_title"> Branding </h5>
                    <div className="service_offer-service_description_container">

                      <div className="service_offer-service_description">
                      <p className="service_offer-service_description-element">Brand Strategy — </p>
                      <p className="service_offer-service_description-element">Naming & Positioning</p> <br />
                      <p className="service_offer-service_description-element">Logos & Identities — </p>
                      <p className="service_offer-service_description-element">Brand Messaging</p> <br />
                      <p className="service_offer-service_description-element">Brand & Visual Guidelines — </p>
                      <p className="service_offer-service_description-element">Stationery Design</p>
                      </div>
                    </div>
                  </div>
                  <div className="service_offer-service">
                    <h5 className="service_offer-service_title"> Creative Production </h5>
                    <div className="service_offer-service_description_container">

                      <div className="service_offer-service_description">
                      <p className="service_offer-service_description-element">Art Direction — </p>
                      <p className="service_offer-service_description-element">Copywriting — </p>
                      <p className="service_offer-service_description-element">Content Design</p> <br />
                      <p className="service_offer-service_description-element">3D/Motion Graphics — </p>
                      <p className="service_offer-service_description-element">Illustrations & Infographics</p> <br />
                      <p className="service_offer-service_description-element">Packaging Design — </p>
                      <p className="service_offer-service_description-element">Editorial Design</p> <br />
                      <p className="service_offer-service_description-element">Campaign Development — </p>
                      <p className="service_offer-service_description-element">Photography </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="awards_section-container">
                <div className="awards_section-title_container">
                  <p className="awards_section-title">
                    And love winning awards for them as well.
                  </p>
                </div>
                <div className="awards-container">
                  <div className="award-item">
                    <p className="award-title">Best Design Award — 2023</p>
                    <p className="award-description">Awarded for outstanding design excellence.</p>
                  </div>
                  <div className="award-item">
                    <p className="award-title">Best Design Award — 2022</p>
                    <p className="award-description">Awarded for outstanding design excellence.</p>
                  </div>
                  <div className="award-item">
                    <p className="award-title">Best Design Award — 2021</p>
                    <p className="award-description">Awarded for outstanding design excellence.</p>
                  </div>
                  <div className="award-item">
                    <p className="award-title">Best Design Award — 2020</p>
                    <p className="award-description">Awarded for outstanding design excellence.</p>
                  </div>
                  <div className="award-item">
                    <p className="award-title">Best Design Award — 2019</p>
                    <p className="award-description">Awarded for outstanding design excellence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;