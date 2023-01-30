import React from 'react'
import {BsGithub} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import logo from '../assets/rick.svg'
import SearchBar from './SearchBar'


const Navbar = ({onSearch}) => {

  return (
    <div>
        <nav className='grid grid-cols-1 gap-3 md:grid-cols-5 justify-items-center bg-white h-auto p-2'>
          <NavLink 
              to='/Home' 
              className='text-gray-500 hover:text-gray-900 flex items-center'>
                <img className='w-20 ' 
                  src={logo} alt="" 
                />
            </NavLink>

            <SearchBar onSearch = {onSearch}/>

            <NavLink to='/Home' className='text-black font-bold hover:text-gray-900 flex items-center'>Home</NavLink>
            
            <NavLink to='/about' className='text-black font-bold hover:text-gray-900 flex items-center'>About</NavLink>

            <NavLink 
              className='flex items-center text-lg font-medium text-black'
              to= "https://github.com/lkguevara" target="_blank"
            >
              <BsGithub className="h-6 m-2 w-10" aria-hidden="true" />
            </NavLink>

            // cerrar sesión
            <NavLink to='/' className='text-black font-bold hover:text-gray-900 flex items-center'>Logout</NavLink>
                       
            
            
         
        </nav>
    </div>
  )
}

export default Navbar