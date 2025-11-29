

import Services from "./Services_from_PartnershipPage.jsx";


export default function ValuedOver() {

  const servicesArr = [
    { title: "Branding (Logo, Business Card, Letter)", price: "$250" },
    { title: "Website Design", price: "$1500" },
    { title: "Custom Domain & Development", price: "$1000" },
    { title: "(Google Ads, Meta Ads, SEO, Copywriting)", price: "$250" },
  ];
  
  return (
    <>
      <div id="delete-vars-btn" className="hero_header is-home affiliate-model">
        {/* Background gradient for affiliate model */}
        <div data-scroll-reveal="" className="hero_content is-home">
          <h2 data-scroll-reveal="" className="heading-gradient is-bg-cream"><span className="newline">All Valued at Over $3000
          </span>
          </h2>

          <div className="global-padding">
            <div className="container-large">
              <Services servicesArr={servicesArr} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

