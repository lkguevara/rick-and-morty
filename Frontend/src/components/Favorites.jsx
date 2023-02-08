import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Card from './Card';
import {orderCards, filterCards, resetCards} from '../redux/actions'


const Favorites = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const myFavorites = useSelector(state => state.myFavorites)

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
    }
    
    const handleFilter = (e) => {
        const {name, value} = e.target
        dispatch(filterCards(value))
    }
    
    

  return (
    <>
        <button className='border border-slate-300 bg-zinc-600 p-2 rounded-lg hover:bg-zinc-400 text-white m-10' onClick = { () => navigate (-1)}>
            Volver
        </button>

        {/*Ordenamiento ascentende y por género */}
        <h1 className='text-4xl text-center text-white font-bold mb-10 '>Favoritos</h1>
        <div>
            <select onChange={handleOrder} className='m-5 p-2 text-white bg-sky-800 rounded-lg hover:bg-sky-600' name="order" defaultValue={"DEFAULT"}>
                <option value="DEFAULT" disabled="disabled">Ordenar por</option>
                <option value="Descendente">Descendente</option>
                <option value="Ascendente">Ascendente</option>

            </select>
            <select onChange={handleFilter} className = "p-2 text-white bg-sky-800 rounded-lg hover:bg-sky-600 " name="filter" defaultValue={"DEFAULT"}>
                <option value="DEFAULT" disabled="disabled">Ordenar por</option>
                {/* <option value="Male">Todos</option> */}
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            <button className='border border-slate-300 p-2 bg-zinc-600 rounded-lg hover:bg-zinc-400 text-white m-10' onClick={()=> dispatch(resetCards())}>
                    Reset
            </button>
            
        </div>

        <div>
            
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-6 justify-items-center">
                {
                    myFavorites.length === 0 ? <h1 className='text-2xl text-center text-sky-700 font-bold mb-10'>No hay favoritos</h1> : myFavorites.map((favorite) => {
                        return <Card key={favorite.id} {...favorite} />
                    }
                    )
                    
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