import React from 'react'
import { ItemDesign } from './itemDesign'
import DATAPLE from '../../../dataple'
import './apple.css'


    export const Apple = () => {
        return (
          <div className='apple'>
            <div className="apple-clip">
            <video  width={1520} controls>
                <source src="https://www.apple.com/105/media/us/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/xlarge.mp4" type='video/mp4'/>
            </video>
            
            </div>
            <h2>IPHONE 16 AND MORE </h2>
            <hr/>
            <div className="apple-product">
              {DATAPLE.map((itemDesign) => (
                <ItemDesign data={itemDesign}/>
              ))}
            </div>
          </div>
        )
      }
      