import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiCheckCircle } from 'react-icons/fi'
import './VisaServices.css'

const residentCountries = [
  'India',
  'United Arab Emirates',
  'Singapore',
  'United States',
  'United Kingdom',
]

const destinationData = {
  'United Arab Emirates (Dubai)': {
    type: '30-Day Tourist eVisa / Doorstep Bio',
    time: '2 - 3 Working Days',
    validity: '60 Days from issue',
    stay: '30 Days Single / Multiple Entry',
    service: 'Document pick-up & doorstep digital verification',
  },
  'Indonesia (Bali)': {
    type: 'e-VOA (Electronic Visa on Arrival)',
    time: '24 - 48 Hours',
    validity: '90 Days',
    stay: '30 Days (Extendable)',
    service: 'Pre-departure doorstep document check & approval',
  },
  Singapore: {
    type: 'E-Visa with Doorstep Verification',
    time: '3 - 5 Working Days',
    validity: 'Up to 2 Years Multiple Entry',
    stay: '30 Days per entry',
    service: 'Original passport verification & home photo submission',
  },
  Malaysia: {
    type: 'MDAC & Tourist eVisa',
    time: '2 - 3 Working Days',
    validity: '3 Months',
    stay: '30 Days Single Entry',
    service: 'Doorstep bio-scan & instant document scan',
  },
  'Schengen (France / Italy / Switzerland)': {
    type: 'Short Stay Uniform Schengen Visa',
    time: '10 - 15 Calendar Days',
    validity: 'Up to 90 Days',
    stay: '90 Days within 180 Days',
    service: 'Full mobile biometric enrollment kit at your home',
  },
  'United Kingdom': {
    type: 'Standard Visitor Visa',
    time: '3 - 6 Weeks (Priority available)',
    validity: '6 Months / 2 Years',
    stay: 'Up to 6 Months per visit',
    service: 'On-demand mobile visa booth to home or office',
  },
  Japan: {
    type: 'Single / Multiple Entry Tourist eVisa',
    time: '5 - 7 Working Days',
    validity: '3 Months / 3 Years',
    stay: '15 / 30 Days',
    service: 'Passport collection & doorstep notary review',
  },
}

