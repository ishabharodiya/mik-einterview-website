import React from 'react'
import newlogo from '../../Component/image/newlogo.PNG'
import './Footer.css'
const Footer = () => {
  return (
    <div className='home-footer'>
        <img className='home-footer-logo' src={newlogo} alt="Mypic" width="120px"/>
        <h4>Mik © 2022.All Rights Reserved</h4>
    </div>
  )
}

export default Footer