import React, { createContext, useReducer } from 'react'

import {
    productReducer,
    shoppingReducer,
    ProductActions,
    ShoppingCartActions,
} from './reducer'

type productType = {
    id: number
    name: string
    price: number
}

type initialStateType = {
    products: productType[]
    shoppingCart: number
}

const initialState = {
    products: [
        {
            id: 1,
            name: 'iphone 7',
            price: 2000,
        },
        {
            id: 2,
            name: 'Macbook Air',
            price: 5000,
        },
    ],
    shoppingCart: 0,
}

const AppContext = createContext<{
    state: initialStateType
    dispatch: React.Dispatch<any>
}>({
    state: initialState,
    dispatch: () => null,
})

const mainReducer = (
    { products, shoppingCart }: initialStateType,
    action: ProductActions | ShoppingCartActions
) => ({
    products: productReducer(products, action),
    shoppingCart: shoppingReducer(shoppingCart, action),
})

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }
