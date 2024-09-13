import React from 'react'
import './wears.css'
import WeDesign from './weDesign'
import DATASOURCE from '../../datasource'
import Exclusive from '../../components/Exclusive/Exclusive'


const Wears = () => {
  return (
    <div className='wears'>
    <Exclusive/>

      <h2>FITTED SUITS for YOUR STEEZE</h2>
      <hr/>
      <div className="wears-item">
        {DATASOURCE.map((weDesign) => (
          <WeDesign data={weDesign}/>
        ))}
      </div>
    </div>
  )
}

export default Wears 
