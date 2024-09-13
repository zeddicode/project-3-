import React from 'react';
import './weDesign.css';

const WeDesign = (props) => {

    const {productName, productPrice, productImage} = props.data;
  return (
    <div className='weDesign'>
      <img src={productImage} alt="" />
        <p className='product-name'>{productName}</p>
        <p className='price'>${productPrice}</p>
        <button className='addToCartBtn'> Add To Cart</button>
    </div>
  )
}

export default WeDesign
