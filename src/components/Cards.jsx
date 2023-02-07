import Card from './Card';
import { IconButton } from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';
import logo from '../assets/rick.svg'

export default function Cards({characters, onClose}) {
   
   return (
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-6 justify-items-center">
         
         {
            characters.map((character) => (
            <Card 
               key={character.id}
               id={character.id}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose= {() => onClose(character.id)}
            />
         ))}
      </div>
   )
}
