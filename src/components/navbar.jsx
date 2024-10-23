import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import { CgProfile } from "react-icons/cg";
import crown from '../../src/assets/icons8-crown-48.png';
import { ShopContext } from '../context/shop-context';
import './navbar.css'



export const Navbar = () => {
  const {cartItems} = useContext(ShopContext);

  const cartItemsCount = Object.keys(cartItems).reduce((count, key) => {
    return count + cartItems[key];
  }, 0);


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
          iPhones
          </Link>
          
      
          <Link to='/samsung' style={{fontStyle:'italic'}}>
              MacBooks 
          </Link>

          <Link to='/wears'style={{fontStyle:'italic'}}>
              Accessories
          </Link>

      </div>
      <div className="nav-icon">
        <div className="linkToLogin">
            <Link to='/login'>
                <CgProfile size={32} />
            </Link>
            </div>

            <div className="linkToCart">
            <Link to='/cart'>
                <ShoppingCart size={32}  />
                {cartItemsCount > 0 && (
            <span className="cart-count">{cartItemsCount}</span>
                )}
            </Link>
            </div>
      </div>
    </div>
  )
}


