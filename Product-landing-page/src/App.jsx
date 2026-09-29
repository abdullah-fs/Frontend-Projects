import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Feature'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Hero/>
      </div>
      <div className="min-h-screen">
        <Features/>
        <Benefits/>
        <Pricing/>
        <Testimonials/>
        <CTA/>
        <FAQ/>
        <Footer/>
      </div>
      
      
    </>
  )
}

export default App