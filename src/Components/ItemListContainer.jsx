import React, { useEffect, useState } from "react";
import Item from "./Item"
import { listData } from "../data/listData";


function ItemListContainer() {


  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getList().then(data => {
      setList(data);
      setLoading(false);
    });
  }, []);

  const getList = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(listData);
      }, 2000);
    });
  };

  return (
    <div className="grid w-4/5 h-full grid-cols-1 gap-3 m-auto mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:max-w-7xl bg-gradient-to-b from-gray-100" >

        {loading ?
          <p>Loading lista...</p>
          :
          list.map(l => <Item key={l.id} list={l} />
          )}
      </div>  
  );
}

export default ItemListContainer;
