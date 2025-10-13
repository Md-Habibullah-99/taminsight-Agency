

import { withBase } from "../../utils/withBase";

import BecomeAffiliateButton from "../sub_components/BecomeAffiliateButton";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function AffiliateHero() {
  const leftTrackRef = useRef(null);
  const leftSeqRef = useRef(null);
  const rightTrackRef = useRef(null);
  const rightSeqRef = useRef(null);

  const setupMarquee = (trackRef, seqRef, { speed, direction }) => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReduced && prefersReduced.matches) return () => {};

    const track = trackRef.current;
    const seq = seqRef.current;
    if (!track || !seq) return () => {};

    const measure = () => seq.getBoundingClientRect().height || 0;

    const state = {
      offset: 0,
      last: 0,
      seqH: 0,
      dir: direction === 'down' ? 1 : -1,
      rafId: 0,
    };

    const onAnyImageLoad = () => {
      const prevH = state.seqH;
      state.seqH = measure();
      if (prevH === 0 && state.seqH > 0) {
        state.offset = state.dir === 1 ? -state.seqH + 1 : 0; // start just inside to hide seam
        track.style.transform = `translate3d(0, ${state.offset}px, 0)`;
      }
    };

    // attach load handlers for images in first sequence
    const imgs = Array.from(seq.querySelectorAll('img'));
    imgs.forEach((img) => {
      if (img.complete) onAnyImageLoad();
      else {
        img.addEventListener('load', onAnyImageLoad, { once: true });
        img.addEventListener('error', onAnyImageLoad, { once: true });
      }
    });

    // initial measure
    state.seqH = measure();
    if (state.dir === 1 && state.seqH > 0) {
      state.offset = -state.seqH + 1;
    }
    track.style.transform = `translate3d(0, ${state.offset}px, 0)`;

    const loop = (now) => {
      const last = state.last || now;
      const dt = (now - last) / 1000;
      state.last = now;
      state.offset += state.dir * speed * dt;

      const H = state.seqH;
      if (H > 0) {
        if (state.dir === -1 && state.offset <= -H) {
          state.offset += H;
        } else if (state.dir === 1 && state.offset >= 0) {
          state.offset -= H;
        }
      }

      track.style.transform = `translate3d(0, ${state.offset}px, 0)`;
      state.rafId = requestAnimationFrame(loop);
    };

    const start = () => {
      state.last = performance.now();
      cancelAnimationFrame(state.rafId);
      state.rafId = requestAnimationFrame(loop);
    };
    const stop = () => cancelAnimationFrame(state.rafId);
    const onVis = () => (document.hidden ? stop() : start());
    const onResize = () => {
      const oldH = state.seqH;
      state.seqH = measure();
      if (state.seqH > 0) {
        if (state.dir === 1) {
          while (state.offset >= 0) state.offset -= state.seqH;
          while (state.offset < -state.seqH) state.offset += state.seqH;
        } else {
          while (state.offset <= -state.seqH) state.offset += state.seqH;
          while (state.offset > 0) state.offset -= state.seqH;
        }
      } else {
        state.offset = 0;
      }
      track.style.transform = `translate3d(0, ${state.offset}px, 0)`;
    };

    start();
    document.addEventListener('visibilitychange', onVis);
    window.addEventListener('resize', onResize);

    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('resize', onResize);
      imgs.forEach((img) => {
        img.removeEventListener && img.removeEventListener('load', onAnyImageLoad);
        img.removeEventListener && img.removeEventListener('error', onAnyImageLoad);
      });
    };
  };

  useEffect(() => {
    const cleanLeft = setupMarquee(leftTrackRef, leftSeqRef, { speed: 60, direction: 'down' });
    const cleanRight = setupMarquee(rightTrackRef, rightSeqRef, { speed: 100, direction: 'up' });
    return () => {
      cleanLeft && cleanLeft();
      cleanRight && cleanRight();
    };
  }, []);

  return (
    <>
      <div id="delete-vars-btn" className="hero_header is_affiliate">
        <div className="hero_header_title-container">
          <div className="affiliate_hero-title-mini">
            SHARE, GET PAID, REPEAT
          </div>
          <h1 className="work_areas">
            <div className="gradient-brand">Join the Forces of</div>

            <div className="headlng-gradient">Taminsight Affiliates</div>

          </h1>
          <div className="affiliate_hero-title-mini">
            Become our affiliate to enjoy exclusive perks, dedicated support, and unlimited earning potential!
          </div>
            <BecomeAffiliateButton />
          
        </div>
        <div className="affiliate-image-outer-container">
          {/* Left column: track with 3 sequences */}
          <div className="h-screen affiliate-image-inner-container">
            <div className="ai-marquee-track" ref={leftTrackRef}>
              <div className="ai-marquee-seq" ref={leftSeqRef}>
                <img src={withBase('/images/cats/TheWahCat.jpg')} alt="" className="affiliate-hero-image" />
                <img src={withBase('/images/cats/cat01.jpg')} alt="" className="affiliate-hero-image" />
                <img src={withBase('/images/cats/cat02.jpg')} alt="" className="affiliate-hero-image" />
              </div>
              <div className="ai-marquee-seq" aria-hidden="true">
                <img src={withBase('/images/cats/TheWahCat.jpg')} alt="" className="affiliate-hero-image" />
                <img src={withBase('/images/cats/cat01.jpg')} alt="" className="affiliate-hero-image" />
                <img src={withBase('/images/cats/cat02.jpg')} alt="" className="affiliate-hero-image" />
              </div>
              <div className="ai-marquee-seq" aria-hidden="true">
                <img src={withBase('/images/cats/TheWahCat.jpg')} alt="" className="affiliate-hero-image" />
                <img src={withBase('/images/cats/cat01.jpg')} alt="" className="affiliate-hero-image" />
                <img src={withBase('/images/cats/cat02.jpg')} alt="" className="affiliate-hero-image" />
              </div>
            </div>
          </div>

          {/* Right column: track with 3 sequences */}
          <div className="h-screen affiliate-image-inner-container">
            <div className="ai-marquee-track" ref={rightTrackRef}>
              <div className="ai-marquee-seq" ref={rightSeqRef}>
                <img src={withBase('/images/cats/cat03.jpg')} alt="" className="affiliate-hero-image" />
                <img src={withBase('/images/cats/cat04.jpg')} alt="" className="affiliate-hero-image" />
                <img src={withBase('/images/cats/cat05.jpg')} alt="" className="affiliate-hero-image" />
              </div>
              <div className="ai-marquee-seq" aria-hidden="true">
                <img src={withBase('/images/cats/cat03.jpg')} alt="" className="affiliate-hero-image" />
                <img src={withBase('/images/cats/cat04.jpg')} alt="" className="affiliate-hero-image" />
                <img src={withBase('/images/cats/cat05.jpg')} alt="" className="affiliate-hero-image" />
              </div>
              <div className="ai-marquee-seq" aria-hidden="true">
                <img src={withBase('/images/cats/cat03.jpg')} alt="" className="affiliate-hero-image" />
                <img src={withBase('/images/cats/cat04.jpg')} alt="" className="affiliate-hero-image" />
                <img src={withBase('/images/cats/cat05.jpg')} alt="" className="affiliate-hero-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}