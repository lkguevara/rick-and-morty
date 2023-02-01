import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Card from './Card';

const Favorites = () => {
    const navigate = useNavigate();
    const {myFavorites} = useSelector(state => state)

  return (
    <>
        <button className='border border-slate-300 hover:border-green-600 bg-lime-600 p-2 rounded-lg hover:bg-lime-500 text-white m-10' onClick = { () => navigate (-1)}>
            Volver
        </button>

        <div>
            <h1 className='text-4xl text-center text-sky-700 font-bold mb-10'>Favoritos</h1>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-6 justify-items-center">
                {
                    myFavorites.map((character) => {
                        return (
                            <div >
                                <Card
                                key={character.id}
                                id={character.id}
                                name={character.name}
                                species={character.species}
                                gender={character.gender}
                                image={character.image}
                                />
                            </div>
                        )
                    })
                }
            </div>
            
        </div>

        </>
  )
}

export function mapStateToProps(state) {
    return {
       favorites: state.myFavorites,
    }  
 }

export default Favorites