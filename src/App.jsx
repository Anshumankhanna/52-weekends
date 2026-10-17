import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import IndiaDestinations from './components/IndiaDestinations/IndiaDestinations'
import CTASection from './components/CTASection/CTASection'
import InternationalDestinations from './components/InternationalDestinations/InternationalDestinations'
import Features from './components/Features/Features'
import FinalCTA from './components/FinalCTA/FinalCTA'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <IndiaDestinations />
        <CTASection />
        <InternationalDestinations />
        <Features />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
