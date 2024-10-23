import React from 'react'
import './shop.css'
import Hero from '../../components/Hero/Hero'
import Popular from '../../components/Popular/Popular'
import Exclusive from '../../components/Exclusive/Exclusive'
import { Header } from '../../components/header'
import FreeItem from '../../components/Freestyle/FreeItem'


export const Shop = () => {
  return (
    <div className='shop'>
      <Header/>
      <Hero/>
      <FreeItem/>
      <Popular/>
      <Exclusive/>
    </div>
  )
}

