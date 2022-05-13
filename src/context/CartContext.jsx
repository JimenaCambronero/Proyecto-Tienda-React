import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext ()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

const [cart, setCart] = useState ([])

// Esta el item en el carrito?
const isInCart = (id) => cart.find (producto => producto.id === id)

//Agregar producto
const addToCart = (producto, cantidad) => { 
    const newCart = [...cart]
    const productIsInCart = isInCart (producto.id)

    if (productIsInCart){
      newCart[newCart.findIndex (prod => prod.id ===productIsInCart.id)].quantity += cantidad

      setCart(newCart)
      return
    }

    producto.quantity = cantidad
    setCart([...newCart,producto])
}

const deleteFromCart = (producto) => {
    const newCart = [...cart]

    const productIsInCart = isInCart(producto.id)

    if (!productIsInCart) {
      return
    }

    const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)

    setCart (deleteProduct)
  }

const deleteCart = () => setCart ([])

console.log (cart)

return ( 
     <CartContextProvider 
        value ={{
            cart,
            addToCart,
            deleteFromCart,
            deleteCart,
            setCart,
        }}
      >
        {children}
     </CartContextProvider>
  )
}

export default CartContextProvider