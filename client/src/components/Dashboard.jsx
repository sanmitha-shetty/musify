import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Header from './Header'

import {IoHome} from "react-icons/io5"
import { isActiveStyles, isNotActiveStyles } from '../utilis/styles'
import DashBoardHome from './DashboardHome'
import DashboardUsers from './DashboardUsers'
import DashboardSongs from './DashboardSongs'
import DashboardArtists from './DashboardArtists'
import DashboardAlbums from './DashboardAlbums'
import DashboardNewSong from './DashboardNewSong'
import Alert from './Alert';
import { useStateValue } from '../context/StateProvider'

const Dashboard = () => {
  const [{alertType}, dispatch] = useStateValue();

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center bg-primary '>
        <Header />

        <div className='w-[60%]  my-2 p-4 flex items-center justify-evenly'>

          <NavLink to = {"/dashboard/home"} className={({isActive}) => isActive ? isActiveStyles  : isNotActiveStyles}><IoHome  className=' text-2xl text-textColor'/></NavLink>

          <NavLink to = {"/dashboard/users"} className={({isActive}) => isActive ? isActiveStyles  : isNotActiveStyles}> Users</NavLink>

          <NavLink to = {"/dashboard/songs"} className={({isActive}) => isActive ? isActiveStyles  : isNotActiveStyles}> Songs</NavLink>

          <NavLink to = {"/dashboard/artists"} className={({isActive}) => isActive ? isActiveStyles  : isNotActiveStyles}> Artists</NavLink>

          <NavLink to = {"/dashboard/albums"} className={({isActive}) => isActive ? isActiveStyles  : isNotActiveStyles}> Albums</NavLink>

        </div>

        <div className=' my-4 w-full p-4'>
          <Routes>
            <Route  path='/home' element= {<DashBoardHome />}/>
            <Route  path='/users' element= {<DashboardUsers />}/>
            <Route  path='/songs' element= {<DashboardSongs />}/>
            <Route  path='/artists' element= {<DashboardArtists />}/>
            <Route  path='/albums' element= {<DashboardAlbums />}/>
            <Route  path='/newSong' element= {<DashboardNewSong />}/>
          </Routes>
        </div>
        {alertType && (
          <Alert type={alertType} />
        )}
    </div>
  )
}

export default Dashboard