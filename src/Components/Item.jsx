import React from "react";
import { Link } from "react-router-dom";

const Item = ({ list }) => {
  const { id, name, category, price, description, comments, img } = list;

  return (
    <div className="relative overflow-hidden rounded shadow-lg group">
        <img className="w-full " src={img} alt="simon cat imagen" />
        <div className="px-4 py-4">
            <h2 className="mb-2 text-base font-bold underline uppercase text-black-400 ">
              {name}
            </h2>
            <p className="text-sm font-semibold text-gray-700 inline-blok">
                {category}
              </p>
            <div>
              <p className="text-sm font-semibold text-gray-700 inline-blok">
                {description}
              </p>
            </div>
            <div>
              <p className="pb-2 text-xs font-thin">{comments}</p>
            </div>
            <div>
              <p className="pt-2 text-sm text-gray-700 border-t border-gray-300">{price}</p>
            </div>
  
            <div>
              <button className="px-4 py-2 text-xs text-white duration-200 bg-red-600 rounded-lg hover:bg-red-400 transition-color focus:outline-none"> Comprar
              </button>
              <button className="px-4 py-2 text-xs text-white duration-200 bg-red-600 rounded-lg hover:bg-red-400 transition-color focus:outline-none"> 
              <Link to={`/detalleProducto/${id}`}>Ver mas detalle </Link>
              </button>
            </div>
        </div>
      </div>
  );
};

export default Item;
