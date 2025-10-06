import React from "react";
import Footer from "../main_components/Footer";
import AffiliateModel from "../affiliate_components/Model";
import AffiliateHero from "../affiliate_components/AffiliateHero";
import Program from "../affiliate_components/Program";


function Affiliate() {
  return (
    <>
      <AffiliateHero />
      <AffiliateModel />
      <Program />
      <Footer />
    </>
  )
}

export default Affiliate;