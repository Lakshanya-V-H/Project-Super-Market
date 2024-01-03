import React, { createContext } from "react";
import all_product from '../AllProducts';
import { useState } from "react";

export const ShopContext=createContext(null);

const getDefaultCart = () =>{
    let cart={};
    for(let index=0;index < all_product.length;index++){
        cart[index]=0;
    }
    return cart;
}
const ShopContextProvider = (props) =>{
    const [cartItems,setCartItems] = useState(getDefaultCart)
    
    const addToCart = (itemId) =>{
        setCartItems( (prev) => ({...prev,[itemId]:prev[itemId]+1}))
    }
    console.log(cartItems);
    const removeFromCart = (itemId) =>{
        setCartItems( (prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    const removeFromCartCompletely = (itemId) =>{
        setCartItems( (prev) => ({...prev,[itemId]:prev[itemId]-prev[itemId]}))
    }

    const getTotalCartAmount = () =>{
        let totalAmount =0;
        for( const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
            
                let itemInfo = all_product.find((product)=>product.prod_no === Number(item))
                totalAmount+=itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }
    
    const contextValue = {all_product,cartItems,addToCart,removeFromCart,removeFromCartCompletely,getTotalCartAmount};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;