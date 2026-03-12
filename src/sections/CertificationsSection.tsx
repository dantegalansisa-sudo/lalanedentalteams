import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const certifications = [
  {
    abbr: 'CDO',
    name: 'Colegio Dominicano de Odontología',
    subtitle: 'Miembro Activo',
  },
  {
    abbr: 'ADA',
    name: 'American Dental Association',
    subtitle: 'International Member',
  },
  {
    abbr: 'INV',
    name: 'Invisalign Certified Provider',
    subtitle: 'Diamond Level',
  },
  {
    abbr: 'ISO',
    name: 'ISO 9001:2015',
    subtitle: 'Gestión de Calidad',
  },
  {
    abbr: 'STR',
    name: 'Straumann Partner',
    subtitle: 'Implantes Premium',
  },
  {
    abbr: 'DSD',
    name: 'Digital Smile Design',
    subtitle: 'DSD Certified Clinic',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function CertificationsSection() {
  return (
    <section className="certs" style={{ background: 'var(--bg-navy)', padding: 'var(--section-padding)' }}>
      <div className="container">
        <span className="label-mono" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Respaldo profesional
        </span>

        <RevealText tag="h2" className="section-title" style={{ color: '#FFFFFF' }}>
          CERTIFICACIONES
        </RevealText>

        <div className="certs__grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.abbr}
              className="certs__card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            >
              <span className="certs__abbr">{cert.abbr}</span>
              <span className="certs__name">{cert.name}</span>
              <span className="certs__subtitle">{cert.subtitle}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="certs__footer-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Profesionales certificados con formación internacional continua
        </motion.p>
      </div>
    </section>
  );
}
