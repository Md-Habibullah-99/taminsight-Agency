



export default function PartnershipBenifits_last() {
  
  const our_partners = [
    {
      name: "Alicia Jarrett",
      title: "Co-Founder, SCO",
      image: "/images/cats/horaizontalCat.jpg",
      video_link: "https://www.guthib.com"
    }
    ,
    {
      name: "Mina Soliman",
      title: "Founder at Culturize.inc",
      image: "/images/cats/horaizontalCat.jpg",
      video_link: "https://www.guthib.com"
    }
  ]
  
  return (
    <section id="quick-intro" className="intro">
      <div className="c-bg-filled into-gradient"></div>
      <div className="global-padding global-padding-section">
        <div className="container-large">
          <div className="quickintro-grid">
            <div className="quickintro-grid__item is-left partner-benifits-last">
              <div data-scroll-reveal="" className="text-eyebrow is-intro">
                <div className="icon-16">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 200 200"
                    fill="none" className="svgsprite">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M120 0H80V51.7157L43.4315 15.1472L15.1472 43.4314L51.7158 80H0V120H51.7157L15.1472 156.568L43.4315 184.853L80 148.284V200H120V148.284L156.569 184.853L184.853 156.569L148.284 120H200V80H148.284L184.853 43.4314L156.569 15.1471L120 51.7157V0Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className="pl-8 fw2">BENEFITS<br /></div>
              </div>
              <h4>Our Partners</h4>
              <div className="our-partners-description">
                <p>Ready to join the elite league of partners and kickstart your money-making venture today?</p>
              </div>

              <div className="become-partner--benefits">
                <div className="price_card_footer"><a href="https://www.guthib.com/" target="_blank"
                  className="btn_cta btn-white w-inline-block">
                  <div className="btn_content"><span>Become Our Partner</span><svg xmlns="http://www.w3.org/2000/svg"
                    className="svgsprite btn_icon icon" width="100%" viewBox="0 0 16 16" fill="none">
                    <path d="M9.33333 4L13.5 8L9.33333 12M13 8H2.5" stroke="currentColor" stroke-width="1.5"
                      stroke-linecap="square"></path>
                  </svg></div>
                </a></div>

              </div>
{/* 
              <div className="ourpartners-bottom-part-is-left">
                <div className="ourpartners-bottom-part-is-left-elements">
                  <div className="ourpartners-bottom-part-is-left-title">125<div className="plus text-eyebrow is-intro">+</div></div>
                  <div className="ourpartners-bottom-part-is-left-description">Project Accomplished</div>
                </div>
                <div className="ourpartners-bottom-part-is-left-elements">
                  <div className="ourpartners-bottom-part-is-left-title">85<div className="plus text-eyebrow is-intro">+</div></div>
                  <div className="ourpartners-bottom-part-is-left-description">Happy Clients</div>
                </div>
              </div> */}

            </div>
            <div class="quickintro-grid__item is-right">
              <div class="our-partners-image_card-container" data-scroll-reveal="">
                {
                  our_partners.map((partner, idx) => (
                    <div class="our-partners-image-card" key={idx}>
                      <div class="our-partners-image-container">
                        
                        <div class="overlay-content">
                          <div className="play-icon">
                            <a href={partner.video_link}>
                            <img src="/public/images/play.png" alt="" />
                            </a>
                            </div>
                          <div className="overlay-content-text">
                            <h3>{partner.name}</h3>
                            <p>{partner.title}</p>
                          </div>
                        </div>

                        <img src={partner.image} alt="" />
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}



