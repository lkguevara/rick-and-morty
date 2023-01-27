import React from 'react'
import {BsGithub} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import logo from '../assets/rick.svg'
import SearchBar from './SearchBar'


const Navbar = ({onSearch}) => {

  return (
    <div>
        <nav className='grid grid-cols-1 gap-3 sm:grid-cols-3 justify-items-center bg-white h-auto p-2'>
            <SearchBar onSearch = {onSearch}/>
            <NavLink to='/Home' className='text-gray-500 hover:text-gray-900 flex items-center'><img className='w-20 ' src={logo} alt="" /></NavLink>
            
            <a className='flex items-center text-lg font-medium text-black' href="https://github.com/lkguevara" target="_blank" rel="noopener noreferrer">
            <NavLink to='/about' className='text-gray-500 hover:text-gray-900'>About</NavLink>
                <BsGithub className="h-6 m-2 w-10" aria-hidden="true" />
            </a>
        </nav>
    </div>
  )
}

export default Navbar