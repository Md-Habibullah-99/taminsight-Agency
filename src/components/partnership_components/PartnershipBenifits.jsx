




import Benifit_Card from "../sub_components/Benifits_Cards";
import BecomeSoemthingButton from "../sub_components/BecomeAffiliateButton";



export default function PartnershipBenifits() {
  const cards = [
    {
      title: "Get a Free Custom-Built Website *",
      frequency: "Stay in control and monitor your projects effortlessly with a swanky website for completely FREE",
      imgLink: "../../../public/images/cats/cat02.jpg",
      imgPlace: "1",
      features: [],
    },
    {
      title: "Daily Report",
      frequency: "Stay effortlessly informed with our accessible Daily Report",
      imgLink: "../../../public/images/cats/cat02.jpg",
      imgPlace: "1",
      features: [
        "Access to real-time reports <br />",
        "Monitor and track your progress <br />",
      ],
    },
    {
      title: "Dedicated Team",
      frequency: "Elevate your project's success with an exclusive dedicated team, customized JUST FOR YOU!",
      imgLink: "../../../public/images/cats/cat02.jpg",
      imgPlace: "2",
      features: [
        "Team solely focused on your project <br />",
        "Skilled project manager <br />",
      ],
    },
    // right side
    {
      title: "Collaborative Growth",
      frequency: "Unleash your business's potential with collaborative growth",
      imgLink: "../../../public/images/cats/cat02.jpg",
      imgPlace: "2",
      features: [
        "24/7 team support <br />",
        "Comprehensive marketing strategies <br />",
      ],
    },
    {
      title: "Enrollment for FREE",
      frequency: "Join as our partner and start earning",
      imgLink: "../../../public/images/cats/cat02.jpg",
      imgPlace: "1",
      features: [
        "$0 enrollment fee <br />",
        "Six star service <br />",
        "Speedy turnover <br />",
      ],
    },
    {
      title: "Steady Profit",
      frequency: "Maximize your earnings with effortless recurring profits!",
      imgLink: "../../../public/images/cats/cat02.jpg",
      imgPlace: "1",
      features: [
        "Earn up to 40% of project earnings <br />",
        "Unlock unlimited growth <br />",
        "Expand the network, soar the revenue <br />",
      ],
    },
  ];



  return (
    <>
          <div className="affiliate-program affiliate-program_container" id="program">
            {/* color gradient */}
            <div className="affiliate_program__bg"></div>
            <div className="global-padding global-padding-section">
              <div className="container-large">
                <div className="section-header">
                  <div className="section_header_wrapper">
                    <div data-scroll-reveal="" className="text-eyebrow is-process">
                      <div>BENEFITS</div>
                    </div>
                    <h1 data-scroll-reveal="" className="heading-gradient is-bg-cream"><span className="newline">Our Partnership Benefits
                    </span><span className="newline">That You’ll Love</span>
                    </h1>
                  </div>
                </div>
    
                <div className="affiliate-partner-cart-container">
                  {cards.map((c, idx) => (
                    <Benifit_Card
                      key={idx}
                      title={c.title}
                      frequency={c.frequency}
                      features={c.features}
                      imgLink={c.imgLink}
                      imgPlace={c.imgPlace}
                    />
                  ))}
                </div>
    
              </div>
              <div className="affiliate-partner-bottom-button-container">
                <BecomeSoemthingButton />
              </div>
            </div>
          </div>
        </>
  )
}