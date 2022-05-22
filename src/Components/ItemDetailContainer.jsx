import React from 'react'
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { doc, getDocs, getFirestore, collection} from 'firebase/firestore'

import Spinner from './Spinner';
 

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState (true)
  const {itemId } = useParams()


useEffect(() => {
  const db = getFirestore();
  const itemsCollection = collection (db, 'items');
  getDocs (itemsCollection).then ((snapshot)=>{
    setItem (snapshot.docs.map((doc) =>({id: doc.id, ...doc.data() })));
  });
}; [itemId]) ;
 




  // useEffect(() => {
  //  getItem().then (data => {
  //    setItem (data)
  //    setLoading (false)
  //  })
  // }, 
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // [itemId])
  
  // const getItem = () => {
  //   return new Promise( (resolve) => {
  //     setTimeout( () => {
  //       // eslint-disable-next-line eqeqeq
  //       resolve(listData.find(i => i.id == itemId))
  //     }, 2000);
  //   })
  // }

  return (
    <div>
        { loading ?  
          <Spinner/>
          :
        <ItemDetail key = {item.id} item={item}/>
 
        }
    </div>
  )
}
   
export default ItemDetailContainer;