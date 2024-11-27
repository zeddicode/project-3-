import React from 'react'
import { Header } from '../components/header'
import Hero from '../components/Hero/Hero'
import airpods from '../assets/airpods-7976095_640.jpg'
import applewatch from '../assets/apple-2561475_640.jpg'
import FreeItem from '../components/Freestyle/FreeItem'
import './home.css'


export const Home = () => {

  return (
    <div className='home'>
        <Header/>
        <Hero/>
      <FreeItem/>
      <div className="home-content">
        <div className="airpod">
          <img src={airpods} alt="" width={757}/>
          <img src={applewatch } alt=""  width={760}/>
        </div>
      </div>
    </div>
  )
}

