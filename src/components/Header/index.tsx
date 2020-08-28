import React from 'react'
import './style.scss'

interface Props {}

const Header = (props: Props) => {
    return (
        <header>
            <div className='brand'>Simple React Hooks + TypeScript</div>
        </header>
    )
}

export default Header
