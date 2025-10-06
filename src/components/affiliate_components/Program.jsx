

import PartnerCard from "../sub_components/PartnerCard";

export default function Program() {
  const cards = [
    {
      title: "Star",
      frequency: "Bi-Weekly Withdrawal",
      percent: "5 %",
      features: [
        "Solo Project Enrollment <br />",
        "5% Commission<br />",
        "Discount Code<br />",
      ],
    },
    {
      title: "Champion",
      frequency: "Weekly Withdrawal",
      percent: "10 %",
      features: [
        "Monthly Project Enrollment<br />",
        "8% Commission<br />",
        "10% Discount Code<br />",
      ],
    },
    {
      title: "Legacy",
      frequency: "24/7 Withdrawal",
      percent: "15 %",
      features: [
        "Yearly Project Enrollment<br />",
        "10% Commission<br />",
        "15% Discount Code<br />",
      ],
    },
    {
      // last special card
      title: "Become Our Reestify Partner",
      frequency:
        'Join as Our Partner and Earn Upto <span class="highlight">40%</span> Recurring Profit <br/><br/><br/><br/> <a href="http://www.guthib.com" target="_blank" rel="noopener noreferrer">Learn more</a>',
      isLast: true,
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
                  <div>AFFILIATE PROGRAM</div>
                </div>
                <h1 data-scroll-reveal="" className="heading-gradient is-bg-cream"><span className="newline">How Our Affiliate Model
                </span><span className="newline">Works</span>
                </h1>
                <div className="program-title-description">
                  Join our Affiliate Program, refer your unique link to your community, and enjoy your commissions from the moment a client joins Reestify subscription plan
                </div>
              </div>
            </div>

            <div className="affiliate-partner-cart-container">
              {cards.map((c, idx) => (
                <PartnerCard
                  key={idx}
                  title={c.title}
                  frequency={c.frequency}
                  percent={c.percent}
                  features={c.features}
                  isLast={c.isLast}
                />
              ))}
            </div>

          </div>
          <div className="affiliate-partner-bottom-button-container">

            <a href="#/affiliate" target="_blank" className="btn_cta btn-border w-inline-block become-affiliate-btn">
              <div className="btn_content">
                <div className="weight-bold">Become Our Affiliate Partner</div><svg xmlns="http://www.w3.org/2000/svg"
                  className="svgsprite btn_icon icon" width="100%" viewBox="0 0 16 16" fill="none">
                  <path d="M9.33333 4L13.5 8L9.33333 12M13 8H2.5" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="square"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}