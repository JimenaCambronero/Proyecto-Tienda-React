import { useCartContext } from '../context/CartContext';
import React from 'react'
import CartItem from "./CartItem";
import CarritoVacio from './CarritoVacio';


const Cart = () => {
    const { cartList, emptyCart, totalPrice } = useCartContext();
  
    return (
    <div>
      <h2 className='self-center p-8 text-2xl leading-tight tracking-wider text-center text-gray-800 uppercase font-amastic'>Mi Carrito</h2>
      <table className='w-full table-fixed'>
        <thead>
          <tr className='border-b border-gray-200'>
            <th className='items-center text-xl tracking-wide text-gray-800 font-amastic'>Producto</th>
            <th className='items-center text-xl tracking-wide text-gray-800 font-amastic'>Precio</th>
            <th className='items-center text-xl tracking-wide text-gray-800 font-amastic'>Cantidad</th>
            <th className='items-center text-xl tracking-wide text-gray-800 font-amastic'>Subtotal</th>
            <th className='items-center text-xl tracking-wide text-gray-800 font-amastic'>Por Producto</th>
            <th className='items-center text-xl tracking-wide text-gray-800 font-amastic'>Todos los Productos</th>
          </tr>
        </thead>
     
      <tbody>
      </tbody>
      {cartList.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
       </table>
      {cartList.length > 0 ? (
        <>
        <div className='flex flex-col items-end pr-40' >

          <button className='text-xl tracking-wide text-gray-700 font-boogaloo' onClick={() => emptyCart()}>Vaciar Carrito</button>
          <p className='text-xl tracking-wide text-gray-700 font-boogaloo'> Precio total: ${totalPrice()}</p>

        </div>
        </>   
      ) : (
        <CarritoVacio/>
      )}
     
    </div>

     
    );
  };
  
  export default Cart;


