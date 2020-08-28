import React from 'react'

import './style.scss'

interface Card {
    name: string
    price: number
}

const Card = ({ name, price }: Card) => {
    return (
        <div className='cards'>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}

export default Card
