import Navbar from './navbar.tsx'
import { Outlet } from 'react-router-dom'
import React from 'react'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <div className='flex-grow'>
        <Outlet/>
        </div>

    </div>
  )
}

export default Layout