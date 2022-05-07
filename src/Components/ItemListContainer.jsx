import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap w-4/5 h-full mx-auto bg-gradient-to-b from-gray-100">
        <ItemList />
      </div>
    </div>
  );
};

export default ItemListContainer;
