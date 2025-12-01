
import UnderDevelopmentNotice from "../sub_components/UnderDevelopmentNotice";
import PartnershipHero from "../partnership_components/PartnershipHero";
import PartnershipHowitsWorks from "../partnership_components/PartnershipHowitsWorks";
import PartnershipBenifits from "../partnership_components/PartnershipBenifits";
import ValuedOver from "../partnership_components/ValuedOver";
import SharedResponsibility from "../partnership_components/SharedResponsibility";
import LookingFor from "../partnership_components/LookingFor";

import PartnershipFAQItem from "../partnership_components/PartnershipFAQs";
import AffiliateSupport from "../affiliate_components/AffiliateSupport";
import BecomeAffiliatePartnerSection from "../affiliate_components/BecomeAffiliatePartnerSection";


export default function Partnership() {
  return (
    <>
      <UnderDevelopmentNotice />
      <PartnershipHero />
      <PartnershipHowitsWorks />
      <PartnershipBenifits />
      <ValuedOver />
      <SharedResponsibility />
      <LookingFor />
      <PartnershipFAQItem />
      <AffiliateSupport />
      <BecomeAffiliatePartnerSection text={"Become Our Partner"} />
    </>
  );
}