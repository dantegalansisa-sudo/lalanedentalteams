import { useEffect } from 'react';
import { useMotionValue, MotionValue } from 'framer-motion';

interface MouseValues {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export function useMouse(): MouseValues {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return { x, y };
}
