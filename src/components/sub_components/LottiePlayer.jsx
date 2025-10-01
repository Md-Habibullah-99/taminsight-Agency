import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottiePlayer = ({ src, loop = true, autoplay = true, renderer = 'svg' }) => {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      const anim = lottie.loadAnimation({
        container: container.current,
        renderer,
        loop,
        autoplay,
        path: src,
      });

      return () => {
        anim.destroy();
      };
    }
  }, [src, loop, autoplay, renderer]);

  return <div ref={container} style={{ width: '100%', height: '100%' }} />;
};

export default LottiePlayer;
