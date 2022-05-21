import React from 'react'
import { useCartContext } from '../context/CartContext'
import {RiDeleteBinFill} from 'react-icons/ri'

const CartItem = ({ item }) => {
  const { deleteById, removeOneUnit } = useCartContext();

  const { name, quantity, price, id, img,} = item;

  return (
    // <div className='mx-10'>
    //   <div className='flex flex-col justify-between w-full p-4 lg:max-w-7xl xl:m-auto'>
    // <table className='overflow-x-auto whitespace-nowrap'> 

<div className='flex flex-col justify-between w-full p-4 lg:max-w-7xl xl:m-auto'>


    <table className=''> 
         <thead className='h-10 text-center'>
          <tr className='border-b border-gray-300'>
          <th className='flex flex-row items-center'>
              <img className='h-32 pr-6 w-36'src={img} alt="simon cat imagen" />
                <div className='flex flex-col text-left'>
                <p className='text-lg tracking-wide text-gray-700 font-amastic'> {name}
                </p>
                </div>
            </th>
            <th className='px-6 text-lg tracking-wide text-gray-700 font-amastic ' >
             ${price}
            </th>
            <th className='text-lg tracking-wide text-gray-700 font-amastic'> 
            {quantity}
            </th>
            <th className='text-lg tracking-wide text-gray-700 font-amastic'> 
            {quantity}
            </th>
            <th>
            <button className='text-lg' onClick={() => removeOneUnit(id)}><RiDeleteBinFill/></button>
            </th>
            <th>
            <button className='text-lg'onClick={() => deleteById(id)}><RiDeleteBinFill/></button>
            </th>
          </tr>
        </thead>
        </table>


        </div>





        
        /* <tbody className='w-full text-center'>
          <tr className='border-b border-gray-200'>
            
            <th className='flex flex-row items-center'>
              <img className='h-32 pr-6 w-36'src={img} alt="simon cat imagen" />
                <div className='flex flex-col text-left'>
                <p className='text-lg tracking-wide text-gray-700 font-amastic'> {name}
                </p>
                </div>
            </th>

            <th className='text-lg tracking-wide text-gray-700 font-amastic '>
             ${price}
            </th>

            <th className='text-lg tracking-wide text-gray-700 font-amastic'> 
            {quantity}
            </th>

            <th className='text-lg tracking-wide text-gray-700 font-amastic'> 
            {quantity}
            </th>

            <th>
            <button className='text-lg' onClick={() => removeOneUnit(id)}><RiDeleteBinFill/></button>
            </th>
            
            <th>
            <button className='text-lg'onClick={() => deleteById(id)}><RiDeleteBinFill/></button>
            </th>
          </tr>
        </tbody> */
    // </table>
  
     
     

    // </div>
    // </div>

 

   
  );
};

export default CartItem;


