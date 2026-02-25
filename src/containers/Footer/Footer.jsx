import React from 'react'
import { FaCopyright } from "react-icons/fa";
import './Footer.css'


const Footer = () => {
  return (
    <>
    <div className='footer'>
    <div className='footer-icon'>
        <FaCopyright />
    </div>
    <div className='footer-content'>
        <p > Akhil Varkey</p>
    </div>
      
    </div>
    </>
  )
}

export default Footer
