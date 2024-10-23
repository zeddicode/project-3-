import React, {createContext, useState} from 'react';
import { PRODUCTS } from '../products';
import DATAPLE from '../dataple';
import DATASOURCE from '../datasource';
import SAMDATA from '../samdata';

export const ShopContext = createContext(null);
const combinedData = [ ...PRODUCTS, ...DATAPLE, ...DATASOURCE, ...SAMDATA];


const getDefaultCart = () => {
let  cart = {};


for ( let i = 0; i  < combinedData.length; i++) {
    cart[i]= 0;
}
return cart;
};


export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart);

const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = combinedData.find((product) => product.id === Number(item));
      if (itemInfo) {
        
      totalAmount += itemInfo.productPrice * cartItems[item];
    }
  }
  }
  return totalAmount;
};

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] +1}))
      };
      
      const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] -1 }))
      };

      const updateCartItemcount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
      };
      const contextValue = {
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateCartItemcount,
        getTotalCartAmount
      };


        return ( 
        < ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
    )
};