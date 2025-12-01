

import BecomeSoemthingButton from "../sub_components/BecomeAffiliateButton"


export default function PartnershipBenifits_last() {
  return (
    <section id="quick-intro" className="intro">
      <div className="c-bg-filled into-gradient"></div>
      <div className="global-padding global-padding-section">
        <div className="container-large">
          <div className="quickintro-grid">
            <div className="quickintro-grid__item is-left">
              <div data-scroll-reveal="" className="text-eyebrow is-intro">
                <div className="icon-16">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 200 200"
                    fill="none" className="svgsprite">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M120 0H80V51.7157L43.4315 15.1472L15.1472 43.4314L51.7158 80H0V120H51.7157L15.1472 156.568L43.4315 184.853L80 148.284V200H120V148.284L156.569 184.853L184.853 156.569L148.284 120H200V80H148.284L184.853 43.4314L156.569 15.1471L120 51.7157V0Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className="pl-8 fw2">BENEFITS<br /></div>
              </div>
              <h4>Our Partners</h4>
              <div className="our-partners-description">
                <p>Ready to join the elite league of partners and kickstart your money-making venture today?</p>
              </div>
              <div className="become-partner-benefits">
                <BecomeSoemthingButton label="Become Our Partner" />
              </div>
            </div>
            <div className="quickintro-grid__item is-right">
              <div className="intro-image-wrapper">
                <div className="intro-image intro-image-1 is-visible"
                  style={{ backgroundImage: `url('/images/partners/partnership-hero-img.jpg')` }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



