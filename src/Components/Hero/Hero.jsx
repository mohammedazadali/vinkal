import React from 'react'
import './Hero.css'
import logo from '../../assets/logo.jpg'
import call from '../../assets/call.png'
import { Link } from 'react-scroll'
import arrow from '../../assets/sarrow.png'
import studio from '../../assets/studio.svg'

function Hero() {
  return (
    <>
    <section className="hero-section" id="home">
        <img src={logo} className='logo'/>
        <div className="hero-content">
        <h2 className="sub mont">Your Vision, Our Creation</h2>
        <div className="hero-btn">
            <a href="tel:6379678910">
                <button>Call Now <img src={call} /></button>
            </a>
            <Link to='service' spy={true} smooth={true} offset={-150}><button className='service-btn'>Service <img src={arrow} /></button></Link>
        </div>
        <img src={studio} className="studio" />
        </div>
    </section>
    </>
  )
}

export default Hero