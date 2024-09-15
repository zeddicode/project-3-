import React from 'react'
import { Link } from 'react-router-dom'
import {    ShoppingCart } from 'phosphor-react'
import { CgProfile } from "react-icons/cg";
import crown from '../../src/assets/icons8-crown-48.png';

import './navbar.css'



export const Navbar = () => {
  return (
    <div className='navbar'> 
      <div className="nav-logo">
         <Link to='/home'>  
         <img src={crown} alt=""/>
          </Link>
          <Link to='/home'>
              <b>HAYZED-HUB</b>
          </Link>      
      </div>
      <div className="nav-menu">
      <Link to='/shop'style={{fontStyle:'italic'}} >
                Shop
            </Link>

          <Link to='/apple'style={{fontStyle:'italic'}} >
          Apple
          </Link>
          
      
          <Link to='/samsung' style={{fontStyle:'italic'}}>
              Samsung 
          </Link>

          <Link to='/wears'style={{fontStyle:'italic'}}>
              Outfits
          </Link>

      </div>

      <div className="nav-icon">
            <Link to='/login'>
                <CgProfile size={32} />
            </Link>
            <Link to='/cart'>
                <ShoppingCart size={32} />
            </Link>
            <div className="nav-icon-count">0</div>
      </div>
    </div>
  )
}


