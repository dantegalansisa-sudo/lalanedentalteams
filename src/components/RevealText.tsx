import { motion } from 'framer-motion';
import { EASINGS } from '../utils/easings';

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div' | 'blockquote';
  style?: React.CSSProperties;
  /** If true, animates on mount instead of waiting for scroll into view */
  animateOnMount?: boolean;
}

export default function RevealText({
  children,
  className = '',
  delay = 0,
  tag: Tag = 'h1',
  style,
  animateOnMount = false,
}: RevealTextProps) {
  const words = children.split(' ');

  const animTarget = { y: 0, rotate: 0 };

  return (
    <Tag
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3em', ...style }}
    >
      {words.map((word, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%', rotate: 2 }}
            {...(animateOnMount
              ? { animate: animTarget }
              : { whileInView: animTarget, viewport: { once: true, amount: 0.8 } }
            )}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.06,
              ease: [...EASINGS.premium] as [number, number, number, number],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
