import { motion } from 'framer-motion'
import './InternationalDestinations.css'

const intlDestinations = [
  {
    name: 'Dubai',
    description: 'Desert gold, skyline nights, and easy luxury.',
    image: '/images/dubai.jpg',
  },
  {
    name: 'Bali',
    description: 'Temples, beaches, and tropical slow days.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Singapore',
    description: 'Gardens, food streets, and city glow.',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Malaysia',
    description: 'Islands, city energy, and family-friendly escapes.',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80',
  },
]

export default function InternationalDestinations() {
  return (
    <section className="intl-destinations" id="intl-destinations">
      <div className="container">
        <motion.div
          className="intl-destinations__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="intl-destinations__title">
            International escapes,<br />
            made weekend-simple.
          </h2>
        </motion.div>

        <div className="intl-destinations__grid">
          {intlDestinations.map((dest, i) => (
            <motion.div
              className="intl-card"
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            >
              <div className="intl-card__image-box">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="intl-card__image"
                  loading="lazy"
                />
              </div>
              <div className="intl-card__content">
                <h3 className="intl-card__name">{dest.name}</h3>
                <p className="intl-card__desc">{dest.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
