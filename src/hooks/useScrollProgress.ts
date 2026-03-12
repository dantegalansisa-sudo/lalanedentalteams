import { useScroll, MotionValue } from 'framer-motion';

export function useScrollProgress(): { scrollYProgress: MotionValue<number> } {
  const { scrollYProgress } = useScroll();
  return { scrollYProgress };
}
