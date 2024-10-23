import React from 'react'
import './Exclusive.css'
import fashion from '../../assets/applehouse.png'
import airpods from '../../assets/airpods-7976095_640.jpg'
import applewatch from '../../assets/apple-2561475_640.jpg'

const Exclusive = () => {
  return (
        
        <div className="exclusive-item">
          <h2>Airpods and iWatches ...</h2>
          <div className="exclusive-content">
            <img src={airpods} alt=""  width={775}/>
            <img src={applewatch}  alt="" width={775} />
          </div>
          
          <h2>Apple house </h2>
          <img src={fashion} alt="exclusive" /> 
      </div>
    
    
  )
}

export default Exclusive
