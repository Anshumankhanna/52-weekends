import { motion } from 'framer-motion'
import './IndiaDestinations.css'

const topDestinations = [
  {
    name: 'Kashmir',
    description: 'Lake mornings, pine valleys, and slow shikara sunsets.',
    image: '/images/kashmir.jpg',
  },
  {
    name: 'Leh Ladakh',
    description: 'High passes, blue skies, and roads that feel cinematic.',
    image: '/images/leh-ladakh.jpg',
  },
]

const bottomDestinations = [
  {
    name: 'Dharamshala',
    description: 'Monasteries, café trails, and Himalayan quiet.',
    image: '/images/dharamshala.jpg',
  },
  {
    name: 'Udaipur',
    description: 'Royal lakes, soft sunsets, and heritage stays.',
    image: '/images/udaipur.jpg',
  },
  {
    name: 'Meghalaya',
    description: 'Living-root bridges, mist, waterfalls, and deep green trails.',
    image: '/images/meghalaya.jpg',
  },
]

export default function IndiaDestinations() {
  return (
    <section className="india-destinations" id="india-destinations">
      <div className="container">
        <motion.div
          className="india-destinations__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">INDIA, WEEKEND-READY</span>
          <h2 className="section-title section-title--light">
            From snow roads to palace<br />
            lakes, pick your next escape.
          </h2>
        </motion.div>

        {/* Top 2 wide cards */}
        <div className="india-destinations__grid-top">
          {topDestinations.map((dest, i) => (
            <motion.div
              className="india-card india-card--top"
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
            >
              <div className="india-card__image-box">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="india-card__image"
                  loading="lazy"
                />
              </div>
              <div className="india-card__content">
                <h3 className="india-card__name">{dest.name}</h3>
                <p className="india-card__desc">{dest.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom 3 cards */}
        <div className="india-destinations__grid-bottom">
          {bottomDestinations.map((dest, i) => (
            <motion.div
              className="india-card india-card--bottom"
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
            >
              <div className="india-card__image-box">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="india-card__image"
                  loading="lazy"
                />
              </div>
              <div className="india-card__content">
                <h3 className="india-card__name">{dest.name}</h3>
                <p className="india-card__desc">{dest.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
