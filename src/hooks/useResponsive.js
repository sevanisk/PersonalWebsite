import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;

export function useResponsive() {
  const getViewport = () => {
    if (typeof window === 'undefined') {
      return { width: 1200, height: 800 };
    }

    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const [viewport, setViewport] = useState(getViewport);
  const [isMobile, setIsMobile] = useState(viewport.width < MOBILE_BREAKPOINT);

  useEffect(() => {
    const handleResize = () => {
      const nextViewport = getViewport();
      setViewport(nextViewport);
      setIsMobile(nextViewport.width < MOBILE_BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile,
    breakpoint: MOBILE_BREAKPOINT,
    viewportWidth: viewport.width,
    viewportHeight: viewport.height,
  };
}
