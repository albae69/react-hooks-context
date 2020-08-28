import React from 'react'
import { AppProvider } from './store/store'
import Routes from './routes/index'

const App = () => {
    return (
        <AppProvider>
            <Routes />
        </AppProvider>
    )
}

export default App
