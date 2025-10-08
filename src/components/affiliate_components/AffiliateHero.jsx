

import { withBase } from "../../utils/withBase";

export default function AffiliateHero() {
  return (
    <>
      <div id="delete-vars-btn" className="hero_header is_affiliate">
        <div className="hero_header_title-container">
          <div className="affiliate_hero-title-mini">
            SHARE, GET PAID, REPEAT
          </div>
          <h1 className="work_areas">
            <div className="gradient-brand">Join the Forces of</div>

            <div className="headlng-gradient">Taminsight Affiliates</div>

          </h1>
          <div className="affiliate_hero-title-mini">
            Become our affiliate to enjoy exclusive perks, dedicated support, and unlimited earning potential!
          </div>
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
        <div className="flex flex-col place-content-end ">
          <div>
            <img src={withBase('/images/cats/TheWahCat.jpg')} alt="" className="rounded-4xl w-96" />
          </div>
          <div className="bg-white text-black text-center w-64 text-2xl flex flex-col gap-4 shrink rounded-2xl shadow-xl affiliate-hero-image-text ">
            <div className="text-3xl text-red-400 font-bold block ">
              <div className="inline -mt-2">125</div>
              <div className="text-5xl inline-block leading-none">+</div>
            </div>
            <div className="text-xl">Project Completed</div>
          </div>
        </div>
      </div>
    </>
  )
}