import React, { useContext } from 'react'

import Header from '../../components/Header'
import './style.scss'
import Card from '../../components/Card'
import { AppContext } from '../../store/store'

interface Props {}

const Home = (props: Props) => {
    const { state } = useContext(AppContext)

    const products = state.products

    return (
        <>
            <Header />
            <div className='home'>
                {products.map(p => (
                    <div key={p.id}>
                        <Card name={p.name} price={p.price} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home
