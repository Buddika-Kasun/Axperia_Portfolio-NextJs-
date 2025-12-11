'use client';

import { useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const useViewAnimation = (animationType: 'fade' | 'slideLeft' | 'slideRight' | 'scale' = 'fade') => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: animationType.includes('slide') ? 0 : undefined,
        y: animationType === 'fade' ? 0 : undefined,
        scale: animationType === 'scale' ? 1 : undefined,
      });
    } else {
      controls.start({
        opacity: 0,
        x: animationType === 'slideLeft' ? -50 : animationType === 'slideRight' ? 50 : undefined,
        y: animationType === 'fade' ? 20 : undefined,
        scale: animationType === 'scale' ? 0.9 : undefined,
      });
    }
  }, [inView, controls, animationType]);

  return { ref, controls, inView };
};