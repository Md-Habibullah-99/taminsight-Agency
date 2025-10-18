

import { withBase } from "../../utils/withBase"



export default function PartnershipHero() {
  return (
    <div id="delete-vars-btn" className="hero_header whyshouldjoin_header">
      <div className="hero_header_title-container whyshouldjoin_title-container">
        <h6 className="">JOIN US TODAY TO</h6>
        <h2 className="">
          <div className="headlng-gradient">
            <div className="partnership_header-title">Become Our Partner For Collaborative</div>
            <div className="partnership_header-title">Business Growth & Success</div>
          </div>

        </h2>
        <div className="flex flex-col gap-5 ">
          {/* <div className="whyshouldjoin_title-mini">
            Our affiliate program offers an incredible opportunity to turn your influence into income. As a member of our program, you’ll gain access to a wide range of services, allowing you to promote what resonates best with your audience.
          </div> */}
          <p>Stay in control and monitor your projects </p>
          <p>effortlessly with a swanky website for </p>
          <p>completely FREE</p>
          
        </div>
      </div>
      <div className="flex flex-col place-content-end ">
        <div className="affiliate-image-outer-container">
          {/* Make image fluid on small screens; cap width on medium+ */}
          <img
            src={withBase('/images/cats/TheWahCat.jpg')}
            alt=""
            className="rounded-4xl w-full md:w-96 max-w-full"
          />
        </div>
      </div>
      
    </div>
  )
}