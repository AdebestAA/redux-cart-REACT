import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-red-500 text-xl flex justify-between px-8 items-center'>
      <h1 className='text-2xl'>Redux toolkit project</h1>
      <div className='w-24 space-x-4 font-semibold'>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
    </nav>
  )
}

export default Navbar
