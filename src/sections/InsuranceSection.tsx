import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const insurances = [
  { name: 'ARS Humano', type: 'Seguro Médico' },
  { name: 'Senasa', type: 'Seguro Nacional' },
  { name: 'ARS Palic', type: 'Seguro Médico' },
  { name: 'Mapfre Salud', type: 'Seguro Internacional' },
  { name: 'Universal', type: 'Seguro Médico' },
  { name: 'ARS Reservas', type: 'Seguro Médico' },
  { name: 'Meta Salud', type: 'Seguro Médico' },
  { name: 'Futuro', type: 'Seguro Médico' },
];

const benefits = [
  { icon: '✓', text: 'Gestión directa con tu aseguradora' },
  { icon: '✓', text: 'Cobertura parcial o total según tu plan' },
  { icon: '✓', text: 'Presupuesto detallado antes del tratamiento' },
  { icon: '✓', text: 'Planes de pago para diferencia no cubierta' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function InsuranceSection() {
  return (
    <section className="insurance section" style={{ background: 'var(--bg-navy)' }}>
      <div className="section-container">
        <motion.span
          className="label-mono"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          Cobertura médica
        </motion.span>
        <RevealText tag="h2" className="section-title" style={{ color: '#FFFFFF' }}>
          SEGUROS Y CONVENIOS
        </RevealText>
        <motion.p
          className="insurance__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Trabajamos con las principales aseguradoras para que tu tratamiento sea accesible.
        </motion.p>

        <div className="insurance__content">
          {/* Insurance logos grid */}
          <motion.div
            className="insurance__grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {insurances.map((ins) => (
              <motion.div key={ins.name} className="insurance__card" variants={itemVariants}>
                <span className="insurance__card-name">{ins.name}</span>
                <span className="insurance__card-type">{ins.type}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits */}
          <motion.div
            className="insurance__benefits"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h3 className="insurance__benefits-title">¿Cómo funciona?</h3>
            <p className="insurance__benefits-desc">
              Traé los datos de tu póliza y nosotros nos encargamos de todo.
              Verificamos tu cobertura, gestionamos las autorizaciones y te
              presentamos un presupuesto claro antes de iniciar.
            </p>
            <ul className="insurance__benefits-list">
              {benefits.map((b) => (
                <li key={b.text} className="insurance__benefit">
                  <span className="insurance__benefit-icon">{b.icon}</span>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
            <a href="#reservar" className="insurance__cta">
              Consultar cobertura →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
