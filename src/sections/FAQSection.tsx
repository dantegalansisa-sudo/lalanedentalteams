import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from '../components/RevealText';

const faqs = [
  {
    question: '¿Cuánto cuesta un diseño de sonrisa?',
    answer: 'El costo varía según el caso. Ofrecemos una evaluación inicial gratuita donde analizamos tu situación y te presentamos un plan de tratamiento con precio exacto. Contamos con opciones de financiamiento.',
  },
  {
    question: '¿Los implantes dentales duelen?',
    answer: 'El procedimiento se realiza con anestesia local, por lo que no sentirás dolor durante la intervención. Después, puede haber molestias leves que se manejan con medicación básica. La mayoría de pacientes retoman sus actividades al día siguiente.',
  },
  {
    question: '¿Cuánto dura un tratamiento de ortodoncia invisible?',
    answer: 'Dependiendo de la complejidad del caso, el tratamiento puede durar entre 6 y 18 meses. En tu primera consulta realizamos un escaneo 3D y te mostramos una simulación del resultado final.',
  },
  {
    question: '¿Aceptan seguros dentales?',
    answer: 'Trabajamos con las principales aseguradoras del país. Contáctanos con los datos de tu póliza y te indicamos la cobertura disponible para tu tratamiento.',
  },
  {
    question: '¿Tienen opciones de financiamiento?',
    answer: 'Sí, ofrecemos planes de pago flexibles sin intereses a 3, 6 y 12 meses. También aceptamos todas las tarjetas de crédito y débito.',
  },
  {
    question: '¿Cuánto duran las carillas de porcelana?',
    answer: 'Con el cuidado adecuado, las carillas de porcelana pueden durar entre 10 y 15 años. Te proporcionamos una guía completa de mantenimiento y revisiones periódicas incluidas.',
  },
  {
    question: '¿Es seguro el blanqueamiento dental?',
    answer: 'Nuestro blanqueamiento LED profesional es completamente seguro. Utilizamos productos certificados y supervisamos todo el proceso. Los resultados son inmediatos y pueden durar hasta 2 años.',
  },
  {
    question: '¿Atienden emergencias dentales?',
    answer: 'Sí, ofrecemos atención de urgencias dentales de lunes a viernes. Puedes contactarnos por WhatsApp para una respuesta inmediata y coordinar tu visita de emergencia.',
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      className="faq__item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <button className={`faq__question${isOpen ? ' active' : ''}`} onClick={onToggle}>
        <span>{faq.question}</span>
        <span className="faq__icon">{isOpen ? '−' : '+'}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq__answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
          >
            <p>{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="faq section">
      <div className="section-container">
        <motion.span
          className="label-mono"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Resolvemos tus dudas
        </motion.span>
        <RevealText tag="h2" className="section-title">
          PREGUNTAS FRECUENTES
        </RevealText>

        <div className="faq__grid">
          <div className="faq__column">
            {faqs.slice(0, 4).map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
          <div className="faq__column">
            {faqs.slice(4).map((faq, i) => (
              <FAQItem
                key={i + 4}
                faq={faq}
                isOpen={openIndex === i + 4}
                onToggle={() => setOpenIndex(openIndex === i + 4 ? null : i + 4)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
