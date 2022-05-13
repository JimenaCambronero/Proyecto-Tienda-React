import React, { useState } from "react"
import { useAppContext } from "../context/AppContext"
import { useCartContext } from "../context/CartContext"

const ItemCount = ({ stock, onAdd, id }) => {
	const [count, setCount] = useState(0)

	const { addToCart } = useCartContext()
	const { products } = useAppContext()

	const handleAdd = () => {
		if (count < stock) {
			setCount(count + 1)
		}
	}
	const handleRemove = () => {
		if (count > 0) {
			setCount(count - 1)
		}
	}

	const handleClick = (id, cantidad) => {
		const findProduct = products.find((producto) => producto.id === id)

		if (!findProduct) {
			alert("Error")
			return
		}

		addToCart(findProduct, cantidad)
		onAdd(count)
	}

	return (
		<>
			<div className="">
				<div className="">
					<button className="" onClick={handleRemove}>
						<i className=""></i>
					</button>
					<label className="">{count}</label>
					<button className="" onClick={handleAdd}>
						<i className=""></i>
					</button>
				</div>
				<div>
					<button
						className="px-4 py-2 text-xs text-white duration-200 bg-red-600 rounded-lg hover:bg-red-400 transition-color focus:outline-none"
						onClick={() => handleClick(id, count)}
					>
						Agregar al Carrito
					</button>
				</div>
			</div>
		</>
	)
}

export default ItemCount