import React, { useState } from "react"
import { useAppContext } from "../context/AppContext"
import { useCartContext } from "../context/CartContext"
import { HiOutlineMinus } from "react-icons/hi";
import { HiOutlinePlus } from "react-icons/hi";

const ItemCount = ({ stock, onAdd, id, }) => {
	const [count, setCount] = useState(1)

	const { addToCart } = useCartContext()
	const { products } = useAppContext()

	const handleAdd = () => {
		if (count < stock) {
			setCount(count + 1)
		}
	}
	const handleRemove = () => {
		if (count > 1) {
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
			<div className="flex items-center gap-4 mt-4">
				<div className="flex flex-row space-x-4">
					<button className="p-2 bg-gray-200 focus:outline-none" onClick={handleRemove}>
						<HiOutlineMinus/>
					</button>
					<label className="p-2">{count}</label>
					<button className="p-2 bg-gray-200 focus:outline-none" onClick={handleAdd}>
					<HiOutlinePlus/>
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