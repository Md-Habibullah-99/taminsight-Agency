import React, { useEffect, useState } from "react";
import { withBase } from '../../utils/withBase.js';

export default function Intro() {

  const names = ["Tamim", "Shanjida Ferdous"]
  const [nameIndex, setNameIndex] = useState(0)
  const [imgIndex, setImgIndex] = useState(0)
  // Control how long the image fade transition takes (matches CSS variable --intro-fade-duration)
  const INTRO_FADE_DURATION_MS = 1000;
  // Control how frequently the names and images change
  const NAME_CYCLE_INTERVAL_MS = 4000;
  const IMAGE_CYCLE_INTERVAL_MS = NAME_CYCLE_INTERVAL_MS; // keep > INTRO_FADE_DURATION_MS

  useEffect(() => {
    const id = setInterval(() => {
      setNameIndex((i) => (i + 1) % names.length)
    }, NAME_CYCLE_INTERVAL_MS)
    return () => clearInterval(id)
    // names is constant within this component; length won't change at runtime
  }, [])

  // Auto-cycle intro images every 3 seconds with the same fade effect timing as projects
  useEffect(() => {
    const id = setInterval(() => {
      setImgIndex((i) => (i + 1) % 2) // we currently render 2 images below
    }, IMAGE_CYCLE_INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="quick-intro" className="intro">
      <div className="c-bg-filled into-gradient"></div>
      <div className="global-padding global-padding-section">
        <div className="container-large">
          <div className="quickintro-grid">
            <div className="quickintro-grid__item is-left">
              <div data-scroll-reveal="" className="text-eyebrow is-intro">
                <div className="icon-16">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 200 200"
                    fill="none" className="svgsprite">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M120 0H80V51.7157L43.4315 15.1472L15.1472 43.4314L51.7158 80H0V120H51.7157L15.1472 156.568L43.4315 184.853L80 148.284V200H120V148.284L156.569 184.853L184.853 156.569L148.284 120H200V80H148.284L184.853 43.4314L156.569 15.1471L120 51.7157V0Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className="pl-8 fw2">Meet Insight Builder<br /></div>
              </div>
              <h4>We are the insight of the Taminsight.</h4>
              <div className="quickintro-focus"><span className="quickintro-focus-area">
                <span></span></span>
                <span className="quickintro-focus-area"><svg
                  xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"
                  className="svgsprite svg-s-32">
                  <path
                    d="M11.8201 4L14.4574 4L20 11.5L14.4574 19H11.8201L14.3956 15.5239C15.467 14.0772 16.2294 13.066 16.6827 12.4902L5 12.4902L5 10.4888L16.6827 10.4888C16.1332 9.78652 15.3709 8.7823 14.3956 7.47612L11.8201 4Z"
                    fill="currentColor"></path>
                </svg><span>{
                  names[nameIndex]
                }</span></span>
              </div>
            </div>

            <div className="quickintro-grid__item is-right">
              <div className="quickintro-hero" style={{ "--intro-fade-duration": `${INTRO_FADE_DURATION_MS}ms` }}>

                <img
                  // srcSet={[500, 800].map(w => `${withBase('/images/selectedProjects/packaging/tamim-khan-packaging-03-' + w + '.jpg')} ${w}w`).join(', ')}
                  alt=""
                  src={withBase('/images/sanjida-ferdous_profile.webp')}
                  loading="lazy" className={`quickintro-img ${imgIndex === 1 ? 'style-show' : ''}`} />
                <img sizes="(max-width: 1000px) 100vw, 1000px"
                  // srcSet={[500, 800, 1080, 1600].map(w => `${withBase('/images/tamim_profile_' + w + '.png')} ${w}w`).join(', ')}
                  src={withBase('/images/tamim_profile.jpg')}
                  loading="lazy" className={`quickintro-img ${imgIndex === 0 ? 'style-show' : ''}`} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}