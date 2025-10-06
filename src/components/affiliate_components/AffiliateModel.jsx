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
            <p>Affilaite Model<br /></p>
          </div>
        <div data-scroll-reveal="" className="hero_content is-home">
          <h1 className="hero_heading headling-display heading-gradient is-bg-cream affiliate-model-title">
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
          
          <div data-scroll-reveal="" className="hero_cta is-home"><a href="#plans"
              className="btn_cta btn-primary w-inline-block">
              <div className="btn_content">
                <div className="weight-bold">See more</div><svg xmlns="http://www.w3.org/2000/svg"
                  className="svgsprite btn_icon icon" width="100%" viewBox="0 0 16 16" fill="none">
                  <path d="M9.33333 4L13.5 8L9.33333 12M13 8H2.5" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="square"></path>
                </svg>
              </div>
            </a><a href="https://www.whatsapp.com/" target="_blank" className="btn_cta btn-border w-inline-block">
              <div className="btn_content">
                <div className="weight-bold">Book a Call</div><svg xmlns="http://www.w3.org/2000/svg"
                  className="svgsprite btn_icon icon" width="100%" viewBox="0 0 16 16" fill="none">
                  <path d="M9.33333 4L13.5 8L9.33333 12M13 8H2.5" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="square"></path>
                </svg>
              </div>
            </a></div>
        </div>
      </div>
    </>
  )
}