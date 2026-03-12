import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const highlights = [
  {
    icon: '🏥',
    title: 'Instalaciones Modernas',
    desc: 'Más de 500m² diseñados para tu comodidad',
  },
  {
    icon: '⚡',
    title: 'Tecnología de Punta',
    desc: 'Equipos de última generación importados',
  },
  {
    icon: '🧘',
    title: 'Ambiente Relajante',
    desc: 'Espacios pensados para eliminar la ansiedad dental',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  }),
};

export default function VideoSection() {
  return (
    <section className="vtour__section section" style={{ background: 'var(--bg-surface)' }}>
      <div className="section-container">
        <motion.span
          className="label-mono"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Conoce nuestra clínica
        </motion.span>

        <RevealText tag="h2" className="section-title">
          TOUR VIRTUAL
        </RevealText>

        <motion.p
          className="vtour__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Descubre nuestras instalaciones y conoce al equipo que transformará tu sonrisa.
        </motion.p>

        {/* Video placeholder */}
        <motion.div
          className="vtour__video"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <img
            className="vtour__video-img"
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80"
            alt="Tour virtual de la clínica dental"
            loading="lazy"
          />
          <div className="vtour__video-overlay" />
          <button className="vtour__play" aria-label="Reproducir video">
            <span className="vtour__play-ring" />
            <svg
              className="vtour__play-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="28"
              height="28"
            >
              <polygon points="6,3 20,12 6,21" />
            </svg>
          </button>
        </motion.div>

        {/* Highlight cards */}
        <div className="vtour__highlights">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              className="vtour__card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="vtour__card-icon">{h.icon}</span>
              <h3 className="vtour__card-title">{h.title}</h3>
              <p className="vtour__card-desc">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
