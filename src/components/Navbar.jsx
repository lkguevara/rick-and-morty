import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between bg-white h-16 p-2'>
            <img className='w-10 h-10 ' src="../../public/rick-and-morty.png" alt="" />
            <div>
                <input className='border-2 h-8 text-center p-4 rounded-lg mr-4' type="search" placeholder='buscar' />
                <button onClick={() => onSearch()}>Buscar</button>
            </div>
           
            <BsGithub className='m-2 w-10'/>
        </nav>
    </div>
  )
}

export default Navbar