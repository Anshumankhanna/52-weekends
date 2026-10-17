import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__content">
          <motion.div
            className="hero__left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="hero__brand">
              <div className="hero__logo-box">
                <img
                  src="/brand-logo-no-bg.png"
                  alt="52 Weekends"
                  className="hero__logo-img"
                />
              </div>
              <div className="hero__brand-text">
                <span className="hero__brand-name">52 Weekends</span>
                <span className="hero__brand-tagline">ONE CLUB. ENDLESS GETAWAYS.</span>
              </div>
            </div>

            <h1 className="hero__heading">
              Every weekend can become a story worth keeping.
            </h1>

            <p className="hero__description">
              Curated India and international escapes for travellers who want
              the planning handled, the places memorable, and the getaway ready
              before Friday ends.
            </p>

            <div className="hero__actions">
              <a href="#friday-cta" className="btn-primary" id="plan-weekend-btn">
                Plan my weekend
              </a>
              <a href="#india-destinations" className="btn-outline" id="explore-places-btn">
                Explore places
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero__right"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="hero__image-card">
              <img
                src="/images/kashmir.jpg"
                alt="Kashmir Dal Lake Shikara"
                className="hero__image"
                loading="eager"
              />
              <div className="hero__strip-badge">
                <span className="hero__strip-text">
                  Kashmir • Leh Ladakh • Meghalaya
                </span>
                <span className="hero__strip-routes">52 routes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
