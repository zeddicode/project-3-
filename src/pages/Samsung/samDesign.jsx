import React from 'react';
import './samDesign.css';

export const SamDesign = (props) => {
    const { productName, productPrice,  productImage} = props.data;
    return (
        <div className='samDesign'>
            <img src={productImage} alt="" />
                <p className='product-name'>{productName}</p>
            <p className='price'>${productPrice}</p>
            <button className='addToCartBtn'> Add To Cart</button>
        </div>
    )
    }