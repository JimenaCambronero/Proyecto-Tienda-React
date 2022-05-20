import React from 'react'
import { useCartContext } from '../context/CartContext'

const CartItem = ({ item }) => {
  const { deleteById, removeOneUnit } = useCartContext();
  const { name, quantity, price, id, description } = item;

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <h4>Unidades: {quantity}</h4>
      <h4>Precio unitario: ${price}</h4>
      <button onClick={() => removeOneUnit(id)}>Eliminar 1</button>
      <button onClick={() => deleteById(id)}>Eliminar todos</button>
    </div>
  );
};

export default CartItem;


