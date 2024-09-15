import React, {useContext} from 'react';
import './product.css';
import { ShopContext } from '../../context/shop-context';   



export const Product = (props) => {
    const {id, productName, productPrice,  productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id] 
    return (
        <div className='product'>
            <img src={productImage} alt="" />                
            <p className='product-name'>{productName}</p>
            <p className='price'>${productPrice}</p>
            <button className='addToCartBtn' onClick={() => addToCart(id)}> 
                Add To Cart {cartItemAmount > 0 && <>{cartItemAmount}</>}   
            </button>
        </div>
    )
    }