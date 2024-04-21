import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav className='nav flex bg-black items-center justify-between'>
                <h1 className='text-2xl'><Link to={''}>Arya Kumar</Link> </h1>
                <ul className='flex gap-4'>
                    <li><Link to={'/about'}>about</Link></li>
                    <li><Link to={'skill'}>skills</Link></li>
                    <li><Link to={'project'}>projects</Link></li>
                    <li><Link to={'contact'}>contact</Link></li>
                </ul>
            </nav>

        </>
    )
}

export default Nav
