import React, { useEffect, useLayoutEffect, useRef } from 'react';

/**
 * VerticalMarquee: rAF-driven vertical scroller duplicating children sequences for a seamless loop.
 * Props:
 * - speed: pixels per second (number)
 * - direction: 'up' | 'down'
 * - className: outer container classes (keeps existing layout styles)
 */
export default function VerticalMarquee({ speed = 60, direction = 'up', className = '', children }) {
  const trackRef = useRef(null);
  const seqRef = useRef(null);
  const offsetRef = useRef(0);
  const lastRef = useRef(0);
  const rafRef = useRef(0);
  const seqHeightRef = useRef(0);

  // Measure the height of one sequence
  const measure = () => {
    if (!seqRef.current) return;
    const h = seqRef.current.getBoundingClientRect().height;
    seqHeightRef.current = h || 0;
  };

  useLayoutEffect(() => {
    measure();
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReduced && prefersReduced.matches) return;

    const track = trackRef.current;
    if (!track) return;

    let running = true;
    const dir = direction === 'down' ? 1 : -1;
    // Ensure we have a correct measurement, also after images load
    const images = seqRef.current ? Array.from(seqRef.current.querySelectorAll('img')) : [];
    const onAnyImageLoad = () => {
      const prevH = seqHeightRef.current;
      measure();
      // Set initial offset: for down direction keep offset in [-H, 0)
      if (prevH === 0 && seqHeightRef.current > 0) {
        offsetRef.current = dir === 1 ? -seqHeightRef.current + 1 : 0; // +1px prevents seam
        track.style.transform = `translate3d(0, ${offsetRef.current}px, 0)`;
      }
    };
    images.forEach((img) => {
      if (img.complete) {
        // already loaded
        onAnyImageLoad();
      } else {
        img.addEventListener('load', onAnyImageLoad, { once: true });
        img.addEventListener('error', onAnyImageLoad, { once: true });
      }
    });

    const loop = (now) => {
      if (!running) return;
      const last = lastRef.current || now;
      const dt = (now - last) / 1000;
      lastRef.current = now;

      // advance offset
      offsetRef.current += dir * speed * dt;

      const seqH = seqHeightRef.current;
      if (seqH > 0) {
        // wrap offset to avoid large numbers and keep loop seamless
        if (dir === -1 && offsetRef.current <= -seqH) {
          offsetRef.current += seqH;
        } else if (dir === 1 && offsetRef.current >= 0) {
          // for downward, keep offset in [-seqH, 0)
          offsetRef.current -= seqH;
        }
      }

      // apply transform
      track.style.transform = `translate3d(0, ${offsetRef.current}px, 0)`;

      rafRef.current = requestAnimationFrame(loop);
    };

    const start = () => {
      lastRef.current = performance.now();
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(loop);
    };
    const stop = () => cancelAnimationFrame(rafRef.current);
    const onVis = () => (document.hidden ? stop() : start());
    const onResize = () => {
      const oldSeqH = seqHeightRef.current;
      measure();
      // keep offset in valid range based on direction
      if (seqHeightRef.current > 0) {
        if (direction === 'down') {
          // keep in [-H, 0)
          while (offsetRef.current >= 0) offsetRef.current -= seqHeightRef.current;
          while (offsetRef.current < -seqHeightRef.current) offsetRef.current += seqHeightRef.current;
        } else {
          // keep in [0, H)
          while (offsetRef.current <= -seqHeightRef.current) offsetRef.current += seqHeightRef.current;
          while (offsetRef.current > 0) offsetRef.current -= seqHeightRef.current;
        }
      } else {
        offsetRef.current = 0;
      }
      track.style.transform = `translate3d(0, ${offsetRef.current}px, 0)`;
    };

    start();
    document.addEventListener('visibilitychange', onVis);
    window.addEventListener('resize', onResize);
    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('resize', onResize);
      images.forEach((img) => {
        img.removeEventListener && img.removeEventListener('load', onAnyImageLoad);
        img.removeEventListener && img.removeEventListener('error', onAnyImageLoad);
      });
    };
  }, [speed, direction]);

  return (
    <div className={className}>
      <div className="ai-marquee-track" ref={trackRef}>
        <div className="ai-marquee-seq" ref={seqRef}>
          {children}
        </div>
        <div className="ai-marquee-seq" aria-hidden="true">
          {children}
        </div>
        <div className="ai-marquee-seq" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
