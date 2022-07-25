import React from 'react';
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <><nav className='fixed flex w-screen my-auto h-12 justify-between bg-gradient-to-t from-black to-gray-900  text-cyan-200 text-xl'>
            <div className='m-5'> Salvador Banuelos </div>
            <div className='m-5 justify-around'>
                <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to='/' > About </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to='/portfolio'> Portfolio </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to='/contact'> Contact </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to='/resume'> Resume </NavLink>
            </div>
        </nav></>
    )
}

export default Navbar