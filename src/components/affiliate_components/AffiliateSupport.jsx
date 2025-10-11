import React from "react";
import AnimatedCards from "../sub_components/AnimatedCards";
import LottiePlayer from "../sub_components/LottiePlayer";
import options from "../../data/process/supportCardOptions.json";


export default function AffiliateSupport (){
  return (
    <section id="how-it-works" className="services">
      <div id="process" className="c-bg-filled gradient-process"></div>
      <div className="global-padding global-padding-section">
        <div className="container-large">
          <div className="section-header">
            <div className="section_header_wrapper">
              <h2 data-scroll-reveal="" className="heading-gradient">
                <span className="newline">Support</span>
                </h2>
              <div data-scroll-reveal="" className="text-eyebrow support-small-description">
                <div >A collection of guides to help you succeed as a referral partner</div>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="block_main_wrapper">

              <AnimatedCards
                items={options}
                getKey={(_, idx) => idx}
                renderIcon={(item) => item?.lottie_src ? <LottiePlayer src={item.lottie_src} /> : null}
                aos={{ animation: 'fade-up', delayStep: 100 }}
                className="simple_steps"
                itemClassName="simple_steps_item"
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}