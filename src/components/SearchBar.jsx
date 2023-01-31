import { BsPlusCircle } from "react-icons/bs";
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
            className='border-2 h-8 py-4 w-52 text-center rounded-lg mr-4 items-center text-color-green-600' 
            type="search" 
            placeholder='Ingresa ID' 
            // value={character}
            onChange={handleSearch}
         />
         <button 
            onClick={() => onSearch(character)}
         >
            <BsPlusCircle />
         </button>
      </form>
         

      </div>
   );
}
