import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
  <header className="navbar">
    <div id="js-navbar-top" className="navbar_top">
      <div className="navbar-grid">
        <Link to="/" aria-current="page"
          className="navbar_logo w-inline-block w--current">

          <svg width="368" height="30" viewBox="0 0 368 30" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="footer-primary-left_logo">
            <g clipPath="url(#clip0_133_30)">
              <path d="M13.1203 29.0421V9.70816H0.00418091V0.734375H37.2773V9.70816H24.1528V29.0421H13.1203Z"
                fill="#000000" />
              <path
                d="M45.1236 0.734375H58.2439L73.4271 29.0421H61.0041L58.7701 24.1981H44.5975L42.3676 29.0421H29.9404L45.1236 0.734375ZM47.8003 17.2872H55.5714L51.6963 8.93564L47.8003 17.2872Z"
                fill="#000000" />
              <path
                d="M74.2623 0.693359H88.08L99.1124 14.8451L110.17 0.693359H123.95V28.9969H112.926V13.8972L101.893 28.9969H96.3522L85.2989 13.8972V28.9969H74.2623V0.693359Z"
                fill="#000000" />
              <path
                d="M142.52 0.693359V8.96978H131.483V0.693359H142.52ZM134.047 28.9969L134.089 24.8461H131.483V11.1955H142.52V24.867L140.014 29.0178L134.047 28.9969Z"
                fill="#000000" />
              <path
                d="M174.306 0.693359H185.363V28.9969H172.94L157.736 11.7091V28.9969H146.7V0.693359H161.883L174.306 15.6803V0.693359Z"
                fill="#000000" />
              <path
                d="M208.543 11.6421C216.44 12.0597 227.539 12.59 227.518 19.6889C227.518 27.7732 218.252 29.6899 208.309 29.6899C198.367 29.6899 190.157 28.4705 189.101 19.6889H200.664C201.916 21.877 204.839 22.449 208.305 22.449C211.771 22.449 215.951 21.877 215.951 19.6889C215.951 18.4361 212.519 18.2566 208.076 18.0478C200.179 17.6302 189.08 17.0999 189.101 10.0219C189.101 1.93757 198.367 0 208.309 0C218.231 0.0626369 226.466 1.17757 227.518 10.0219H215.955C214.703 7.79203 211.779 7.2617 208.309 7.2617C204.839 7.2617 200.668 7.77115 200.668 10.0219C200.668 11.2663 204.1 11.4333 208.543 11.6421Z"
                fill="#000000" />
              <path d="M241.494 0.693359V28.9969H230.458V0.693359H241.494Z" fill="#000000" />
              <path
                d="M263.981 13.4547H283.211V29.6901H277.694L277.143 25.2847C273.857 28.5293 268.867 29.686 264.064 29.686C253.412 29.6442 244.693 26.5708 244.735 15.8724V13.8096C244.693 3.09035 253.412 0.0295001 264.064 -0.00390625C273.878 -0.00390625 281.966 2.6686 283.211 11.3877H271.481C270.733 10.4132 269.665 9.73433 268.466 9.47097C267.026 9.11767 265.547 8.9479 264.064 8.9657C259.538 9.02834 255.713 9.87184 255.767 14.4819V15.1793C255.705 19.8311 259.525 20.6329 264.064 20.6955C268.424 20.6955 271.205 20.4408 272.867 18.2944H263.981V13.4547Z"
                fill="#000000" />
              <path
                d="M299.271 19.3299V28.9969H288.234V0.693359H299.271V10.3603H315.844V0.693359H326.898V28.9969H315.844V19.3299H299.271Z"
                fill="#000000" />
              <path d="M343.843 29.0421V9.70816H330.727V0.734375H368V9.70816H354.88V29.0421H343.843Z" fill="#000000" />
            </g>
            <defs>
              <clipPath id="clip0_133_30">
                <rect width="368" height="29.6941" fill="black" />
              </clipPath>
            </defs>
          </svg>
          </Link>
        <div className="menu_list">
          <div className="menu_list_wrapper">
            <Link to="/affiliate"
              className="btn btn_link w-inline-block"><em><span data-text="Affiliate">Affiliate</span></em></Link>
            <a
              href="https://www.figma.com/deck/rBQAlmywVditVjZ3lsQj4c/Taminsight_Portfolio-2025_Branding-Agency?node-id=1-257&viewport=-159%2C-129%2C0.73&t=DImIymB1uDCa3ur9-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
              className="btn btn_link w-inline-block" target="_blank"><em><span data-text="Company Deck">Company Deck</span></em></a>
              <a
              href="https://www.linkedin.com/pulse/%E0%A6%AA%E0%A6%AF%E0%A6%95%E0%A6%9C-%E0%A6%A1%E0%A6%9C%E0%A6%87%E0%A6%A8%E0%A6%B0-%E0%A6%AA%E0%A6%B0%E0%A6%95%E0%A6%B0%E0%A6%AF-%E0%A6%85%E0%A6%AD%E0%A6%9C%E0%A6%9E%E0%A6%A4-%E0%A6%93-%E0%A6%9A%E0%A6%AF%E0%A6%B2%E0%A6%9E%E0%A6%9C-md-tamim-khan"
              className="btn btn_link w-inline-block" target="_blank"><em><span data-text="Case Study">Case
                  Study</span></em></a>
          </div>
          <div className="navbar_cta"><a href="#" target="_blank" className="btn_cta btn-ripple btn-nav w-inline-block">
              <div className="btn-ripple_effect"><span></span></div>
              <div className="btn-ripple_text text-center"><span data-text="SAY HI">Let's talk</span></div>
            </a></div>
          <div className="navbar_toggle">
            <div id="humburger-btn" className="btn_menu"><span></span><span></span></div>
          </div>
        </div>
      </div>
    </div>
    <div id="js-navbar-menu" className="navbar_menu">
      <div className="navbar_menu_wrapper">
        <div className="navbar_menu_links"><a href="#" aria-current="page"
            className="btn_link is-only-mobile w--current">Home</a>
          <a href="https://www.figma.com/deck/rBQAlmywVditVjZ3lsQj4c/Taminsight_Portfolio-2025_Branding-Agency?node-id=1-257&viewport=-159%2C-129%2C0.73&t=DImIymB1uDCa3ur9-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
            className="btn_link is-only-mobile">Company Deck</a>
          <a href="https://www.linkedin.com/pulse/%E0%A6%AA%E0%A6%AF%E0%A6%95%E0%A6%9C-%E0%A6%A1%E0%A6%9C%E0%A6%87%E0%A6%A8%E0%A6%B0-%E0%A6%AA%E0%A6%B0%E0%A6%95%E0%A6%B0%E0%A6%AF-%E0%A6%85%E0%A6%AD%E0%A6%9C%E0%A6%9E%E0%A6%A4-%E0%A6%93-%E0%A6%9A%E0%A6%AF%E0%A6%B2%E0%A6%9E%E0%A6%9C--tamim-khan"
            className="btn_link is-only-mobile">Case Study</a>
          {/* <a href="#" className="btn_link is-only-mobile">Tools</a> */}
          <a href="#" className="btn_link is-only-mobile">Contact</a>
        </div>
      </div>
    </div>
    <div id="js-menu-overlay" className="menu-overlay"></div>
  </header>
  );
};

export default Header;