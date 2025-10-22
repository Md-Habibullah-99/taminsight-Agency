import BecomeSoemthingButton from "../sub_components/BecomeAffiliateButton";

export default function AffiliateHero() {
  return (
    <>
      <div id="delete-vars-btn" className="hero_header is_affiliate">
        <div className="hero_header_title-container">
          <div className="affiliate_hero-title-mini">SHARE, GET PAID, REPEAT</div>
          <h1 className="work_areas">
            <div className="gradient-brand">Join the Forces of</div>
            <div className="headlng-gradient">Taminsight Affiliates</div>
          </h1>
          <div className="affiliate_hero-title-mini">
            Become our affiliate to enjoy exclusive perks, dedicated support, and unlimited earning potential!
          </div>
          <BecomeSoemthingButton />
        </div>
      </div>
    </>
  )
}