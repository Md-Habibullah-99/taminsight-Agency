

import LookingForCard from "../sub_components/LookingForCard"
import BecomeSoemthingButton from "../sub_components/BecomeAffiliateButton"

export default function LookingFor() {
  
  const card_arr = [
    {
      img: "/images/cats/horaizontalCat.jpg",
      title: "Individual Entrepreneur",
      description: "Get access to a virtual team & propel your business forward without the cost of in-house employees." 
    }
    ,
    {
      img: "/images/cats/horaizontalCat.jpg",
      title: "Strong Interpersonnel",
      description: "Leverage your expertise in building relationships and effective communication with clients and partners." 
    }
    ,
    {
      img: "/images/cats/horaizontalCat.jpg",
      title: "Marketing Agencies",
      description: "Add design and development services and transform into a complete versatile platform." 
    }
    ,
    {
      img: "/images/cats/horaizontalCat.jpg",
      title: "Social Media Influencers",
      description: "Capitalize on your social media influence and earn more with our partnership program." 
    }
  ]

  return (
    <section id="how-it-works" className="services">
      <div id="process" className="c-bg-filled gradient-process"></div>
      <div className="global-padding global-padding-section">
        <div className="container-large">
          <div className="section-header">
            <div className="section_header_wrapper">
              <h2 data-scroll-reveal="" className="heading-gradient">
                <span className="newline">What Are We Looking For?</span>
                </h2>
              <div data-scroll-reveal="" className="text-eyebrow support-small-description">
                <div >Learn about essentials to join as our Partner</div>
              </div>
            </div>
          </div>
          <LookingForCard card_arr={card_arr} />
          <div className="become_something-form-looking-for">
            <BecomeSoemthingButton label="Become Our Partner" />
          </div>
        </div>
      </div>
    </section>
  )
}


