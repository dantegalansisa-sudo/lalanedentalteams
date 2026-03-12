import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const doctors = [
  {
    name: 'Dr. Eduardo Lalane Valerio',
    specialty: 'Odontólogo',
    bio: 'Especialista en rehabilitación oral y prostodoncia.',
    img: '/imagenes/lalane/dr-eduardo-lalane.png',
  },
  {
    name: 'Dr. Ramón Hector Lalane Valerio',
    specialty: 'Odontólogo',
    bio: 'Especialista en implantología y cirugía oral.',
    img: '/imagenes/lalane/dr-ramon-lalane.png',
  },
  {
    name: 'Dra. Lyda Josefina Amell de Lalane',
    specialty: 'Odontóloga',
    bio: 'Especialista en odontología general y preventiva.',
    img: '/imagenes/lalane/dra-lyda-amell.png',
  },
  {
    name: 'Dr. Paul Lalane Valerio',
    specialty: 'Odontólogo',
    bio: 'Especialista en endodoncia y odontología restauradora.',
    img: '/imagenes/lalane/dr-paul-lalane.png',
  },
  {
    name: 'Dra. Stephanie M. Hernández Taveras',
    specialty: 'Odontóloga',
    bio: 'Especialista en ortodoncia y estética dental.',
    img: '/imagenes/lalane/dra-stephanie-hernandez.png',
  },
  {
    name: 'Dra. Gissette Reynoso',
    specialty: 'Odontóloga',
    bio: 'Especialista en periodoncia y salud gingival.',
    img: '/imagenes/lalane/dra-gissette-reynoso.png',
  },
  {
    name: 'Dra. Ismelda Filpo Beltré',
    specialty: 'Odontóloga',
    bio: 'Especialista en odontopediatría.',
    img: '/imagenes/lalane/dra-ismelda-filpo.png',
  },
  {
    name: 'Dra. Anneli Lalane',
    specialty: 'Odontóloga',
    bio: 'Especialista en estética dental y diseño de sonrisa.',
    img: '/imagenes/lalane/dra-anneli-lalane.png',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function TeamSection() {
  return (
    <section id="equipo" className="team-section section">
      <div className="section-container">
        <motion.span
          className="label-mono"
          style={{ color: 'var(--accent)' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nuestro Equipo
        </motion.span>
        <RevealText
          tag="h2"
          className="section-title"
          style={{ color: 'var(--primary)' }}
        >
          ESPECIALISTAS
        </RevealText>

        <motion.div
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {doctors.map((doc) => (
            <motion.div key={doc.name} className="doctor-card" variants={cardVariants}>
              <img src={doc.img} alt={doc.name} className="doctor-card__img" />
              <div className="doctor-card__info">
                <span className="doctor-card__name">{doc.name}</span>
                <span className="doctor-card__specialty">{doc.specialty}</span>
                <p className="doctor-card__bio">{doc.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
