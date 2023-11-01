import React from 'react'
import Sidebar from './Sidebar'
import {FaGithub} from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className=' w-full flex items-center justify-between px-5 py-2 border-b-2 border-zinc-600'>
      <Sidebar/>
      <a href='https://github.com/Hendrickhz/react-animated-sidebar.git' className=' flex gap-2 items-center bg-orange-700/50 text-orange-300 py-2 px-5 rounded-xl'>
        Source Code
        <FaGithub className=' text-xl'/>
      </a>
    </nav>
  )
}

export default Navbar
