

import BecomeSoemthingButton from "../sub_components/BecomeAffiliateButton"
import Responsibilities_Cards from "../sub_components/Responsibilities_Cards";


export default function SharedResponsibility() {
  const T_responsibility = [
    {
      title: "Project Management",
      description: "Efficiently manage all aspects of the partnership program",
      imgSrc: "https://cdn.prod.website-files.com/65111bc3d36d02e461763c5f/655097f7746087a0082c2a85_fast-work.json",
    }
    ,
    {
      title: "Quality Assurance",
      description: "Ensure high-quality services and products for partners and clients",
      imgSrc: "https://cdn.prod.website-files.com/65111bc3d36d02e461763c5f/655097f7746087a0082c2a85_fast-work.json",
    }
    ,
    {
      title: "Team Collaboration",
      description: "Foster a collaborative environment for seamless teamwork",
      imgSrc: "https://cdn.prod.website-files.com/65111bc3d36d02e461763c5f/655097f7746087a0082c2a85_fast-work.json",
    }
    ,
    {
      title: "Coustomer Support",
      description: "Provide responsive and helpful support to partners and clients",
      imgSrc: "https://cdn.prod.website-files.com/65111bc3d36d02e461763c5f/655097f7746087a0082c2a85_fast-work.json",
    }
  ]
  const P_responsibility = [
    {
      title: "Client Acquisition",
      description: "Focus on attracting clients to the partnership program",
      imgSrc: "https://cdn.prod.website-files.com/65111bc3d36d02e461763c5f/655097f7746087a0082c2a85_fast-work.json",
    }
    ,
    {
      title: "Sales Pitch",
      description: "Utilize social media and interpersonal skills to convince potential clients",
      imgSrc: "https://cdn.prod.website-files.com/65111bc3d36d02e461763c5f/655097f7746087a0082c2a85_fast-work.json",
    }
    ,
    {
      title: "Promotional Activities",
      description: "Engage in promotional efforts to boost program awareness",
      imgSrc: "https://cdn.prod.website-files.com/65111bc3d36d02e461763c5f/655097f7746087a0082c2a85_fast-work.json",
    }
  ]
  
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
          <div className="responsibility_content-body">
            <Responsibilities_Cards content_arr={T_responsibility} />
          </div>
        </div>
        <div className="reasponsibility_content-container">
          <h5>Partner's Responsibilitys</h5>
          <div className="responsibility_content-body">
            <Responsibilities_Cards content_arr={P_responsibility} />
          </div>
        </div>
      </div>
    </div>
  )
}

