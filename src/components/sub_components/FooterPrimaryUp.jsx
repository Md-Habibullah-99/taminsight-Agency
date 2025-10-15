
import { withBase } from '../../utils/withBase.js';


export default function FooterPrimaryUp() {
  return (
    <div className="footer-primary-up-container">
      <div className="footer-primary-up">
        <div className="footer-primary-up_title">

          <p className="footer-primary-up-title_header">Click<img
            src={withBase('/images/footerElements/footerPrimaryArrow/right-arrow-icon.png')}
            alt=""
            className="footer-primary-up-title_header_arrow" />Copy<img
              src={withBase('/images/footerElements/footerPrimaryArrow/right-arrow-icon.png')}
              alt=""
              className="footer-primary-up-title_header_arrow" />Contact</p>
        </div>
        <h2 className="title title__main">
          <a className="email-link-click-to-copy" href="mailto:taminsight@gmail.com">taminsight@gmail.com</a>
        </h2>
      </div>
    </div>
  )
}