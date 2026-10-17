import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import './FinalCTA.css'

const marqueeItems = [
  '✈️ Curated Weekends',
  '🌍 India + International',
  '🌴 Premium + Flexible',
  '🧳 Travel Support',
  '🏨 Stay Planning',
  '🚗 Transfers & Rentals',
]

export default function FinalCTA() {
  return (
    <section className="final-cta" id="final-cta">
      <div className="final-cta__bg-wrapper">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80"
          alt="Tropical getaway resort"
          className="final-cta__bg-img"
          loading="lazy"
        />
        <div className="final-cta__overlay"></div>
      </div>

      <div className="container final-cta__container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="final-cta__title">
            Plan Your Next 52<br />
            Weekends Escape
          </h2>
          <p className="final-cta__subtitle">
            From Kashmir to Bali, we curate short escapes you’ll remember long after
            Monday.
          </p>
          <a href="#navbar" className="final-cta__btn" id="book-trip-btn">
            <span>Book a trip</span>
            <FiArrowUpRight className="final-cta__arrow" />
          </a>
        </motion.div>
      </div>

      {/* Infinite Scrolling Ticker Strip */}
      <div className="final-cta__marquee-wrapper" aria-hidden="true">
        <div className="final-cta__marquee">
          {marqueeItems.concat(marqueeItems).map((text, idx) => (
            <span key={idx} className="final-cta__marquee-item">
              {text}
              <span className="final-cta__marquee-dot">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
