
import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context'
import { PRODUCTS } from '../../products'
import { CartItem } from './cart-item'
import './cart.css'
import SAMDATA from '../../samdata'
import DATASOURCE from '../../datasource'
import DATAPLE from '../../dataple'


export const Cart = () => {
  const { cartItems} = useContext(ShopContext);

  return (
    <div className='cart'>
      <div>
        <h1>Your cart items </h1>
        </div>
        <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem  data={product} />
            }
            return null;
          })}
        </div>
        <div className="cartItems">
          {SAMDATA.map((samDesign) => {
            if (cartItems[samDesign.id] !== 0) {
              return <CartItem data={samDesign} />
            }
            return null;
          })}
        </div>
        <div className="cartItems">
          {DATASOURCE.map((weDesign) => {
            if (cartItems[weDesign.id] !== 0) {
              return <CartItem data={weDesign} />
            }
            return null;
          })}
      </div>
      <div className="cartItems">
          {DATAPLE.map((itemDesign) => {
            if (cartItems[itemDesign.id] !== 0) {
              return <CartItem data={itemDesign} />
            }
            return null;
          })}
      </div>
      <div className="checkout">
        <p>Subtotal:</p>
        <button>Continue Shopping </button><br />
        <button>Checkout</button>
      </div>
    </div>
  )
}


