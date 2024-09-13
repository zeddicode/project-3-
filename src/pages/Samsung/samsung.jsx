import React from 'react'
import SAMDATA from '../../samdata'
import { SamDesign } from './samDesign'
import './samsung.css'

const Samsung = () => {
  return (
    <div className='samsung'>
      <h2>RARE EVOLUTION</h2>
      <hr/>
      <div className="samsung-item">
      {SAMDATA.map((samDesign) => (
        <SamDesign data={samDesign}/>
      ))}
      </div>
    </div>
  )
}

export default Samsung
