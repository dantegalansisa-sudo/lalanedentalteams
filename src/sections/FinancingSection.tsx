import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const paymentMethods = [
  {
    icon: '💵',
    title: 'Efectivo',
    description: 'Pago en efectivo en nuestras instalaciones.',
  },
  {
    icon: '💳',
    title: 'VISA',
    description: 'Tarjeta de crédito y débito VISA.',
  },
  {
    icon: '💳',
    title: 'Mastercard',
    description: 'Tarjeta de crédito y débito Mastercard.',
  },
  {
    icon: '💳',
    title: 'American Express',
    description: 'Tarjeta de crédito American Express.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function FinancingSection() {
  return (
    <section className="financing section" style={{ background: 'var(--bg)' }}>
      <div className="section-container">
        <motion.span
          className="label-mono"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Formas de pago
        </motion.span>
        <RevealText tag="h2" className="section-title">
          MÉTODOS DE PAGO
        </RevealText>
        <motion.p
          className="financing__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Aceptamos efectivo y todas las tarjetas de crédito para tu comodidad.
        </motion.p>

        <motion.div
          className="financing__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {paymentMethods.map((method) => (
            <motion.div
              key={method.title}
              className="financing__card"
              variants={itemVariants}
            >
              <span className="financing__icon">{method.icon}</span>
              <h3 className="financing__card-title">{method.title}</h3>
              <p className="financing__card-desc">{method.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
