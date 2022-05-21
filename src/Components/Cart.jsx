import { useCartContext } from '../context/CartContext';
import React from 'react'
import CartItem from "./CartItem";
import CarritoVacio from './CarritoVacio';


const Cart = () => {
    const { cartList, emptyCart, totalPrice } = useCartContext();
  
    return (

      <div className='flex flex-col justify-between w-full p-4 lg:max-w-7xl xl:m-auto'>
         <h2 className='self-center mb-6 text-2xl leading-tight tracking-wider text-center text-gray-800 uppercase font-amastic '>Mi Carrito</h2>
   
         <table className='p-10'> 
         <thead className='h-10 text-center'>
          <tr className='border-b border-gray-300'>
            <th className='pl-4 text-xl leading-loose tracking-wider text-left text-gray-700 uppercase font-amastic'>
              Producto
            </th>
            <th className='px-6 text-xl tracking-wide text-gray-800 font-amastic lg:px-16 xl:px-32'>
              Precio
            </th>
            <th className='px-6 text-xl tracking-wide text-gray-800 font-amastic md:px-2 lg:px-8 xl:px-12'>
              Cantidad
            </th>
            <th className='px-6 text-xl tracking-wide text-gray-800 font-amastic md:px-2 lg:px-16 xl:px-28'>
              Subtotal
            </th>
            <th className='px-6 text-xl tracking-wide text-gray-800 font-amastic md:px-2 lg:px-16 xl:px-28'>
              Por producto
            </th>
            <th className='px-6 text-xl tracking-wide text-gray-800 font-amastic md:px-2 lg:px-16 xl:px-28'>
              Todos los productos
            </th>
          </tr>
        </thead>
        </table>
        
         
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



