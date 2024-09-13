import React from 'react'
import './shop.css'
import Hero from '../../components/Hero/Hero'
import Popular from '../../components/Popular/Popular'
import Exclusive from '../../components/Exclusive/Exclusive'
import { Header } from '../../components/header'


export const Shop = () => {
  return (
    <div className='shop'>
      <Header/>
      <Hero/>
      <Popular/>
      <Exclusive/>
    </div>
  )
}

