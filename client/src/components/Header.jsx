import React from 'react'
import {Logo} from '../assets/img'
import { NavLink } from 'react-router-dom'
import { isActiveStyles, isNotActiveStyles } from '../utilis/styles'
import {FaCrown} from 'react-icons/fa'
import { useStateValue } from '../context/StateProvider'

const Header = () => {
    const [{user}, dispatch] = useStateValue()
  return (
    <header className='flex items-center w-full p-4 md:py-2 md:px-6 '>
        <NavLink to={"/"}>
            <img src={Logo} alt='Logo' className='w-16'  />
        </NavLink>

        <ul className='flex items-center justify-center ml-7'>
            <li className='mx-5 text-lg'><NavLink to = {'/home'} className={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles }>Home</NavLink> </li>
            <li className='mx-5 text-lg'><NavLink to = {'/premium'}className={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles }>Premium</NavLink> </li>
            <li className='mx-5 text-lg'><NavLink to = {'/contact'}className={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles }>Contact Us</NavLink> </li>
            <li className='mx-5 text-lg'><NavLink to = {'/musics'}className={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles }>Music</NavLink> </li>
        </ul>

        <div className='flex items-center ml-auto cursor-pointer gap-2 relative '>
            <img src={user?.user.imageURL}  className='w-12 h-12 min-w-[44px] object-cover rounded-full shadow-lg ' alt='' />
            <div className='flex flex-col'>
                <p className='text-textColor text-lg hover:text-headingColor font-semibold'>{user?.user.name} </p>
                <p className="flex items-center gap-2 text-xs text-gray-500 font-normal">Premium Member. <FaCrown className='text-sm -ml-1 text-yellow-500' /></p>
            </div>
        </div>
    </header>
  )
}

export default Header