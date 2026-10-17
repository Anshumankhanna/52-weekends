import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <>
      <header className="navbar" id="navbar">
        <motion.div
          className="navbar__pill"
          onClick={toggleMenu}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          role="button"
          tabIndex={0}
          aria-label="Navigation Menu"
        >
          <span className="navbar__title">52 Weekends</span>
          <div className="navbar__menu-icon">
            <span className="navbar__menu-line"></span>
            <span className="navbar__menu-line"></span>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar__menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="navbar__menu-box"
              initial={{ scale: 0.9, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="navbar__menu-header">
                <span className="navbar__menu-title">Explore 52 Weekends</span>
                <button
                  className="navbar__close-btn"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>
              <nav className="navbar__links">
                <a
                  href="#hero"
                  className="navbar__link-item"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#india-destinations"
                  className="navbar__link-item"
                  onClick={() => setIsOpen(false)}
                >
                  India Escapes
                </a>
                <a
                  href="#friday-cta"
                  className="navbar__link-item"
                  onClick={() => setIsOpen(false)}
                >
                  Plan Friday
                </a>
                <a
                  href="#intl-destinations"
                  className="navbar__link-item"
                  onClick={() => setIsOpen(false)}
                >
                  International Getaways
                </a>
                <a
                  href="#features"
                  className="navbar__link-item"
                  onClick={() => setIsOpen(false)}
                >
                  Travel Club
                </a>
                <a
                  href="#final-cta"
                  className="navbar__link-item"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Trip
                </a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
