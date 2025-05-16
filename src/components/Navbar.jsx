import React from 'react'
import Logo from '../Logo.jpg'
import "tailwindcss";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
      <img className='w-[50px]' src={Logo} alt=""></img>
      <Link to='/' className='text-blue-400 text-3xl font-bold' >Home</ Link>
      <Link to='/watchlist'  className='text-blue-400 text-3xl font-bold'>WatchList</Link>

    </div>
  )
}

export default Navbar
