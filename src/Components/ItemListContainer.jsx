import React, { useEffect, useState } from "react";
import { collection, getDocs, db, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Spinner from "./Spinner";
import Banner from "./Banner";


function ItemListContainer() {
  
  const {categoryId} = useParams ()
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      const getItem = async () => {
          setLoading (true)
          const myItem = categoryId
              ? query(collection(db, "items"), where("category", "==", categoryId))
              : collection(db, "items")
          const querySnapshot = await getDocs(myItem)
          setItem(
              querySnapshot.docs.map((item) => {
                  return { ...item.data(), id: item.id }
              })
          )
          setLoading(false)
      }
      getItem()
  }, [categoryId])








  // const [list, setList] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (categoryId === undefined) {
  //     getList().then((data) => {
  //       setList (data);
  //       setLoading (false);
  //     });
  //   }else {
  //     getList().then((data) => {
  //       setList(data.filter((list) => list.category === categoryId));
  //       setLoading(false);
  //     });
  //   }
  //   }, [categoryId]);
 
  // const getList = () => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(listData);
  //     }, 2000);
  //   });
  // };

  return (
    <><>
      <div>

        {loading ?
          <Spinner></Spinner>
          :
          <ItemList items={item} />}
      </div>

    </><Banner /></>
  );
  
}

export default ItemListContainer;
