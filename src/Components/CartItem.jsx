import React from 'react'
import { useCartContext } from '../context/CartContext'
import {RiDeleteBinFill} from 'react-icons/ri'


const CartItem = ({ item }) => {
  const { deleteById, removeOneUnit } = useCartContext();

  const { name, quantity, price, id, img,} = item;

  return (
    <tr className='border-b border-gray-200'>
      <th className='flex flex-col items-center justify-left md:pr-0'> 
      <img className='h-32 w-36'src={img} alt="simon cat imagen" />
      <div className='flex flex-col text-left'>
        <p className='text-lg tracking-wide text-gray-700 font-amastic'>{name}</p>
      </div>
      </th>
      <th className='text-lg tracking-wide text-gray-700 font-amastic'>
      ${price}
      </th>
      <th className='text-lg tracking-wide text-gray-700 font-amastic'>
      {quantity}
      </th>
      <th className='text-lg tracking-wide text-gray-700 font-amastic'>
      ${quantity * price}
      </th>
      <th>
       <button className='px-6 text-lg md:px-2 lg:px-16 xl:px-28'  onClick={() => removeOneUnit(id)}><RiDeleteBinFill/></button>
    </th>
     <th>
      <button className='px-6 text-lg md:px-2 lg:px-16 xl:px-28'onClick={() => deleteById(id)}><RiDeleteBinFill/></button>
       </th>
 </tr>
     );
    };
    
    export default CartItem;  



