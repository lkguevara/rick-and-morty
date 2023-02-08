import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {MdLogout} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import logo from '../assets/rick.svg'
import SearchBar from './SearchBar'


const Navbar = ({onSearch}) => {

  return (
    <div>
      
      <nav className='justify-items-center h-auto py-4 bg-sky-900 w-full sm:text-lg'>
          <div className='grid grid-cols-8 sm:grid-cols-5  sm:gap-0 justify-center justify-items-center gap-1 text-white'>
           <NavLink to='/Home' className='font-bold hover:text-sky-600 flex items-center col-span-2 sm:col-span-1 '>Inicio</NavLink>
            
            <NavLink to='/favorites' className='font-bold hover:text-sky-600 flex items-center col-span-2 sm:col-span-1'>Favoritos</NavLink>
            <NavLink to='/about' className='font-bold hover:text-sky-600 flex items-center col-span-2 sm:col-span-1'>Acerca</NavLink>
            
            <NavLink 
              className='flex items-center text-lg font-medium text-black'
              to= "https://github.com/lkguevara" target="_blank"
            >
              <BsGithub className="h-6 w-10 text-white sm:col-span-1" aria-hidden="true" />
            </NavLink>
            
            <NavLink to='/' className='font-bold hover:text-sky-600 flex items-center col-span-1'>
              <MdLogout  className='flex items-center text-lg font-medium text-white sm:text-2xl'></MdLogout>
            </NavLink>
          </div>
          
        </nav>

        <NavLink 
            to='/Home' 
            className='flex justify-center items-center w-full my-10'>
              <img className='w-28 ' 
                src={logo} alt="" 
              />
        </NavLink>
        <div className='grid grid-cols-1 justify-center justify-items-center'>
            <SearchBar onSearch = {onSearch}/>
        </div>
    </div>
  )
}

export default Navbar