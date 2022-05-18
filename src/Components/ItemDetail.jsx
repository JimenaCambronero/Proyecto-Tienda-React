import { Link } from "react-router-dom";
 import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { useCartContext } from "../context/CartContext";


const ItemDetail = ({item, id, stock}) => {
  const [terminarCompra, setTerminarCompra] = useState (false)
  const {addToCart} = useCartContext()
  
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
                      <h1 className="pb-3 text-lg font-medium tracking-wider text-gray-800 uppercase font-boogaloo"> {item.name} </h1>
                      <p className="font-boogaloo">{item.price}</p>
                      <p>{item.category}</p>
                      <p className="pt-3 pb-2 text-base font-medium tracking-wider text-gray-700 uppercase font-boogaloo">
                        Descripción
                      </p>
                      <p className="pb-3 text-lg font-bold tracking-wider text-gray-800 font-amastic">{item.description}</p>
                      <hr className="w-full mt-1 border-gray-200" />
                      <p className="pt-3 pb-2 text-base font-medium tracking-wider text-gray-700 uppercase font-boogaloo ">
                        Detalle del Producto
                      </p>
                      <p className="pb-3 text-lg font-bold tracking-wider font-amastic">{item.comments}</p>
                      <hr className="w-full mt-1 border-gray-200" />

                      <div className="pt-4">
                      {terminarCompra ? ( 
                    
                        <Link to ='/cart'> 
                        Terminar Comprar
                        </Link>
                      ) : (  

                         <ItemCount stock= {stock} onAdd={onAdd} id={id} />
                      )}

                      </div>
                </div>
            </div>
      </div>
  
  );
};

export default ItemDetail;
