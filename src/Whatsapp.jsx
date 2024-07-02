import React from 'react'
import './App.css'
import what from '../src/assets/whatsapp.png'

function whatsapp() {
  return (
    <>
    <a href='https://wa.me/6379678910'><img src={what} className='what' /></a>
    </>
  )
}

export default whatsapp