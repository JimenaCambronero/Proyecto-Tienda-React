import React from 'react'
import { useCartContext } from '../context/CartContext'
import {RiDeleteBinFill} from 'react-icons/ri'

const CartItem = ({ item }) => {
  const { deleteById, removeOneUnit,totalPrice } = useCartContext();

  const { name, quantity, price, id, img,} = item;

  return (
    <div className='mx-10'>
      <div className='flex flex-col justify-between w-full p-4 lg:max-w-7xl xl:m-auto'>
      <h2 className='self-center mb-6 text-2xl leading-tight tracking-wider text-gray-800 uppercase font-amastic'>Mi Carrito</h2>
       
     
    <table className='overflow-x-auto whitespace-nowrap'> 
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
        <tbody className='w-full text-center'>
          <tr className='border-b border-gray-200'>
            <th className='flex flex-row items-center pr-40 justify-left md:pr-0'>
              <img className='h-32 pr-6 w-36'src={img} alt="simon cat imagen" />
                <div className='flex flex-col text-left'>
                <p className='text-lg tracking-wide text-gray-700 font-amastic'> {name}
                </p>
                </div>
            </th>
            <th className='text-lg tracking-wide text-gray-700 font-amastic'>
             ${price}
            </th>
            <th className='text-lg tracking-wide text-gray-700 font-amastic'> 
            {quantity}
            </th>
            <th className='text-lg tracking-wide text-gray-700 font-amastic'>
            ${totalPrice()}
            </th>
            <th>
            <button className='text-lg' onClick={() => removeOneUnit(id)}><RiDeleteBinFill/></button>
            </th>
            <th>
            <button className='text-lg'onClick={() => deleteById(id)}><RiDeleteBinFill/></button>
            </th>
          </tr>
        </tbody>
    </table>
    <div>
     
    </div>   
    </div>
    </div>

 

   
  );
};

export default CartItem;


