import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';

export default function ManifestoSection() {
  const { t } = useLang();

  const pillars = [
    { number: '01', title: t('manifesto.p1.title'), desc: t('manifesto.p1.desc') },
    { number: '02', title: t('manifesto.p2.title'), desc: t('manifesto.p2.desc') },
    { number: '03', title: t('manifesto.p3.title'), desc: t('manifesto.p3.desc') },
    { number: '04', title: t('manifesto.p4.title'), desc: t('manifesto.p4.desc') },
  ];
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section className="manifesto section" ref={ref}>
      {/* Decorative background elements */}
      <div className="manifesto__bg-elements">
        <motion.div
          className="manifesto__orb manifesto__orb--1"
          style={{ y: bgY }}
        />
        <motion.div
          className="manifesto__orb manifesto__orb--2"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 50]) }}
        />
        <div className="manifesto__grid-pattern" />
      </div>

      <div className="section-container manifesto__content">
        <motion.span
          className="label-mono"
          initial={{ opacity: 0, letterSpacing: '8px' }}
          whileInView={{ opacity: 1, letterSpacing: '3px' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
        >
          {t('manifesto.label')}
        </motion.span>

        {/* Large decorative quote mark */}
        <motion.div
          className="manifesto__quote-mark"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
        >
          &ldquo;
        </motion.div>

        {/* Quote — simple fade-in instead of per-word animation */}
        <motion.blockquote
          className="manifesto__quote"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
        >
          {t('manifesto.quote')}
        </motion.blockquote>

        {/* Accent line */}
        <motion.div
          className="manifesto__line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
        />

        <motion.p
          className="manifesto__body"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t('manifesto.body')}
        </motion.p>

        {/* Four pillars */}
        <motion.div
          className="manifesto__pillars"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
          }}
        >
          {pillars.map((p) => (
            <motion.div
              key={p.number}
              className="manifesto__pillar"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
                },
              }}
            >
              <span className="manifesto__pillar-number">{p.number}</span>
              <span className="manifesto__pillar-title">{p.title}</span>
              <span className="manifesto__pillar-desc">{p.desc}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
