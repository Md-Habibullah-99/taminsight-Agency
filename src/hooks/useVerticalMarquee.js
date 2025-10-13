// JS-driven vertical marquee for columns of images
// Adapts the provided plain HTML/JS marquee to the AffiliateHero structure.

export default function useVerticalMarquee() {
  if (typeof window === 'undefined') return; // SSR-safe

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReduced && prefersReduced.matches) return;

  const containers = document.querySelectorAll(
    '.affiliate-image-outer-container .affiliate-image-inner-container'
  );
  if (!containers.length) return;

  const runners = [];

  function setupContainer(track) {
    if (track.dataset.marqueeInitialized === 'true') return null;
    track.dataset.marqueeInitialized = 'true';

    // Normalize track styles
    track.style.display = 'flex';
    track.style.flexDirection = 'column';
    track.style.alignItems = 'center';
    track.style.gap = '0px'; // avoid seams
    track.style.overflow = 'hidden';
    track.style.willChange = 'transform';

    // Wrap existing images into a single sequence
    const originalItems = Array.from(track.children).filter(
      (n) => n.tagName === 'IMG' || n.classList?.contains('affiliate-hero-image')
    );
    if (!originalItems.length) return null;

    const makeSequence = () => {
      const seq = document.createElement('div');
      seq.className = 'ai-marquee__inner';
      originalItems.forEach((item) => {
        seq.appendChild(item.cloneNode(true));
      });
      return seq;
    };

    // Clear existing children and append sequences
    track.textContent = '';
    const seqA = makeSequence();
    const seqB = makeSequence();
    const seqC = makeSequence();
    track.appendChild(seqA);
    track.appendChild(seqB);
    track.appendChild(seqC);

    // Animation variables
    let offset = 0; // px; negative moves up
    let last = performance.now();
    const pxPerSecAttr = parseFloat(track.getAttribute('data-speed'));
    const pxPerSec = Number.isFinite(pxPerSecAttr) ? pxPerSecAttr : 60;
    const dirAttr = (track.getAttribute('data-direction') || 'up').toLowerCase();
    const dir = dirAttr === 'down' ? 1 : -1; // 1 = down, -1 = up
    let rafId;

    function loop(now) {
      const dt = (now - last) / 1000;
      last = now;
      offset += dir * pxPerSec * dt;

      if (dir === -1) {
        // scrolling up: move first to end when it exits
        while (track.firstElementChild) {
          const first = track.firstElementChild;
          const firstHeight = first.getBoundingClientRect().height;
          if (offset <= -firstHeight) {
            offset += firstHeight;
            track.appendChild(first);
          } else {
            break;
          }
        }
      } else {
        // scrolling down: move last to front when offset crosses 0
        while (offset >= 0 && track.lastElementChild) {
          const lastEl = track.lastElementChild;
          const lastHeight = lastEl.getBoundingClientRect().height;
          track.prepend(lastEl);
          offset -= lastHeight;
        }
      }

      track.style.transform = `translate3d(0, ${offset}px, 0)`;
      rafId = requestAnimationFrame(loop);
    }

    function start() {
      last = performance.now();
      rafId = requestAnimationFrame(loop);
    }
    function stop() {
      if (rafId) cancelAnimationFrame(rafId);
    }
    function reset() {
      offset = 0;
      track.style.transform = 'translate3d(0, 0, 0)';
    }

    start();

    return { stop, start, reset };
  }

  containers.forEach((c) => {
    const runner = setupContainer(c);
    if (runner) runners.push(runner);
  });

  const onVis = () => {
    if (document.hidden) {
      runners.forEach((r) => r.stop());
    } else {
      runners.forEach((r) => r.start());
    }
  };
  const onResize = () => {
    runners.forEach((r) => r.reset());
  };

  document.addEventListener('visibilitychange', onVis);
  window.addEventListener('resize', onResize);

  // Cleanup when hot-reloading or navigating away
  return () => {
    document.removeEventListener('visibilitychange', onVis);
    window.removeEventListener('resize', onResize);
    runners.forEach((r) => r.stop());
  };
}
