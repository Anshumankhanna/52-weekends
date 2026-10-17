import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

export default function Navbar({ currentPage, onNavigate }) {
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
          <img
            src="/brand-logo-no-bg.png"
            alt="52 Weekends"
            className="navbar__logo-img"
          />
          <span className="navbar__title">
            {currentPage === 'visa' ? '52 Weekends • Visa' : '52 Weekends'}
          </span>
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img
                    src="/brand-logo-no-bg.png"
                    alt="52 Weekends"
                    className="navbar__menu-logo-img"
                  />
                  <span className="navbar__menu-title">52 Weekends</span>
                </div>
                <button
                  className="navbar__close-btn"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>
              <nav className="navbar__links">
                <button
                  className="navbar__link-item"
                  style={{ textAlign: 'left', background: 'none', border: 'none', width: '100%' }}
                  onClick={() => {
                    onNavigate('home')
                    setIsOpen(false)
                  }}
                >
                  🏡 Home (Getaways)
                </button>
                <button
                  className="navbar__link-item"
                  style={{
                    textAlign: 'left',
                    background: currentPage === 'visa' ? 'var(--cream)' : 'none',
                    border: 'none',
                    width: '100%',
                    color: '#e89f22',
                    fontWeight: 700,
                  }}
                  onClick={() => {
                    onNavigate('visa')
                    setIsOpen(false)
                  }}
                >
                  🛂 Visa At Your Doorstep
                </button>
                <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '4px 0' }} />
                <a
                  href="#india-destinations"
                  className="navbar__link-item"
                  onClick={() => {
                    onNavigate('home')
                    setIsOpen(false)
                  }}
                >
                  India Escapes
                </a>
                <a
                  href="#intl-destinations"
                  className="navbar__link-item"
                  onClick={() => {
                    onNavigate('home')
                    setIsOpen(false)
                  }}
                >
                  International Getaways
                </a>
                <a
                  href="#features"
                  className="navbar__link-item"
                  onClick={() => {
                    onNavigate('home')
                    setIsOpen(false)
                  }}
                >
                  Travel Club
                </a>
                <a
                  href="#final-cta"
                  className="navbar__link-item"
                  onClick={() => {
                    onNavigate('home')
                    setIsOpen(false)
                  }}
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
