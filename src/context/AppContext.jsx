import { createContext, useContext, useEffect, useState } from 'react';

import {listData} from '../data/listData';

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
	const [products, setProducts] = useState([listData])

	useEffect(() => {
	return
	})
	return (
		<AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
	)
}

export default AppContextProvider