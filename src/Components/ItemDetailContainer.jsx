import React from 'react'
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { listData}  from '../data/listData';
import Spinner from './Spinner';
 

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState (true)

  const {itemId } = useParams()

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
        // eslint-disable-next-line eqeqeq
        resolve(listData.find(i => i.id == itemId))
      }, 2000);
    })
  }

  return (
    <div>
        { loading ?  
          <Spinner/>
          :
        <ItemDetail 
          item={item}
          stock={item.stock}
          id={item.id}> 
        </ItemDetail>
        }
    </div>
  )
  }
   
export default ItemDetailContainer;