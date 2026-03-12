import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RevealText from '../components/RevealText';
import { articles } from '../data/articles';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function BlogSection() {
  return (
    <section className="blog section" style={{ background: 'var(--bg)' }}>
      <div className="section-container">
        <motion.span
          className="label-mono"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Educación dental
        </motion.span>
        <RevealText tag="h2" className="section-title">
          BLOG
        </RevealText>
        <motion.p
          className="blog__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Consejos, guías y novedades para cuidar tu salud dental.
        </motion.p>

        <motion.div
          className="blog__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {articles.map((article) => (
            <Link key={article.slug} to={`/blog/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.article
                className="blog__card"
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <div className="blog__card-img-wrap">
                  <img src={article.img} alt={article.title} className="blog__card-img" loading="lazy" />
                  <span className="blog__card-category">{article.category}</span>
                </div>
                <div className="blog__card-content">
                  <h3 className="blog__card-title">{article.title}</h3>
                  <p className="blog__card-excerpt">{article.excerpt}</p>
                  <div className="blog__card-footer">
                    <span className="blog__card-time">{article.readTime} de lectura</span>
                    <span className="blog__card-link">Leer más →</span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
