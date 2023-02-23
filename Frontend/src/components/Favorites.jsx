import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Card from './Card';
import {orderCards, filterCards, resetCards} from '../redux/actions'


const Favorites = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const myFavorites = useSelector(state => state.myFavorites)

    const handleClick = (e) => {
        e.preventDefault()
        const {value, name } = e.target
        if(name === 'filter') {
         return dispatch(filterCards(value))
        }
        if (name === 'order') {
         return dispatch(orderCards(value))
        }
    }
    
    

  return (
    <>
        <button className='border border-slate-300 bg-zinc-600 p-2 rounded-lg hover:bg-zinc-400 text-white m-10' onClick = { () => navigate (-1)}>
            Volver
        </button>

        {/*Ordenamiento ascentende y por género */}
        <h1 className='text-4xl text-center text-white font-bold mb-10 '>Favoritos</h1>
        <div>
            <select onChange={handleClick} className='m-5 p-2 text-white bg-sky-800 rounded-lg hover:bg-sky-600' name="order" defaultValue={"default"}>
                <option value="default" disabled="disabled">Ordenar por</option>
                <option value="Descendente">Descendente</option>
                <option value="Ascendente">Ascendente</option>

            </select>

            <select onChange={handleClick} className = "p-2 text-white bg-sky-800 rounded-lg hover:bg-sky-600 " name="filter" defaultValue={"default"}>
                <option value="default" disabled="disabled">Ordenar por</option>
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
                    myFavorites.length === 0 
                    ? <h1 className='text-2xl text-center text-sky-700 font-bold mb-10'>No hay favoritos</h1> 
                    : myFavorites?.map((char, index)=>(
                        <Card 
                            key={index}
                            id={char.id}
                            name={char.name}
                            species={char.species}
                            gender={char.gender}
                            image={char.image}
                            onClose={() => props.onClose(char.id)}
                        />
                    ))
                    
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