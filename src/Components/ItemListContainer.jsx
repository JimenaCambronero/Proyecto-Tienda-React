import React, { useEffect, useState } from "react";
import { listData } from "../data/listData";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Spinner from "./Spinner";
import Banner from "./Banner";


function ItemListContainer() {

  const {categoryId} = useParams ()
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoryId === undefined) {
      getList().then((data) => {
        setList (data);
        setLoading (false);
      });
    }else {
      getList().then((data) => {
        setList(data.filter((list) => list.category === categoryId));
        setLoading(false);
      });
    }
    }, [categoryId]);
 
  const getList = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(listData);
      }, 2000);
    });
  };

  return (
    <><>
      <div>

        {loading ?
          <Spinner></Spinner>
          :
          <ItemList list={list} />}
      </div>

    </><Banner /></>
  );
  
}

export default ItemListContainer;
