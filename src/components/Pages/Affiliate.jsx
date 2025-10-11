import React from "react";
import Footer from "../main_components/Footer";
import AffiliateHero from "../affiliate_components/AffiliateHero";
import AffiliateModel from "../affiliate_components/Model";
import Program from "../affiliate_components/Program";
import WhyShouldJoin from "../affiliate_components/WhyShouldJoin";
import AffiliateFAQItem from "../affiliate_components/AffiliateFAQ";


function Affiliate() {
  return (
    <>
      <AffiliateHero />
      <AffiliateModel />
      <Program />
      <WhyShouldJoin />
      <AffiliateFAQItem />
      <Footer />
    </>
  )
}

export default Affiliate;