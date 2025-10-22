

import AnimatedCards from "../sub_components/AnimatedCards"
import LottiePlayer from "../sub_components/LottiePlayer"
import howPartnershipWorks from "../../data/partnership/howPartnershipWorks.json"


export default function PartnershipHowitsWorks({ animate = true }){
  return (
    <>
  <div id="delete-vars-btn" className="hero_header is-home affiliate-model">
    {/* Background gradient for affiliate model */}
    <div className="affiliate-model__bg"></div>
        
          <div data-scroll-reveal="" className="hero_subtitle">
            <p>HOW IT’S WORK<br /></p>
          </div>
        <div data-scroll-reveal="" className="hero_content is-home">
          <h1 className="hero_heading headling-display heading-gradient is-bg-cream affiliate-title">
            <div className="word">Supercharge</div>
            <div className="word">Your</div>
            <div className="word">Business</div>
            <div className="word">With</div>
            <div className="word">Our</div>
            <div className="word">Plan</div>
          </h1>
          
          <div className="global-padding">
            <div className="container-large">
          <AnimatedCards
                items={howPartnershipWorks}
                getKey={(_, idx) => idx}
                renderIcon={(item) => item?.lottie_src ? <LottiePlayer src={item.lottie_src} /> : null}
                animate={animate}
                aos={{ animation: 'fade-up', delayStep: 100 }}
                className="simple_steps"
                itemClassName="simple_steps_item"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}