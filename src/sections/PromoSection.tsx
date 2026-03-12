import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function PromoSection() {
  const { t } = useLang();

  return (
    <section className="promo__section">
      <div className="promo__glow" />
      <div className="section-container">
        <motion.div
          className="promo__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span className="promo__badge" variants={itemVariants}>
            {t('promo.badge')}
          </motion.span>

          <motion.h2 className="promo__title" variants={itemVariants}>
            {t('promo.title')}
          </motion.h2>

          <motion.p className="promo__subtitle" variants={itemVariants}>
            {t('promo.subtitle')}
          </motion.p>

          <motion.div className="promo__value" variants={itemVariants}>
            {t('promo.value')} <span className="promo__value-price">RD$3,500</span>
          </motion.div>

          <motion.div className="promo__urgency" variants={itemVariants}>
            {t('promo.urgency')}
          </motion.div>

          <motion.a
            href="#reservar"
            className="promo__cta"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {t('promo.cta')}
          </motion.a>

          <motion.p className="promo__disclaimer" variants={itemVariants}>
            {t('promo.disclaimer')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
