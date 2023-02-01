import React from 'react'
import {BsGithub} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import logo from '../assets/rick.svg'
import SearchBar from './SearchBar'


const Navbar = ({onSearch}) => {

  return (
    <div>
        <nav className='grid grid-cols-1 gap-3 md:grid-cols-3 justify-items-center bg-white h-auto p-2'>
          <div>
            <NavLink 
              to='/Home' 
              className='text-gray-500 hover:text-gray-900 flex items-center'>
                <img className='w-28 ' 
                  src={logo} alt="" 
                />
            </NavLink>
          </div>
          
          <div>
            <SearchBar onSearch = {onSearch}/>
          </div>
            
          <div className='flex flex-col sm:flex-row '>
           <NavLink to='/Home' className='font-bold text-sky-700 hover:text-sky-600 flex items-center mr-5'>Home</NavLink>
            
            <NavLink to='/about' className='font-bold text-sky-700 hover:text-sky-600 flex items-center mr-5'>About</NavLink>
            <NavLink to='/favorites' className='font-bold text-sky-700 hover:text-sky-600 flex items-center mr-5'>Favoritos</NavLink>
            <NavLink to='/' className='font-bold text-sky-700 hover:text-sky-600 flex items-center '>Logout</NavLink>
            <NavLink 
              className='flex items-center text-lg font-medium text-black'
              to= "https://github.com/lkguevara" target="_blank"
            >
              <BsGithub className="h-6 m-2 w-10" aria-hidden="true" />
            </NavLink>
          </div>
        </nav>
    </div>
  )
}

export default Navbar