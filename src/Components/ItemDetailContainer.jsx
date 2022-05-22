import React from 'react'
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDocs, getFirestore, collection} from 'firebase/firestore'

import Spinner from './Spinner';
 

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState (false)
  const {itemId } = useParams()




useEffect(() => {
  const db = getFirestore();

  const itemsCollection = collection (db, 'items');
  getDocs (itemsCollection).then ((snapshot)=>{
    setItem (snapshot.docs.map((doc) =>({id: doc.id, ...doc.data() })));
   
  });
}, [itemId]) ;
 


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