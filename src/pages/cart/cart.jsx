
import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context'
import { PRODUCTS } from '../../products'
import { CartItem } from './cart-item'
import './cart.css'
import SAMDATA from '../../samdata'
import DATASOURCE from '../../datasource'
import DATAPLE from '../../dataple'


export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const combinedData = [...PRODUCTS, ...DATAPLE, ...DATASOURCE, ...SAMDATA]
  
  return (
    <div className='cart'>
      <div>
        <h1>Your cart items </h1>
        </div>
        <div className="cartItems">
        {combinedData
        .filter((product) => cartItems[product.id] > 0)
        .map((product) => {
          if(cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />
          }
          return null;
        })}
        </div>

        {totalAmount !==0 ? (
      <div className="checkout">
        <p>Subtotal: <button> ₦{totalAmount}</button> </p>
        <button>Continue  </button><br />
        <button>Checkout</button>
      </div>
        ):
      (<p>Your shopping cart is empty</p>

      )}
    </div>
  )  
};


