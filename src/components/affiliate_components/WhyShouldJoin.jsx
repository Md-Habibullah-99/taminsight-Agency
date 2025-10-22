import { withBase } from "../../utils/withBase";

import BecomeSoemthingButton from "../sub_components/BecomeAffiliateButton";

export default function WhyShouldJoin() {
  return (
    <div id="delete-vars-btn" className="hero_header whyshouldjoin_header global-padding-section-left-right">
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
      <div className="hero_header_title-container whyshouldjoin_title-container">
        <h1 className="work_areas whyshouldjoin_heading">
          <div className="headlng-gradient">Why Should You Join the Affiliate Program?</div>
        </h1>
        <div className="flex flex-col gap-5">
          <div className="whyshouldjoin_title-mini">
            Our affiliate program offers an incredible opportunity to turn your influence into income. As a member of our program, you’ll gain access to a wide range of services, allowing you to promote what resonates best with your audience.
          </div>
          <div>
            <ul role="list" className="checklist is-pricing-checklist partner-card-checkout-list">
              <li className="featured-checklist">
                <div className="checklist-icon">
                  <div className="icon-16">
                    {/* keep same svg used before (check icon) */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" className="svgsprite">
                      <path fillRule="evenodd" clipRule="evenodd" className="path"
                        d="M6.0729 9.7882L12.1823 3.67881C12.5572 3.30391 13.1651 3.30391 13.54 3.67881V3.67881C13.9149 4.05371 13.9149 4.66157 13.54 5.03648L6.78 11.7964C6.38948 12.1869 5.75632 12.1869 5.36579 11.7964L2.67882 9.10942C2.30392 8.73452 2.30391 8.12668 2.67881 7.75177V7.75177C3.05372 7.37685 3.66157 7.37685 4.03648 7.75176L6.0729 9.7882Z"
                        fill="white"></path>
                    </svg>
                  </div>
                </div>
                <div className="font-bold">Highest Affiliate Commission</div>
              </li>
              <li className="featured-checklist">
                <div className="checklist-icon">
                  <div className="icon-16">
                    {/* keep same svg used before (check icon) */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" className="svgsprite">
                      <path fillRule="evenodd" clipRule="evenodd" className="path"
                        d="M6.0729 9.7882L12.1823 3.67881C12.5572 3.30391 13.1651 3.30391 13.54 3.67881V3.67881C13.9149 4.05371 13.9149 4.66157 13.54 5.03648L6.78 11.7964C6.38948 12.1869 5.75632 12.1869 5.36579 11.7964L2.67882 9.10942C2.30392 8.73452 2.30391 8.12668 2.67881 7.75177V7.75177C3.05372 7.37685 3.66157 7.37685 4.03648 7.75176L6.0729 9.7882Z"
                        fill="white"></path>
                    </svg>
                  </div>
                </div>
                <div className="font-bold">Easy & Fast Withdrawals</div>
              </li>
              <li className="featured-checklist">
                <div className="checklist-icon">
                  <div className="icon-16">
                    {/* keep same svg used before (check icon) */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" className="svgsprite">
                      <path fillRule="evenodd" clipRule="evenodd" className="path"
                        d="M6.0729 9.7882L12.1823 3.67881C12.5572 3.30391 13.1651 3.30391 13.54 3.67881V3.67881C13.9149 4.05371 13.9149 4.66157 13.54 5.03648L6.78 11.7964C6.38948 12.1869 5.75632 12.1869 5.36579 11.7964L2.67882 9.10942C2.30392 8.73452 2.30391 8.12668 2.67881 7.75177V7.75177C3.05372 7.37685 3.66157 7.37685 4.03648 7.75176L6.0729 9.7882Z"
                        fill="white"></path>
                    </svg>
                  </div>
                </div>
                <div className="font-bold">Real-Time Tracking</div>
              </li>
              <li className="featured-checklist">
                <div className="checklist-icon">
                  <div className="icon-16">
                    {/* keep same svg used before (check icon) */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" className="svgsprite">
                      <path fillRule="evenodd" clipRule="evenodd" className="path"
                        d="M6.0729 9.7882L12.1823 3.67881C12.5572 3.30391 13.1651 3.30391 13.54 3.67881V3.67881C13.9149 4.05371 13.9149 4.66157 13.54 5.03648L6.78 11.7964C6.38948 12.1869 5.75632 12.1869 5.36579 11.7964L2.67882 9.10942C2.30392 8.73452 2.30391 8.12668 2.67881 7.75177V7.75177C3.05372 7.37685 3.66157 7.37685 4.03648 7.75176L6.0729 9.7882Z"
                        fill="white"></path>
                    </svg>
                  </div>
                </div>
                <div className="font-bold">Dedicated Affiliate Support</div>
              </li>
            </ul>
          </div>
        </div>
  <BecomeSoemthingButton />
      </div>
    </div>
  )
}