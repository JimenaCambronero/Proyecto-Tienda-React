import React from 'react'
import {HiShoppingBag} from "react-icons/hi"
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'


const CardWidget = () => {
  const { totalCount } = useCartContext ();
 
  return (
<NavLink to='/cart' className='flex items-center'> 
<HiShoppingBag/>
<span>{totalCount()}</span>
</NavLink>


    
  )
}

export default CardWidget

