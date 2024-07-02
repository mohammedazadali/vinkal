import React from 'react'
import'./App.css'
import Nav from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
    <Nav/>
    <Hero/>
    <About/>
    <Services/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default App