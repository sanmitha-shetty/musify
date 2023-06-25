import React from 'react'

import {Logo} from '../assets/img'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex items-center w-full p-4 md:py-2 md:px-6 '>
        <NavLink to={"/"}>
            <img src={Logo} alt='Logo' className='w-16'  />
        </NavLink>

        <ul className='flex items-center justify-center ml-7'>
            <li className='mx-5 text-lg'><NavLink to = {'/home'}>Home</NavLink> </li>
            <li className='mx-5 text-lg'><NavLink to = {'/musics'}>Music</NavLink> </li>
            <li className='mx-5 text-lg'><NavLink to = {'/premium'}>Premium</NavLink> </li>
            <li className='mx-5 text-lg'><NavLink to = {'/contact'}>Contact Us</NavLink> </li>
        </ul>
    </header>
  )
}

export default Header