import { Link } from "react-router-dom"

export default function BecomeAffiliateButton() {
  return (
    
      <Link to="/affiliate_form" className="btn_cta btn-border w-inline-block become-affiliate-btn">
        <div className="btn_content">
          <div className="weight-bold">Become Our Affiliate Partner</div><svg xmlns="http://www.w3.org/2000/svg"
            className="svgsprite btn_icon icon" width="100%" viewBox="0 0 16 16" fill="none">
            <path d="M9.33333 4L13.5 8L9.33333 12M13 8H2.5" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="square"></path>
          </svg>
        </div>
      </Link>
  )
}