import React, { useEffect, useState } from "react";
import { listData } from "../data/listData";
import { useParams } from "react-router-dom";
import Item from './Item'
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
      <div className="grid w-4/5 h-full grid-cols-1 gap-3 m-auto mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:max-w-7xl bg-gradient-to-b from-gray-100">

        {loading ?
          <Spinner></Spinner>
          :
          list.map(l => <Item key={l.id} list={l} />
          )}
      </div>
    </><Banner /></>
  );
}

export default ItemListContainer;
