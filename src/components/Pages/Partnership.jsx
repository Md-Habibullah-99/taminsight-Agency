
import UnderDevelopmentNotice from "../sub_components/UnderDevelopmentNotice";
import PartnershipHero from "../partnership_components/PartnershipHero";
import PartnershipHowitsWorks from "../partnership_components/PartnershipHowitsWorks";
import PartnershipBenifits from "../partnership_components/PartnershipBenifits";
import PartnershipFAQItem from "../partnership_components/PartnershipFAQs";


export default function Partnership() {
  return (
    <>
      <UnderDevelopmentNotice />
      <PartnershipHero />
      <PartnershipHowitsWorks />
      <PartnershipBenifits />
      <PartnershipFAQItem />
    </>
  );
}