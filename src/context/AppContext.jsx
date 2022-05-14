import React, { createContext, useEffect, useState, useContext} from 'react'

import listData from '../data/listData'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({children}) => {

    const [products, setProducts] = useState ([listData])


    useEffect (()=> {
     
        // eslint-disable-next-line no-undef
        getItem().then ((resp) => setProducts (resp))
    })
    
    
    return (
        <AppContextProvider value = {{products}}>
            { children }
        </AppContextProvider>
    )
}
export default AppContextProvider