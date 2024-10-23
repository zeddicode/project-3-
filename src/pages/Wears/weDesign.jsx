import React, {useContext} from 'react';
import './weDesign.css';
import { ShopContext } from '../../context/shop-context';

const WeDesign = (props) => {

    const {id, productName, productPrice, productImage} = props.data;

    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id]
  return (
    <div className='weDesign'>
      <img src={productImage} alt="" />
        <p className='product-name'>{productName}</p>
        <p className='price'>₦{productPrice}</p>
        
        <button className='addToCartBtn' onClick={() => addToCart(id)}>
            Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
    </div>
  )
}

export default WeDesign
