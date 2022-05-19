import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isInCart = (id) => {
    return cartList.some((item) => item.id === id);
  };

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      return setCartList(
        cartList.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    }
    setCartList([...cartList, { ...item, quantity }]);
  };

  const emptyCart = () => {
    setCartList([]);
  };

  const deleteById = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  const removeOneUnit = (id) => {
    if (unitsPerProduct(id) === 1) {
      return deleteById(id);
    }
    setCartList(
      cartList.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const totalCount = () => {
    return cartList.reduce((total, item) => total + item.quantity, 0);
  };

  const totalPrice = () => {
    return cartList.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  const unitsPerProduct = (id) => {
    const foundInCart = cartList.find((item) => item.id === id);
    return foundInCart ? foundInCart.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        emptyCart,
        deleteById,
        totalCount,
        totalPrice,
        removeOneUnit,
        unitsPerProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;




// import Item from "../Components/Item"

// export const CartContext = createContext()

// export const useCartContext = () => useContext(CartContext)

// // lista de productos
// const CartContextProvider = ({ children }) => {
// 	const [cart, setCart] = useState([])

// // validar si esta el item en el carrito
// const isInCart = (id) => cart.find((producto) => producto.id === id)

// // agregar un item al carrito y sumar cantidad
// 	const addToCart = (producto, cantidad) => {
// 		const newCart = [...cart]
		
// 		const productoIsInCart = isInCart(producto.id)

// 		if (productoIsInCart) {
// 			newCart[
// 				newCart.findIndex((prod) => prod.id === productoIsInCart.id)
// 			].quantity += cantidad

// 			setCart(newCart)
// 			return
// 		}

// 		producto.quantity = cantidad
// 		setCart([...newCart, producto])
// 	}
// // eliminar item del carrito
// 	const deleteFromCart = (producto) => {
// 		const newCart = [...cart]

// 		const productIsInCart = isInCart(producto.id)

// 		if (!productIsInCart) {
// 			return
// 		}

// 		const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)

// 		setCart(deleteProduct)
// 	}
	
// // precio total 
// 	const totalPrice = ()=> {
// 		return cart.reduce(
// 			(total, producto) => total + producto.quantity * Item.price, 0
// 		)
// 	}
// // vaciar el carrito
// 	const deleteCart = () => setCart([])

// 	console.log(cart)

// 	return (
// 		<CartContext.Provider
// 			value={{
// 				cart,
// 				addToCart,
// 				deleteFromCart,
// 				deleteCart,
// 				setCart,
// 				totalPrice
// 			}}
// 		>
// 			{children}
// 		</CartContext.Provider>
// 	)
// }

// export default CartContextProvider