import React from 'react'
import {BsGithub} from 'react-icons/bs'
import logo from '../assets/rick.svg'
import SearchBar from './SearchBar'


const Navbar = ({onSearch}) => {

  return (
    <div>
        <nav className='grid grid-cols-1 gap-3 sm:grid-cols-3 justify-items-center bg-white h-auto p-2'>
            <SearchBar onSearch = {onSearch}/>
            <a className='flex items-center' href="#">
              <img className='w-20 ' src={logo} alt="" />
            </a>
            
            <a className='flex items-center' href="https://github.com/lkguevara" target="_blank" rel="noopener noreferrer">
                <BsGithub className="h-6 m-2 w-10" aria-hidden="true" />
            </a>
        </nav>
    </div>
  )
}

export default Navbar