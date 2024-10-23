import React from 'react'
import { Header } from '../components/header'
import Hero from '../components/Hero/Hero'
import callingBabe from '../assets/person on call.webp'
import airpods from '../assets/airpods-7976095_640.jpg'
import applewatch from '../assets/apple-2561475_640.jpg'
import applehouse from '../assets/applehouse.png'
import FreeItem from '../components/Freestyle/FreeItem'
import './home.css'


export const Home = () => {

  return (
    <div className='home'>
        <Header/>
        <Hero/>
      <FreeItem/>
      <div className="home-content">
        <img src={callingBabe} alt="" width={757}/>
        <img src={applehouse} alt="" width={760} height={1132}/>
        <div className="airpod">
          <img src={airpods} alt="" width={757}/>
          <img src={applewatch } alt=""  width={760}/>
        </div>
      </div>
    </div>
  )
}

