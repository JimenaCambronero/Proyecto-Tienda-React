import { useCartContext } from '../context/CartContext';
import React from 'react'
import CartItem from "./CartItem";


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
          <h1>El carrito esta vacio</h1>
        )}
      </div>
    );
  };
  
  export default Cart;





