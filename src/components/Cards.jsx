import Card from './Card';

export default function Cards({characters, onClose}) {
   
   return (
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-6 justify-items-center">
         {
            characters.map((character) => (
            <Card
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
