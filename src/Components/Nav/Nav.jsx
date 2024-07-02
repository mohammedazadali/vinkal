import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-scroll'
import call from '../../assets/call.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    const[isOpen,setIsOpen]=useState(false)
    function  handlemenu(){
        setIsOpen(!isOpen)
    }
  return (
    <>
    <nav>
    <span onClick={handlemenu} className="handburger-menu-btn">{isOpen?<FontAwesomeIcon icon={faTimes}/>:<FontAwesomeIcon icon={faBars}/>}</span>
        <h1 className="nav-logo mont">VINKAL <br className='break'/>PRODUCTION</h1>
        <ul className={`nav-menu ${isOpen && 'active'}`}>
            <li className="navlink mont">
                <Link to='home' spy={true} smooth={true} offset={-50}>Home</Link>
            </li>
            <li className="navlink mont">
                <Link to='about' spy={true} smooth={true} offset={-50}>About Us</Link>
            </li>
            <li className="navlink mont">
                <Link to='service' spy={true} smooth={true} offset={-150}>Services</Link>
            </li>
            <li className="navlink mont">
                <Link to='test' spy={true} smooth={true} offset={-50}>Testimonial</Link>
            </li>
        </ul>
        <a href='tel:6379678910'><button className="nav-call mont">Call Now <img src={call}/></button></a>
    </nav>
    </>
  )
}

export default Nav