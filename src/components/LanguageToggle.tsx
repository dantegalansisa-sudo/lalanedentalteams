import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';

export default function LanguageToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <motion.button
      className="lang-toggle interactive"
      onClick={toggleLang}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <span className={`lang-toggle__option${lang === 'es' ? ' active' : ''}`}>ES</span>
      <span className="lang-toggle__divider">/</span>
      <span className={`lang-toggle__option${lang === 'en' ? ' active' : ''}`}>EN</span>
    </motion.button>
  );
}
