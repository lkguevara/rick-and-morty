import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-6 justify-items-center bg-slate-200" >
         {characters.map((character) => (
            <Card
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
            />
         ))}
      </div>
   )
}
