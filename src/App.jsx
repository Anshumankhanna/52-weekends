import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import IndiaDestinations from './components/IndiaDestinations/IndiaDestinations'
import CTASection from './components/CTASection/CTASection'
import InternationalDestinations from './components/InternationalDestinations/InternationalDestinations'
import Features from './components/Features/Features'
import FinalCTA from './components/FinalCTA/FinalCTA'
import Footer from './components/Footer/Footer'
import VisaServices from './components/VisaServices/VisaServices'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#visa') {
        setCurrentPage('visa')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setCurrentPage('home')
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const navigateTo = (page) => {
    if (page === 'visa') {
      window.location.hash = '#visa'
    } else {
      window.location.hash = '#home'
    }
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {currentPage === 'home' ? (
        <main>
          <Hero />
          <IndiaDestinations />
          <CTASection />
          <InternationalDestinations />
          <Features />
          <FinalCTA />
        </main>
      ) : (
        <main>
          <VisaServices onBackToHome={() => navigateTo('home')} />
        </main>
      )}

      <Footer onNavigate={navigateTo} />
    </div>
  )
}

export default App
