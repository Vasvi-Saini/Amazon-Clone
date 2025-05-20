import React, { createContext, useContext, useState } from "react";

export const cartContext = createContext(null);


export default function CartContextProvider({ children }) {
  
  const [cart, setCart] = useState([]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0) ?? 0;

  function addToCart(productId , selectedQuantity = 1) {
   console.log("productid: ", productId)
  
    const existingProduct = cart.find((item) => item.id === productId) ?? 
    {
      id: productId,
      quantity: 0,
    };

    existingProduct.quantity += parseInt(selectedQuantity)
    console.log('This is our existing product: ',existingProduct)

  //  setCart((prevCart)=>prevCart.find((obj)=> obj.id === productId) ? [...prevCart] : [...prevCart , existingProduct])
   cart.find((obj)=> obj.id == productId) ? setCart([...cart]) : setCart([...cart, existingProduct])
  }


  function removeFromCart(productId, quantity = 1) {
    console.log(
      "removing from cart product : ",
      productId,
      "\nCurrentCart: ",
      cart
    );


    const existingProduct = cart.find((item) => item.id === productId);
    existingProduct.quantity -= quantity;
    setCart((prevCart) =>
      existingProduct.quantity >= 1
        ? [...prevCart]
        : prevCart.filter((item) => item.id !== productId)
    );
  }

   function deleteFromCart(productId){
         // find quantity 1 remove from cart call and map
          setCart((prevCart)=>prevCart.filter((item) => item.id !== productId))


    }



  return (
    <cartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, totalItems, deleteFromCart }}
    >
      {children}
    </cartContext.Provider>
  );
}




export function useCart() {
  return useContext(cartContext) ?? {};
}


