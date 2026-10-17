import { motion } from 'framer-motion'
import { FiMap, FiCalendar, FiCompass, FiGlobe } from 'react-icons/fi'
import './Features.css'

const clubFeatures = [
  {
    icon: <FiMap className="club-card__icon" />,
    title: 'Curated routes',
    description:
      'Handpicked stays, timing, transfers, food stops, and local details.',
  },
  {
    icon: <FiCalendar className="club-card__icon" />,
    title: 'Weekend timing',
    description:
      'Short, smart escapes built around holidays, long weekends, and Friday flights.',
  },
  {
    icon: <FiCompass className="club-card__icon" />,
    title: 'Club guidance',
    description:
      'Get destination suggestions, on-trip help, and real traveller recommendations.',
  },
  {
    icon: <FiGlobe className="club-card__icon" />,
    title: 'India + beyond',
    description:
      'Move from Indian hideaways to Dubai, Bali, Singapore, and Malaysia.',
  },
]

export default function Features() {
  return (
    <section className="travel-club" id="features">
      <div className="container">
        <motion.div
          className="travel-club__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">YOUR TRAVEL CLUB</span>
          <h2 className="section-title">
            Designed for people who want<br />
            the getaway, not the spreadsheet.
          </h2>
        </motion.div>

        <div className="travel-club__grid">
          {clubFeatures.map((item, i) => (
            <motion.div
              className="club-card"
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            >
              <div className="club-card__icon-wrapper">{item.icon}</div>
              <h3 className="club-card__title">{item.title}</h3>
              <p className="club-card__desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
