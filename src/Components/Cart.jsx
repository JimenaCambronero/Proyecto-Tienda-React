import { useCartContext } from '../context/CartContext';
import React from 'react'
import CartItem from "./CartItem";
import CarritoVacio from './CarritoVacio';


const Cart = () => {
    const { cartList, emptyCart, totalPrice } = useCartContext();
  
    return (

    
      
      <div>
        {cartList.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        {cartList.length > 0 ? (
          <>
            <button onClick={() => emptyCart()}>Vaciar Carrito</button>
            <h1>Precio total: ${totalPrice()}</h1>
          </>
        ) : (
          <CarritoVacio/>
        )}
      </div>
      
    );
  };
  
  export default Cart;



