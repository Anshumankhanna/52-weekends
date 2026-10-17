import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import './Footer.css'

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Pages */}
          <div className="footer__col">
            <h4 className="footer__col-title">Pages</h4>
            <ul className="footer__links">
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('home')}
                  className="footer__link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('visa')}
                  className="footer__link"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    color: '#e89f22',
                    fontWeight: 600,
                  }}
                >
                  Visa Services (Doorstep)
                </button>
              </li>
              <li>
                <a href="#features" className="footer__link">
                  About
                </a>
              </li>
              <li>
                <a href="#india-destinations" className="footer__link">
                  Tours
                </a>
              </li>
              <li>
                <a href="#final-cta" className="footer__link">
                  Book a Trip
                </a>
              </li>
            </ul>
          </div>

          {/* Documentation */}
          <div className="footer__col">
            <h4 className="footer__col-title">Documentation</h4>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Other Pages */}
          <div className="footer__col">
            <h4 className="footer__col-title">Other Pages</h4>
            <ul className="footer__links">
              <li>
                <a href="#intl-destinations" className="footer__link">
                  International Getaways
                </a>
              </li>
              <li>
                <a href="#friday-cta" className="footer__link">
                  Friday Planning
                </a>
              </li>
              <li>
                <a href="#features" className="footer__link">
                  Club Membership
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer__col">
            <h4 className="footer__col-title">Social</h4>
            <div className="footer__socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="footer__social-icon"
                aria-label="Facebook"
              >
                <FiFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="footer__social-icon"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="footer__social-icon"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="footer__social-icon"
                aria-label="Twitter / X"
              >
                <FiTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="/brand-logo-no-bg.png"
              alt="52 Weekends"
              style={{ width: '24px', height: '24px', objectFit: 'contain' }}
            />
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--navy)', fontSize: '15px' }}>
              52 Weekends
            </span>
          </div>
          <p className="footer__copyright">
            All rights reserved for @52 Weekends India ( A unit of SGM )
          </p>
        </div>
      </div>
    </footer>
  )
}
