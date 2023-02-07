import { RiSearch2Line } from 'react-icons/ri'
import {useState, useEffect} from 'react'


export default function SearchBar({onSearch}) {
   const [character, setCharacter] = useState("");

   // función que se ejecuta cuando el usuario escribe en el input
   const handleSearch = (e) => {
      e.preventDefault();
      setCharacter(e.target.value);
   };

   function handleSubmit(e) {
      e.preventDefault();
      // vaciar el input ingresado
      e.target.reset();
   }
   
   return (
      <div className="flex items-center">
      <form onSubmit={handleSubmit}>
         <input 
            className='sm:w-64 w-44 text-lg text-center items-center rounded-md text-color-green-600 outline-none py-1' 
            type="search" 
            placeholder='Número personaje' 
            // value={character}
            onChange={handleSearch}
           
         />
         
         <button 
            onClick={() => onSearch(character)}
         >
         <RiSearch2Line className='text-black relative right-6 pt-1'/>
         
         </button>
      </form>
         

      </div>
   );
}
