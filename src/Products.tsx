import React, { useContext } from 'react'
import { AppContext } from './store/store'
import { Types } from './store/reducer'

const Products = () => {
    const { state, dispatch } = useContext(AppContext)

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div>
                <h1>{state.shoppingCart}</h1>
                {state.products.map(product => (
                    <div key={product.id}>
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                    </div>
                ))}
                <button
                    onClick={() => {
                        dispatch({ type: Types.Add })
                    }}
                >
                    click
                </button>
            </div>
        </div>
    )
}

export default Products
