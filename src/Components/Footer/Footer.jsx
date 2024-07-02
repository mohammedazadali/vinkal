import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className="right-footer">
            <h1 className='footer-logo mont'>VINKAL PRODUCTION</h1>
            <div className="contact">
                <p className='lora'>E-mail:vinkalproduction@gmail.com</p>
                <p className='lora'>Phone:+91-6379678910</p>
            </div>

            <br />
            <hr />
            <p className="lora brick">
                &copy; 2024 Vinkal Production. All Rights Reserved | Designed by brickwebstudio
            </p>
        </div>
    </footer>
  )
}

export default Footer