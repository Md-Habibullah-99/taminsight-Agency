import { Link } from "react-router-dom"

// Reusable CTA button component
// Props:
// - to: Link target (default: "/affiliate_form")
// - label: Button text (default: "Become Our Affiliate Partner")
// - className: Extra classes to append (keeps default styles)
// - onClick: Optional click handler
// - icon: Toggle arrow icon visibility (default: true)
export default function BecomeAffiliateButton({
  to = "/affiliate_form",
  label = "Become Our Affiliate Partner",
  className = "",
  onClick,
  icon = true,
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      aria-label={label}
      className={`btn_cta btn-border w-inline-block become-affiliate-btn ${className}`}
    >
      <div className="btn_content">
        <div className="weight-bold">{label}</div>
        {icon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svgsprite btn_icon icon"
            width="100%"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M9.33333 4L13.5 8L9.33333 12M13 8H2.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            ></path>
          </svg>
        )}
      </div>
    </Link>
  )
}