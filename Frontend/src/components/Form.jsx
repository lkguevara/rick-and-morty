import React from 'react'
import {useState} from 'react'
import Validation from '../utils/Validation'
import { Tooltip, Button } from "@material-tailwind/react";
import { FiChevronRight } from 'react-icons/fi'
import logo from '../assets/rick.svg'
import login from '../assets/login-ram.png'
import login2 from '../assets/login-ram-2.png'

const Form = (props) => {
    const { Login, successLogin } = props;
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState({
        ...userData
    })

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
        setError(
            Validation({
                ...userData,
                [event.target.name]: event.target.value
            })
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        Login(userData);
    }

    // --- New: show/hide landing or full login form ---
    const [showLogin, setShowLogin] = useState(false);

    const handleEnter = () => {
        // A single click to enter the app (calls Login and navigates to /Home)
        Login(userData);
    }

    return (
        <div className="relative bg-zinc-900 h-screen flex justify-center items-center p-6 hero-bg overflow-hidden" >
        <img  className='sm:w-2/5 lg:w-96 hidden sm:flex rounded-lg shadow-2xl' src={login} alt="" />
        <div className="rounded-2xl bg-white/5 px-8 py-10 shadow-2xl backdrop-blur-2xl border border-white/10 flex justify-center items-center sm:w-3/6 md:w-3/6 lg:w-2/6 w-4/5">
            {
                !showLogin ? (
                    <div className='flex flex-col justify-center items-center text-center px-4'>
                        <img src={login2} width="110" className='mb-4' />
                        <img className='w-36 mb-4' src={logo} alt="" />
                        <h1 className='text-3xl md:text-4xl font-extrabold text-white leading-tight mb-2'>Bienvenido a Rick & Morty</h1>
                        <p className='text-sky-100 mb-6'>Explora los personajes — descubre, guarda y disfruta. Un solo click para entrar.</p>
                        <div className='flex flex-col gap-4 w-full items-center'>
                            <button 
                                onClick={handleEnter}
                                aria-label='Entrar al homepage'
                                className='w-44 rounded-full bg-gradient-to-br from-amber-400 to-yellow-300 text-black px-6 py-3 font-bold shadow-2xl hover:scale-105 transform transition-all duration-300 btn-cta relative overflow-hidden flex items-center justify-center'
                            >
                                <span className='relative z-10 flex items-center gap-2'>Explorar <FiChevronRight/></span>
                                <span className='absolute inset-0 bg-white/10 blur-sm opacity-0 btn-shine'></span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col justify-center items-center'>
                        <div className="mb-6 flex flex-col items-center">
                            <img src={login2} width="100" />
                            <img className='w-36 ' src={logo} alt="" />
                            <span className="text-white mt-3">Iniciar sesión</span>
                        </div>
                        <form 
                            onSubmit={handleSubmit}
                            autoComplete="off"
                            className='w-full flex flex-col items-center'
                        >
                            <div>
                                <input 
                                    className='rounded-xl border-none bg-sky-200 bg-opacity-60 px-6 py-2 text-center text-inherit placeholder-white shadow-lg outline-none backdrop-blur-md mb-4 w-44 sm:w-auto'
                                    type="text" 
                                    name="email"
                                    placeholder="Usuario"
                                    value= {userData.email}
                                    onChange={handleInputChange}
                                />
                                <p className='bg-sky-700 mb-3 text-white text-center rounded-lg'>{error.email}</p>
                            </div>

                            <div>
                                <input 
                                    className='rounded-xl border-none bg-sky-200 bg-opacity-60 px-6 py-2 text-center text-inherit placeholder-white shadow-lg outline-none backdrop-blur-md w-44 sm:w-auto'
                                    type="password" 
                                    name="password" 
                                    placeholder="Contraseña"
                                    value={userData.password}
                                    onChange={handleInputChange}
                                />
                                <p className='bg-sky-700 mt-3 text-white text-center rounded-lg'>{error.password}</p>
                            </div>
                            <div className="mt-6 flex justify-center text-lg text-black ">
                                <button className='rounded-full bg-yellow-400 px-8 py-2 text-black font-semibold shadow-lg backdrop-blur-md transition-colors duration-300 hover:bg-yellow-500'>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Form

