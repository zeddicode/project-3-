import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { FacebookLogo, GoogleLogo, InstagramLogo, LinkedinLogo, TwitterLogo, WhatsappLogo } from 'phosphor-react'
import crown from '../assets/icons8-crown-48.png'


export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
                <Link to='/home'>  
                <img src={crown} alt="" />
                </Link>
                <Link to='/home'>
                    <p>KINGHAYZED</p>
                </Link>      
        </div>
        <ul className='footer-content'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>            

            <div className='footer-social'>
                    <Link to={'/'}>
                                <InstagramLogo size={32}/>
                    </Link>
                    <Link to={'/'}>
                                <FacebookLogo size={32}/>
                    </Link>

                    <Link to={'/'}>
                                <TwitterLogo size={32}/>
                    </Link>
                
                    <Link to={'/'}>
                                <GoogleLogo size={32}/>
                    </Link>
                
                    <Link to={'/'}>
                                <LinkedinLogo size={32}/>
                    </Link>
                    
                    <Link to={'/'}>
                                <WhatsappLogo size={32}/>
                    </Link>
                
            </div>
        
        <div className="copyright">
            <hr/>
                <p>&copy; 2021 KINGHAYZED. All rights reserved</p>
        </div>
                
    </div>
  )
}

