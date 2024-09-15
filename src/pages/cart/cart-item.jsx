import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context'
import './cart.css'




export const CartItem = (props) => {
    const {id, productName, productPrice,  productImage} = props.data;
    
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
  return (
    <div className='cartItem'>
      <img src={productImage} alt="" />
      <div className="description">

      <p>{productName}</p><br />

      <p> ${productPrice}</p><br />

      <div className="countHandler">
        <button onClick={() => removeFromCart(id)}> - </button>
        <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
        <button onClick={() => addToCart(id)}> + </button>
      </div>
      </div>
    </div>
  )
}

