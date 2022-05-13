/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ({item, stock, id}) => {

  const [terminarCompra, setTerminarCompra] = useState (false)
  
  const onAdd = (count) => {
    setTerminarCompra (true)
  console.log (count)
  }

  return (
        <div className="w-full p-6">
              <div className="flex flex-col items-center justify-center max-w-full mx-auto lg:flex-row lg:max-w-7xl lg:items-star">
                  <div className="relative overflow-hidden group lg:w-1/3">
                    <img src={item.img} alt="imagen" />
                  </div>
                <div className="w-full px-6 lg:py-6 lg:w-1/2">
                      <h1 className="pb-3 text-lg font-medium tracking-wider text-gray-800 uppercase"> {item.name} </h1>
                      <p>{item.price}</p>
                      <p>{item.category}</p>
                      <p className="pt-3 pb-2 text-base font-medium tracking-wider text-gray-700 uppercase">
                        Descripción
                      </p>
                      <p className="pb-3 text-sm">{item.description}</p>
                      <hr className="w-full border-gray-200 mt4" />
                      <p className="pt-3 pb-2 text-base font-medium tracking-wider text-gray-700 uppercase">
                        Detalle del Producto
                      </p>
                      <p className="pb-3 text-sm">{item.comments}</p>
                      <hr className="w-full border-gray-200 mt4" />

                      <div className="pt-4">
                      {terminarCompra ? ( 
                    
                        <Link to ='/cart' className="px-4 py-2 text-xs text-white duration-200 bg-red-600 rounded-lg hover:bg-red-400 transition-color focus:outline-none"> Terminar Comprar</Link>
                      ) : ( 

                        <ItemCount stock= {stock} onAdd={onAdd} id={id}/>
                      )}
                      </div>
                </div>
            </div>
      </div>
  
  );
};

export default ItemDetail;
