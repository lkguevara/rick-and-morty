import React from 'react'
import {useState} from 'react'
import Validation from '../utils/Validation'
import { Tooltip, Button } from "@material-tailwind/react";
import logo from '../assets/rick.svg'
import login from '../assets/login-ram.png'

const Form = (props) => {
  const [userData, setUserData] = useState({
    name: '',
    email: ''
})

const [error, setError] = useState({
    name: '',
    email: ''
})

const handleInputChange = (event) => {
    const property = event.target.name;
    setUserData({
        ...userData,
        [property]: event.target.value
    })
    setError(Validation({
        ...userData,
        [property]: event.target.value
    }))
}

const handleSubmit = (event) => {
    event.preventDefault();
    props.Login(userData);
}

  return (
    <div className="bg-zinc-900 h-screen flex justify-center items-center" >
        <img  className='sm:w-2/5 lg:w-80 hidden sm:flex' src={login} alt="" />
        <div className="rounded-lg bg-zinc-600 to-teal-300 bg-opacity-30 px-16 py-10 shadow-lg backdrop-blur-md flex justify-center items-center sm:w-3/6 md:w-3/6 lg:w-2/6 w-4/5">
        
            <div className='flex flex-col justify-center items-center'>
                <div className="mb-8 flex flex-col items-center">
                    <img src="https://cdn.icon-icons.com/icons2/1390/PNG/512/rick_96214.png" width="100" alt="" srcset="" />
                    <img className='w-40 ' src={logo} alt="" />
                    <span className="text-white mt-5">Iniciar sesión</span>
                </div>
                <form 
                    onSubmit={handleSubmit}
                >
                    <div>
                        {/* <label htmlFor="email">Usuario</label> */}
                        <input 
                            className='rounded-xl border-none bg-sky-300 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-white shadow-lg outline-none backdrop-blur-md mb-4 w-44 sm:w-auto'
                            type="text" 
                            name="email"
                            placeholder="Usuario"
                            value={userData.email}
                            onChange={handleInputChange}
                        />
                        <p className='bg-sky-700 mb-5 text-white text-center rounded-lg'>{error.email}</p>
                    </div>

                    <div>
                        {/* <label htmlFor="password">Constraña</label> */}
                        <input 
                            className='rounded-xl border-none bg-sky-300 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-white shadow-lg outline-none backdrop-blur-md w-44 sm:w-auto'
                            type="text" 
                            name="password" 
                            placeholder="Contraseña"
                            value={userData.password}
                            onChange={handleInputChange}
                        />
                        <p className='bg-sky-700 mt-5 text-white text-center rounded-lg'>{error.password}</p>
                    </div>
                    <div className="mt-8 flex justify-center text-lg text-black ">
                        <button className='rounded-xl bg-sky-600 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-sky-700'>
                            Login
                        </button>
                    </div>
                    
                </form>
                <div className='mt-20'>
                        <Tooltip
                            className="text-sky-600 w-52 "
                            content="usuario: rick@user.com password: asd123"
                            animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0, y: 25 },
                            }}
                            >
                            <Button 
                                className='rounded-lg bg-sky-300 bg-opacity-50 px-4 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-sky-700'
                            >Show me</Button>
                        </Tooltip>
                    </div>
            </div>
        </div>
       
    </div>
    
  )
}

export default Form

