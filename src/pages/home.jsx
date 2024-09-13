import React from 'react'
import { Header } from '../components/header'
import Hero from '../components/Hero/Hero'


export const Home = () => {

  return (
    <div className='home'>
        <Header/>
        <h2>
            WELCOME TO THE HOME PAGE

        </h2>
        <Hero/>
    </div>
  )
}

