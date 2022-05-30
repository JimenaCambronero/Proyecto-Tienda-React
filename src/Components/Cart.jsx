import { useCartContext } from '../context/CartContext';
import React from 'react'
import CartItem from "./CartItem";
import CarritoVacio from './CarritoVacio';
import { Link } from 'react-router-dom';
import { HiOutlineTrash } from "react-icons/hi";


const Cart = () => {
    const { cartList, emptyCart, totalPrice, totalCount} = useCartContext();
  
    return (
    <div>
      <h2 className='self-center p-8 text-2xl leading-tight tracking-wider text-center text-gray-800 uppercase font-amastic'>Mi Carrito</h2>
      <table className='w-4/5 mx-auto table-fixed '>
        <thead>
          <tr className='border-b border-gray-200'>
            <th className='items-center text-xl tracking-wide text-gray-800 font-amastic'> Producto</th>
            <th className='items-center text-xl tracking-wide text-gray-800 font-amastic'>Precio</th>
            <th className='items-center text-xl tracking-wide text-gray-800 font-amastic'>Cantidad</th>
            <th className='items-center text-xl tracking-wide text-gray-800 font-amastic'>Subtotal</th>
            <th className='items-center text-xl tracking-wide text-gray-800 font-amastic'>Por Producto</th>
            <th className='items-center text-xl tracking-wide text-gray-800 font-amastic'>Todos los Productos</th>
          </tr>
        </thead>
      {cartList.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
       </table>

      {cartList.length > 0 ? (
        
        <div className="flex flex-col justify-between w-4/5 mx-auto mt-6 mb-3 md:flex-row">
          <button className='text-xl tracking-wide text-center text-gray-600 font-boogaloo focus:outline-none' onClick={() => emptyCart()}><HiOutlineTrash></HiOutlineTrash> Click aquí para vaciar todo tu Carrito 
          </button>
          
          <div className="flex flex-col self-start w-full md:w-2/5">
            <div className="flex flex-row justify-between text-xl tracking-wide font-amastic">
                <p>Cantidad de items:</p>
                <p>{totalCount()}</p>
            </div>
            <div className="flex flex-row justify-between text-xl font-semibold tracking-wide font-amastic " >
                <p>Total:</p>
                <p>${totalPrice()}</p>
            </div>
            <div className="flex flex-row justify-between pb-2 tracking-wide font-shadows">
              <p>¡El envío es gratis!</p>
            </div>
            <Link to='/checkout' className='px-4 py-2 text-lg tracking-widest text-center text-white duration-200 bg-red-600 rounded-lg hover:bg-red-400 transition-color focus:outline-none font-shadows'>Finalizar Compra </Link>
          </div>
        </div>  
      ) : (
        <CarritoVacio/>
      )}
    </div>
    );
  };
  
  export default Cart;


