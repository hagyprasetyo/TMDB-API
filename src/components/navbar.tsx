import { Link, useNavigate } from 'react-router-dom'

import React from 'react'

const Navbar = () => {
const navigate = useNavigate();
const handleLogout = () => {
  localStorage.removeItem("Token");
  navigate("/login");
};
  
  return (
    <div className='flex flex-row w-full justify-between p-5 shadow-md bg-gray-200'>
    <div className='color-whit'>Hagy</div>
    <div className='flex flex-row gap-5'>
    <Link to={"/"}>Home</Link>
    <Link to={"/movie"}>Movie</Link>
    <Link to={"/tv-show"}>TV Show</Link>
    <div onClick={handleLogout}>Log Out</div>
    </div>
    </div>
  )
}

export default Navbar