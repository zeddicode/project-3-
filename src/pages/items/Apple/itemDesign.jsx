import React from 'react';
import './itemDesign.css';

export const ItemDesign = (props) => {
    const { productName, productPrice,  productImage} = props.data;
    return (
        <div className='itemDesign'>
            <img src={productImage} alt="" /> 
            <p className='product-name'>{productName}</p>
            <p className='price'>#{productPrice}</p>
            <button className='addToCartBtn'> Add To Cart</button>
        </div>
    )
    }