import React, { useEffect, useMemo, useRef } from 'react';
import lottie from 'lottie-web';
import { withBase } from '../../utils/withBase';

// Preload a map of available local JSON animations by basename from src/data/json_animation
// This lets us fall back to bundled JSON when a public URL isn't available.
const localAnimations = import.meta.glob('/src/data/json_animation/*.json', { eager: true });

const LottiePlayer = ({ src, loop = true, autoplay = true, renderer = 'svg' }) => {
  const container = useRef(null);

  const animationsByName = useMemo(() => {
    const map = {};
    for (const [path, mod] of Object.entries(localAnimations)) {
      const name = path.split('/').pop();
      // Vite JSON modules export under default
      map[name] = mod && typeof mod === 'object' && 'default' in mod ? mod.default : mod;
    }
    return map;
  }, []);

  useEffect(() => {
    let anim;
    let cancelled = false;

    const load = async () => {
      if (!container.current) return;

      let animationData = null;

      if (src && typeof src === 'object') {
        // Direct JSON object passed in
        animationData = src;
      } else if (typeof src === 'string' && src.length > 0) {
        // Try fetching from public/ or remote URL first
        const url = src.startsWith('/') ? withBase(src) : src;
        try {
          const res = await fetch(url);
          if (res.ok) {
            animationData = await res.json();
          }
        } catch (_) {
          // ignore and try fallback
        }

        // Fallback: look up bundled JSON by filename (from src/data/json_animation)
        if (!animationData) {
          const baseName = src.split('/').pop();
          if (baseName && animationsByName[baseName]) {
            animationData = animationsByName[baseName];
          }
        }
      }

      if (cancelled || !container.current) return;

      if (animationData) {
        anim = lottie.loadAnimation({
          container: container.current,
          renderer,
          loop,
          autoplay,
          animationData,
        });
      } else if (typeof src === 'string') {
        // Last resort: let lottie fetch via path directly (works if the asset is publicly served)
        anim = lottie.loadAnimation({
          container: container.current,
          renderer,
          loop,
          autoplay,
          path: src.startsWith('/') ? withBase(src) : src,
        });
      }
    };

    load();

    return () => {
      cancelled = true;
      if (anim) anim.destroy();
    };
  }, [src, loop, autoplay, renderer, animationsByName]);

  return <div ref={container} style={{ width: '100%', height: '100%' }} />;
};

export default LottiePlayer;
