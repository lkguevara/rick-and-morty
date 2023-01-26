import { BsPlusCircle } from "react-icons/bs";
import {useState, useEffect} from 'react'


export default function SearchBar({onSearch}) {
   const [character, setCharacter] = useState("");

   // función que se ejecuta cuando el usuario escribe en el input
   const handleSearch = (e) => {
      setCharacter(e.target.value);
      console.log(e.target.value)
   };

   
   return (
      <div className="flex items-center">
         <input 
            className='border-2 h-8 py-4 w- text-center rounded-lg mr-4 items-center text-color-green-600' 
            type="search" 
            placeholder='Agregar' 
            value={character}
            onChange={handleSearch}
         />
         <button 
            onClick={() => onSearch(character)}
         >
            <BsPlusCircle />
         </button>

      </div>
   );
}
