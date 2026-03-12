import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from '../components/RevealText';

const cases = [
  {
    id: 1,
    title: 'Diseño de Sonrisa Completo',
    treatment: 'Carillas de Porcelana',
    duration: '6 meses',
    description: 'Paciente con desgaste dental y desalineación. Se realizó un diseño de sonrisa integral con 10 carillas de porcelana ultrafinas.',
    metrics: [
      { label: 'Carillas', value: '10' },
      { label: 'Sesiones', value: '4' },
      { label: 'Duración', value: '6 meses' },
    ],
    beforeImg: '/imagenes/diseno de sonrisa, antes.jpeg',
    afterImg: '/imagenes/diseno de sonrisa , despues.jpeg',
  },
  {
    id: 2,
    title: 'Ortodoncia Invisible',
    treatment: 'Alineadores Transparentes',
    duration: '14 meses',
    description: 'Corrección de mordida cruzada y apiñamiento severo mediante alineadores invisibles de última generación.',
    metrics: [
      { label: 'Alineadores', value: '28' },
      { label: 'Revisiones', value: '14' },
      { label: 'Duración', value: '14 meses' },
    ],
    beforeImg: '/imagenes/invisible, antes.jpeg',
    afterImg: '/imagenes/invisible despues.jpeg',
  },
  {
    id: 3,
    title: 'Implantes + Estética',
    treatment: 'Implantes de Titanio + Carillas',
    duration: '4 meses',
    description: 'Rehabilitación completa con implantes de titanio en zona anterior y carillas estéticas para un resultado natural.',
    metrics: [
      { label: 'Implantes', value: '3' },
      { label: 'Carillas', value: '6' },
      { label: 'Duración', value: '4 meses' },
    ],
    beforeImg: '/imagenes/antes.jpeg',
    afterImg: '/imagenes/despues.jpeg',
  },
];

export default function TransformationSection() {
  const [activeCase, setActiveCase] = useState(0);
  const current = cases[activeCase];

  return (
    <section id="transformaciones" className="transformations section">
      <div className="section-container">
        <motion.span
          className="label-mono"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Resultados reales
        </motion.span>
        <RevealText tag="h2" className="section-title">
          TRANSFORMACIONES
        </RevealText>
        <motion.p
          className="transformations__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Cada caso es único. Estos son algunos de los resultados que hemos logrado.
        </motion.p>

        {/* Case selector tabs */}
        <motion.div
          className="transformations__tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {cases.map((c, i) => (
            <button
              key={c.id}
              className={`transformations__tab${activeCase === i ? ' active' : ''}`}
              onClick={() => setActiveCase(i)}
            >
              <span className="transformations__tab-number">0{i + 1}</span>
              <span className="transformations__tab-title">{c.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Active case showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="transformations__showcase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
          >
            {/* Images side by side */}
            <div className="transformations__images">
              <div className="transformations__img-card">
                <span className="transformations__img-label">Antes</span>
                <img src={current.beforeImg} alt="Antes del tratamiento" />
              </div>

              <div className="transformations__arrow">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="23" stroke="url(#arrowGrad)" strokeWidth="2"/>
                  <path d="M18 24h12M26 18l6 6-6 6" stroke="url(#arrowGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="arrowGrad" x1="0" y1="0" x2="48" y2="48">
                      <stop stopColor="#00C6FF"/>
                      <stop offset="1" stopColor="#0072FF"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="transformations__img-card transformations__img-card--after">
                <span className="transformations__img-label transformations__img-label--after">Después</span>
                <img src={current.afterImg} alt="Después del tratamiento" />
              </div>
            </div>

            {/* Case details */}
            <div className="transformations__details">
              <div className="transformations__info">
                <span className="transformations__treatment-label">{current.treatment}</span>
                <h3 className="transformations__case-title">{current.title}</h3>
                <p className="transformations__description">{current.description}</p>
              </div>

              <div className="transformations__metrics">
                {current.metrics.map((m) => (
                  <div key={m.label} className="transformations__metric">
                    <span className="transformations__metric-value">{m.value}</span>
                    <span className="transformations__metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
