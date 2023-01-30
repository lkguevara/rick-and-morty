import React from 'react'
import {useState} from 'react'
import Validation from '../utils/Validation'

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
    <div className='flex flex-col justify-center items-center'>
        <form 
            className=''
            onSubmit={handleSubmit}
        >
            <div>
                <label htmlFor="email">Usuario</label>
                <input 
                    type="text" 
                    name="email"
                    placeholder="Usuario"
                    value={userData.email}
                    onChange={handleInputChange}
                />
                <p className='bg-red-500'>{error.email}</p>
            </div>

            <div>
                <label htmlFor="password">Constraña</label>
                <input 
                    type="text" 
                    name="password" 
                    placeholder="Contraseña"
                    value={userData.password}
                    onChange={handleInputChange}
                />
                 <p className='bg-red-500'>{error.password}</p>
            </div>
            <button>
                Iniciar sesión
            </button>
        </form>
    </div>
  )
}

export default Form