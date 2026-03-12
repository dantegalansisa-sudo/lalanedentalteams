import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useLang } from '../i18n/LanguageContext';

const testimonials = [
  {
    text: 'Llegué sin esperanza de recuperar mi sonrisa. Hoy no para de brillar. Este equipo cambió mi vida.',
    name: 'Ana M.',
    treatment: 'Implantes + Carillas',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    text: 'La tecnología que usan es impresionante. Todo digital, sin moldes, sin incomodidad. Resultado perfecto.',
    name: 'Carlos R.',
    treatment: 'Ortodoncia Invisible',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    text: 'Mi miedo al dentista desapareció. El ambiente, la atención y los resultados son de otro planeta.',
    name: 'Sofía L.',
    treatment: 'Diseño de Sonrisa',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
  {
    text: 'Después de años evitando sonreír en fotos, ahora no puedo dejar de hacerlo. ¡Gracias por devolverme la confianza!',
    name: 'Roberto D.',
    treatment: 'Blanqueamiento + Carillas',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
  {
    text: 'La atención es de primer nivel. Me explicaron cada paso del tratamiento y el resultado superó mis expectativas.',
    name: 'María G.',
    treatment: 'Implantes Dentales',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
  },
  {
    text: 'Vine por una limpieza y terminé haciendo un tratamiento completo. La honestidad y profesionalismo son increíbles.',
    name: 'José P.',
    treatment: 'Periodoncia + Estética',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    text: 'Mis hijos ya no le temen al dentista. La doctora tiene una paciencia y calidez extraordinaria con los pequeños.',
    name: 'Laura V.',
    treatment: 'Odontopediatría',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80',
  },
  {
    text: 'Tenía los dientes muy dañados por años de descuido. Hoy tengo una sonrisa completamente nueva. Estoy eternamente agradecido.',
    name: 'Fernando A.',
    treatment: 'Rehabilitación Oral',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80',
  },
];

const gridTestimonials = testimonials.slice(1);

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function TestimonialsSection() {
  const { t } = useLang();
  const [featuredIdx, setFeaturedIdx] = useState(0);

  const nextFeatured = useCallback(() => {
    setFeaturedIdx((prev) => (prev + 1) % 3); // Rotate first 3 as featured
  }, []);

  useEffect(() => {
    const timer = setInterval(nextFeatured, 6000);
    return () => clearInterval(timer);
  }, [nextFeatured]);

  const currentFeatured = testimonials[featuredIdx];

  return (
    <section className="testimonials section">
      <div className="section-container">
        <motion.span
          className="label-mono"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('testimonials.label')}
        </motion.span>
        <RevealText tag="h2" className="section-title" style={{ textAlign: 'center', justifyContent: 'center' }}>
          {t('testimonials.title')}
        </RevealText>

        {/* Stats bar */}
        <motion.div
          className="testi__stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="testi__stat">
            <span className="testi__stat-number">4.9/5</span>
            <span className="testi__stat-label">{t('testimonials.avgRating')}</span>
          </div>
          <div className="testi__stat-divider" />
          <div className="testi__stat">
            <span className="testi__stat-number">+500</span>
            <span className="testi__stat-label">{t('testimonials.verified')}</span>
          </div>
          <div className="testi__stat-divider" />
          <div className="testi__stat">
            <span className="testi__stat-number">98%</span>
            <span className="testi__stat-label">{t('testimonials.recommend')}</span>
          </div>
        </motion.div>

        {/* Featured testimonial — large rotating quote */}
        <div className="testi__featured">
          <span className="testi__featured-quote">&ldquo;</span>
          <AnimatePresence mode="wait">
            <motion.div
              key={featuredIdx}
              className="testi__featured-content"
              initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(4px)' }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            >
              <p className="testi__featured-text">&ldquo;{currentFeatured.text}&rdquo;</p>
              <div className="testi__featured-author">
                <img src={currentFeatured.avatar} alt={currentFeatured.name} className="testi__featured-avatar" />
                <div>
                  <span className="testi__featured-name">{currentFeatured.name}</span>
                  <span className="testi__featured-treatment">{currentFeatured.treatment}</span>
                </div>
                <span className="testi__featured-rating">{'★'.repeat(currentFeatured.rating)}</span>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="testi__featured-dots">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                className={`testi__featured-dot${i === featuredIdx ? ' active' : ''}`}
                onClick={() => setFeaturedIdx(i)}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid of testimonial cards */}
        <motion.div
          className="testi__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
        >
          {gridTestimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className={`testi__card${i === 0 ? ' testi__card--accent' : ''}`}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <div className="testi__card-rating">{'★'.repeat(t.rating)}</div>
              <p className="testi__card-text">&ldquo;{t.text}&rdquo;</p>
              <div className="testi__card-author">
                <img src={t.avatar} alt={t.name} className="testi__card-avatar" />
                <div>
                  <span className="testi__card-name">{t.name}</span>
                  <span className="testi__card-treatment">{t.treatment}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
