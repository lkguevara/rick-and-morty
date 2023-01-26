import {useState, useEffect} from 'react'

export default function SearchBar({onSearch}) {
   const [character, setCharacter] = useState("");

   // función que se ejecuta cuando el usuario escribe en el input
   const handleSearch = (e) => {
      setCharacter(e.target.value);
      console.log(e.target.value)
   };

   
   return (
      <div>
         <input 
            className='border-2 h-8 text-center p-4 rounded-lg mr-4' 
            type="search" 
            placeholder='buscar' 
            value={character}
            onChange={handleSearch}
         />
         <button 
            onClick={() => onSearch(character)}
         >
            Agregar
         </button>

      </div>
   );
}
