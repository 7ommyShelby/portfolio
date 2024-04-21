import React from 'react'
import Nav from './Nav'
import { Outlet} from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )
}

export default Home
