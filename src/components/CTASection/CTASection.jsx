import { motion } from 'framer-motion'
import './CTASection.css'

export default function CTASection() {
  return (
    <section className="friday-cta" id="friday-cta">
      <div className="container">
        <div className="friday-cta__content">
          <motion.div
            className="friday-cta__left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="friday-cta__subtitle">READY BEFORE FRIDAY</span>
            <h2 className="friday-cta__title">
              Tell us your dates. We’ll turn them into a getaway.
            </h2>
            <p className="friday-cta__desc">
              Share your mood, budget, and number of travellers. 52 Weekends will
              suggest places, routes, stays, and add-ons that fit the time you
              actually have.
            </p>
            <a href="#final-cta" className="friday-cta__btn" id="start-planning-btn">
              Start planning
            </a>
          </motion.div>

          <motion.div
            className="friday-cta__right"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="friday-cta__image-card">
              <img
                src="/images/meghalaya.jpg"
                alt="Meghalaya living root bridge"
                className="friday-cta__image"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
