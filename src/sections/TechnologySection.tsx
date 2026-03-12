import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const technologies = [
  { icon: '⬡', name: 'Escáner Intraoral 3D', desc: 'Impresiones digitales. Precisión de 0.01mm.' },
  { icon: '◈', name: 'Radiografía Cone Beam', desc: 'Visión 3D de estructura ósea.' },
  { icon: '◇', name: 'Láser Dental', desc: 'Sin bisturí, mínimo tiempo de recuperación.' },
  { icon: '◉', name: 'CAD/CAM', desc: 'Coronas diseñadas y fabricadas digitalmente.' },
  { icon: '✦', name: 'Blanqueamiento LED', desc: 'Resultados inmediatos y duraderos.' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function TechnologySection() {
  return (
    <section id="tecnologia" className="section" style={{ background: 'var(--bg)' }}>
      <div className="section-container">
        <motion.span
          className="label-mono"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Innovación
        </motion.span>
        <RevealText tag="h2" className="section-title">
          TECNOLOGÍA
        </RevealText>

        <motion.div
          className="tech-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="tech-card"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <span className="tech-card__number">0{i + 1}</span>
              <span className="tech-card__icon">{tech.icon}</span>
              <h3 className="tech-card__name">{tech.name}</h3>
              <p className="tech-card__desc">{tech.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
