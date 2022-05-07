
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { listData}  from '../data/listData'

  
const ItemDetail = () => {

  const {itemId } = useParams()

  const [item, setItem] = useState({})
  const [loading, setLoading] = useState (true)

  useEffect(() => {
   getItem().then (data => {
     setItem (data)
     setLoading (false)
   })
  }, 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [itemId])
  

  const getItem = () => {
    return new Promise( (resolve) => {
      setTimeout( () => {
        resolve(listData.find(i => i.id == itemId))
      }, 2000);
    })
  }

 



  return (
    <> 
    <div className='w-full p-6'>
    {loading ? 
        <p>Loading...detalle  :)</p>
        :
        
      <div className='flex flex-col items-center justify-center max-w-full mx-auto lg:flex-row lg:max-w-7xl lg:items-star'>
          <div className='relative overflow-hidden group lg:w-1/3'> 
          <img src={item.img} alt="imagen" />
          </div>
          <div className='w-full px-6 lg:py-6 lg:w-1/2'>
          <h1 className='pb-3 text-lg font-medium tracking-wider text-gray-800 uppercase'>{item.name}</h1>
          <p>{item.price}</p>
          <p>{item.category}</p>
          <p className='pt-3 pb-2 text-base font-medium tracking-wider text-gray-700 uppercase'>Descripción</p>
          <p className='pb-3 text-sm'>{item.description}</p>
          <hr className='w-full border-gray-200 mt4'/>
          <p className='pt-3 pb-2 text-base font-medium tracking-wider text-gray-700 uppercase'>Detalle del Producto</p>
          <p className='pb-3 text-sm'>{item.comments}</p>
          <hr className='w-full border-gray-200 mt4'/>
          </div>
            
      </div>
}
    </div>
    
    </>
  )
   
}

export default ItemDetail;