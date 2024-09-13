import React from 'react';
import './product.css';

export const Product = (props) => {
    const { productName, productPrice,  productImage} = props.data;
    return (
        <div className='product'>
            <img src={productImage} alt="" />                
            <p className='product-name'>{productName}</p>
            <p className='price'>${productPrice}</p>
            <button className='addToCartBtn'> Add To Cart</button>
        </div>
    )
    }