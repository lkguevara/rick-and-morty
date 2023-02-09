import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'

const Detail = () => {
  //  obtener el ID del personaje mediante useParams.
  const { id } = useParams();

  // Crea un estado local con el nombre character.
  const [character, setCharacter] = useState({});

  const navigate = useNavigate();



  
  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);
  
  return (
    console.log(id),
    <div>
       <button className='border border-slate-300 p-2 bg-zinc-600 rounded-lg hover:bg-zinc-400 text-white m-10' onClick = { () => navigate (-1)}>
            Volver
        </button>
      <div className='text-white'>
        <h1 className='text-2xl font-bold text-center my-10'>Nombre: {character.name} </h1>
        <img className='rounded-full border-red-700 w-60 h-60 mb-5 flex justify-center text-center m-auto' src={character.image} alt={character.name} />

        <div className='grid grid-cols-1 text-center sm:grid-cols-3'>
          <h2 className='text-lg p-5'><span className='text-2xl font-bold text-white ml-10'>Especie:</span> {character.species}</h2>
          <h2 className='text-lg p-5'><span className='text-2xl font-bold text-white ml-10'>Status:</span> {character.status}</h2>
          <h2 className='text-lg p-5'><span className='text-2xl font-bold text-white ml-10'>Genero:</span> {character.gender}</h2>
          <h2 className='text-lg p-5'><span className='text-2xl font-bold text-white ml-10'>Origen:</span> {character.origin ? character.origin.name : 'Desconocido'}</h2>
          <h2 className='text-lg p-5'><span className='text-2xl font-bold text-white ml-10'>Location:</span> {character.location ? character.location.name : 'Desconocido'}</h2>
          <h2 className='text-lg p-5'><span className='text-2xl font-bold text-white ml-10'>Creado:</span> {character.create}</h2>
        </div>
        
       
      </div>
      
    </div>
    
  )
}

export default Detail