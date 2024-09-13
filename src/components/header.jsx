import React from 'react'
import titanium from '../assets/titanium.png'
import './header.css'

export const Header = () => {
  return (
    
        <div className="dispaly-video">
            <img src={titanium} alt="" width={1520} height={300} />
            {/* <video width={1520} controls>
                <source src="https://www.apple.com/105/media/us/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/xlarge.mp4" type='video/mp4'/>
            </video> */}
        </div>
  )
}