export default function VisaServices({ onBackToHome }) {
  const [resident, setResident] = useState('India')
  const [destination, setDestination] = useState('United Arab Emirates (Dubai)')
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    city: '',
    date: '',
  })

  const currentInfo = destinationData[destination] || destinationData['United Arab Emirates (Dubai)']

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      // Auto close after 3s
      setTimeout(() => {
        setSubmitted(false)
        setShowModal(false)
      }, 2500)
    }, 400)
  }

  return (
    <div className="visa-page">
      <div className="container">
        {/* Top Back / Breadcrumb Nav */}
        <div style={{ marginBottom: '20px' }}>
          <button
            onClick={onBackToHome}
            className="btn-outline"
            style={{ padding: '8px 18px', fontSize: '13px' }}
          >
            ← Back to Getaways
          </button>
        </div>

        {/* Hero Section */}
        <section className="visa-hero">
          <div className="visa-hero__container">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="visa-hero__brand">
                <div className="visa-hero__partner-pill">
                  <img
                    src="/brand-logo-no-bg.png"
                    alt="52 Weekends"
                    className="visa-hero__partner-logo"
                  />
                  <span className="visa-hero__partner-name">52 WEEKENDS VISA CONCIERGE</span>
                </div>
              </div>

              <p className="visa-hero__tagline">
                Apply for your visa from the comfort of your home or office
              </p>

              <h1 className="visa-hero__title">
                Visa At Your Doorstep
              </h1>

              <div className="visa-hero__features">
                <div className="visa-hero__feature-item">
                  <div className="visa-hero__check-icon">✓</div>
                  <span className="visa-hero__feature-text">Visa submission process</span>
                </div>
                <div className="visa-hero__feature-item">
                  <div className="visa-hero__check-icon">✓</div>
                  <span className="visa-hero__feature-text">
                    Biometric information (fingerprint &amp; digital photograph)
                  </span>
                </div>
                <div className="visa-hero__feature-item">
                  <div className="visa-hero__check-icon">✓</div>
                  <span className="visa-hero__feature-text">
                    Passport collection and delivery
                  </span>
                </div>
              </div>

              <p className="visa-hero__subtext">
                *Elevate your visa application experience with our optional Premium Service
              </p>
            </motion.div>

            <motion.div
              className="visa-hero__visual"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                alt="Doorstep Visa Consultation"
                className="visa-hero__image"
              />
            </motion.div>
          </div>
        </section>

        {/* UK Alert Banner */}
        <motion.div
          className="visa-alert-banner"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span>ℹ️</span>
          <span>
            If your destination country is the United Kingdom, please{' '}
            <a
              onClick={(e) => {
                e.preventDefault()
                setDestination('United Kingdom')
              }}
            >
              click here
            </a>
          </span>
        </motion.div>

        {/* Country Selector Card */}
        <motion.div
          className="visa-selector-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <h2 className="visa-selector-card__heading">
            Select the country of application along with destination country
          </h2>

          <div className="visa-selector-card__row">
            <span className="visa-selector-card__label">I’m applying from</span>
            <div className="visa-selector-card__select-wrapper">
              <select
                className="visa-selector-card__select"
                value={resident}
                onChange={(e) => setResident(e.target.value)}
                aria-label="Resident country"
              >
                {residentCountries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <FiChevronDown className="visa-selector-card__select-arrow" />
            </div>

            <span className="visa-selector-card__label">and I’m going to</span>
            <div className="visa-selector-card__select-wrapper">
              <select
                className="visa-selector-card__select"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                aria-label="Destination country"
              >
                {Object.keys(destinationData).map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <FiChevronDown className="visa-selector-card__select-arrow" />
            </div>

            <button
              className="visa-selector-card__btn"
              onClick={() => setShowModal(true)}
            >
              Book Doorstep Visit
            </button>
          </div>

          {/* Dynamic Result Card */}
          <div className="visa-result-card">
            <div className="visa-result-card__item">
              <span className="visa-result-card__label">Visa Category</span>
              <span className="visa-result-card__value">{currentInfo.type}</span>
              <span className="visa-result-card__desc">Official embassy accredited</span>
            </div>
            <div className="visa-result-card__item">
              <span className="visa-result-card__label">Processing Time</span>
              <span className="visa-result-card__value">{currentInfo.time}</span>
              <span className="visa-result-card__desc">Standard embassy timeline</span>
            </div>
            <div className="visa-result-card__item">
              <span className="visa-result-card__label">Permitted Stay</span>
              <span className="visa-result-card__value">{currentInfo.stay}</span>
              <span className="visa-result-card__desc">Valid: {currentInfo.validity}</span>
            </div>
            <div className="visa-result-card__item">
              <span className="visa-result-card__label">Doorstep Coverage</span>
              <span className="visa-result-card__value">Included</span>
              <span className="visa-result-card__desc">{currentInfo.service}</span>
            </div>
          </div>
        </motion.div>

        {/* Steps Section */}
        <section className="visa-steps">
          <div className="visa-steps__title">
            <span className="section-subtitle">Effortless Process</span>
            <h2 className="section-title">How Doorstep Visa Works</h2>
          </div>

          <div className="visa-steps__grid">
            <div className="visa-step-item">
              <div className="visa-step-item__num">1</div>
              <h3 className="visa-step-item__heading">Book Date &amp; Location</h3>
              <p className="visa-step-item__desc">
                Select your preferred date, time slot, and home or office address.
              </p>
            </div>
            <div className="visa-step-item">
              <div className="visa-step-item__num">2</div>
              <h3 className="visa-step-item__heading">Agent Doorstep Visit</h3>
              <p className="visa-step-item__desc">
                Certified visa officer arrives with secure biometric equipment &amp; document scanners.
              </p>
            </div>
            <div className="visa-step-item">
              <div className="visa-step-item__num">3</div>
              <h3 className="visa-step-item__heading">Embassy Processing</h3>
              <p className="visa-step-item__desc">
                Application is directly forwarded to the embassy with VIP fast-track status.
              </p>
            </div>
            <div className="visa-step-item">
              <div className="visa-step-item__num">4</div>
              <h3 className="visa-step-item__heading">Passport Return</h3>
              <p className="visa-step-item__desc">
                Secured tamper-proof courier delivers your stamped passport right to your door.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Appointment Booking Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="visa-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="visa-modal"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="visa-modal__close"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                ✕
              </button>

              {!submitted ? (
                <>
                  <h3 className="visa-modal__title">Book Doorstep Appointment</h3>
                  <p className="visa-modal__subtitle">
                    Our certified visa concierge will contact you within 2 hours to confirm your slot.
                  </p>
                  <form className="visa-modal__form" onSubmit={handleBookingSubmit}>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        className="visa-modal__input"
                        value={bookingData.name}
                        onChange={(e) =>
                          setBookingData({ ...bookingData, name: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number (WhatsApp enabled)"
                        className="visa-modal__input"
                        value={bookingData.phone}
                        onChange={(e) =>
                          setBookingData({ ...bookingData, phone: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="City / Address"
                        className="visa-modal__input"
                        value={bookingData.city}
                        onChange={(e) =>
                          setBookingData({ ...bookingData, city: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <input
                        type="date"
                        required
                        className="visa-modal__input"
                        value={bookingData.date}
                        onChange={(e) =>
                          setBookingData({ ...bookingData, date: e.target.value })
                        }
                      />
                    </div>
                    <button type="submit" className="visa-modal__submit">
                      Confirm Doorstep Request
                    </button>
                  </form>
                </>
              ) : (
                <div className="visa-modal__success">
                  <div className="visa-modal__success-icon">
                    <FiCheckCircle />
                  </div>
                  <h3 className="visa-modal__title">Appointment Scheduled!</h3>
                  <p className="visa-modal__subtitle">
                    Thank you, {bookingData.name || 'Traveller'}! Your doorstep appointment for{' '}
                    <strong>{destination}</strong> has been logged. Our concierge will call you shortly.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
