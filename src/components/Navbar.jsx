import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import logo from '../assets/rick.svg'

const Navbar = () => {
  return (
    <div>
        <nav className='grid grid-cols-1 gap-3 sm:grid-cols-3 justify-items-center m-2 bg-white p-2'>
            <div>
                <input className='border-2 h-8 text-center p-4 rounded-lg mr-4' type="search" placeholder='buscar' />
                {/* <button onClick={() => onSearch()}>Buscar</button> */}
            </div>

            <img className='w-20' src={logo} alt="" />

            <a href="https://github.com/lkguevara" target="_blank" rel="noopener noreferrer">
                <BsGithub className="h-6 m-2 w-10" aria-hidden="true" />
            </a>
        </nav>
    </div>
  )
}

export default Navbar