import { useEffect, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * useAOS - Initialize Animate On Scroll (AOS) once per component usage.
 * Keep this hook simple and reusable. Prefer calling it once per page/section.
 *
 * @param {Object} options - AOS.init options
 * @param {number} [options.duration=800]
 * @param {boolean} [options.once=true]
 */
export default function useAOS(options = {}) {
  const opts = useMemo(() => ({ duration: 800, once: true, ...options }), [options.duration, options.once]);

  useEffect(() => {
    AOS.init(opts);
    // When component unmounts, a hard refresh ensures clean state if needed
    return () => {
      try { AOS.refreshHard(); } catch (_) { /* noop */ }
    };
  }, [opts.duration, opts.once]);
}
