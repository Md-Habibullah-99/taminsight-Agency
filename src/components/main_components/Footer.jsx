
import FooterPrimaryUp from "../sub_components/FooterPrimaryUp";
import FooterPrimaryBottom from "../sub_components/FooterPrimaryBottom";
import FooterSecondary from "../sub_components/FooterSecondary";

export default function Footer({ showPrimaryUp = true, showPrimaryBottom = true, showSecondary = true }) {
  return (
    <footer className="footer">
      <div className="footer-primary">
        {showPrimaryUp && (
          <FooterPrimaryUp />
        )}
        {showPrimaryBottom && (
          <FooterPrimaryBottom />
        )}
      </div>
      {showSecondary && (
        <FooterSecondary />
      )}
    </footer>
  );
}