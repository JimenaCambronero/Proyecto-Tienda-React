import React from "react";
import { Link } from "react-router-dom";

//producto presentacion

const Item = ({ list }) => {
  const { id, name, price, description, img } = list;

  return (
    <div className="relative overflow-hidden rounded shadow-lg group">
        <img className="w-full " src={img} alt="simon cat imagen" />
        <div className="px-4 py-4">
            <h2 className="mb-2 text-base font-bold underline uppercase text-black-400 ">
              {name}
            </h2>
            <div>
              <p className="pb-2 text-xs font-semibold text-gray-700 inline-blok">
                {description}
              </p>
            </div>
            <div>
              <p className="pt-2 text-sm text-gray-700 border-t border-gray-300">{price}</p>
            </div>
  
            <div>    
              <button className="px-4 py-2 text-xs text-white duration-200 bg-red-600 rounded-lg hover:bg-red-400 transition-color focus:outline-none"> 
              <Link to={`/detalleProducto/${id}`}>Ver mas detalle </Link>
              </button>
            </div>
        </div>
      </div>
  );
};

export default Item;
