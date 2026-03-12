import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const plans = [
  {
    title: 'Pago de Contado',
    highlight: 'Mejor precio',
    icon: '✓',
    description: 'Obtén un descuento especial al realizar tu pago completo antes del tratamiento.',
    features: [
      '10% de descuento inmediato',
      'Sin trámites adicionales',
      'Presupuesto cerrado desde el día 1',
      'Aplica a todos los tratamientos',
    ],
    featured: false,
  },
  {
    title: 'Cuotas Sin Interés',
    highlight: 'Más popular',
    icon: '📅',
    description: 'Divide tu tratamiento en cuotas mensuales sin recargos ni intereses.',
    features: [
      'Hasta 12 meses sin interés',
      'Aprobación inmediata',
      'Sin fiador ni garantía',
      'Comienza tu tratamiento hoy',
    ],
    featured: true,
  },
  {
    title: 'Financiamiento Externo',
    highlight: 'Mayor plazo',
    icon: '🏦',
    description: 'Accede a financiamiento a través de entidades financieras aliadas con plazos extendidos.',
    features: [
      'Plazos de hasta 36 meses',
      'Tasas preferenciales',
      'Gestión directa en clínica',
      'Múltiples entidades disponibles',
    ],
    featured: false,
  },
];

const paymentMethods = ['Efectivo', 'Tarjetas de crédito/débito', 'Transferencia bancaria', 'Cheques'];

const cardBrands = ['VISA', 'Mastercard', 'American Express'];

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
          Facilidades de pago
        </motion.span>
        <RevealText tag="h2" className="section-title">
          FINANCIAMIENTO
        </RevealText>
        <motion.p
          className="financing__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Tu tratamiento no tiene por qué esperar. Ofrecemos opciones flexibles para que inicies hoy.
        </motion.p>

        {/* Plan cards */}
        <motion.div
          className="financing__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.title}
              className={`financing__card${plan.featured ? ' financing__card--featured' : ''}`}
              variants={itemVariants}
            >
              <span className="financing__highlight">{plan.highlight}</span>
              <span className="financing__icon">{plan.icon}</span>
              <h3 className="financing__card-title">{plan.title}</h3>
              <p className="financing__card-desc">{plan.description}</p>
              <ul className="financing__features">
                {plan.features.map((f) => (
                  <li key={f} className="financing__feature">
                    <span className="financing__feature-check">→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#reservar" className="financing__cta">
                Consultar →
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Payment methods */}
        <motion.div
          className="financing__methods"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="financing__methods-label">Métodos de pago aceptados:</p>
          <div className="financing__methods-list">
            {paymentMethods.map((method) => (
              <span key={method} className="financing__method">{method}</span>
            ))}
          </div>
          <div className="financing__brands">
            {cardBrands.map((brand) => (
              <span key={brand} className="financing__brand">{brand}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
