import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <div className="min-h-screen">
        <Menu/>
      </div>
      <div className="min-h-screen">
        <About/>
      </div>
      <div className="min-h-screen">
        <WhyChooseUs/>
      </div>
      <div className="min-h-screen">
        <Contact/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default App