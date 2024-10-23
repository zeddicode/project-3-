import React from 'react'
import './Hero.css'
import onCall from '../../assets/16hero-removebg-preview.png'
import { ArrowRight } from 'phosphor-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <p>new</p>
        <p>smartphones</p>
        <p>for everyone</p>
        <Link to={'/FreeItem'}>
        <div className="hero-latest-btn">
            <div>Latest Collection </div>
            <ArrowRight size={32}  />
        </div>
        </Link>
      </div>
      <div className="hero-right">
        <img src={onCall} alt="" />
      </div>
    </div>
  )
}
export default Hero


