import React, {createContext, useState} from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
let  cart = {};
for ( let i = 1; i  <  PRODUCTS.length; i++) {
    cart[i] = 0;
}
return cart;
};


export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] +1}))
      };
      
      const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] -1 }))
      };

      const updateCartItemcount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
      };
      const contextValue = {cartItems, addToCart, removeFromCart , updateCartItemcount};


        return ( 
        < ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
    )
};

