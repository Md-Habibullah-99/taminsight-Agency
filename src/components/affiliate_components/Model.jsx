import AnimatedCards from "../sub_components/AnimatedCards"
import howAffiliateWorks from "../../data/affiliate/howAffiliateWorks.json"
import LottiePlayer from "../sub_components/LottiePlayer"

export default function AffiliateModel({ animate = true }) {
  return (
    <>
  <div id="delete-vars-btn" className="hero_header is-home affiliate-model">
    {/* Background gradient for affiliate model */}
    <div className="affiliate-model__bg"></div>
        
          <div data-scroll-reveal="" className="hero_subtitle">
            <p>Affiliate Model<br /></p>
          </div>
        <div data-scroll-reveal="" className="hero_content is-home">
          <h1 className="hero_heading headling-display heading-gradient is-bg-cream affiliate-title">
            <div className="word">How</div>
            <div className="word">Taminsight</div>
            <div className="word">Affiliate</div>
            <div className="word">Program</div>
            <div className="word">Works</div>
          </h1>
          
          <div className="global-padding">
            <div className="container-large">
          <AnimatedCards
                items={howAffiliateWorks}
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