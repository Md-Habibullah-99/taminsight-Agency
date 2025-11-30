

import BecomeSoemthingButton from "../sub_components/BecomeAffiliateButton"

export default function SharedResponsibility() {
  return (
    <div className="shared_reasponsibility-main-container">
      <div className="shared_reasponsibility-sub-container">
        <div className="reasponsibility_content-container">
          <h2>Shared Responsibility, Collaborative Growth</h2>
          <div>
            <h6>Kickstart your entrepreneurial </h6>
            <h6>journey with Reestify today! </h6>
          </div>
          <div>
            <BecomeSoemthingButton label="Become Our Partner" />
          </div>
        </div>
        <div className="reasponsibility_content-container">
          <h5>Taminsight's Responsibilitys</h5>
          <div className="responsibility_content-body"></div>
        </div>
        <div className="reasponsibility_content-container">
          <h5>Partner's Responsibilitys</h5>
        </div>
      </div>
    </div>
  )
}

