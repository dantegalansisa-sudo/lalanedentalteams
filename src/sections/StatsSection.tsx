import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';

const stats = [
  { number: 2400, suffix: '+', unit: 'CASOS', label: 'Sonrisas Transformadas' },
  { number: 15, suffix: '+', unit: 'AÑOS', label: 'Años de Excelencia' },
  { number: 98, suffix: '%', unit: 'SAT.', label: 'Tasa de Satisfacción' },
  { number: 8, suffix: '', unit: 'SPECS', label: 'Especialidades Clínicas' },
];

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

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="section-container">
        <motion.div
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.unit} className="stat-item" variants={itemVariants}>
              <span className="stat-unit">{stat.unit}</span>
              <span className="stat-number">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
