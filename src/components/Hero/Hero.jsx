import React from 'react'
import './Hero.css'
import onCall from '../../assets/16hero-removebg-preview.png'
import { ArrowRight } from 'phosphor-react'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <p>new</p>
        <p>smartphones</p>
        <p>for everyone</p>
        
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <ArrowRight size={32} />
        </div>
      </div>
      <div className="hero-right">
        <img src={onCall} alt="" />
      </div>
    </div>
  )
}
export default Hero


